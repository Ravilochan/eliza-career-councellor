import {
  Action,
  ActionExample,
  HandlerCallback,
  IAgentRuntime,
  Memory,
  State,
} from "@elizaos/core";
import {
  careerCautionsDatabase,
  getCareerCaution,
  getAllCareerCautions,
  getCautionsByRiskLevel,
  getTopRiskFactors,
  CareerCaution,
} from "../career-cautions.js";

export const getCareerWarnings: Action = {
  name: "GET_CAREER_WARNINGS",
  similes: [
    "career risks",
    "career cautions",
    "what are the downsides",
    "career challenges",
    "realistic view of",
    "potential problems with",
    "career warnings for",
  ],
  description:
    "Provides realistic warnings and cautions about potential challenges, risks, and downsides of specific careers",
  examples: [
    [
      {
        user: "{{user1}}",
        content: {
          text: "What are the risks of becoming a doctor?",
        },
      },
      {
        user: "Eliza Career Realist",
        content: {
          text: "Medical career involves significant risks: extreme competition (5% success rate in NEET), high educational debt (₹50-100 lakh), severe burnout (70% of doctors affected), and poor work-life balance with 70-80 hour work weeks. Many doctors struggle with these challenges even after 10+ years.",
        },
      },
    ],
  ] as ActionExample[],
  validate: async (runtime: IAgentRuntime, message: Memory) => {
    return true;
  },
  handler: async (
    runtime: IAgentRuntime,
    message: Memory,
    state: State,
    options: any,
    callback: HandlerCallback,
  ) => {
    try {
      const userMessage = message.content.text.toLowerCase();
      const careerName = extractCareerName(userMessage);

      if (!careerName) {
        callback({
          text: "I need to know which career you're asking about to provide specific warnings. Could you please specify the career name?",
          action: "GET_CAREER_WARNINGS",
        });
        return;
      }

      // Search for the career in our cautions database
      const careerCaution = careerCautionsDatabase.find(
        (caution) =>
          caution.careerName.toLowerCase().includes(careerName.toLowerCase()) ||
          careerName.toLowerCase().includes(caution.careerName.toLowerCase()),
      );

      if (!careerCaution) {
        const availableCareers = careerCautionsDatabase
          .map((c) => c.careerName)
          .join(", ");
        callback({
          text: `I don't have specific cautionary information for "${careerName}". I can provide warnings for these careers: ${availableCareers}. Which one interests you?`,
          action: "GET_CAREER_WARNINGS",
        });
        return;
      }

      const response = formatCareerWarnings(careerCaution);

      callback({
        text: response,
        action: "GET_CAREER_WARNINGS",
      });
    } catch (error) {
      console.error("Error in getCareerWarnings:", error);
      callback({
        text: "I apologize, but I encountered an error while retrieving career warnings. Please try again.",
        action: "GET_CAREER_WARNINGS",
      });
    }
  },
};

export const getRiskAssessment: Action = {
  name: "GET_RISK_ASSESSMENT",
  similes: [
    "risk assessment",
    "career risk analysis",
    "how risky is",
    "danger level of",
    "stability of career",
    "job security for",
  ],
  description:
    "Provides comprehensive risk assessment including burnout potential, market saturation, and future viability concerns",
  examples: [
    [
      {
        user: "{{user1}}",
        content: {
          text: "How risky is a career in journalism?",
        },
      },
      {
        user: "Eliza Career Realist",
        content: {
          text: "Journalism carries VERY HIGH risk: declining industry with significant job losses, very low starting salaries (₹10,000-20,000/month), high burnout from irregular hours and emotional toll, and poor job security with frequent layoffs. Future viability is uncertain due to digital disruption.",
        },
      },
    ],
  ] as ActionExample[],
  validate: async (runtime: IAgentRuntime, message: Memory) => {
    return true;
  },
  handler: async (
    runtime: IAgentRuntime,
    message: Memory,
    state: State,
    options: any,
    callback: HandlerCallback,
  ) => {
    try {
      const userMessage = message.content.text.toLowerCase();
      const careerName = extractCareerName(userMessage);

      if (!careerName) {
        callback({
          text: "Please specify which career you'd like me to assess for risks.",
          action: "GET_RISK_ASSESSMENT",
        });
        return;
      }

      const careerCaution = careerCautionsDatabase.find(
        (caution) =>
          caution.careerName.toLowerCase().includes(careerName.toLowerCase()) ||
          careerName.toLowerCase().includes(caution.careerName.toLowerCase()),
      );

      if (!careerCaution) {
        const availableCareers = careerCautionsDatabase
          .map((c) => c.careerName)
          .join(", ");
        callback({
          text: `I don't have risk assessment data for "${careerName}". Available careers: ${availableCareers}`,
          action: "GET_RISK_ASSESSMENT",
        });
        return;
      }

      const response = formatRiskAssessment(careerCaution);

      callback({
        text: response,
        action: "GET_RISK_ASSESSMENT",
      });
    } catch (error) {
      console.error("Error in getRiskAssessment:", error);
      callback({
        text: "I apologize, but I encountered an error during risk assessment. Please try again.",
        action: "GET_RISK_ASSESSMENT",
      });
    }
  },
};

