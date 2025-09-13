import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client';
import './index.css';
import React, { useState, useEffect } from 'react';
import type { UUID } from '@elizaos/core';
import { careerDatabase, CareerOption } from '../career-database.js';

const queryClient = new QueryClient();

// Define the interface for the ELIZA_CONFIG
interface ElizaConfig {
  agentId: string;
  apiBase: string;
}

// Declare global window extension for TypeScript
declare global {
  interface Window {
    ELIZA_CONFIG?: ElizaConfig;
  }
}

/**
 * Main Example route component
 */
function ExampleRoute() {
  const config = window.ELIZA_CONFIG;
  const agentId = config?.agentId;

  // Apply dark mode to the root element
  React.useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  if (!agentId) {
    return (
      <div className="p-4 text-center">
        <div className="text-red-600 font-medium">Error: Agent ID not found</div>
        <div className="text-sm text-gray-600 mt-2">
          The server should inject the agent ID configuration.
        </div>
      </div>
    );
  }

  return <CareerCounselorProvider agentId={agentId as UUID} />;
}

/**
 * Career Counselor Provider Component
 */
function CareerCounselorProvider({ agentId }: { agentId: UUID }) {
  return (
    <QueryClientProvider client={queryClient}>
      <CareerCounselorInterface agentId={agentId} />
    </QueryClientProvider>
  );
}

/**
 * Career Counseling Interface Component
 */
function CareerCounselorInterface({ agentId }: { agentId: UUID }) {
  const [selectedCareer, setSelectedCareer] = useState<CareerOption | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [filterStream, setFilterStream] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', ...Array.from(new Set(careerDatabase.map(c => c.category)))];
  const streams = ['All', 'PCM', 'PCB', 'PCMB', 'Commerce', 'Arts'];

  const filteredCareers = careerDatabase.filter(career => {
    const matchesCategory = filterCategory === 'All' || career.category === filterCategory;
    const matchesStream = filterStream === 'All' || career.education.stream.includes(filterStream);
    const matchesSearch = searchQuery === '' ||
      career.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      career.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesStream && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            🎓 Eliza Career Counselor
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Your AI guide for career exploration in India
          </p>
        </div>

        {/* Basic Career List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCareers.slice(0, 9).map(career => (
            <div
              key={career.id}
              onClick={() => setSelectedCareer(career)}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {career.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {career.description}
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">Salary:</span>
                  <span className="font-medium text-green-600 dark:text-green-400">
                    ₹{career.averageSalary.entry.toLocaleString()}/year
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">Work-Life:</span>
                  <span className="font-medium">{career.lifestyle.workLifeBalance}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Career Details Modal/Panel */}
        {selectedCareer && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedCareer.name}
                  </h2>
                  <button
                    onClick={() => setSelectedCareer(null)}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300">{selectedCareer.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">💰 Salary</h3>
                      <div className="space-y-1 text-sm">
                        <div>Entry: ₹{selectedCareer.averageSalary.entry.toLocaleString()}</div>
                        <div>Mid: ₹{selectedCareer.averageSalary.mid.toLocaleString()}</div>
                        <div>Senior: ₹{selectedCareer.averageSalary.senior.toLocaleString()}</div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🏠 Lifestyle</h3>
                      <div className="space-y-1 text-sm">
                        <div>Hours: {selectedCareer.lifestyle.workHours}</div>
                        <div>Balance: {selectedCareer.lifestyle.workLifeBalance}</div>
                        <div>Remote: {selectedCareer.lifestyle.remoteWork ? 'Yes' : 'No'}</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">🎓 Education</h3>
                    <div className="text-sm space-y-1">
                      <div>Degree: {selectedCareer.education.degree}</div>
                      <div>Streams: {selectedCareer.education.stream.join(', ')}</div>
                      <div>Duration: {selectedCareer.education.duration}</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">✅ Pros</h3>
                    <ul className="text-sm space-y-1">
                      {selectedCareer.pros.map((pro, index) => (
                        <li key={index}>• {pro}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Initialize the application - no router needed for iframe
const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<ExampleRoute />);
}

// Define types for integration with agent UI system
export interface AgentPanel {
  name: string;
  path: string;
  component: React.ComponentType<any>;
  icon?: string;
  public?: boolean;
  shortLabel?: string; // Optional short label for mobile
}

interface PanelProps {
  agentId: string;
}

/**
 * Career Counselor panel component for the plugin system
 */
const PanelComponent: React.FC<PanelProps> = ({ agentId }) => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 rounded-lg">
      <div className="text-center">
        <div className="text-4xl mb-4">🎓</div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          Eliza Career Counselor
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Explore {careerDatabase.length}+ career options with salary info, lifestyle details, and education pathways for Indian students.
        </p>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="bg-white dark:bg-gray-700 p-3 rounded">
            <div className="font-semibold text-blue-600 dark:text-blue-400">25+</div>
            <div className="text-gray-600 dark:text-gray-300">Careers</div>
          </div>
          <div className="bg-white dark:bg-gray-700 p-3 rounded">
            <div className="font-semibold text-green-600 dark:text-green-400">Updated</div>
            <div className="text-gray-600 dark:text-gray-300">2024 Data</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the panel configuration for integration with the agent UI
export const panels: AgentPanel[] = [
  {
    name: 'Career Counselor',
    path: 'career-counselor',
    component: PanelComponent,
    icon: 'GraduationCap',
    public: true,
    shortLabel: 'Careers',
  },
];

export * from './utils';
