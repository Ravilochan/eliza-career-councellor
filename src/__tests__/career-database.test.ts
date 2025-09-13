import { describe, it, expect } from 'bun:test';
import {
  careerDatabase,
  getCareerById,
  getCareersByCategory,
  searchCareers,
  getCareersBySalaryRange,
  getCareersByStream,
  type CareerOption
} from '../career-database.js';

describe('Career Database', () => {
  it('should have 25+ careers in the database', () => {
    expect(careerDatabase.length).toBeGreaterThanOrEqual(25);
  });

  it('should have all required properties for each career', () => {
    careerDatabase.forEach(career => {
      expect(career).toHaveProperty('id');
      expect(career).toHaveProperty('name');
      expect(career).toHaveProperty('category');
      expect(career).toHaveProperty('description');
      expect(career).toHaveProperty('averageSalary');
      expect(career).toHaveProperty('lifestyle');
      expect(career).toHaveProperty('education');
      expect(career).toHaveProperty('skills');
      expect(career).toHaveProperty('jobOutlook');
      expect(career).toHaveProperty('pros');
      expect(career).toHaveProperty('cons');
      expect(career).toHaveProperty('suitableFor');
      expect(career).toHaveProperty('alternatives');
    });
  });

  it('should have valid salary structure', () => {
    careerDatabase.forEach(career => {
      expect(career.averageSalary.entry).toBeGreaterThan(0);
      expect(career.averageSalary.mid).toBeGreaterThan(career.averageSalary.entry);
      expect(career.averageSalary.senior).toBeGreaterThan(career.averageSalary.mid);
    });
  });

  it('should have valid education structure', () => {
    careerDatabase.forEach(career => {
      expect(career.education.stream.length).toBeGreaterThan(0);
      expect(career.education.degree).toBeTruthy();
      expect(career.education.duration).toBeTruthy();
    });
  });

  it('should have valid lifestyle properties', () => {
    const validWorkLifeBalances = ['Poor', 'Moderate', 'Good', 'Excellent'];
    const validStressLevels = ['Low', 'Medium', 'High'];
    const validJobOutlooks = ['Stable', 'Growing', 'High Demand'];

    careerDatabase.forEach(career => {
      expect(validWorkLifeBalances).toContain(career.lifestyle.workLifeBalance);
      expect(validStressLevels).toContain(career.lifestyle.stressLevel);
      expect(validJobOutlooks).toContain(career.jobOutlook);
      expect(typeof career.lifestyle.remoteWork).toBe('boolean');
      expect(typeof career.lifestyle.travelRequired).toBe('boolean');
    });
  });
});

describe('getCareerById', () => {
  it('should return the correct career by ID', () => {
    const career = getCareerById('software-engineer');
    expect(career).toBeTruthy();
    expect(career?.name).toBe('Software Engineer');
  });

  it('should return undefined for non-existent career ID', () => {
    const career = getCareerById('non-existent-career');
    expect(career).toBeUndefined();
  });
});

describe('getCareersByCategory', () => {
  it('should return careers filtered by category', () => {
    const techCareers = getCareersByCategory('Technology');
    expect(techCareers.length).toBeGreaterThan(0);
    techCareers.forEach(career => {
      expect(career.category).toBe('Technology');
    });
  });

  it('should return empty array for non-existent category', () => {
    const careers = getCareersByCategory('NonExistentCategory');
    expect(careers).toEqual([]);
  });
});

describe('searchCareers', () => {
  it('should find careers by name', () => {
    const results = searchCareers('doctor');
    expect(results.length).toBeGreaterThan(0);
    results.forEach(career => {
      expect(career.name.toLowerCase()).toContain('doctor') ||
      expect(career.description.toLowerCase()).toContain('doctor');
    });
  });

  it('should find careers by skills', () => {
    const results = searchCareers('programming');
    expect(results.length).toBeGreaterThan(0);
  });

  it('should return empty array for no matches', () => {
    const results = searchCareers('xyz123nonexistent');
    expect(results).toEqual([]);
  });
});

describe('getCareersBySalaryRange', () => {
  it('should filter careers by salary range', () => {
    const results = getCareersBySalaryRange(500000, 1000000);
    expect(results.length).toBeGreaterThan(0);
    results.forEach(career => {
      expect(career.averageSalary.entry).toBeGreaterThanOrEqual(500000);
      expect(career.averageSalary.entry).toBeLessThanOrEqual(1000000);
    });
  });

  it('should return empty array for salary range with no matches', () => {
    const results = getCareersBySalaryRange(10000000, 20000000);
    expect(results).toEqual([]);
  });
});

describe('getCareersByStream', () => {
  it('should return careers suitable for PCM stream', () => {
    const results = getCareersByStream('PCM');
    expect(results.length).toBeGreaterThan(0);
    results.forEach(career => {
      expect(career.education.stream).toContain('PCM');
    });
  });

  it('should return careers suitable for PCB stream', () => {
    const results = getCareersByStream('PCB');
    expect(results.length).toBeGreaterThan(0);
    results.forEach(career => {
      expect(career.education.stream).toContain('PCB');
    });
  });

  it('should return empty array for non-existent stream', () => {
    const results = getCareersByStream('NonExistentStream');
    expect(results).toEqual([]);
  });
});