export const getBurnoutAnalysis: Action = {
  name: "GET_BURNOUT_ANALYSIS",
  similes: [
    "burnout risk",
    "stress level of",
    "work pressure in",
    "mental health concerns",
    "emotional toll of",
  ],
  description:
    "Analyzes burnout risks, work pressure, and mental health concerns for specific careers",
  examples: [
    [
      {
        user: "{{user1}}",
        content: {
          text: "How stressful is being a doctor?",
        },
      },
      {
        user: "Eliza Career Realist",
        content: {
          text: "Medical profession has VERY HIGH burnout risk: 70% of doctors experience burnout within 5 years, work 70-80 hours/week regularly, handle life-and-death decisions daily, and face high emotional toll from patient suffering. This contributes to depression, anxiety, and relationship problems.",
        },
      },
    ],
  ] as ActionExample[],
  validate: async (runtime: IAgentRuntime, message: Memory) => {
    return true;
  },
  handler: async (
    runtime: IAgentRuntime,
    message: Memory,
    state: State,
    options: any,
    callback: HandlerCallback,
  ) => {
    try {
      const userMessage = message.content.text.toLowerCase();
      const careerName = extractCareerName(userMessage);

      if (!careerName) {
        callback({
          text: "Which career would you like me to analyze for burnout risks?",
          action: "GET_BURNOUT_ANALYSIS",
        });
        return;
      }

      const careerCaution = careerCautionsDatabase.find(
        (caution) =>
          caution.careerName.toLowerCase().includes(careerName.toLowerCase()) ||
          careerName.toLowerCase().includes(caution.careerName.toLowerCase()),
      );

      if (!careerCaution) {
        callback({
          text: `I don't have burnout analysis data for "${careerName}". Please specify a career from our database.`,
          action: "GET_BURNOUT_ANALYSIS",
        });
        return;
      }

      const response = formatBurnoutAnalysis(careerCaution);

      callback({
        text: response,
        action: "GET_BURNOUT_ANALYSIS",
      });
    } catch (error) {
      console.error("Error in getBurnoutAnalysis:", error);
      callback({
        text: "I apologize, but I encountered an error during burnout analysis. Please try again.",
        action: "GET_BURNOUT_ANALYSIS",
      });
    }
  },
};

export const getMarketRealityCheck: Action = {
  name: "GET_MARKET_REALITY_CHECK",
  similes: [
    "market reality",
    "job market for",
    "competition level",
    "demand for",
    "saturation in",
    "how hard to get job in",
  ],
  description:
    "Provides realistic assessment of job market conditions, competition levels, and employment challenges",
  examples: [
    [
      {
        user: "{{user1}}",
        content: {
          text: "How competitive is the software engineering job market?",
        },
      },
      {
        user: "Eliza Career Realist",
        content: {
          text: "Software engineering has VERY HIGH competition: thousands of applicants per job opening, 40% of fresh graduates unemployed for 6+ months, and oversupply from bootcamps and online courses. Top companies receive lakhs of applications for entry-level positions.",
        },
      },
    ],
  ] as ActionExample[],
  validate: async (runtime: IAgentRuntime, message: Memory) => {
    return true;
  },
  handler: async (
    runtime: IAgentRuntime,
    message: Memory,
    state: State,
    options: any,
    callback: HandlerCallback,
  ) => {
    try {
      const userMessage = message.content.text.toLowerCase();
      const careerName = extractCareerName(userMessage);

      if (!careerName) {
        callback({
          text: "Which career would you like me to check for market realities?",
          action: "GET_MARKET_REALITY_CHECK",
        });
        return;
      }

      const careerCaution = careerCautionsDatabase.find(
        (caution) =>
          caution.careerName.toLowerCase().includes(careerName.toLowerCase()) ||
          careerName.toLowerCase().includes(caution.careerName.toLowerCase()),
      );

      if (!careerCaution) {
        callback({
          text: `I don't have market data for "${careerName}". Please choose from available careers.`,
          action: "GET_MARKET_REALITY_CHECK",
        });
        return;
      }

      const response = formatMarketRealityCheck(careerCaution);

      callback({
        text: response,
        action: "GET_MARKET_REALITY_CHECK",
      });
    } catch (error) {
      console.error("Error in getMarketRealityCheck:", error);
      callback({
        text: "I apologize, but I encountered an error during market analysis. Please try again.",
        action: "GET_MARKET_REALITY_CHECK",
      });
    }
  },
};

