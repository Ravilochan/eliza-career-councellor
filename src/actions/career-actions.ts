import { Action, ActionExample, HandlerCallback, IAgentRuntime, Memory, State } from '@elizaos/core';
import { careerDatabase, getCareerById, getCareersByCategory, searchCareers, getCareersBySalaryRange, getCareersByStream, CareerOption } from '../career-database.js';

export const getCareerRecommendations: Action = {
  name: 'GET_CAREER_RECOMMENDATIONS',
  similes: [
    'career suggestions',
    'what careers should I consider',
    'career options for me',
    'what jobs match my interests',
    'career advice'
  ],
  description: 'Provides personalized career recommendations based on student interests, subjects, and preferences',
  examples: [
    [
      {
        user: '{{user1}}',
        content: {
          text: 'I am in 12th PCM and interested in technology. What careers should I consider?'
        }
      },
      {
        user: 'Eliza Career Counselor',
        content: {
          text: 'Based on your PCM stream and technology interest, here are some excellent career options...'
        }
      }
    ]
  ] as ActionExample[],
  validate: async (runtime: IAgentRuntime, message: Memory) => {
    return true;
  },
  handler: async (runtime: IAgentRuntime, message: Memory, state: State, options: any, callback: HandlerCallback) => {
    try {
      const userMessage = message.content.text.toLowerCase();

      // Extract interests and subjects from user message
      const interests = extractInterests(userMessage);
      const subjects = extractSubjects(userMessage);
      const budget = extractBudget(userMessage);

      let recommendations: CareerOption[] = [];

      // Filter careers based on extracted information
      if (subjects.length > 0) {
        // Get careers that match the student's stream
        const streamCareers = subjects.flatMap(stream => getCareersByStream(stream));
        recommendations = [...new Set(streamCareers)]; // Remove duplicates
      }

      if (interests.length > 0) {
        // Filter by interests
        const interestFiltered = careerDatabase.filter(career =>
          interests.some(interest =>
            career.name.toLowerCase().includes(interest) ||
            career.description.toLowerCase().includes(interest) ||
            career.category.toLowerCase().includes(interest) ||
            career.skills.some(skill => skill.toLowerCase().includes(interest))
          )
        );
        recommendations = recommendations.length > 0
          ? recommendations.filter(career => interestFiltered.includes(career))
          : interestFiltered;
      }

      if (budget) {
        // Filter by salary range
        const salaryFiltered = getCareersBySalaryRange(budget.min, budget.max);
        recommendations = recommendations.length > 0
          ? recommendations.filter(career => salaryFiltered.includes(career))
          : salaryFiltered;
      }

      // If no specific filters, show popular careers
      if (recommendations.length === 0) {
        recommendations = careerDatabase.slice(0, 5); // Show first 5 as default
      }

      // Limit to top 5 recommendations
      recommendations = recommendations.slice(0, 5);

      const response = formatCareerRecommendations(recommendations, subjects, interests);

      callback({
        text: response,
        action: 'GET_CAREER_RECOMMENDATIONS'
      });

    } catch (error) {
      console.error('Error in getCareerRecommendations:', error);
      callback({
        text: 'I apologize, but I encountered an error while fetching career recommendations. Please try again or provide more details about your interests.',
        action: 'GET_CAREER_RECOMMENDATIONS'
      });
    }
  }
};

export const getCareerDetails: Action = {
  name: 'GET_CAREER_DETAILS',
  similes: [
    'tell me about',
    'what is a career in',
    'career information for',
    'details about being a',
    'what does a __ do'
  ],
  description: 'Provides detailed information about a specific career including salary, lifestyle, education requirements, and prospects',
  examples: [
    [
      {
        user: '{{user1}}',
        content: {
          text: 'Tell me about being a software engineer'
        }
      },
      {
        user: 'Eliza Career Counselor',
        content: {
          text: 'Here are the details about Software Engineering career...'
        }
      }
    ]
  ] as ActionExample[],
  validate: async (runtime: IAgentRuntime, message: Memory) => {
    return true;
  },
  handler: async (runtime: IAgentRuntime, message: Memory, state: State, options: any, callback: HandlerCallback) => {
    try {
      const userMessage = message.content.text.toLowerCase();
      const careerName = extractCareerName(userMessage);

      if (!careerName) {
        callback({
          text: 'I couldn\'t identify which career you\'re asking about. Could you please specify the career name?',
          action: 'GET_CAREER_DETAILS'
        });
        return;
      }

      // Search for the career
      const career = searchCareers(careerName)[0];

      if (!career) {
        // Try fuzzy matching
        const similarCareers = searchCareers(careerName);
        if (similarCareers.length > 0) {
          const suggestions = similarCareers.slice(0, 3).map(c => c.name).join(', ');
          callback({
            text: `I couldn't find exact details for "${careerName}". Did you mean: ${suggestions}?`,
            action: 'GET_CAREER_DETAILS'
          });
        } else {
          callback({
            text: `I'm sorry, I don't have detailed information about "${careerName}" in my database. Would you like me to suggest some similar careers or recommend popular options?`,
            action: 'GET_CAREER_DETAILS'
          });
        }
        return;
      }

      const response = formatCareerDetails(career);

      callback({
        text: response,
        action: 'GET_CAREER_DETAILS'
      });

    } catch (error) {
      console.error('Error in getCareerDetails:', error);
      callback({
        text: 'I apologize, but I encountered an error while fetching career details. Please try again.',
        action: 'GET_CAREER_DETAILS'
      });
    }
  }
};

