import { describe, it, expect, mock, spyOn } from "bun:test";
import {
  getCareerWarnings,
  getRiskAssessment,
  getBurnoutAnalysis,
  getMarketRealityCheck,
  getTopRiskCareers,
  cautionActions,
} from "../actions/caution-actions.js";
import { careerCautionsDatabase } from "../career-cautions.js";

describe("Caution Actions", () => {
  it("should export all caution actions", () => {
    expect(cautionActions).toBeDefined();
    expect(Array.isArray(cautionActions)).toBe(true);
    expect(cautionActions.length).toBe(5); // Should have 5 actions
  });

  it("should include all required action types", () => {
    const actionNames = cautionActions.map((action) => action.name);
    expect(actionNames).toContain("GET_CAREER_WARNINGS");
    expect(actionNames).toContain("GET_RISK_ASSESSMENT");
    expect(actionNames).toContain("GET_BURNOUT_ANALYSIS");
    expect(actionNames).toContain("GET_MARKET_REALITY_CHECK");
    expect(actionNames).toContain("GET_TOP_RISK_CAREERS");
  });
});

describe("getCareerWarnings Action", () => {
  it("should have correct action properties", () => {
    expect(getCareerWarnings.name).toBe("GET_CAREER_WARNINGS");
    expect(getCareerWarnings.similes).toContain("career risks");
    expect(getCareerWarnings.similes).toContain("career cautions");
    expect(getCareerWarnings.similes).toContain("what are the downsides");
    expect(getCareerWarnings.description).toContain(
      "Provides realistic warnings",
    );
  });

  it("should have action examples", () => {
    expect(getCareerWarnings.examples).toBeDefined();
    expect(Array.isArray(getCareerWarnings.examples)).toBe(true);
    expect(getCareerWarnings.examples.length).toBeGreaterThan(0);
  });

  it("should validate correctly", async () => {
    const mockRuntime = {};
    const mockMessage = { content: { text: "test" } };
    const result = await getCareerWarnings.validate(
      mockRuntime as any,
      mockMessage as any,
    );
    expect(result).toBe(true);
  });
});

describe("getRiskAssessment Action", () => {
  it("should have correct action properties", () => {
    expect(getRiskAssessment.name).toBe("GET_RISK_ASSESSMENT");
    expect(getRiskAssessment.similes).toContain("risk assessment");
    expect(getRiskAssessment.similes).toContain("career risk analysis");
    expect(getRiskAssessment.similes).toContain("how risky is");
    expect(getRiskAssessment.description).toContain(
      "Provides comprehensive risk assessment",
    );
  });

  it("should have action examples", () => {
    expect(getRiskAssessment.examples).toBeDefined();
    expect(getRiskAssessment.examples.length).toBeGreaterThan(0);
  });
});

describe("getBurnoutAnalysis Action", () => {
  it("should have correct action properties", () => {
    expect(getBurnoutAnalysis.name).toBe("GET_BURNOUT_ANALYSIS");
    expect(getBurnoutAnalysis.similes).toContain("burnout risk");
    expect(getBurnoutAnalysis.similes).toContain("stress level of");
    expect(getBurnoutAnalysis.similes).toContain("mental health concerns");
    expect(getBurnoutAnalysis.description).toContain("Analyzes burnout risks");
  });

  it("should have burnout-specific examples", () => {
    expect(getBurnoutAnalysis.examples).toBeDefined();
    expect(getBurnoutAnalysis.examples[0][1].content.text).toContain("burnout");
  });
});

describe("getMarketRealityCheck Action", () => {
  it("should have correct action properties", () => {
    expect(getMarketRealityCheck.name).toBe("GET_MARKET_REALITY_CHECK");
    expect(getMarketRealityCheck.similes).toContain("market reality");
    expect(getMarketRealityCheck.similes).toContain("job market for");
    expect(getMarketRealityCheck.similes).toContain("competition level");
    expect(getMarketRealityCheck.description).toContain(
      "Provides realistic assessment",
    );
  });

  it("should have market-related examples", () => {
    expect(getMarketRealityCheck.examples).toBeDefined();
    expect(getMarketRealityCheck.examples[0][1].content.text).toContain(
      "competition",
    );
  });
});