export const getTopRiskCareers: Action = {
  name: "GET_TOP_RISK_CAREERS",
  similes: [
    "riskiest careers",
    "most challenging careers",
    "careers with highest burnout",
    "most competitive fields",
    "hardest careers to break into",
  ],
  description:
    "Provides list of careers with highest risks, challenges, and competition levels",
  examples: [
    [
      {
        user: "{{user1}}",
        content: {
          text: "What are the riskiest career choices?",
        },
      },
      {
        user: "Eliza Career Realist",
        content: {
          text: "Based on market saturation, burnout risk, and competition levels, here are the top 5 riskiest careers: 1. Medical Doctor (Very High Risk) - 5% NEET success rate, 70% burnout rate, ₹50-100L education debt. 2. Chartered Accountant (High Risk) - 40-60% exam failure rate, tax season destroys work-life balance. 3. Journalism (Very High Risk) - Declining industry, very low salaries, high emotional toll.",
        },
      },
    ],
  ] as ActionExample[],
  validate: async (runtime: IAgentRuntime, message: Memory) => {
    return true;
  },
  handler: async (
    runtime: IAgentRuntime,
    message: Memory,
    state: State,
    options: any,
    callback: HandlerCallback,
  ) => {
    try {
      const topRisks = getTopRiskFactors(5);
      const response = formatTopRiskCareers(topRisks);

      callback({
        text: response,
        action: "GET_TOP_RISK_CAREERS",
      });
    } catch (error) {
      console.error("Error in getTopRiskCareers:", error);
      callback({
        text: "I apologize, but I encountered an error retrieving risk data. Please try again.",
        action: "GET_TOP_RISK_CAREERS",
      });
    }
  },
};

// Helper functions

function extractCareerName(message: string): string | null {
  // Remove common question words and extract career name
  const cleanMessage = message
    .replace(
      /\b(warnings?|cautions?|risks?|challenges?|downsides?|stress|burnout|competition|market|job)\b/gi,
      "",
    )
    .replace(/\b(for|of|in|with|about|being a|becoming a)\b/gi, "")
    .trim();

  // Look for career names in our database
  for (const caution of careerCautionsDatabase) {
    if (cleanMessage.toLowerCase().includes(caution.careerName.toLowerCase())) {
      return caution.careerName;
    }
  }

  // Try to match partial names
  const words = cleanMessage.split(/\s+/);
  for (const word of words) {
    if (word.length > 3) {
      for (const caution of careerCautionsDatabase) {
        if (caution.careerName.toLowerCase().includes(word.toLowerCase())) {
          return caution.careerName;
        }
      }
    }
  }

  return cleanMessage || null;
}

