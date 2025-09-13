import { describe, it, expect } from "bun:test";
import {
  careerCautionsDatabase,
  getCareerCaution,
  getAllCareerCautions,
  getCautionsByRiskLevel,
  getCautionsByBurnoutLevel,
  getTopRiskFactors,
  CareerCaution,
} from "../career-cautions.js";

describe("Career Cautions Database", () => {
  it("should have cautions for 10+ careers", () => {
    expect(careerCautionsDatabase.length).toBeGreaterThanOrEqual(10);
  });

  it("should have all required properties for each career caution", () => {
    careerCautionsDatabase.forEach((caution) => {
      expect(caution).toHaveProperty("careerId");
      expect(caution).toHaveProperty("careerName");
      expect(caution).toHaveProperty("overallRisk");
      expect(caution).toHaveProperty("marketSaturation");
      expect(caution).toHaveProperty("burnoutRisk");
      expect(caution).toHaveProperty("jobDisplacementRisk");
      expect(caution).toHaveProperty("financialRisks");
      expect(caution).toHaveProperty("workLifeBalance");
      expect(caution).toHaveProperty("competitionLevel");
      expect(caution).toHaveProperty("futureViability");
      expect(caution).toHaveProperty("requiredSacrifices");
      expect(caution).toHaveProperty("industryChallenges");
      expect(caution).toHaveProperty("geographicLimitations");
      expect(caution).toHaveProperty("educationalConcerns");
      expect(caution).toHaveProperty("keyWarnings");
      expect(caution).toHaveProperty("realisticExpectations");
    });
  });

  it("should have valid risk levels", () => {
    const validRiskLevels = ["Low", "Medium", "High", "Very High"];

    careerCautionsDatabase.forEach((caution) => {
      expect(validRiskLevels).toContain(caution.overallRisk);
      expect(validRiskLevels).toContain(caution.marketSaturation.level);
      expect(validRiskLevels).toContain(caution.burnoutRisk.level);
      expect(validRiskLevels).toContain(caution.jobDisplacementRisk.level);
      expect(validRiskLevels).toContain(caution.financialRisks.level);
      expect(validRiskLevels).toContain(caution.competitionLevel.level);
    });
  });

  it("should have valid work-life balance ratings", () => {
    const validBalances = ["Poor", "Moderate", "Good", "Excellent"];

    careerCautionsDatabase.forEach((caution) => {
      expect(validBalances).toContain(caution.workLifeBalance.level);
    });
  });

  it("should have valid future viability outlooks", () => {
    const validOutlooks = ["Stable", "Growing", "Declining", "Uncertain"];

    careerCautionsDatabase.forEach((caution) => {
      expect(validOutlooks).toContain(caution.futureViability.outlook);
    });
  });

  it("should have meaningful content in all arrays", () => {
    careerCautionsDatabase.forEach((caution) => {
      expect(caution.requiredSacrifices.length).toBeGreaterThan(0);
      expect(caution.industryChallenges.length).toBeGreaterThan(0);
      expect(caution.keyWarnings.length).toBeGreaterThan(0);
      expect(caution.realisticExpectations.length).toBeGreaterThan(0);
      expect(caution.alternatives.length).toBeGreaterThan(0);
    });
  });
});

describe("getCareerCaution", () => {
  it("should return the correct caution by career ID", () => {
    const caution = getCareerCaution("software-engineer");
    expect(caution).toBeTruthy();
    expect(caution?.careerName).toBe("Software Engineer");
    expect(caution?.overallRisk).toBe("Medium");
  });

  it("should return undefined for non-existent career ID", () => {
    const caution = getCareerCaution("non-existent-career");
    expect(caution).toBeUndefined();
  });
});

describe("getAllCareerCautions", () => {
  it("should return all career cautions", () => {
    const allCautions = getAllCareerCautions();
    expect(allCautions).toEqual(careerCautionsDatabase);
    expect(allCautions.length).toBe(careerCautionsDatabase.length);
  });
});

describe("getCautionsByRiskLevel", () => {
  it("should filter cautions by Very High risk level", () => {
    const highRiskCautions = getCautionsByRiskLevel("Very High");
    expect(highRiskCautions.length).toBeGreaterThan(0);
    highRiskCautions.forEach((caution) => {
      expect(caution.overallRisk).toBe("Very High");
    });
  });

  it("should return empty array for unused risk level", () => {
    const noRiskCautions = getCautionsByRiskLevel("NonExistent");
    expect(noRiskCautions).toEqual([]);
  });
});

describe("getCautionsByBurnoutLevel", () => {
  it("should filter cautions by High burnout risk level", () => {
    const highBurnoutCautions = getCautionsByBurnoutLevel("High");
    expect(highBurnoutCautions.length).toBeGreaterThan(0);
    highBurnoutCautions.forEach((caution) => {
      expect(caution.burnoutRisk.level).toBe("High");
    });
  });

  it("should filter cautions by Very High burnout risk level", () => {
    const veryHighBurnoutCautions = getCautionsByBurnoutLevel("Very High");
    expect(veryHighBurnoutCautions.length).toBeGreaterThan(0);
    veryHighBurnoutCautions.forEach((caution) => {
      expect(caution.burnoutRisk.level).toBe("Very High");
    });
  });
});