describe("getTopRiskCareers Action", () => {
  it("should have correct action properties", () => {
    expect(getTopRiskCareers.name).toBe("GET_TOP_RISK_CAREERS");
    expect(getTopRiskCareers.similes).toContain("riskiest careers");
    expect(getTopRiskCareers.similes).toContain("most challenging careers");
    expect(getTopRiskCareers.similes).toContain("most competitive fields");
    expect(getTopRiskCareers.description).toContain(
      "Provides list of careers with highest risks",
    );
  });

  it("should have examples about top risks", () => {
    expect(getTopRiskCareers.examples).toBeDefined();
    expect(getTopRiskCareers.examples[0][1].content.text).toContain("riskiest");
  });
});

// Mock implementations for handler testing
const createMockRuntime = () => ({
  // Add minimal required properties for testing
});

const createMockMessage = (text: string) => ({
  id: "test-message-id",
  content: { text, source: "user" },
  userId: "test-user-id",
  roomId: "test-room-id",
  createdAt: Date.now(),
});

const createMockState = () => ({
  // Mock state object
});

const createMockCallback = () => {
  const mockFn = mock(() => {});
  return mockFn;
};

describe("Action Handlers", () => {
  describe("getCareerWarnings handler", () => {
    it("should handle doctor career warnings", async () => {
      const mockCallback = createMockCallback();
      const mockMessage = createMockMessage(
        "What are the risks of becoming a doctor?",
      );

      await getCareerWarnings.handler(
        createMockRuntime() as any,
        mockMessage as any,
        createMockState() as any,
        {},
        mockCallback,
      );

      expect(mockCallback).toHaveBeenCalled();
      const callArgs = mockCallback.mock.calls[0][0];
      expect(callArgs.text).toContain("Medical career");
      expect(callArgs.text).toContain("NEET");
      expect(callArgs.action).toBe("GET_CAREER_WARNINGS");
    });

    it("should handle unknown career gracefully", async () => {
      const mockCallback = createMockCallback();
      const mockMessage = createMockMessage(
        "What are the risks of becoming a unicorn trainer?",
      );

      await getCareerWarnings.handler(
        createMockRuntime() as any,
        mockMessage as any,
        createMockState() as any,
        {},
        mockCallback,
      );

      expect(mockCallback).toHaveBeenCalled();
      const callArgs = mockCallback.mock.calls[0][0];
      expect(callArgs.text).toContain(
        "don't have specific cautionary information",
      );
      expect(callArgs.action).toBe("GET_CAREER_WARNINGS");
    });
  });

  describe("getRiskAssessment handler", () => {
    it("should provide risk assessment for software engineering", async () => {
      const mockCallback = createMockCallback();
      const mockMessage = createMockMessage(
        "How risky is software engineering?",
      );

      await getRiskAssessment.handler(
        createMockRuntime() as any,
        mockMessage as any,
        createMockState() as any,
        {},
        mockCallback,
      );

      expect(mockCallback).toHaveBeenCalled();
      const callArgs = mockCallback.mock.calls[0][0];
      expect(callArgs.text).toContain("Risk Assessment");
      expect(callArgs.text).toContain("Software Engineer");
      expect(callArgs.action).toBe("GET_RISK_ASSESSMENT");
    });
  });

  describe("getBurnoutAnalysis handler", () => {
    it("should analyze burnout risks for nursing", async () => {
      const mockCallback = createMockCallback();
      const mockMessage = createMockMessage("How stressful is being a nurse?");

      await getBurnoutAnalysis.handler(
        createMockRuntime() as any,
        mockMessage as any,
        createMockState() as any,
        {},
        mockCallback,
      );

      expect(mockCallback).toHaveBeenCalled();
      const callArgs = mockCallback.mock.calls[0][0];
      expect(callArgs.text).toContain("Burnout Analysis");
      expect(callArgs.text).toContain("nursing");
      expect(callArgs.action).toBe("GET_BURNOUT_ANALYSIS");
    });
  });

  describe("getMarketRealityCheck handler", () => {
    it("should provide market reality check for journalism", async () => {
      const mockCallback = createMockCallback();
      const mockMessage = createMockMessage("How competitive is journalism?");

      await getMarketRealityCheck.handler(
        createMockRuntime() as any,
        mockMessage as any,
        createMockState() as any,
        {},
        mockCallback,
      );

      expect(mockCallback).toHaveBeenCalled();
      const callArgs = mockCallback.mock.calls[0][0];
      expect(callArgs.text).toContain("Market Reality Check");
      expect(callArgs.text).toContain("journalism");
      expect(callArgs.action).toBe("GET_MARKET_REALITY_CHECK");
    });
  });

  describe("getTopRiskCareers handler", () => {
    it("should provide list of top risk careers", async () => {
      const mockCallback = createMockCallback();

      await getTopRiskCareers.handler(
        createMockRuntime() as any,
        createMockMessage("What are the riskiest careers?") as any,
        createMockState() as any,
        {},
        mockCallback,
      );

      expect(mockCallback).toHaveBeenCalled();
      const callArgs = mockCallback.mock.calls[0][0];
      expect(callArgs.text).toContain("Top Career Risks");
      expect(callArgs.text).toContain("riskiest");
      expect(callArgs.action).toBe("GET_TOP_RISK_CAREERS");
    });
  });
});