function formatCareerWarnings(caution: CareerCaution): string {
  let response = `## ⚠️ Career Warnings for ${caution.careerName}\n\n`;

  response += `### Overall Risk Level: **${caution.overallRisk}**\n\n`;

  response += `### Key Warnings:\n`;
  caution.keyWarnings.forEach((warning, index) => {
    response += `${index + 1}. ${warning}\n`;
  });
  response += "\n";

  response += `### Market Challenges:\n`;
  response += `• **Saturation**: ${caution.marketSaturation.description}\n`;
  response += `• **Competition**: ${caution.competitionLevel.description}\n`;
  response += `• **Entry Barriers**: ${caution.competitionLevel.entryBarriers.slice(0, 3).join(", ")}\n\n`;

  response += `### Work-Life Balance Concerns:\n`;
  response += `• **Work Hours**: ${caution.lifestyle.workHours}\n`;
  response += `• **Balance Level**: ${caution.workLifeBalance.level}\n`;
  if (caution.workLifeBalance.sacrifices.length > 0) {
    response += `• **Required Sacrifices**: ${caution.workLifeBalance.sacrifices.slice(0, 3).join(", ")}\n`;
  }
  response += "\n";

  response += `### Burnout Risks:\n`;
  response += `• **Risk Level**: ${caution.burnoutRisk.level}\n`;
  response += `• **Indicators**: ${caution.burnoutRisk.indicators.slice(0, 3).join(", ")}\n\n`;

  response += `### Financial Realities:\n`;
  response += `• **Risk Level**: ${caution.financialRisks.level}\n`;
  if (caution.financialRisks.concerns.length > 0) {
    response += `• **Concerns**: ${caution.financialRisks.concerns.slice(0, 3).join(", ")}\n`;
  }
  response += "\n";

  response += `### Future Viability:\n`;
  response += `• **Outlook**: ${caution.futureViability.outlook}\n`;
  response += `• **Timeline**: ${caution.jobDisplacementRisk.timeframe}\n`;
  if (caution.futureViability.influencingFactors.length > 0) {
    response += `• **Key Factors**: ${caution.futureViability.influencingFactors.slice(0, 2).join(", ")}\n`;
  }
  response += "\n";

  if (caution.requiredSacrifices.length > 0) {
    response += `### Required Sacrifices:\n`;
    caution.requiredSacrifices.slice(0, 5).forEach((sacrifice) => {
      response += `• ${sacrifice}\n`;
    });
    response += "\n";
  }

  if (caution.industryChallenges.length > 0) {
    response += `### Industry Challenges:\n`;
    caution.industryChallenges.slice(0, 5).forEach((challenge) => {
      response += `• ${challenge}\n`;
    });
    response += "\n";
  }

  response += `### Realistic Expectations:\n`;
  caution.realisticExpectations.forEach((expectation, index) => {
    response += `${index + 1}. ${expectation}\n`;
  });
  response += "\n";

  if (caution.alternatives.length > 0) {
    response += `### Alternative Options:\n`;
    response += `Consider these alternatives with potentially fewer challenges: ${caution.alternatives.join(", ")}\n\n`;
  }

  response += `**Remember**: While these challenges are real, many professionals successfully navigate them and find fulfilling careers. The key is being fully aware of the difficulties and preparing accordingly.`;

  return response;
}

function formatRiskAssessment(caution: CareerCaution): string {
  let response = `## 📊 Risk Assessment for ${caution.careerName}\n\n`;

  response += `### Overall Risk Level: **${caution.overallRisk}**\n\n`;

  // Risk breakdown table
  response += `| Risk Category | Level | Key Concerns |\n`;
  response += `|---------------|-------|--------------|\n`;
  response += `| Market Saturation | ${caution.marketSaturation.level} | ${caution.marketSaturation.description.split(".")[0]} |\n`;
  response += `| Burnout Risk | ${caution.burnoutRisk.level} | ${caution.burnoutRisk.description.split(".")[0]} |\n`;
  response += `| Job Displacement | ${caution.jobDisplacementRisk.level} | ${caution.jobDisplacementRisk.description.split(".")[0]} |\n`;
  response += `| Financial Risk | ${caution.financialRisks.level} | ${caution.financialRisks.description.split(".")[0]} |\n`;
  response += `| Competition Level | ${caution.competitionLevel.level} | ${caution.competitionLevel.description.split(".")[0]} |\n\n`;

  response += `### Critical Risk Factors:\n\n`;

  if (caution.overallRisk === "Very High") {
    response += `🚨 **EXTREME CAUTION REQUIRED**: This career has multiple high-risk factors that could significantly impact your well-being and career success.\n\n`;
  } else if (caution.overallRisk === "High") {
    response += `⚠️ **HIGH RISK**: Several significant challenges require careful consideration and preparation.\n\n`;
  } else if (caution.overallRisk === "Medium") {
    response += `🟡 **MODERATE RISK**: Manageable challenges with proper planning and support.\n\n`;
  } else {
    response += `🟢 **RELATIVE LOW RISK**: Fewer major obstacles but still requires realistic expectations.\n\n`;
  }

  response += `### Evidence-Based Concerns:\n`;
  caution.keyWarnings.forEach((warning, index) => {
    response += `${index + 1}. ${warning}\n`;
  });
  response += "\n";

  response += `### Mitigation Strategies:\n`;
  response += `• **Preparation**: Research thoroughly and speak with professionals in the field\n`;
  response += `• **Support System**: Build network of mentors and peers for guidance\n`;
  response += `• **Backup Plans**: Consider alternative career paths\n`;
  response += `• **Self-Care**: Develop strategies for managing stress and maintaining work-life balance\n`;
  response += `• **Financial Planning**: Understand and prepare for education costs and early career challenges\n\n`;

  response += `### Long-term Viability:\n`;
  response += `**Outlook**: ${caution.futureViability.outlook}\n`;
  response += `**Timeframe for Automation**: ${caution.jobDisplacementRisk.timeframe}\n\n`;

  response += `**Final Assessment**: This career ${caution.overallRisk === "Low" ? "has relatively fewer risks" : "requires significant commitment and preparation to overcome substantial challenges"}. Success depends on realistic expectations and thorough preparation.`;

  return response;
}

