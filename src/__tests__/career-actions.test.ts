import { describe, it, expect, mock } from 'bun:test';
import {
  getCareerRecommendations,
  getCareerDetails,
  compareCareers,
  getCareersByCategoryAction,
  careerActions
} from '../actions/career-actions.js';

describe('Career Actions', () => {
  it('should export all career actions', () => {
    expect(careerActions).toHaveLength(4);
    expect(careerActions).toContain(getCareerRecommendations);
    expect(careerActions).toContain(getCareerDetails);
    expect(careerActions).toContain(compareCareers);
    expect(careerActions).toContain(getCareersByCategoryAction);
  });

  describe('getCareerRecommendations', () => {
    it('should have correct action properties', () => {
      expect(getCareerRecommendations.name).toBe('GET_CAREER_RECOMMENDATIONS');
      expect(getCareerRecommendations.similes).toContain('career suggestions');
      expect(getCareerRecommendations.description).toContain('personalized career recommendations');
    });

    it('should validate correctly', async () => {
      const mockRuntime = {} as any;
      const mockMessage = { content: { text: 'test' } } as any;
      const result = await getCareerRecommendations.validate(mockRuntime, mockMessage);
      expect(result).toBe(true);
    });
  });

  describe('getCareerDetails', () => {
    it('should have correct action properties', () => {
      expect(getCareerDetails.name).toBe('GET_CAREER_DETAILS');
      expect(getCareerDetails.similes).toContain('tell me about');
      expect(getCareerDetails.description).toContain('detailed information about a specific career');
    });

    it('should validate correctly', async () => {
      const mockRuntime = {} as any;
      const mockMessage = { content: { text: 'test' } } as any;
      const result = await getCareerDetails.validate(mockRuntime, mockMessage);
      expect(result).toBe(true);
    });
  });

  describe('compareCareers', () => {
    it('should have correct action properties', () => {
      expect(compareCareers.name).toBe('COMPARE_CAREERS');
      expect(compareCareers.similes).toContain('compare careers');
      expect(compareCareers.description).toContain('compares two or more careers');
    });

    it('should validate correctly', async () => {
      const mockRuntime = {} as any;
      const mockMessage = { content: { text: 'test' } } as any;
      const result = await compareCareers.validate(mockRuntime, mockMessage);
      expect(result).toBe(true);
    });
  });

  describe('getCareersByCategoryAction', () => {
    it('should have correct action properties', () => {
      expect(getCareersByCategoryAction.name).toBe('GET_CAREERS_BY_CATEGORY');
      expect(getCareersByCategoryAction.similes).toContain('careers in');
      expect(getCareersByCategoryAction.description).toContain('lists all careers available in a specific category');
    });

    it('should validate correctly', async () => {
      const mockRuntime = {} as any;
      const mockMessage = { content: { text: 'test' } } as any;
      const result = await getCareersByCategoryAction.validate(mockRuntime, mockMessage);
      expect(result).toBe(true);
    });
  });
});

// Mock implementations for testing action handlers
describe('Action Handlers', () => {
  const mockRuntime = {} as any;
  const mockState = {} as any;
  const mockOptions = {};
  const mockCallback = mock((response: any) => {});

  beforeEach(() => {
    mockCallback.mockClear();
  });

  describe('getCareerRecommendations handler', () => {
    it('should handle PCM stream recommendations', async () => {
      const mockMessage = {
        content: { text: 'I am in PCM and interested in technology' },
        id: 'test-id'
      } as any;

      await getCareerRecommendations.handler(
        mockRuntime,
        mockMessage,
        mockState,
        mockOptions,
        mockCallback
      );

      expect(mockCallback).toHaveBeenCalledTimes(1);
      const response = mockCallback.mock.calls[0][0];
      expect(response.text).toContain('recommendations');
      expect(response.action).toBe('GET_CAREER_RECOMMENDATIONS');
    });

    it('should handle salary-based queries', async () => {
      const mockMessage = {
        content: { text: 'careers with salary 5-10 lakh' },
        id: 'test-id'
      } as any;

      await getCareerRecommendations.handler(
        mockRuntime,
        mockMessage,
        mockState,
        mockOptions,
        mockCallback
      );

      expect(mockCallback).toHaveBeenCalledTimes(1);
    });
  });

  describe('getCareerDetails handler', () => {
    it('should provide details for software engineer', async () => {
      const mockMessage = {
        content: { text: 'tell me about software engineer' },
        id: 'test-id'
      } as any;

      await getCareerDetails.handler(
        mockRuntime,
        mockMessage,
        mockState,
        mockOptions,
        mockCallback
      );

      expect(mockCallback).toHaveBeenCalledTimes(1);
      const response = mockCallback.mock.calls[0][0];
      expect(response.text).toContain('Software Engineer');
      expect(response.action).toBe('GET_CAREER_DETAILS');
    });

    it('should handle unknown careers gracefully', async () => {
      const mockMessage = {
        content: { text: 'tell me about nonexistent career' },
        id: 'test-id'
      } as any;

      await getCareerDetails.handler(
        mockRuntime,
        mockMessage,
        mockState,
        mockOptions,
        mockCallback
      );

      expect(mockCallback).toHaveBeenCalledTimes(1);
      const response = mockCallback.mock.calls[0][0];
      expect(response.action).toBe('GET_CAREER_DETAILS');
    });
  });

  describe('compareCareers handler', () => {
    it('should compare two careers', async () => {
      const mockMessage = {
        content: { text: 'compare software engineer vs doctor' },
        id: 'test-id'
      } as any;

      await compareCareers.handler(
        mockRuntime,
        mockMessage,
        mockState,
        mockOptions,
        mockCallback
      );

      expect(mockCallback).toHaveBeenCalledTimes(1);
      const response = mockCallback.mock.calls[0][0];
      expect(response.text).toContain('comparison');
      expect(response.action).toBe('COMPARE_CAREERS');
    });

    it('should handle insufficient careers to compare', async () => {
      const mockMessage = {
        content: { text: 'compare single career' },
        id: 'test-id'
      } as any;

      await compareCareers.handler(
        mockRuntime,
        mockMessage,
        mockState,
        mockOptions,
        mockCallback
      );

      expect(mockCallback).toHaveBeenCalledTimes(1);
    });
  });

  describe('getCareersByCategoryAction handler', () => {
    it('should list technology careers', async () => {
      const mockMessage = {
        content: { text: 'careers in technology' },
        id: 'test-id'
      } as any;

      await getCareersByCategoryAction.handler(
        mockRuntime,
        mockMessage,
        mockState,
        mockOptions,
        mockCallback
      );

      expect(mockCallback).toHaveBeenCalledTimes(1);
      const response = mockCallback.mock.calls[0][0];
      expect(response.action).toBe('GET_CAREERS_BY_CATEGORY');
    });

    it('should handle unknown categories', async () => {
      const mockMessage = {
        content: { text: 'careers in unknown category' },
        id: 'test-id'
      } as any;

      await getCareersByCategoryAction.handler(
        mockRuntime,
        mockMessage,
        mockState,
        mockOptions,
        mockCallback
      );

      expect(mockCallback).toHaveBeenCalledTimes(1);
    });
  });
});
