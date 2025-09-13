import { describe, it, expect } from 'bun:test';
import { careerDatabase, searchCareers, getCareersByCategory } from '../career-database.js';
import { careerActions } from '../actions/career-actions.js';

describe('Career Counseling Integration', () => {
  it('should have a complete career database with diverse options', () => {
    // Test database completeness
    expect(careerDatabase.length).toBeGreaterThanOrEqual(25);

    // Test category diversity
    const categories = [...new Set(careerDatabase.map(c => c.category))];
    expect(categories.length).toBeGreaterThan(5); // At least 6 different categories

    // Test salary range diversity
    const salaries = careerDatabase.map(c => c.averageSalary.entry);
    const minSalary = Math.min(...salaries);
    const maxSalary = Math.max(...salaries);
    expect(maxSalary / minSalary).toBeGreaterThan(10); // At least 10x salary range
  });

  it('should provide comprehensive career information', () => {
    const sampleCareer = careerDatabase[0];

    // Test all required fields are present and meaningful
    expect(sampleCareer.name.length).toBeGreaterThan(0);
    expect(sampleCareer.description.length).toBeGreaterThan(20);
    expect(sampleCareer.pros.length).toBeGreaterThan(2);
    expect(sampleCareer.cons.length).toBeGreaterThan(2);
    expect(sampleCareer.skills.length).toBeGreaterThan(2);
    expect(sampleCareer.education.stream.length).toBeGreaterThan(0);
  });

  it('should support different search and filtering methods', () => {
    // Test search functionality
    const searchResults = searchCareers('engineer');
    expect(searchResults.length).toBeGreaterThan(0);

    // Test category filtering
    const techCareers = getCareersByCategory('Technology');
    expect(techCareers.length).toBeGreaterThan(0);

    // Test that all tech careers have technology category
    techCareers.forEach(career => {
      expect(career.category).toBe('Technology');
    });
  });

  it('should have realistic salary expectations for Indian market', () => {
    careerDatabase.forEach(career => {
      // Entry level salaries should be reasonable for fresh graduates
      expect(career.averageSalary.entry).toBeGreaterThan(200000); // At least ₹2 lakh
      expect(career.averageSalary.entry).toBeLessThan(2000000); // Less than ₹20 lakh

      // Senior salaries should show growth
      expect(career.averageSalary.senior).toBeGreaterThan(career.averageSalary.mid);
      expect(career.averageSalary.senior / career.averageSalary.entry).toBeGreaterThan(2); // At least 2x growth
    });
  });

  it('should include careers suitable for different educational streams', () => {
    const pcmCareers = careerDatabase.filter(career =>
      career.education.stream.includes('PCM')
    );
    const pcbCareers = careerDatabase.filter(career =>
      career.education.stream.includes('PCB')
    );
    const commerceCareers = careerDatabase.filter(career =>
      career.education.stream.includes('Commerce')
    );
    const artsCareers = careerDatabase.filter(career =>
      career.education.stream.includes('Arts')
    );

    // Ensure we have options for all major streams
    expect(pcmCareers.length).toBeGreaterThan(5);
    expect(pcbCareers.length).toBeGreaterThan(3);
    expect(commerceCareers.length).toBeGreaterThan(2);
    expect(artsCareers.length).toBeGreaterThan(2);
  });

  it('should provide balanced career information', () => {
    careerDatabase.forEach(career => {
      // Each career should have both pros and cons
      expect(career.pros.length).toBeGreaterThan(0);
      expect(career.cons.length).toBeGreaterThan(0);

      // Should have suitable for and alternatives
      expect(career.suitableFor.length).toBeGreaterThan(0);
      expect(career.alternatives.length).toBeGreaterThan(0);

      // Should have comprehensive education info
      expect(career.education.entranceExams.length).toBeGreaterThan(0);
      expect(career.education.topInstitutions.length).toBeGreaterThan(0);
    });
  });

  it('should integrate actions with career database', () => {
    // Verify actions are properly exported
    expect(careerActions.length).toBeGreaterThan(0);

    // Verify each action has required properties
    careerActions.forEach(action => {
      expect(action.name).toBeTruthy();
      expect(action.similes).toBeInstanceOf(Array);
      expect(action.similes.length).toBeGreaterThan(0);
      expect(action.description).toBeTruthy();
      expect(action.validate).toBeInstanceOf(Function);
      expect(action.handler).toBeInstanceOf(Function);
    });
  });

  it('should support common career exploration scenarios', () => {
    // Scenario 1: Student interested in technology
    const techCareers = searchCareers('technology');
    expect(techCareers.length).toBeGreaterThan(0);

    // Scenario 2: Student looking for high salary careers
    const highSalaryCareers = careerDatabase.filter(c => c.averageSalary.entry > 600000);
    expect(highSalaryCareers.length).toBeGreaterThan(0);

    // Scenario 3: Student interested in helping others
    const helpingCareers = searchCareers('help');
    expect(helpingCareers.length).toBeGreaterThan(0);

    // Scenario 4: Student interested in creative work
    const creativeCareers = getCareersByCategory('Creative');
    expect(creativeCareers.length).toBeGreaterThan(0);
  });

  it('should have realistic lifestyle information', () => {
    const workLifeBalances = careerDatabase.map(c => c.lifestyle.workLifeBalance);
    const uniqueBalances = [...new Set(workLifeBalances)];

    // Should have variety in work-life balance options
    expect(uniqueBalances.length).toBeGreaterThan(2);

    // Should have different stress levels
    const stressLevels = careerDatabase.map(c => c.lifestyle.stressLevel);
    const uniqueStressLevels = [...new Set(stressLevels)];
    expect(uniqueStressLevels.length).toBeGreaterThan(1);
  });
});