function formatBurnoutAnalysis(caution: CareerCaution): string {
  let response = `## 🔥 Burnout Analysis for ${caution.careerName}\n\n`;

  response += `### Burnout Risk Level: **${caution.burnoutRisk.level}**\n\n`;

  response += `### Risk Description:\n${caution.burnoutRisk.description}\n\n`;

  response += `### Key Burnout Indicators:\n`;
  caution.burnoutRisk.indicators.forEach((indicator, index) => {
    response += `${index + 1}. ${indicator}\n`;
  });
  response += "\n";

  response += `### Contributing Factors:\n\n`;

  // Work-life balance impact
  response += `#### Work-Life Balance Impact:\n`;
  response += `• **Work Hours**: ${caution.lifestyle.workHours}\n`;
  response += `• **Balance Rating**: ${caution.workLifeBalance.level}\n`;
  if (caution.workLifeBalance.sacrifices.length > 0) {
    response += `• **Personal Sacrifices**: ${caution.workLifeBalance.sacrifices.slice(0, 3).join(", ")}\n`;
  }
  response += "\n";

  // Emotional toll
  response += `#### Emotional & Mental Strain:\n`;
  if (
    caution.industryChallenges.some(
      (challenge) =>
        challenge.toLowerCase().includes("emotional") ||
        challenge.toLowerCase().includes("stress") ||
        challenge.toLowerCase().includes("mental"),
    )
  ) {
    const emotionalChallenges = caution.industryChallenges.filter(
      (challenge) =>
        challenge.toLowerCase().includes("emotional") ||
        challenge.toLowerCase().includes("stress") ||
        challenge.toLowerCase().includes("mental") ||
        challenge.toLowerCase().includes("burnout"),
    );
    emotionalChallenges.forEach((challenge) => {
      response += `• ${challenge}\n`;
    });
  } else {
    response += `• High-pressure decision making\n`;
    response += `• Performance expectations\n`;
    response += `• Stakeholder management\n`;
  }
  response += "\n";

  response += `### Health Impact Assessment:\n\n`;

  if (caution.burnoutRisk.level === "Very High") {
    response += `🚨 **CRITICAL HEALTH CONCERNS**:\n`;
    response += `• **Physical Health**: Chronic fatigue, sleep disorders, weakened immunity\n`;
    response += `• **Mental Health**: Anxiety, depression, emotional exhaustion\n`;
    response += `• **Relationships**: Strained personal relationships, social isolation\n`;
    response += `• **Long-term**: Higher risk of serious health conditions\n\n`;
  } else if (caution.burnoutRisk.level === "High") {
    response += `⚠️ **SIGNIFICANT HEALTH RISKS**:\n`;
    response += `• **Physical Health**: Regular fatigue, disrupted sleep patterns\n`;
    response += `• **Mental Health**: Increased stress, occasional anxiety\n`;
    response += `• **Relationships**: Less time for personal connections\n`;
    response += `• **Long-term**: Potential for chronic health issues if unmanaged\n\n`;
  } else if (caution.burnoutRisk.level === "Medium") {
    response += `🟡 **MODERATE HEALTH IMPACT**:\n`;
    response += `• **Physical Health**: Occasional fatigue during busy periods\n`;
    response += `• **Mental Health**: Manageable stress with proper work-life balance\n`;
    response += `• **Relationships**: Some impact during peak work periods\n`;
    response += `• **Long-term**: Generally manageable with healthy habits\n\n`;
  } else {
    response += `🟢 **LOW HEALTH IMPACT**:\n`;
    response += `• **Physical Health**: Minimal physical strain\n`;
    response += `• **Mental Health**: Generally low stress levels\n`;
    response += `• **Relationships**: Good work-life balance typically maintained\n`;
    response += `• **Long-term**: Low risk of burnout-related health issues\n\n`;
  }

  response += `### Prevention Strategies:\n`;
  response += `• **Set Boundaries**: Establish clear work-life boundaries\n`;
  response += `• **Self-Care**: Regular exercise, adequate sleep, healthy eating\n`;
  response += `• **Support Network**: Mentors, colleagues, and personal relationships\n`;
  response += `• **Professional Help**: Counseling when needed\n`;
  response += `• **Regular Breaks**: Time off to recharge and prevent exhaustion\n\n`;

  response += `### Industry Burnout Statistics:\n`;
  if (caution.careerId === "doctor-mbbs") {
    response += `• 70% of doctors experience burnout within 5 years\n`;
    response += `• Average physician works 70-80 hours per week\n`;
    response += `• Higher suicide rates compared to general population\n`;
  } else if (caution.careerId === "nurse") {
    response += `• Highest burnout rates among healthcare professions\n`;
    response += `• 30-50% of nurses leave within first 2 years\n`;
    response += `• Chronic sleep deprivation from shift work\n`;
  } else if (caution.careerId === "chartered-accountant") {
    response += `• Tax season burnout affects 80% of CAs\n`;
    response += `• Many switch careers after 5-7 years\n`;
    response += `• High correlation with mental health issues\n`;
  } else {
    response += `• Industry burnout rates vary by role and organization\n`;
    response += `• Prevention programs can reduce burnout by 30-50%\n`;
    response += `• Early career burnout often leads to career changes\n`;
  }
  response += "\n";

  response += `**Important**: Burnout is preventable with proper self-care, organizational support, and realistic expectations. Regular monitoring of your well-being is crucial for long-term career success.`;

  return response;
}

