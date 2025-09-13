# 🎓 Eliza Career Counselor

<div align="center">

![Eliza Career Counselor](https://img.shields.io/badge/ElizaOS-Career%20Counselor-blue?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

**An AI-powered career guidance system for Indian high school students (grades 11-12)**

[🚀 Live Demo](#) | [📖 Documentation](#documentation) | [💻 Installation](#installation)

### 🖼️ Demo Screenshots

<div align="center">
  <h4>🏥 Healthcare Career - Doctor</h4>
  <img src="demo_doctor.png" alt="Eliza Career Counselor Demo - Doctor Career Information" width="800" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); margin-bottom: 20px;">
  
  <h4>⚖️ Legal Career - Lawyer</h4>
  <img src="demo_lawyer.png" alt="Eliza Career Counselor Demo - Lawyer Career Information" width="800" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
  
  <p><em>Interactive career counseling interface showing detailed career information across different fields</em></p>
</div>

</div>

---

## 📋 Table of Contents

- [🎯 Overview](#-overview)
- [✨ Features](#-features)
- [📚 Available Careers](#-available-careers)
- [🔧 Installation & Setup](#-installation--setup)
- [🚀 Usage](#-usage)
- [🎨 User Interface](#-user-interface)
- [🛠️ API Reference](#️-api-reference)
- [🧪 Testing](#-testing)
- [🏗️ Architecture](#️-architecture)
- [📊 Database Schema](#-database-schema)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [🙏 Acknowledgments](#-acknowledgments)

---

## 🎯 Overview

Eliza Career Counselor is an intelligent AI agent built on ElizaOS that provides personalized career guidance for Indian high school students. The system combines natural language processing with a comprehensive career database to help students make informed decisions about their future.

### 🎓 Target Audience

- **Grade 11-12 Students** in Indian schools
- **Parents & Guardians** seeking career advice
- **Career Counselors** needing data-driven insights
- **Educational Institutions** for student guidance

### 🌟 Key Capabilities

- **25+ Career Options** with detailed information
- **Personalized Recommendations** based on interests and subjects
- **Real-time Salary Data** for Indian job market
- **Educational Pathways** with entrance exams and institutions
- **Lifestyle Insights** including work-life balance and stress levels
- **Interactive Web Interface** with filtering and search capabilities

---

## ✨ Features

### 🤖 AI-Powered Career Counseling

- **Natural Language Processing**: Understands student queries in conversational language
- **Context-Aware Responses**: Remembers conversation history and preferences
- **Personalized Recommendations**: Matches careers to student profiles
- **Follow-up Suggestions**: Provides next steps and additional resources

### 📊 Comprehensive Career Database

- **25+ Career Profiles**: Detailed information for each career path
- **Salary Information**: Entry, mid, and senior level compensation
- **Education Requirements**: Degrees, entrance exams, and institutions
- **Lifestyle Details**: Work hours, stress levels, work-life balance
- **Skills & Competencies**: Required skills and certifications

### 🎨 Interactive User Interface

- **Modern Web Interface**: Built with React and Tailwind CSS
- **Career Browser**: Filter and search through career options
- **Detailed Career Cards**: Comprehensive information display
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Dark Mode Support**: Comfortable viewing in any environment

### 🔍 Smart Filtering System

- **Subject-Based Filtering**: PCM, PCB, Commerce, Arts streams
- **Category-Based Search**: Technology, Healthcare, Engineering, etc.
- **Salary Range Filtering**: Find careers within specific budgets
- **Interest Matching**: Based on student preferences and hobbies

---

## 📚 Available Careers

The system includes comprehensive information for **25+ careers** across various categories:

### 💻 Technology Careers

| Career                | Entry Salary | Mid Salary | Senior Salary | Work-Life Balance |
| --------------------- | ------------ | ---------- | ------------- | ----------------- |
| Software Engineer     | ₹6L          | ₹12L       | ₹25L          | Good              |
| Data Scientist        | ₹8L          | ₹18L       | ₹35L          | Good              |
| Cybersecurity Analyst | ₹5L          | ₹12L       | ₹25L          | Good              |
| UI/UX Designer        | ₹4L          | ₹10L       | ₹25L          | Good              |

### 🏥 Healthcare Careers

| Career                | Entry Salary | Mid Salary | Senior Salary | Work-Life Balance |
| --------------------- | ------------ | ---------- | ------------- | ----------------- |
| Medical Doctor (MBBS) | ₹8L          | ₹18L       | ₹40L          | Poor              |
| Nurse                 | ₹3L          | ₹6L        | ₹12L          | Moderate          |
| Pharmacist            | ₹3L          | ₹6L        | ₹12L          | Excellent         |
| Psychologist          | ₹4L          | ₹9L        | ₹20L          | Good              |

### ⚙️ Engineering Careers

| Career                 | Entry Salary | Mid Salary | Senior Salary | Work-Life Balance |
| ---------------------- | ------------ | ---------- | ------------- | ----------------- |
| Civil Engineer         | ₹4L          | ₹9L        | ₹20L          | Good              |
| Mechanical Engineer    | ₹4L          | ₹9L        | ₹20L          | Good              |
| Electrical Engineer    | ₹4L          | ₹9L        | ₹20L          | Good              |
| Environmental Engineer | ₹4L          | ₹9L        | ₹20L          | Good              |

### 💼 Business & Finance Careers

| Career               | Entry Salary | Mid Salary | Senior Salary | Work-Life Balance |
| -------------------- | ------------ | ---------- | ------------- | ----------------- |
| Chartered Accountant | ₹7L          | ₹15L       | ₹30L          | Moderate          |
| Business Analyst     | ₹5L          | ₹12L       | ₹25L          | Good              |
| Entrepreneur         | ₹1L          | ₹10L       | ₹5Cr          | Poor (initially)  |

### 🎨 Creative & Media Careers

| Career           | Entry Salary | Mid Salary | Senior Salary | Work-Life Balance |
| ---------------- | ------------ | ---------- | ------------- | ----------------- |
| Graphic Designer | ₹3L          | ₹7L        | ₹15L          | Good              |
| Fashion Designer | ₹3L          | ₹8L        | ₹25L          | Good              |
| Content Writer   | ₹3L          | ₹6L        | ₹15L          | Excellent         |
| Journalist       | ₹3L          | ₹6L        | ₹15L          | Moderate          |

### 🌟 Other Popular Careers

| Career           | Entry Salary | Mid Salary | Senior Salary | Work-Life Balance |
| ---------------- | ------------ | ---------- | ------------- | ----------------- |
| Teacher          | ₹3L          | ₹6L        | ₹10L          | Excellent         |
| Hotel Management | ₹3L          | ₹7L        | ₹18L          | Moderate          |
| Pilot            | ₹10L         | ₹30L       | ₹80L          | Poor              |
| Chef             | ₹3L          | ₹8L        | ₹20L          | Poor              |

---

## 🔧 Installation & Setup

### Prerequisites

- **Node.js** 18+ or **Bun** runtime
- **ElizaOS** CLI installed globally
- **Git** for version control

### Quick Start

```bash
# Clone the repository
git clone https://github.com/your-username/eliza-career-counselor.git
cd eliza-career-counselor

# Install dependencies
bun install

# Start development server
elizaos dev

# The application will be available at http://localhost:3000
```

### Manual Setup

```bash
# 1. Create new ElizaOS project
elizaos create -t project eliza-career-counselor
cd eliza-career-counselor

# 2. Install dependencies
bun install

# 3. Copy project files
# Copy src/, package.json, and other configuration files

# 4. Build the project
bun run build

# 5. Start the agent
elizaos start
```

### Environment Configuration

Create a `.env` file with the following variables:

```env
# LLM Provider Configuration (choose one or more)
OPENAI_API_KEY=your_openai_api_key
ANTHROPIC_API_KEY=your_anthropic_api_key
GOOGLE_GENERATIVE_AI_API_KEY=your_google_api_key

# Optional: Platform integrations
DISCORD_API_TOKEN=your_discord_token
TELEGRAM_BOT_TOKEN=your_telegram_token

# Database Configuration (if using external database)
DATABASE_URL=postgresql://user:password@localhost:5432/career_db
```

---

## 🚀 Usage

### 💬 Interacting with the Career Counselor

The Eliza Career Counselor understands natural language queries. Here are some example conversations:

#### Basic Career Exploration

```
Student: I'm in 12th PCM and interested in technology. What careers should I consider?

Eliza: Great! With your PCM background and technology interest, here are excellent options:
• Software Engineer (₹6-25 lakh/year) - High demand, good work-life balance
• Data Scientist (₹8-35 lakh/year) - Growing field with great salary potential
• Cybersecurity Analyst (₹5-25 lakh/year) - Critical field with job security
```

#### Detailed Career Information

```
Student: Tell me about being a software engineer

Eliza: Software Engineering is an excellent career choice! Here's the complete breakdown:

💰 Salary Information:
• Entry Level: ₹6,00,000/year
• Mid Level: ₹12,00,000/year
• Senior Level: ₹25,00,000/year

🏠 Lifestyle & Work Environment:
• Working Hours: 40-50 hours/week
• Work Environment: Office-based, tech companies, startups
• Work-Life Balance: Good
• Remote Work: Available

🎓 Education Requirements:
• Degree: B.Tech/B.E. in Computer Science/IT
• Entrance Exams: JEE Main/Advanced, BITSAT, VITEEE
• Top Institutions: IITs, NITs, BITS Pilani, IIITs
• Duration: 4 years
```

#### Career Comparison

```
Student: Compare software engineer vs doctor careers

Eliza: Here's a detailed comparison between Software Engineer and Medical Doctor (MBBS) careers:

| Aspect | Software Engineer | Medical Doctor |
|--------|------------------|----------------|
| Entry Salary | ₹6,00,000 | ₹8,00,000 |
| Education Duration | 4 years | 5.5 years |
| Work-Life Balance | Good | Poor |
| Stress Level | Medium | High |
| Job Outlook | High Demand | Stable |

**Software Engineer Best For:**
• Analytical thinkers, problem solvers
• Those who enjoy continuous learning
• People who prefer regular hours

**Medical Doctor Best For:**
• Compassionate individuals who want to help others
• Those willing to handle high stress and long training
• People passionate about healthcare and science
```

#### Subject-Based Recommendations

```
Student: I'm taking PCB in 12th. What are my career options?

Eliza: With PCB (Physics, Chemistry, Biology) stream, you have excellent options in healthcare and life sciences:

🏥 Healthcare Careers:
• Medical Doctor (MBBS) - ₹8-40 lakh/year
• Nurse - ₹3-12 lakh/year
• Pharmacist - ₹3-12 lakh/year
• Psychologist - ₹4-20 lakh/year

🔬 Science Careers:
• Biotechnology - ₹4-15 lakh/year
• Research Scientist - ₹5-20 lakh/year
• Environmental Scientist - ₹4-12 lakh/year
```

### 🎯 Advanced Queries

The system supports various types of queries:

- **Interest-based**: "careers in technology", "creative careers"
- **Subject-based**: "careers for PCM students", "options with commerce"
- **Salary-based**: "careers with salary 5-10 lakh"
- **Lifestyle-based**: "careers with good work-life balance"
- **Comparison**: "compare engineering vs medical"

---

## 🎨 User Interface

### 🏠 Dashboard

- **Career Statistics**: Total careers, categories, salary ranges
- **Quick Filters**: Popular searches and recommendations
- **Recent Searches**: History of user interactions

### 🔍 Career Browser

- **Search Functionality**: Find careers by name or keywords
- **Category Filters**: Technology, Healthcare, Engineering, etc.
- **Stream Filters**: PCM, PCB, Commerce, Arts
- **Salary Range Slider**: Filter by compensation expectations

### 📋 Career Detail View

- **Comprehensive Information**: Salary, lifestyle, education
- **Interactive Elements**: Expandable sections, comparison tools
- **Action Buttons**: Save career, get recommendations, share

### 📱 Responsive Design

- **Mobile-First**: Optimized for smartphones and tablets
- **Progressive Web App**: Installable on mobile devices
- **Offline Support**: Core functionality works without internet

---

## 🛠️ API Reference

### Career Database API

#### Get All Careers

```typescript
import { careerDatabase } from "./src/career-database";

const allCareers = careerDatabase;
// Returns: CareerOption[]
```

#### Search Careers

```typescript
import { searchCareers } from "./src/career-database";

const results = searchCareers("engineer");
// Returns: CareerOption[]
```

#### Filter by Category

```typescript
import { getCareersByCategory } from "./src/career-database";

const techCareers = getCareersByCategory("Technology");
// Returns: CareerOption[]
```

#### Filter by Stream

```typescript
import { getCareersByStream } from "./src/career-database";

const pcmCareers = getCareersByStream("PCM");
// Returns: CareerOption[]
```

#### Filter by Salary Range

```typescript
import { getCareersBySalaryRange } from "./src/career-database";

const affordableCareers = getCareersBySalaryRange(500000, 1000000);
// Returns: CareerOption[]
```

### Agent Actions API

#### Get Career Recommendations

```typescript
// Action: GET_CAREER_RECOMMENDATIONS
// Trigger: "career suggestions", "what careers should I consider"

// Example query:
// "I'm in 12th PCM and interested in technology. What careers should I consider?"
```

#### Get Career Details

```typescript
// Action: GET_CAREER_DETAILS
// Trigger: "tell me about", "what is", "career information for"

// Example query:
// "Tell me about being a software engineer"
```

#### Compare Careers

```typescript
// Action: COMPARE_CAREERS
// Trigger: "compare careers", "which is better", "versus"

// Example query:
// "Compare software engineer vs doctor"
```

#### Get Careers by Category

```typescript
// Action: GET_CAREERS_BY_CATEGORY
// Trigger: "careers in", "jobs in", "options in"

// Example query:
// "What are the careers in technology?"
```

---

## 🧪 Testing

The project includes comprehensive testing coverage:

### Test Structure

```
src/__tests__/
├── *.test.ts              # Component tests
├── career-database.test.ts # Database functionality tests
├── career-actions.test.ts  # Action handler tests
├── career-integration.test.ts # Integration tests
├── e2e/
│   ├── project-starter.e2e.ts
│   └── README.md
└── utils/
    └── core-test-utils.ts
```

### Running Tests

```bash
# Run all tests
elizaos test

# Run component tests only (fast)
bun test

# Run E2E tests only (comprehensive)
elizaos test --type e2e

# Run with coverage
bun test --coverage
```

### Test Categories

#### Component Tests

- **Database Tests**: Career data validation, search functions
- **Action Tests**: Handler validation, response formatting
- **Integration Tests**: Component interaction testing

#### E2E Tests

- **User Scenarios**: Complete career counseling workflows
- **Agent Responses**: Natural language processing validation
- **Database Integration**: Real database operations
- **UI Interactions**: Frontend functionality testing

---

## 🏗️ Architecture

### System Overview

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   User Interface│    │  ElizaOS Agent   │    │ Career Database │
│   (React + TS)  │◄──►│  (NLP Engine)    │◄──►│  (JSON Store)   │
└─────────────────┘    └──────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│  Career Actions │    │  Action Handlers │    │   Data Models   │
│  (Recommendations│    │  (Business Logic)│    │  (TypeScript)  │
│   Details, etc.) │    │                  │    │                 │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

### Core Components

#### 1. Career Database (`src/career-database.ts`)

- **Purpose**: Centralized storage for career information
- **Structure**: TypeScript interfaces and data arrays
- **Functions**: Search, filter, and retrieval operations

#### 2. Career Actions (`src/actions/career-actions.ts`)

- **Purpose**: Handle user queries and generate responses
- **Types**: GET_CAREER_RECOMMENDATIONS, GET_CAREER_DETAILS, etc.
- **Logic**: Natural language processing and data formatting

#### 3. Character Configuration (`src/character.ts`)

- **Purpose**: Define Eliza Career Counselor's personality and capabilities
- **Configuration**: System prompts, conversation examples, topics
- **Plugins**: Integration with career counseling plugin

#### 4. Frontend Interface (`src/frontend/`)

- **Purpose**: User-friendly web interface for career exploration
- **Technology**: React with TypeScript and Tailwind CSS
- **Features**: Search, filtering, detailed career views

#### 5. Plugin System (`src/plugin.ts`)

- **Purpose**: Integrate career counseling into ElizaOS framework
- **Actions**: Register career-related actions and handlers
- **Services**: Manage plugin lifecycle and dependencies

### Data Flow

1. **User Query** → Frontend Interface
2. **Query Processing** → ElizaOS Agent (NLP)
3. **Action Selection** → Career Actions Handler
4. **Data Retrieval** → Career Database
5. **Response Generation** → Formatted Career Information
6. **Display** → User Interface

---

## 📊 Database Schema

### CareerOption Interface

```typescript
interface CareerOption {
  id: string; // Unique identifier
  name: string; // Career name
  category: string; // Career category
  description: string; // Brief description

  averageSalary: {
    entry: number; // Entry-level salary (₹)
    mid: number; // Mid-level salary (₹)
    senior: number; // Senior-level salary (₹)
  };

  lifestyle: {
    workHours: string; // Typical working hours
    workEnvironment: string; // Work setting description
    stressLevel: "Low" | "Medium" | "High";
    workLifeBalance: "Poor" | "Moderate" | "Good" | "Excellent";
    travelRequired: boolean; // Travel requirements
    remoteWork: boolean; // Remote work availability
  };

  education: {
    stream: string[]; // Compatible streams (PCM, PCB, etc.)
    degree: string; // Required degree
    entranceExams: string[]; // Entrance examinations
    topInstitutions: string[]; // Recommended institutions
    duration: string; // Course duration
  };

  skills: string[]; // Required skills
  jobOutlook: "Stable" | "Growing" | "High Demand";
  pros: string[]; // Career advantages
  cons: string[]; // Career challenges
  suitableFor: string[]; // Personality/career matches
  alternatives: string[]; // Alternative career options
}
```

### Sample Career Entry

```json
{
  "id": "software-engineer",
  "name": "Software Engineer",
  "category": "Technology",
  "description": "Design, develop, and maintain software applications...",
  "averageSalary": {
    "entry": 600000,
    "mid": 1200000,
    "senior": 2500000
  },
  "lifestyle": {
    "workHours": "40-50 hours/week",
    "workEnvironment": "Office-based, tech companies, startups",
    "stressLevel": "Medium",
    "workLifeBalance": "Good",
    "travelRequired": false,
    "remoteWork": true
  },
  "education": {
    "stream": ["PCM", "PCMB"],
    "degree": "B.Tech/B.E. in Computer Science/IT",
    "entranceExams": ["JEE Main/Advanced", "BITSAT", "VITEEE"],
    "topInstitutions": ["IITs", "NITs", "BITS Pilani", "IIITs"],
    "duration": "4 years"
  },
  "skills": ["Programming", "Data Structures", "Algorithms"],
  "jobOutlook": "High Demand",
  "pros": ["High salary", "Good work-life balance"],
  "cons": ["Continuous learning", "Deadline pressure"],
  "suitableFor": ["Problem solvers", "Tech enthusiasts"],
  "alternatives": ["Data Scientist", "UI/UX Designer"]
}
```

---

## 🤝 Contributing

We welcome contributions to improve the Eliza Career Counselor! Here's how you can help:

### Development Setup

```bash
# Fork the repository
git clone https://github.com/your-username/eliza-career-counselor.git
cd eliza-career-counselor

# Create feature branch
git checkout -b feature/new-career-option

# Install dependencies
bun install

# Start development
elizaos dev
```

### Adding New Careers

1. **Update Database**: Add new career to `src/career-database.ts`
2. **Add Tests**: Create tests in `src/__tests__/career-database.test.ts`
3. **Update Documentation**: Add career to README.md
4. **Test Integration**: Ensure career appears in search and filtering

### Code Standards

- **TypeScript**: Strict type checking enabled
- **Testing**: 80%+ code coverage required
- **Documentation**: JSDoc comments for all public functions
- **Linting**: ESLint configuration enforced

### Pull Request Process

1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes with tests
4. **Ensure** all tests pass
5. **Update** documentation if needed
6. **Submit** a pull request with description

### Areas for Contribution

- **New Career Options**: Add more career paths and update salary data
- **Enhanced Filtering**: Improve search and recommendation algorithms
- **UI Improvements**: Better user interface and user experience
- **Internationalization**: Support for multiple languages
- **Analytics**: Career trend analysis and market insights
- **Integration**: Connect with job portals and educational platforms

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

### Core Technologies

- **ElizaOS**: The AI agent framework powering this application
- **React**: Frontend user interface library
- **TypeScript**: Type-safe JavaScript development
- **Tailwind CSS**: Utility-first CSS framework
- **Bun**: Fast JavaScript runtime and package manager

### Data Sources

- **Official Salary Surveys**: Glassdoor, Indeed, Naukri.com
- **Government Reports**: Ministry of Education, Skill India
- **Industry Research**: NASSCOM, FICCI, ASSOCHAM
- **Educational Institutions**: IITs, NITs, IIMs, AIIMS

### Contributors

- **Project Lead**: Career counseling expertise and content creation
- **Technical Team**: Full-stack development and AI integration
- **UX Designers**: User interface and experience design
- **Quality Assurance**: Testing and validation
- **Content Writers**: Career descriptions and educational content

### Special Thanks

- **Indian Education System**: For providing the framework and context
- **Career Counselors**: For insights into student needs and challenges
- **Open Source Community**: For tools and libraries that made this possible

---

<div align="center">

**Made with ❤️ for Indian students exploring their career paths**

[⭐ Star us on GitHub](https://github.com/your-username/eliza-career-counselor) | [🐛 Report Issues](https://github.com/your-username/eliza-career-counselor/issues) | [📧 Contact Us](mailto:contact@eliza-career-counselor.com)

</div>
