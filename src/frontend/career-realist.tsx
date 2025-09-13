import React, { useState, useEffect } from "react";
import {
  careerCautionsDatabase,
  CareerCaution,
  getTopRiskFactors,
} from "../career-cautions.js";

export function CareerRealistInterface() {
  const [selectedCareer, setSelectedCareer] = useState<CareerCaution | null>(
    null,
  );
  const [filterCategory, setFilterCategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("risk");
  const [showTopRisks, setShowTopRisks] = useState<boolean>(false);

  const categories = [
    "All",
    ...Array.from(new Set(careerCautionsDatabase.map((c) => c.category))),
  ];
  const sortOptions = [
    { value: "risk", label: "Risk Level" },
    { value: "burnout", label: "Burnout Risk" },
    { value: "competition", label: "Competition Level" },
    { value: "saturation", label: "Market Saturation" },
  ];

  const getRiskColor = (level: string) => {
    switch (level) {
      case "Very High":
        return "bg-red-100 text-red-800 border-red-200";
      case "High":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "Medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Low":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getRiskIcon = (level: string) => {
    switch (level) {
      case "Very High":
        return "🚨";
      case "High":
        return "⚠️";
      case "Medium":
        return "🟡";
      case "Low":
        return "🟢";
      default:
        return "❓";
    }
  };

  const sortCareers = (careers: CareerCaution[]) => {
    return careers.sort((a, b) => {
      const riskOrder = { "Very High": 4, High: 3, Medium: 2, Low: 1 };

      switch (sortBy) {
        case "risk":
          return riskOrder[b.overallRisk] - riskOrder[a.overallRisk];
        case "burnout":
          return (
            riskOrder[b.burnoutRisk.level] - riskOrder[a.burnoutRisk.level]
          );
        case "competition":
          return (
            riskOrder[b.competitionLevel.level] -
            riskOrder[a.competitionLevel.level]
          );
        case "saturation":
          return (
            riskOrder[b.marketSaturation.level] -
            riskOrder[a.marketSaturation.level]
          );
        default:
          return 0;
      }
    });
  };

  const filteredCareers = sortCareers(
    careerCautionsDatabase.filter(
      (career) =>
        filterCategory === "All" || career.category === filterCategory,
    ),
  );

  const topRisks = getTopRiskFactors(5);

  if (showTopRisks) {
    return (
      <div className='min-h-screen bg-red-50 dark:bg-gray-900'>
        <div className='container mx-auto px-4 py-8'>
          <div className='text-center mb-8'>
            <h1 className='text-4xl font-bold text-red-800 dark:text-red-400 mb-4'>
              🚨 Top Career Risks
            </h1>
            <p className='text-xl text-red-700 dark:text-red-300 mb-4'>
              Careers requiring the most caution
            </p>
            <p className='text-sm text-red-600 dark:text-red-400'>
              Based on market saturation, burnout risk, and competition levels
            </p>
          </div>

          <div className='mb-6 text-center'>
            <button
              onClick={() => setShowTopRisks(false)}
              className='px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors'
            >
              ← Back to All Careers
            </button>
          </div>

          <div className='space-y-6'>
            {topRisks.map((risk, index) => {
              const career = careerCautionsDatabase.find(
                (c) => c.careerName === risk.career,
              );
              if (!career) return null;

              return (
                <div
                  key={risk.career}
                  className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-l-4 border-red-500'
                >
                  <div className='flex items-start justify-between'>
                    <div className='flex-1'>
                      <div className='flex items-center gap-3 mb-3'>
                        <span className='text-2xl'>#{index + 1}</span>
                        <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
                          {risk.career}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium border ${getRiskColor(risk.risk)}`}
                        >
                          {getRiskIcon(risk.risk)} {risk.risk} Risk
                        </span>
                      </div>

                      <div className='mb-4'>
                        <h4 className='font-semibold text-gray-900 dark:text-white mb-2'>
                          Critical Risk Factors:
                        </h4>
                        <ul className='space-y-1'>
                          {risk.factors.map((factor, factorIndex) => (
                            <li
                              key={factorIndex}
                              className='text-red-700 dark:text-red-300 flex items-start gap-2'
                            >
                              <span className='text-red-500 mt-1'>•</span>
                              <span>{factor}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button
                        onClick={() => {
                          setSelectedCareer(career);
                          setShowTopRisks(false);
                        }}
                        className='px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors'
                      >
                        View Full Analysis
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-red-50 dark:bg-gray-900'>
      <div className='container mx-auto px-4 py-8'>
        {/* Header */}
        <div className='text-center mb-8'>
          <h1 className='text-4xl font-bold text-red-800 dark:text-red-400 mb-4'>
            ⚠️ Eliza Career Realist
          </h1>
          <p className='text-xl text-red-700 dark:text-red-300 mb-4'>
            Honest warnings about career challenges
          </p>
          <p className='text-sm text-red-600 dark:text-red-400 mb-6'>
            Be informed about market realities, burnout risks, and competition
            levels
          </p>

          <div className='bg-yellow-100 dark:bg-yellow-900 border border-yellow-400 rounded-lg p-4 mb-6'>
            <div className='flex items-center gap-2'>
              <span className='text-yellow-800 dark:text-yellow-200'>💡</span>
              <p className='text-yellow-800 dark:text-yellow-200 font-medium'>
                Important: This interface shows the realistic challenges and
                risks of different careers. Use this information to make
                informed decisions and prepare accordingly.
              </p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                🎯 Category
              </label>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white'
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                📊 Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white'
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className='md:col-span-2 flex items-end'>
              <button
                onClick={() => setShowTopRisks(true)}
                className='w-full px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors font-medium'
              >
                🚨 View Top Risks
              </button>
            </div>
          </div>
        </div>

        {/* Career Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
          {filteredCareers.map((career) => (
            <div
              key={career.careerId}
              onClick={() => setSelectedCareer(career)}
              className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow border-l-4 border-red-500'
            >
              <div className='flex items-start justify-between mb-4'>
                <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                  {career.careerName}
                </h3>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium border ${getRiskColor(career.overallRisk)}`}
                >
                  {getRiskIcon(career.overallRisk)} {career.overallRisk}
                </span>
              </div>

              <div className='space-y-3'>
                <div className='flex justify-between text-sm'>
                  <span className='text-gray-500 dark:text-gray-400'>
                    Burnout Risk:
                  </span>
                  <span
                    className={`font-medium ${getRiskColor(career.burnoutRisk.level).split(" ")[1]}`}
                  >
                    {career.burnoutRisk.level}
                  </span>
                </div>

                <div className='flex justify-between text-sm'>
                  <span className='text-gray-500 dark:text-gray-400'>
                    Competition:
                  </span>
                  <span
                    className={`font-medium ${getRiskColor(career.competitionLevel.level).split(" ")[1]}`}
                  >
                    {career.competitionLevel.level}
                  </span>
                </div>

                <div className='flex justify-between text-sm'>
                  <span className='text-gray-500 dark:text-gray-400'>
                    Market Saturation:
                  </span>
                  <span
                    className={`font-medium ${getRiskColor(career.marketSaturation.level).split(" ")[1]}`}
                  >
                    {career.marketSaturation.level}
                  </span>
                </div>
              </div>

              <div className='mt-4 pt-4 border-t border-gray-200 dark:border-gray-700'>
                <p className='text-sm text-red-700 dark:text-red-300 font-medium'>
                  Key Warning: {career.keyWarnings[0]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Career Detail Modal */}
        {selectedCareer && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'>
            <div className='bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto'>
              <div className='p-6'>
                <div className='flex justify-between items-start mb-6'>
                  <div>
                    <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
                      {selectedCareer.careerName}
                    </h2>
                    <div className='flex gap-2'>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium border ${getRiskColor(selectedCareer.overallRisk)}`}
                      >
                        {getRiskIcon(selectedCareer.overallRisk)} Overall:{" "}
                        {selectedCareer.overallRisk} Risk
                      </span>
                      <span className='text-sm text-gray-600 dark:text-gray-400'>
                        {selectedCareer.category}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedCareer(null)}
                    className='text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-2xl'
                  >
                    ✕
                  </button>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                  {/* Risk Assessment */}
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
                      📊 Risk Assessment
                    </h3>
                    <div className='space-y-3'>
                      <div className='flex justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded'>
                        <span className='font-medium'>Market Saturation:</span>
                        <span
                          className={`font-medium ${getRiskColor(selectedCareer.marketSaturation.level).split(" ")[1]}`}
                        >
                          {selectedCareer.marketSaturation.level}
                        </span>
                      </div>
                      <div className='flex justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded'>
                        <span className='font-medium'>Burnout Risk:</span>
                        <span
                          className={`font-medium ${getRiskColor(selectedCareer.burnoutRisk.level).split(" ")[1]}`}
                        >
                          {selectedCareer.burnoutRisk.level}
                        </span>
                      </div>
                      <div className='flex justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded'>
                        <span className='font-medium'>Competition Level:</span>
                        <span
                          className={`font-medium ${getRiskColor(selectedCareer.competitionLevel.level).split(" ")[1]}`}
                        >
                          {selectedCareer.competitionLevel.level}
                        </span>
                      </div>
                      <div className='flex justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded'>
                        <span className='font-medium'>Job Displacement:</span>
                        <span
                          className={`font-medium ${getRiskColor(selectedCareer.jobDisplacementRisk.level).split(" ")[1]}`}
                        >
                          {selectedCareer.jobDisplacementRisk.level}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Key Warnings */}
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
                      ⚠️ Critical Warnings
                    </h3>
                    <div className='space-y-2'>
                      {selectedCareer.keyWarnings.map((warning, index) => (
                        <div
                          key={index}
                          className='flex items-start gap-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded'
                        >
                          <span className='text-red-500 mt-1'>•</span>
                          <span className='text-red-800 dark:text-red-200 text-sm'>
                            {warning}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Burnout Analysis */}
                <div className='mt-6'>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
                    🔥 Burnout Analysis
                  </h3>
                  <div className='bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded p-4'>
                    <div className='flex items-center gap-2 mb-2'>
                      <span
                        className={`px-2 py-1 rounded text-sm font-medium ${getRiskColor(selectedCareer.burnoutRisk.level)}`}
                      >
                        {selectedCareer.burnoutRisk.level} Risk
                      </span>
                    </div>
                    <p className='text-orange-800 dark:text-orange-200 mb-3'>
                      {selectedCareer.burnoutRisk.description}
                    </p>
                    <div>
                      <h4 className='font-medium text-orange-900 dark:text-orange-100 mb-2'>
                        Key Indicators:
                      </h4>
                      <ul className='text-sm text-orange-800 dark:text-orange-200 space-y-1'>
                        {selectedCareer.burnoutRisk.indicators
                          .slice(0, 3)
                          .map((indicator, index) => (
                            <li key={index}>• {indicator}</li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Required Sacrifices */}
                <div className='mt-6'>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
                    💔 Required Sacrifices
                  </h3>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {selectedCareer.requiredSacrifices.map(
                      (sacrifice, index) => (
                        <div
                          key={index}
                          className='flex items-start gap-2 p-3 bg-gray-50 dark:bg-gray-700 rounded'
                        >
                          <span className='text-gray-500 mt-1'>•</span>
                          <span className='text-gray-800 dark:text-gray-200 text-sm'>
                            {sacrifice}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                {/* Industry Challenges */}
                <div className='mt-6'>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>
                    🏭 Industry Challenges
                  </h3>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {selectedCareer.industryChallenges
                      .slice(0, 6)
                      .map((challenge, index) => (
                        <div
                          key={index}
                          className='flex items-start gap-2 p-3 bg-gray-50 dark:bg-gray-700 rounded'
                        >
                          <span className='text-gray-500 mt-1'>•</span>
                          <span className='text-gray-800 dark:text-gray-200 text-sm'>
                            {challenge}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Realistic Expectations */}
                <div className='mt-6'>
                  <h3 className='text-lg font-semibold text-green-600 dark:text-green-400 mb-4'>
                    🎯 Realistic Expectations
                  </h3>
                  <div className='bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded p-4'>
                    <ul className='space-y-2'>
                      {selectedCareer.realisticExpectations.map(
                        (expectation, index) => (
                          <li
                            key={index}
                            className='text-green-800 dark:text-green-200 flex items-start gap-2'
                          >
                            <span className='text-green-600 mt-1'>✓</span>
                            <span className='text-sm'>{expectation}</span>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                </div>

                {/* Alternatives */}
                <div className='mt-6'>
                  <h3 className='text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4'>
                    🔄 Alternative Options
                  </h3>
                  <div className='flex flex-wrap gap-2'>
                    {selectedCareer.alternatives.map((alternative, index) => (
                      <span
                        key={index}
                        className='px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full'
                      >
                        {alternative}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Final Assessment */}
                <div className='mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded'>
                  <h4 className='font-semibold text-gray-900 dark:text-white mb-2'>
                    Final Assessment
                  </h4>
                  <p className='text-gray-700 dark:text-gray-300 text-sm'>
                    This career{" "}
                    {selectedCareer.overallRisk === "Low"
                      ? "has relatively fewer risks"
                      : "requires significant commitment and preparation to overcome substantial challenges"}
                    . Success depends on realistic expectations and thorough
                    preparation. Consider speaking with professionals in this
                    field and exploring the suggested alternatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