function formatMarketRealityCheck(caution: CareerCaution): string {
  let response = `## 📈 Market Reality Check for ${caution.careerName}\n\n`;

  response += `### Market Saturation: **${caution.marketSaturation.level}**\n`;
  response += `${caution.marketSaturation.description}\n\n`;
  response += `**Evidence**: ${caution.marketSaturation.evidence}\n\n`;

  response += `### Competition Level: **${caution.competitionLevel.level}**\n`;
  response += `${caution.competitionLevel.description}\n\n`;

  response += `### Entry Barriers:\n`;
  caution.competitionLevel.entryBarriers.forEach((barrier, index) => {
    response += `${index + 1}. ${barrier}\n`;
  });
  response += "\n";

  response += `### Job Displacement Risk: **${caution.jobDisplacementRisk.level}**\n`;
  response += `${caution.jobDisplacementRisk.description}\n\n`;
  response += `**Timeline**: ${caution.jobDisplacementRisk.timeframe}\n\n`;

  response += `### Future Viability: **${caution.futureViability.outlook}**\n`;
  response += `${caution.futureViability.description}\n\n`;

  if (caution.futureViability.influencingFactors.length > 0) {
    response += `### Key Influencing Factors:\n`;
    caution.futureViability.influencingFactors.forEach((factor, index) => {
      response += `${index + 1}. ${factor}\n`;
    });
    response += "\n";
  }

  response += `### Geographic Considerations:\n`;
  if (caution.geographicLimitations.length > 0) {
    caution.geographicLimitations.forEach((limitation, index) => {
      response += `${index + 1}. ${limitation}\n`;
    });
  } else {
    response += `• Opportunities available across urban and rural areas\n`;
    response += `• Remote work options may be available\n`;
  }
  response += "\n";

  response += `### Realistic Job Search Expectations:\n`;

  if (caution.competitionLevel.level === "Very High") {
    response += `• **Job Search Duration**: 6-12 months for entry-level positions\n`;
    response += `• **Application Volume**: Hundreds or thousands per position\n`;
    response += `• **Success Rate**: Less than 5% for competitive roles\n`;
    response += `• **Strategy Required**: Strong portfolio/networking essential\n`;
  } else if (caution.competitionLevel.level === "High") {
    response += `• **Job Search Duration**: 3-6 months for most positions\n`;
    response += `• **Application Volume**: Tens to hundreds per position\n`;
    response += `• **Success Rate**: 10-20% with proper qualifications\n`;
    response += `• **Strategy Required**: Relevant experience and skills important\n`;
  } else if (caution.competitionLevel.level === "Medium") {
    response += `• **Job Search Duration**: 1-3 months for qualified candidates\n`;
    response += `• **Application Volume**: Reasonable number of applicants\n`;
    response += `• **Success Rate**: 25-50% with standard qualifications\n`;
    response += `• **Strategy Required**: Basic qualifications usually sufficient\n`;
  } else {
    response += `• **Job Search Duration**: 1 month or less for qualified candidates\n`;
    response += `• **Application Volume**: Limited competition\n`;
    response += `• **Success Rate**: 50%+ for qualified candidates\n`;
    response += `• **Strategy Required**: Standard application process\n`;
  }
  response += "\n";

  response += `### Market Demand Outlook:\n`;

  if (caution.futureViability.outlook === "Growing") {
    response += `📈 **POSITIVE OUTLOOK**: Growing demand expected in coming years\n`;
  } else if (caution.futureViability.outlook === "Stable") {
    response += `📊 **STABLE OUTLOOK**: Consistent demand with moderate changes expected\n`;
  } else if (caution.futureViability.outlook === "Declining") {
    response += `📉 **DECLINING OUTLOOK**: Reduced demand, may require career transition\n`;
  } else {
    response += `❓ **UNCERTAIN OUTLOOK**: Market conditions unpredictable, monitor closely\n`;
  }

  response += "\n### Preparation Recommendations:\n";
  response += `• **Skill Development**: Focus on high-demand, transferable skills\n`;
  response += `• **Networking**: Build professional connections early\n`;
  response += `• **Experience**: Gain practical experience through internships/projects\n`;
  response += `• **Location Planning**: Consider relocation for better opportunities\n`;
  response += `• **Backup Planning**: Prepare alternative career paths\n\n`;

  response += `**Market Reality**: This field requires realistic expectations about competition levels and job search challenges. Success depends on thorough preparation, persistence, and adaptability to market conditions.`;

  return response;
}