export const compareCareers: Action = {
  name: 'COMPARE_CAREERS',
  similes: [
    'compare careers',
    'which is better',
    'difference between',
    'versus',
    'vs'
  ],
  description: 'Compares two or more careers based on salary, lifestyle, education requirements, and other factors',
  examples: [
    [
      {
        user: '{{user1}}',
        content: {
          text: 'Compare software engineer vs doctor'
        }
      },
      {
        user: 'Eliza Career Counselor',
        content: {
          text: 'Let me compare Software Engineer and Doctor careers for you...'
        }
      }
    ]
  ] as ActionExample[],
  validate: async (runtime: IAgentRuntime, message: Memory) => {
    return true;
  },
  handler: async (runtime: IAgentRuntime, message: Memory, state: State, options: any, callback: HandlerCallback) => {
    try {
      const userMessage = message.content.text.toLowerCase();
      const careerNames = extractMultipleCareerNames(userMessage);

      if (careerNames.length < 2) {
        callback({
          text: 'To compare careers, please mention at least two career names. For example: "compare software engineer vs doctor"',
          action: 'COMPARE_CAREERS'
        });
        return;
      }

      const careers: CareerOption[] = [];
      const notFound: string[] = [];

      careerNames.forEach(name => {
        const career = searchCareers(name)[0];
        if (career) {
          careers.push(career);
        } else {
          notFound.push(name);
        }
      });

      if (careers.length < 2) {
        callback({
          text: `I could only find information for: ${careers.map(c => c.name).join(', ')}. ${notFound.length > 0 ? `I couldn't find: ${notFound.join(', ')}` : ''}`,
          action: 'COMPARE_CAREERS'
        });
        return;
      }

      const response = formatCareerComparison(careers.slice(0, 3)); // Limit to 3 careers max

      callback({
        text: response,
        action: 'COMPARE_CAREERS'
      });

    } catch (error) {
      console.error('Error in compareCareers:', error);
      callback({
        text: 'I apologize, but I encountered an error while comparing careers. Please try again.',
        action: 'COMPARE_CAREERS'
      });
    }
  }
};

export const getCareersByCategoryAction: Action = {
  name: 'GET_CAREERS_BY_CATEGORY',
  similes: [
    'careers in',
    'jobs in',
    'options in',
    'careers for'
  ],
  description: 'Lists all careers available in a specific category (Technology, Healthcare, Business, etc.)',
  examples: [
    [
      {
        user: '{{user1}}',
        content: {
          text: 'What are the careers in technology?'
        }
      },
      {
        user: 'Eliza Career Counselor',
        content: {
          text: 'Here are the technology careers I can help you with...'
        }
      }
    ]
  ] as ActionExample[],
  validate: async (runtime: IAgentRuntime, message: Memory) => {
    return true;
  },
  handler: async (runtime: IAgentRuntime, message: Memory, state: State, options: any, callback: HandlerCallback) => {
    try {
      const userMessage = message.content.text.toLowerCase();
      const category = extractCategory(userMessage);

      if (!category) {
        const availableCategories = [...new Set(careerDatabase.map(c => c.category))];
        callback({
          text: `I couldn't identify the category. Available categories are: ${availableCategories.join(', ')}. Which category interests you?`,
          action: 'GET_CAREERS_BY_CATEGORY'
        });
        return;
      }

      const careers = getCareersByCategory(category);

      if (careers.length === 0) {
        const availableCategories = [...new Set(careerDatabase.map(c => c.category))];
        callback({
          text: `I don't have careers listed under "${category}". Available categories are: ${availableCategories.join(', ')}.`,
          action: 'GET_CAREERS_BY_CATEGORY'
        });
        return;
      }

      const response = formatCategoryCareers(category, careers);

      callback({
        text: response,
        action: 'GET_CAREERS_BY_CATEGORY'
      });

    } catch (error) {
      console.error('Error in getCareersByCategory:', error);
      callback({
        text: 'I apologize, but I encountered an error while fetching careers by category. Please try again.',
        action: 'GET_CAREERS_BY_CATEGORY'
      });
    }
  }
};

