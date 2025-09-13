# 🧪 E2E Tests for Eliza Career Counselor

This directory contains end-to-end tests specifically designed for the **Eliza Career Counselor** system, ensuring comprehensive validation of career guidance functionality.

## 🎯 Career Counselor Testing Overview

The Eliza Career Counselor employs a comprehensive testing strategy focused on validating the complete career guidance experience for Indian high school students:

### Test Categories

1. **🤖 Career Guidance Tests**
   - Career recommendation accuracy based on student profiles
   - Subject-stream compatibility (PCM, PCB, Commerce, Arts)
   - Interest-based career matching
   - Salary range filtering and validation

2. **💬 Natural Language Processing Tests**
   - Conversational career queries ("What careers for PCM students?")
   - Context-aware responses and follow-up suggestions
   - Multiple query handling and conversation flow
   - Career comparison and detailed information requests

3. **📊 Database Integration Tests**
   - Career data retrieval and filtering accuracy
   - Salary information validation against current market data
   - Education pathway and institution recommendations
   - Skills and competency matching

4. **🎨 User Interface Tests**
   - Career browsing and filtering functionality
   - Search and recommendation system validation
   - Responsive design and user experience testing
   - Career detail modal and comparison features

## 📋 Test Structure

### CareerCounselorTestSuite - Main Test Suite

#### 🎓 Career Recommendation Tests
- `career_recommendations_for_pcm_students` - Validates PCM stream career suggestions
- `career_recommendations_for_pcb_students` - Tests PCB stream compatibility
- `career_recommendations_for_commerce_students` - Commerce stream career options
- `career_recommendations_for_arts_students` - Arts stream career guidance
- `interest_based_career_matching` - Interest-driven career recommendations

#### 💰 Salary & Lifestyle Tests
- `salary_range_filtering_accuracy` - Salary-based career filtering
- `work_life_balance_recommendations` - Lifestyle preference matching
- `career_comparison_functionality` - Side-by-side career comparisons
- `cost_of_living_considerations` - Location-based salary adjustments

#### 🎓 Education Pathway Tests
- `entrance_exam_recommendations` - JEE, NEET, CLAT guidance
- `institution_recommendations` - IITs, NITs, medical colleges
- `alternative_career_paths` - Backup career suggestions
- `skill_development_pathways` - Learning and training recommendations

#### 🔍 Search & Filtering Tests
- `career_search_by_keywords` - Keyword-based career discovery
- `category_based_filtering` - Technology, Healthcare, Engineering filters
- `salary_budget_filtering` - Budget-constrained career options
- `remote_work_preferences` - Remote work opportunity filtering

## 🚀 Integration with Career Counselor

E2E tests are integrated directly into the career counselor project:

```typescript
// src/index.ts
import { CareerCounselorTestSuite } from './__tests__/e2e/career-counselor.e2e';

export const project: Project = {
  agents: [careerCounselorAgent],
  tests: [CareerCounselorTestSuite], // Career-specific E2E tests
};
```

## 🏃 Running Career Counselor Tests

### All Tests
```bash
# Run complete test suite
elizaos test
```

### Career-Specific Tests
```bash
# Run only career counselor E2E tests
elizaos test --type e2e --suite career-counselor

# Run career recommendation tests only
elizaos test --type e2e --filter "recommendation"
```

### Component Tests
```bash
# Run fast component tests
bun test

# Run career database tests
bun test career-database.test.ts

# Run career action tests
bun test career-actions.test.ts
```

### Performance Tests
```bash
# Test career search performance
elizaos test --type performance --focus career-search

# Test recommendation algorithm speed
elizaos test --type performance --focus recommendations
```

## 📊 Test Metrics & Validation

### Career Data Accuracy
- **Salary Validation**: Cross-reference with current Indian job market data
- **Institution Rankings**: Verify against NIRF and other ranking systems
- **Entrance Exam Details**: Validate against official exam patterns
- **Job Outlook Data**: Compare with industry reports and surveys

### User Experience Validation
- **Response Time**: Career queries should respond within 2 seconds
- **Relevance Score**: Recommendations should match user profiles 85%+
- **Information Completeness**: All career details should be comprehensive
- **Cultural Relevance**: Content should be appropriate for Indian context

### System Reliability
- **Database Integrity**: All 25+ career profiles should load correctly
- **Search Accuracy**: 95%+ of relevant careers should appear in search results
- **Filtering Precision**: Category and stream filters should be 100% accurate
- **API Stability**: All endpoints should handle edge cases gracefully

## 🛠️ Implementation Details