function formatTopRiskCareers(
  topRisks: Array<{ career: string; risk: string; factors: string[] }>,
): string {
  let response = `## 🚨 Top Riskiest Career Choices\n\n`;
  response += `Based on market saturation, burnout risk, competition levels, and future viability, here are the careers requiring the most caution:\n\n`;

  topRisks.forEach((risk, index) => {
    const riskEmoji =
      risk.risk === "Very High" ? "🚨" : risk.risk === "High" ? "⚠️" : "🟡";
    response += `### ${index + 1}. ${risk.career} - ${riskEmoji} ${risk.risk} Risk\n\n`;

    response += `**Key Risk Factors:**\n`;
    risk.factors.forEach((factor, factorIndex) => {
      response += `${factorIndex + 1}. ${factor}\n`;
    });
    response += "\n";
  });

  response += `### Risk Assessment Framework:\n\n`;
  response += `**Very High Risk (🚨)**: Extreme caution required - multiple severe challenges\n`;
  response += `**High Risk (⚠️)**: Significant challenges requiring careful preparation\n`;
  response += `**Medium Risk (🟡)**: Manageable with proper planning and support\n`;
  response += `**Low Risk (🟢)**: Relatively fewer major obstacles\n\n`;

  response += `### Important Considerations:\n\n`;
  response += `1. **Personal Factors**: Your individual circumstances, skills, and preferences matter\n`;
  response += `2. **Preparation**: Many risks can be mitigated with proper preparation and support\n`;
  response += `3. **Market Changes**: Career landscapes can change with technology and economic shifts\n`;
  response += `4. **Individual Success**: Success depends on personal commitment and adaptability\n`;
  response += `5. **Alternative Paths**: Consider related careers with lower risk profiles\n\n`;

  response += `**Remember**: Higher risk doesn't mean "don't pursue" - it means "be fully aware and prepared". Many people successfully navigate challenging careers and find great fulfillment. The key is informed decision-making and realistic expectations.`;

  return response;
}

export const cautionActions = [
  getCareerWarnings,
  getRiskAssessment,
  getBurnoutAnalysis,
  getMarketRealityCheck,
  getTopRiskCareers,
];