describe("getTopRiskFactors", () => {
  it("should return top risk factors with default limit", () => {
    const topRisks = getTopRiskFactors();
    expect(topRisks.length).toBe(5); // Default limit
    expect(topRisks[0].risk).toBe("Very High"); // Should be sorted by risk level
  });

  it("should return specified number of top risks", () => {
    const topRisks = getTopRiskFactors(3);
    expect(topRisks.length).toBe(3);
  });

  it("should have proper structure for risk factors", () => {
    const topRisks = getTopRiskFactors(2);
    topRisks.forEach((risk) => {
      expect(risk).toHaveProperty("career");
      expect(risk).toHaveProperty("risk");
      expect(risk).toHaveProperty("factors");
      expect(risk.factors.length).toBeGreaterThan(0);
    });
  });

  it("should sort risks from highest to lowest", () => {
    const topRisks = getTopRiskFactors(5);
    const riskOrder = { "Very High": 4, High: 3, Medium: 2, Low: 1 };

    for (let i = 1; i < topRisks.length; i++) {
      const currentRiskValue =
        riskOrder[topRisks[i].risk as keyof typeof riskOrder];
      const previousRiskValue =
        riskOrder[topRisks[i - 1].risk as keyof typeof riskOrder];
      expect(previousRiskValue).toBeGreaterThanOrEqual(currentRiskValue);
    }
  });
});

describe("Career Caution Content Quality", () => {
  it("should have detailed market saturation descriptions", () => {
    careerCautionsDatabase.forEach((caution) => {
      expect(caution.marketSaturation.description.length).toBeGreaterThan(20);
      expect(caution.marketSaturation.evidence.length).toBeGreaterThan(10);
    });
  });

  it("should have comprehensive burnout analysis", () => {
    careerCautionsDatabase.forEach((caution) => {
      expect(caution.burnoutRisk.description.length).toBeGreaterThan(15);
      expect(caution.burnoutRisk.indicators.length).toBeGreaterThan(0);
    });
  });

  it("should have detailed work-life balance analysis", () => {
    careerCautionsDatabase.forEach((caution) => {
      expect(caution.workLifeBalance.description.length).toBeGreaterThan(15);
      expect(caution.workLifeBalance.sacrifices.length).toBeGreaterThan(0);
    });
  });

  it("should have specific educational concerns", () => {
    careerCautionsDatabase.forEach((caution) => {
      expect(caution.educationalConcerns.length).toBeGreaterThan(0);
      expect(caution.educationalConcerns[0].length).toBeGreaterThan(10);
    });
  });

  it("should have realistic expectations", () => {
    careerCautionsDatabase.forEach((caution) => {
      expect(caution.realisticExpectations.length).toBeGreaterThan(0);
      expect(caution.realisticExpectations[0].length).toBeGreaterThan(15);
    });
  });
});

describe("Career Caution Categories", () => {
  it("should have diverse career categories represented", () => {
    const categories = [
      ...new Set(careerCautionsDatabase.map((c) => c.category)),
    ];
    expect(categories.length).toBeGreaterThan(3); // At least 4 different categories
  });

  it("should include high-risk careers from different fields", () => {
    const highRiskCareers = careerCautionsDatabase.filter(
      (c) => c.overallRisk === "Very High",
    );
    expect(highRiskCareers.length).toBeGreaterThan(0);

    const categories = [...new Set(highRiskCareers.map((c) => c.category))];
    expect(categories.length).toBeGreaterThan(1); // High risk careers from multiple categories
  });

  it("should include careers with different burnout levels", () => {
    const burnoutLevels = [
      ...new Set(careerCautionsDatabase.map((c) => c.burnoutRisk.level)),
    ];
    expect(burnoutLevels.length).toBeGreaterThan(2); // At least 3 different burnout levels
  });

  it("should include careers with different competition levels", () => {
    const competitionLevels = [
      ...new Set(careerCautionsDatabase.map((c) => c.competitionLevel.level)),
    ];
    expect(competitionLevels.length).toBeGreaterThan(2); // At least 3 different competition levels
  });
});

describe("Career Caution Data Integrity", () => {
  it("should have consistent career IDs", () => {
    const ids = careerCautionsDatabase.map((c) => c.careerId);
    const uniqueIds = [...new Set(ids)];
    expect(uniqueIds.length).toBe(ids.length); // All IDs should be unique
  });

  it("should have career names matching their IDs", () => {
    careerCautionsDatabase.forEach((caution) => {
      const expectedName = caution.careerId
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      // Allow for some variation in naming convention
      expect(caution.careerName.toLowerCase().replace(/\s+/g, "-")).toContain(
        caution.careerId.toLowerCase(),
      );
    });
  });

  it("should have reasonable array lengths", () => {
    careerCautionsDatabase.forEach((caution) => {
      expect(caution.requiredSacrifices.length).toBeLessThanOrEqual(10);
      expect(caution.industryChallenges.length).toBeLessThanOrEqual(10);
      expect(caution.keyWarnings.length).toBeLessThanOrEqual(5);
      expect(caution.realisticExpectations.length).toBeLessThanOrEqual(5);
      expect(caution.alternatives.length).toBeLessThanOrEqual(5);
    });
  });
});