### Test Environment Setup
```typescript
// Career counselor test configuration
const testConfig = {
  careersDatabase: 'career-database.ts',
  testUsers: [
    { stream: 'PCM', interests: ['technology', 'engineering'] },
    { stream: 'PCB', interests: ['healthcare', 'research'] },
    { stream: 'Commerce', interests: ['finance', 'business'] },
    { stream: 'Arts', interests: ['creative', 'media'] }
  ],
  performanceThresholds: {
    queryResponseTime: 2000, // ms
    searchAccuracy: 0.95,
    recommendationRelevance: 0.85
  }
};
```

### Test Data Management
- **Mock Student Profiles**: Representative student personas for testing
- **Career Database Snapshots**: Version-controlled test data
- **Performance Baselines**: Historical performance metrics
- **Edge Case Scenarios**: Unusual but valid user queries

### Continuous Integration
```yaml
# .github/workflows/career-tests.yml
name: Career Counselor Tests
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Bun
        uses: oven-sh/setup-bun@v1
      - name: Install dependencies
        run: bun install
      - name: Run career tests
        run: bun run test:career
      - name: Run E2E tests
        run: elizaos test --type e2e
```

## 📈 Test Coverage Areas

### Functional Coverage
- ✅ Career recommendation algorithms
- ✅ Subject-stream compatibility
- ✅ Salary and lifestyle filtering
- ✅ Education pathway guidance
- ✅ Natural language query processing
- ✅ Career comparison functionality
- ✅ Search and discovery features

### Performance Coverage
- ✅ Query response times
- ✅ Database search performance
- ✅ Memory usage during operations
- ✅ Concurrent user handling
- ✅ Large dataset processing

### Reliability Coverage
- ✅ Error handling and recovery
- ✅ Data validation and integrity
- ✅ Network failure scenarios
- ✅ Database connection issues
- ✅ Invalid input handling

## 🎯 Best Practices for Career Tests

### Writing Career Tests
```typescript
// Example: Testing career recommendations
it('should recommend appropriate careers for PCM students', async (runtime) => {
  const studentQuery = "I'm in 12th PCM and like solving problems";
  const response = await runtime.agent.processQuery(studentQuery);

  expect(response.careers).toContain('Software Engineer');
  expect(response.careers).toContain('Data Scientist');
  expect(response.relevanceScore).toBeGreaterThan(0.8);
});

// Example: Testing salary filtering
it('should filter careers by salary range', async (runtime) => {
  const budgetQuery = "careers with salary between 5-10 lakhs";
  const results = await runtime.careerDatabase.searchBySalary(500000, 1000000);

  results.forEach(career => {
    expect(career.averageSalary.entry).toBeGreaterThanOrEqual(500000);
    expect(career.averageSalary.entry).toBeLessThanOrEqual(1000000);
  });
});
```

### Career Data Validation
```typescript
// Validate career data completeness
it('should have complete information for all careers', () => {
  careerDatabase.forEach(career => {
    expect(career.averageSalary).toBeDefined();
    expect(career.education.stream).toHaveLengthGreaterThan(0);
    expect(career.skills).toHaveLengthGreaterThan(0);
    expect(career.pros).toHaveLengthGreaterThan(0);
  });
});
```

## 🔧 Troubleshooting Common Issues

### Test Failures
- **Database Connection**: Ensure PGLite is properly initialized
- **Career Data**: Verify career database is loaded and accessible
- **Response Timeouts**: Check network connectivity and API endpoints
- **Memory Issues**: Monitor heap usage during large dataset tests

### Performance Issues
- **Slow Queries**: Optimize database search algorithms
- **High Memory Usage**: Implement data pagination for large results
- **Network Latency**: Cache frequently accessed career data
- **Concurrent Load**: Implement connection pooling and load balancing

## 📊 Reporting & Analytics

### Test Results Dashboard
- Real-time test execution monitoring
- Performance trend analysis
- Career recommendation accuracy metrics
- User experience satisfaction scores

### Coverage Reports
- Code coverage by component
- Career data completeness metrics
- API endpoint usage statistics
- Error rate and failure analysis

---

## 🤝 Contributing to Tests

### Adding New Career Tests
1. **Identify Test Scenario**: Define specific career guidance use case
2. **Create Test Data**: Add representative student profiles and expected outcomes
3. **Write Test Case**: Implement test logic with proper assertions
4. **Validate Results**: Ensure test passes with current implementation
5. **Update Documentation**: Add test case to this README

### Test Data Management
- **Student Personas**: Create diverse student profiles for comprehensive testing
- **Career Updates**: Keep test data synchronized with main career database
- **Edge Cases**: Include unusual but valid scenarios in test coverage
- **Performance Benchmarks**: Establish and maintain performance standards

---

*For detailed test implementation examples, see the `career-counselor.e2e.ts` file in this directory.*