// Helper functions for text extraction and formatting

function extractInterests(message: string): string[] {
  const interestKeywords = [
    'technology', 'tech', 'computer', 'programming', 'coding',
    'medical', 'doctor', 'healthcare', 'hospital',
    'business', 'finance', 'money', 'accounting',
    'engineering', 'design', 'creative', 'art',
    'teaching', 'education', 'research', 'science',
    'sports', 'fitness', 'law', 'legal',
    'marketing', 'sales', 'management', 'entrepreneur'
  ];

  return interestKeywords.filter(keyword => message.includes(keyword));
}

function extractSubjects(message: string): string[] {
  const subjects = [];
  if (message.includes('pcm') || message.includes('physics') || message.includes('chemistry') || message.includes('math')) {
    subjects.push('PCM');
  }
  if (message.includes('pcb') || message.includes('biology')) {
    subjects.push('PCB');
  }
  if (message.includes('pcmb')) {
    subjects.push('PCMB');
  }
  if (message.includes('commerce') || message.includes('accounts') || message.includes('business studies')) {
    subjects.push('Commerce');
  }
  if (message.includes('arts') || message.includes('humanities')) {
    subjects.push('Arts');
  }
  return subjects;
}

function extractBudget(message: string): { min: number; max: number } | null {
  // Extract salary expectations from message
  const salaryPatterns = [
    /(\d+)\s*(?:to|-)\s*(\d+)\s*(?:lakh|lacs|lakhs)/i,
    /(\d+)\s*(?:lakh|lacs|lakhs)/i
  ];

  for (const pattern of salaryPatterns) {
    const match = message.match(pattern);
    if (match) {
      const amount1 = parseInt(match[1]) * 100000; // Convert to rupees
      const amount2 = match[2] ? parseInt(match[2]) * 100000 : amount1 * 2;
      return { min: Math.min(amount1, amount2), max: Math.max(amount1, amount2) };
    }
  }
  return null;
}

function extractCareerName(message: string): string | null {
  // Remove common question words and extract career name
  const cleanMessage = message
    .replace(/\b(tell me about|what is|career in|being a|details about|information about)\b/gi, '')
    .trim();

  // Look for career names in our database
  for (const career of careerDatabase) {
    if (cleanMessage.toLowerCase().includes(career.name.toLowerCase())) {
      return career.name;
    }
  }

  return cleanMessage || null;
}

function extractMultipleCareerNames(message: string): string[] {
  const vsPattern = /\b(.+?)\s+(?:vs|versus|compared to|vs\.?)\s+(.+?)(?:\?|$)/i;
  const match = message.match(vsPattern);

  if (match) {
    return [match[1].trim(), match[2].trim()];
  }

  // Extract careers mentioned with common separators
  const careers: string[] = [];
  const words = message.split(/\s+/);

  for (let i = 0; i < words.length; i++) {
    const phrase = words.slice(i, i + 3).join(' '); // Check 1-3 word phrases
    if (careerDatabase.some(career => career.name.toLowerCase().includes(phrase.toLowerCase()))) {
      careers.push(phrase);
      i += 2; // Skip the words we used
    }
  }

  return careers;
}

function extractCategory(message: string): string | null {
  const categories = ['Technology', 'Healthcare', 'Engineering', 'Business', 'Creative', 'Education', 'Legal', 'Hospitality', 'Sports', 'Government', 'Marketing'];

  for (const category of categories) {
    if (message.includes(category.toLowerCase())) {
      return category;
    }
  }
  return null;
}

function formatCareerRecommendations(careers: CareerOption[], subjects: string[], interests: string[]): string {
  let response = 'Based on your profile, here are some career recommendations:\n\n';

  careers.forEach((career, index) => {
    response += `${index + 1}. **${career.name}**\n`;
    response += `   • Average Salary: ₹${career.averageSalary.entry.toLocaleString()}/year (Entry), ₹${career.averageSalary.mid.toLocaleString()}/year (Mid), ₹${career.averageSalary.senior.toLocaleString()}/year (Senior)\n`;
    response += `   • Work Environment: ${career.lifestyle.workEnvironment}\n`;
    response += `   • Work-Life Balance: ${career.lifestyle.workLifeBalance}\n`;
    response += `   • Key Skills: ${career.skills.slice(0, 3).join(', ')}\n\n`;
  });

  response += 'Would you like detailed information about any of these careers? Just ask me "Tell me about [career name]" for more details!';

  return response;
}