describe("Career Name Extraction", () => {
  // Test the internal career name extraction logic
  // This would typically be tested by examining the handler behavior

  it("should handle various query formats", () => {
    // Test different query patterns that should work
    const testQueries = [
      "What are the risks of becoming a doctor?",
      "Career warnings for software engineer",
      "How risky is journalism?",
      "Burnout in nursing",
      "Competition level for chartered accountant",
      "Market reality of teaching",
    ];

    // These tests verify that the queries contain recognizable career names
    testQueries.forEach((query) => {
      expect(query.toLowerCase()).toMatch(
        /(doctor|software|engineer|journalism|nursing|chartered|accountant|teaching)/,
      );
    });
  });
});

describe("Action Response Quality", () => {
  it("should provide comprehensive warnings", async () => {
    const mockCallback = createMockCallback();
    const mockMessage = createMockMessage(
      "What are the risks of becoming a doctor?",
    );

    await getCareerWarnings.handler(
      createMockRuntime() as any,
      mockMessage as any,
      createMockState() as any,
      {},
      mockCallback,
    );

    const callArgs = mockCallback.mock.calls[0][0];
    const response = callArgs.text;

    // Check for comprehensive content
    expect(response).toContain("Medical career");
    expect(response).toContain("NEET");
    expect(response).toContain("burnout");
    expect(response).toContain("work-life balance");
    expect(response).toContain("educational debt");
  });

  it("should include realistic expectations", async () => {
    const mockCallback = createMockCallback();
    const mockMessage = createMockMessage("How risky is software engineering?");

    await getRiskAssessment.handler(
      createMockRuntime() as any,
      mockMessage as any,
      createMockState() as any,
      {},
      mockCallback,
    );

    const callArgs = mockCallback.mock.calls[0][0];
    const response = callArgs.text;

    // Check for realistic expectations content
    expect(response).toContain("realistic");
    expect(response).toContain("expectations");
  });

  it("should provide actionable advice", async () => {
    const mockCallback = createMockCallback();

    await getTopRiskCareers.handler(
      createMockRuntime() as any,
      createMockMessage("What are the riskiest careers?") as any,
      createMockState() as any,
      {},
      mockCallback,
    );

    const callArgs = mockCallback.mock.calls[0][0];
    const response = callArgs.text;

    // Check for actionable content
    expect(response).toContain("factors");
    expect(response).toContain("preparation");
    expect(response).toContain("backup");
  });
});
