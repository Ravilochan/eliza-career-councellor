# Eliza Career Counselor

An AI-powered career guidance system for Indian high school students (grades 11-12) built with ElizaOS. This agent helps students explore career options, understand salary expectations, lifestyle implications, and educational pathways tailored to the Indian education system.

## Features

### Career Counseling Capabilities

- **25+ Career Options**: Comprehensive database covering Technology, Healthcare, Engineering, Business, Creative, and more
- **Personalized Recommendations**: Based on student interests, subjects (PCM/PCB/Commerce/Arts), and preferences
- **Salary Information**: Current Indian market salaries with entry, mid, and senior level ranges
- **Lifestyle Insights**: Work-life balance, stress levels, remote work options, and work environment details
- **Education Pathways**: Entrance exams, top institutions, duration, and stream compatibility
- **Interactive Frontend**: Modern UI for browsing careers with filtering and detailed views

### Technical Features

- ElizaOS-powered AI agent with natural language processing
- Career matching algorithms based on student profiles
- Comprehensive career database with real-time updates
- Interactive web interface with career exploration tools
- RESTful API endpoints for career information
- TypeScript implementation with full type safety

## Available Career Options

The system includes comprehensive information for 25+ careers across various categories:

### Technology Careers

- Software Engineer (₹6-25 lakh/year)
- Data Scientist (₹8-35 lakh/year)
- Cybersecurity Analyst (₹5-25 lakh/year)
- UI/UX Designer (₹4-25 lakh/year)

### Healthcare Careers

- Medical Doctor (MBBS) (₹8-40 lakh/year)
- Nurse (₹3-12 lakh/year)
- Pharmacist (₹3-12 lakh/year)
- Psychologist (₹4-20 lakh/year)

### Engineering Careers

- Civil Engineer (₹4-20 lakh/year)
- Mechanical Engineer (₹4-20 lakh/year)
- Electrical Engineer (₹4-20 lakh/year)
- Environmental Engineer (₹4-20 lakh/year)

### Business & Finance Careers

- Chartered Accountant (₹7-30 lakh/year)
- Business Analyst (₹5-25 lakh/year)
- Entrepreneur (₹1 lakh-5 crore/year)

### Creative & Media Careers

- Graphic Designer (₹3-15 lakh/year)
- Fashion Designer (₹3-25 lakh/year)
- Content Writer (₹3-15 lakh/year)
- Journalist (₹3-15 lakh/year)

### Other Popular Careers

- Teacher (₹3-10 lakh/year)
- Hotel Management (₹3-18 lakh/year)
- Pilot (₹10-80 lakh/year)
- Chef (₹3-20 lakh/year)

## Getting Started

```bash
# Create a new project
elizaos create -t project my-project
# Dependencies are automatically installed and built

# Navigate to the project directory
cd my-project

# Start development immediately
elizaos dev
```

## Development

```bash
# Start development with hot-reloading (recommended)
elizaos dev

# OR start without hot-reloading
elizaos start
# Note: When using 'start', you need to rebuild after changes:
# bun run build

# Test the project
elizaos test
```

## Testing

ElizaOS employs a dual testing strategy:

1. **Component Tests** (`src/__tests__/*.test.ts`)

   - Run with Bun's native test runner
   - Fast, isolated tests using mocks
   - Perfect for TDD and component logic

2. **E2E Tests** (`src/__tests__/e2e/*.e2e.ts`)
   - Run with ElizaOS custom test runner
   - Real runtime with actual database (PGLite)
   - Test complete user scenarios

### Test Structure

```
src/
  __tests__/              # All tests live inside src
    *.test.ts            # Component tests (use Bun test runner)
    e2e/                 # E2E tests (use ElizaOS test runner)
      project-starter.e2e.ts  # E2E test suite
      README.md          # E2E testing documentation
  index.ts               # Export tests here: tests: [ProjectStarterTestSuite]
```

### Running Tests

- `elizaos test` - Run all tests (component + e2e)
- `elizaos test component` - Run only component tests
- `elizaos test e2e` - Run only E2E tests

### Writing Tests

Component tests use bun:test:

```typescript
// Unit test example (__tests__/config.test.ts)
describe("Configuration", () => {
  it("should load configuration correctly", () => {
    expect(config.debug).toBeDefined();
  });
});

// Integration test example (__tests__/integration.test.ts)
describe("Integration: Plugin with Character", () => {
  it("should initialize character with plugins", async () => {
    // Test interactions between components
  });
});
```

E2E tests use ElizaOS test interface:

```typescript
// E2E test example (e2e/project.test.ts)
export class ProjectTestSuite implements TestSuite {
  name = "project_test_suite";
  tests = [
    {
      name: "project_initialization",
      fn: async (runtime) => {
        // Test project in a real runtime
      },
    },
  ];
}

export default new ProjectTestSuite();
```

The test utilities in `__tests__/utils/` provide helper functions to simplify writing tests.

## Configuration

Customize your project by modifying:

- `src/index.ts` - Main entry point
- `src/character.ts` - Character definition