function formatCareerDetails(career: CareerOption): string {
  let response = `## ${career.name}\n\n`;
  response += `**Description:** ${career.description}\n\n`;

  response += `### Salary Information\n`;
  response += `• Entry Level: ₹${career.averageSalary.entry.toLocaleString()}/year\n`;
  response += `• Mid Level: ₹${career.averageSalary.mid.toLocaleString()}/year\n`;
  response += `• Senior Level: ₹${career.averageSalary.senior.toLocaleString()}/year\n\n`;

  response += `### Lifestyle & Work Environment\n`;
  response += `• Working Hours: ${career.lifestyle.workHours}\n`;
  response += `• Work Environment: ${career.lifestyle.workEnvironment}\n`;
  response += `• Stress Level: ${career.lifestyle.stressLevel}\n`;
  response += `• Work-Life Balance: ${career.lifestyle.workLifeBalance}\n`;
  response += `• Travel Required: ${career.lifestyle.travelRequired ? 'Yes' : 'No'}\n`;
  response += `• Remote Work: ${career.lifestyle.remoteWork ? 'Available' : 'Not typically available'}\n\n`;

  response += `### Education Requirements\n`;
  response += `• Degree: ${career.education.degree}\n`;
  response += `• Suitable Streams: ${career.education.stream.join(', ')}\n`;
  response += `• Entrance Exams: ${career.education.entranceExams.join(', ')}\n`;
  response += `• Duration: ${career.education.duration}\n`;
  response += `• Top Institutions: ${career.education.topInstitutions.slice(0, 3).join(', ')}\n\n`;

  response += `### Key Skills Required\n`;
  response += career.skills.map(skill => `• ${skill}`).join('\n');
  response += '\n\n';

  response += `### Job Outlook\n`;
  response += `• ${career.jobOutlook}\n\n`;

  response += `### Pros\n`;
  response += career.pros.map(pro => `• ${pro}`).join('\n');
  response += '\n\n';

  response += `### Cons\n`;
  response += career.cons.map(con => `• ${con}`).join('\n');
  response += '\n\n';

  response += `### Alternative Career Options\n`;
  response += career.alternatives.join(', ');

  return response;
}

function formatCareerComparison(careers: CareerOption[]): string {
  let response = `## Career Comparison\n\n`;
  response += `| Aspect | ${careers.map(c => c.name).join(' | ')} |\n`;
  response += `|--------|${careers.map(() => '--------|').join('')}\n`;

  // Salary comparison
  response += `| **Entry Salary** | ${careers.map(c => `₹${c.averageSalary.entry.toLocaleString()}`).join(' | ')} |\n`;
  response += `| **Mid Salary** | ${careers.map(c => `₹${c.averageSalary.mid.toLocaleString()}`).join(' | ')} |\n`;
  response += `| **Senior Salary** | ${careers.map(c => `₹${c.averageSalary.senior.toLocaleString()}`).join(' | ')} |\n`;

  // Education comparison
  response += `| **Degree** | ${careers.map(c => c.education.degree.substring(0, 20) + (c.education.degree.length > 20 ? '...' : '')).join(' | ')} |\n`;
  response += `| **Duration** | ${careers.map(c => c.education.duration).join(' | ')} |\n`;

  // Lifestyle comparison
  response += `| **Work Hours** | ${careers.map(c => c.lifestyle.workHours).join(' | ')} |\n`;
  response += `| **Work-Life Balance** | ${careers.map(c => c.lifestyle.workLifeBalance).join(' | ')} |\n`;
  response += `| **Stress Level** | ${careers.map(c => c.lifestyle.stressLevel).join(' | ')} |\n`;

  response += `| **Job Outlook** | ${careers.map(c => c.jobOutlook).join(' | ')} |\n`;

  response += '\n### Detailed Analysis:\n\n';
  careers.forEach(career => {
    response += `**${career.name}:**\n`;
    response += `• **Best For:** ${career.suitableFor.join(', ')}\n`;
    response += `• **Top Skills:** ${career.skills.slice(0, 3).join(', ')}\n`;
    response += `• **Key Advantage:** ${career.pros[0]}\n\n`;
  });

  return response;
}

function formatCategoryCareers(category: string, careers: CareerOption[]): string {
  let response = `## ${category} Career Options\n\n`;
  response += `Here are the ${category.toLowerCase()} careers available:\n\n`;

  careers.forEach((career, index) => {
    response += `${index + 1}. **${career.name}**\n`;
    response += `   • ${career.description}\n`;
    response += `   • Average Salary: ₹${career.averageSalary.entry.toLocaleString()}/year\n`;
    response += `   • Education: ${career.education.degree}\n\n`;
  });

  response += `To get detailed information about any career, just ask me "Tell me about [career name]"!`;

  return response;
}

export const careerActions = [
  getCareerRecommendations,
  getCareerDetails,
  compareCareers,
  getCareersByCategoryAction
];
