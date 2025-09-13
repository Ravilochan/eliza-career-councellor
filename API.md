# 🔌 Eliza Career Counselor API Documentation

This document provides comprehensive API documentation for the Eliza Career Counselor system, including all available endpoints, data structures, and integration examples.

## 📋 Table of Contents

- [Overview](#overview)
- [Authentication](#authentication)
- [Core API Endpoints](#core-api-endpoints)
- [Career Database API](#career-database-api)
- [Agent Interaction API](#agent-interaction-api)
- [Data Models](#data-models)
- [Error Handling](#error-handling)
- [Rate Limiting](#rate-limiting)
- [SDK & Libraries](#sdk--libraries)
- [Integration Examples](#integration-examples)

---

## 🎯 Overview

The Eliza Career Counselor API provides programmatic access to career guidance functionality, enabling developers to integrate career counseling capabilities into their applications, websites, and services.

### Base URL
```
https://api.eliza-career-counselor.com/v1
```

### Content Type
```
Content-Type: application/json
Accept: application/json
```

### API Versions
- **v1** (Current): Stable production API
- **v2** (Beta): Next-generation API with enhanced features

---

## 🔐 Authentication

### API Key Authentication

Include your API key in the request header:

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
     -H "Content-Type: application/json" \
     https://api.eliza-career-counselor.com/v1/careers
```

### Getting an API Key

1. **Register**: Create an account at [eliza-career-counselor.com](https://eliza-career-counselor.com)
2. **Generate Key**: Access your dashboard to generate an API key
3. **Configure**: Store securely and include in all API requests

### Rate Limits
- **Free Tier**: 100 requests/hour
- **Pro Tier**: 1,000 requests/hour
- **Enterprise**: 10,000 requests/hour

---

## 🎯 Core API Endpoints

### Health Check
```http
GET /health
```

**Response:**
```json
{
  "status": "healthy",
  "version": "1.0.0",
  "timestamp": "2024-01-15T10:30:00Z",
  "services": {
    "database": "connected",
    "agent": "ready",
    "cache": "active"
  }
}
```

### Service Status
```http
GET /status
```

**Response:**
```json
{
  "uptime": "7d 4h 23m",
  "totalCareers": 25,
  "totalQueries": 15420,
  "activeUsers": 234,
  "systemLoad": 0.67
}
```

---

## 📊 Career Database API

### Get All Careers
```http
GET /careers
```

**Parameters:**
- `limit` (optional): Number of careers to return (default: 25, max: 100)
- `offset` (optional): Pagination offset (default: 0)
- `category` (optional): Filter by category
- `stream` (optional): Filter by education stream
- `minSalary` (optional): Minimum entry salary filter
- `maxSalary` (optional): Maximum entry salary filter

**Example Request:**
```bash
curl "https://api.eliza-career-counselor.com/v1/careers?category=technology&limit=5"
```

**Response:**
```json
{
  "careers": [
    {
      "id": "software-engineer",
      "name": "Software Engineer",
      "category": "Technology",
      "description": "Design, develop, and maintain software applications...",
      "averageSalary": {
        "entry": 600000,
        "mid": 1200000,
        "senior": 2500000
      }
    }
  ],
  "total": 25,
  "limit": 5,
  "offset": 0,
  "hasMore": true
}
```

### Get Career by ID
```http
GET /careers/{careerId}
```

**Example Request:**
```bash
curl https://api.eliza-career-counselor.com/v1/careers/software-engineer
```

**Response:**
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
  "skills": [
    "Programming (Java/Python/C++)",
    "Data Structures",
    "Algorithms",
    "Database Management",
    "Version Control"
  ],
  "jobOutlook": "High Demand",
  "pros": [
    "High salary potential",
    "Remote work options",
    "Continuous learning",
    "Job security",
    "Creative problem-solving"
  ],
  "cons": [
    "Competitive field",
    "Continuous learning required",
    "Sedentary work",
    "Deadline pressure"
  ],
  "suitableFor": [
    "Problem solvers",
    "Tech enthusiasts",
    "Analytical thinkers"
  ],
  "alternatives": [
    "Data Scientist",
    "UI/UX Designer",
    "System Administrator"
  ]
}
```

### Search Careers
```http
GET /careers/search
```

**Parameters:**
- `q` (required): Search query string
- `category` (optional): Filter by category
- `stream` (optional): Filter by education stream
- `limit` (optional): Number of results (default: 10, max: 50)

**Example Request:**
```bash
curl "https://api.eliza-career-counselor.com/v1/careers/search?q=engineer&category=technology"
```

**Response:**
```json
{
  "query": "engineer",
  "results": [
    {
      "id": "software-engineer",
      "name": "Software Engineer",
      "category": "Technology",
      "relevanceScore": 0.95,
      "matchedFields": ["name", "description", "skills"]
    },
    {
      "id": "civil-engineer",
      "name": "Civil Engineer",
      "category": "Engineering",
      "relevanceScore": 0.87,
      "matchedFields": ["name", "description"]
    }
  ],
  "total": 8,
  "searchTime": 45
}
```

### Get Career Recommendations
```http
POST /careers/recommendations
```

**Request Body:**
```json
{
  "studentProfile": {
    "grade": 12,
    "stream": "PCM",
    "interests": ["technology", "problem-solving"],
    "preferredSalaryRange": {
      "min": 500000,
      "max": 2000000
    },
    "workPreferences": {
      "remoteWork": true,
      "workLifeBalance": "Good"
    }
  },
  "limit": 5
}
```

**Response:**
```json
{
  "recommendations": [
    {
      "career": {
        "id": "software-engineer",
        "name": "Software Engineer",
        "category": "Technology"
      },
      "matchScore": 0.92,
      "matchReasons": [
        "Strong alignment with PCM stream",
        "Matches technology interest",
        "Good work-life balance",
        "Salary within preferred range"
      ],
      "alternatives": ["data-scientist", "ui-ux-designer"]
    }
  ],
  "profile": {
    "streamCompatibility": "High",
    "interestAlignment": "Excellent",
    "salaryFit": "Good"
  }
}
```

### Compare Careers
```http
POST /careers/compare
```

**Request Body:**
```json
{
  "careers": ["software-engineer", "data-scientist", "doctor-mbbs"],
  "comparisonCriteria": ["salary", "education", "lifestyle", "jobOutlook"]
}
```

**Response:**
```json
{
  "comparison": {
    "careers": [
      {
        "id": "software-engineer",
        "name": "Software Engineer",
        "data": {
          "salary": { "entry": 600000, "mid": 1200000, "senior": 2500000 },
          "education": { "duration": "4 years", "difficulty": "Medium" },
          "lifestyle": { "workLifeBalance": "Good", "stressLevel": "Medium" },
          "jobOutlook": "High Demand"
        }
      }
    ],
    "summary": {
      "bestFor": {
        "salary": "software-engineer",
        "workLifeBalance": "data-scientist",
        "jobSecurity": "doctor-mbbs"
      },
      "recommendation": "Consider Software Engineer for high salary potential with good work-life balance"
    }
  }
}
```

### Get Career Statistics
```http
GET /careers/statistics
```

**Response:**
```json
{
  "totalCareers": 25,
  "categories": {
    "Technology": 4,
    "Healthcare": 4,
    "Engineering": 5,
    "Business": 3,
    "Creative": 4,
    "Education": 1,
    "Hospitality": 2,
    "Sports": 1,
    "Legal": 1
  },
  "salaryRanges": {
    "under5L": 8,
    "5to10L": 10,
    "10to20L": 5,
    "above20L": 2
  },
  "educationStreams": {
    "PCM": 12,
    "PCB": 8,
    "Commerce": 6,
    "Arts": 4,
    "All": 3
  },
  "workLifeBalance": {
    "Excellent": 4,
    "Good": 12,
    "Moderate": 6,
    "Poor": 3
  }
}
```

---

## 🤖 Agent Interaction API

### Chat with Career Counselor
```http
POST /agent/chat
```

**Request Body:**
```json
{
  "message": "I'm in 12th PCM and interested in technology. What careers should I consider?",
  "context": {
    "grade": 12,
    "stream": "PCM",
    "previousMessages": []
  },
  "preferences": {
    "responseStyle": "detailed",
    "includeSalary": true,
    "includeEducation": true
  }
}
```

**Response:**
```json
{
  "message": {
    "id": "msg_12345",
    "content": "Great! With your PCM background and technology interest, here are excellent options:\n\n1. **Software Engineer** (₹6-25 lakh/year)\n   • High demand field with good work-life balance\n   • Remote work opportunities available\n   • Strong growth potential\n\n2. **Data Scientist** (₹8-35 lakh/year)\n   • Growing field with excellent salary potential\n   • Combines mathematics and technology\n   • High job satisfaction\n\n3. **Cybersecurity Analyst** (₹5-25 lakh/year)\n   • Critical field addressing growing cyber threats\n   • Good work-life balance\n   • Strong job security",
    "timestamp": "2024-01-15T10:30:00Z"
  },
  "careers": [
    {
      "id": "software-engineer",
      "name": "Software Engineer",
      "relevanceScore": 0.95
    }
  ],
  "suggestions": [
    "Tell me about Software Engineer",
    "Compare Software Engineer vs Data Scientist",
    "What skills do I need for Software Engineering?"
  ]
}
```

### Get Career Counseling Session
```http
POST /agent/session
```

**Request Body:**
```json
{
  "studentProfile": {
    "name": "Rahul Kumar",
    "grade": 12,
    "stream": "PCM",
    "interests": ["technology", "gaming"],
    "careerGoals": "High salary with work-life balance",
    "location": "Mumbai"
  },
  "sessionType": "comprehensive",
  "duration": 30
}
```

**Response:**
```json
{
  "sessionId": "session_abc123",
  "studentProfile": {
    "id": "profile_xyz789",
    "assessmentComplete": true,
    "strengths": ["Technical aptitude", "Problem-solving", "Mathematics"],
    "areasOfInterest": ["Technology", "Engineering", "Gaming"]
  },
  "initialRecommendations": [
    {
      "career": "software-engineer",
      "confidence": 0.92,
      "rationale": "Strong alignment with technical interests and PCM background"
    }
  ],
  "nextSteps": [
    "Explore Software Engineering in detail",
    "Research entrance exams (JEE)",
    "Consider coding bootcamps",
    "Talk to current software engineers"
  ]
}
```

### Get Personalized Career Plan
```http
POST /agent/career-plan
```

**Request Body:**
```json
{
  "studentProfile": {
    "grade": 12,
    "stream": "PCM",
    "targetScore": 85,
    "preferredCareers": ["software-engineer", "data-scientist"],
    "timeline": "3 years"
  },
  "include": ["education", "skills", "experience", "networking"]
}
```

**Response:**
```json
{
  "careerPlan": {
    "primaryCareer": "software-engineer",
    "timeline": {
      "year1": {
        "focus": "Foundation building",
        "actions": [
          "Complete 12th with strong PCM performance",
          "Start learning programming basics",
          "Take JEE preparation seriously"
        ]
      },
      "year2-3": {
        "focus": "Higher education and skill development",
        "actions": [
          "Pursue B.Tech in Computer Science",
          "Build portfolio with personal projects",
          "Learn advanced programming languages",
          "Gain internship experience"
        ]
      }
    },
    "skillDevelopment": {
      "technical": ["JavaScript", "Python", "Data Structures"],
      "soft": ["Communication", "Problem-solving", "Teamwork"],
      "certifications": ["AWS Certified Developer", "Google IT Support"]
    },
    "milestones": [
      {
        "title": "Complete 12th Board Exams",
        "targetDate": "2024-03-31",
        "status": "pending"
      }
    ]
  }
}
```

---

## 📋 Data Models

### CareerOption
```typescript
interface CareerOption {
  id: string;                    // Unique identifier
  name: string;                  // Career name
  category: string;              // Career category
  description: string;           // Brief description

  averageSalary: {
    entry: number;              // Entry-level salary (₹)
    mid: number;                // Mid-level salary (₹)
    senior: number;             // Senior-level salary (₹)
  };

  lifestyle: {
    workHours: string;          // Typical working hours
    workEnvironment: string;    // Work setting description
    stressLevel: 'Low' | 'Medium' | 'High';
    workLifeBalance: 'Poor' | 'Moderate' | 'Good' | 'Excellent';
    travelRequired: boolean;    // Travel requirements
    remoteWork: boolean;        // Remote work availability
  };

  education: {
    stream: string[];           // Compatible streams (PCM, PCB, etc.)
    degree: string;             // Required degree
    entranceExams: string[];    // Entrance examinations
    topInstitutions: string[];  // Recommended institutions
    duration: string;           // Course duration
  };

  skills: string[];             // Required skills
  jobOutlook: 'Stable' | 'Growing' | 'High Demand';
  pros: string[];               // Career advantages
  cons: string[];               // Career challenges
  suitableFor: string[];        // Personality/career matches
  alternatives: string[];       // Alternative career options
}
```

### StudentProfile
```typescript
interface StudentProfile {
  grade: number;                // Current grade (11 or 12)
  stream: string;               // Education stream (PCM, PCB, etc.)
  interests: string[];          // Student interests
  preferredSalaryRange?: {
    min: number;
    max: number;
  };
  workPreferences?: {
    remoteWork?: boolean;
    workLifeBalance?: 'Poor' | 'Moderate' | 'Good' | 'Excellent';
    location?: string;
  };
  targetScore?: number;          // Target board exam percentage
}
```

### APIResponse
```typescript
interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
  meta?: {
    requestId: string;
    timestamp: string;
    version: string;
  };
}
```

---

## ❌ Error Handling

### Error Response Format
```json
{
  "success": false,
  "error": {
    "code": "CAREER_NOT_FOUND",
    "message": "The requested career could not be found",
    "details": {
      "careerId": "invalid-career-id",
      "availableCareers": ["software-engineer", "data-scientist"]
    }
  },
  "meta": {
    "requestId": "req_12345",
    "timestamp": "2024-01-15T10:30:00Z",
    "version": "v1"
  }
}
```

### Common Error Codes

| Error Code | HTTP Status | Description |
|------------|-------------|-------------|
| `INVALID_API_KEY` | 401 | Invalid or missing API key |
| `RATE_LIMIT_EXCEEDED` | 429 | API rate limit exceeded |
| `CAREER_NOT_FOUND` | 404 | Requested career not found |
| `INVALID_PARAMETERS` | 400 | Invalid request parameters |
| `SERVICE_UNAVAILABLE` | 503 | Service temporarily unavailable |
| `INTERNAL_ERROR` | 500 | Internal server error |

### Handling Rate Limits
```javascript
// Example: Retry with exponential backoff
async function makeRequest(url, options, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url, options);
      if (response.status === 429) {
        const retryAfter = response.headers.get('Retry-After') || Math.pow(2, i);
        await new Promise(resolve => setTimeout(resolve, retryAfter * 1000));
        continue;
      }
      return response;
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
    }
  }
}
```

---

## 🕒 Rate Limiting

### Rate Limit Headers
```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1640995200
X-RateLimit-Retry-After: 60
```

### Rate Limit Response
```json
{
  "success": false,
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "API rate limit exceeded",
    "details": {
      "limit": 1000,
      "remaining": 0,
      "resetTime": "2024-01-15T11:00:00Z",
      "retryAfter": 3540
    }
  }
}
```

---

## 📚 SDK & Libraries

### JavaScript/TypeScript SDK
```bash
npm install eliza-career-counselor-sdk
```

```javascript
import { CareerCounselor } from 'eliza-career-counselor-sdk';

const counselor = new CareerCounselor({
  apiKey: 'your-api-key'
});

// Get career recommendations
const recommendations = await counselor.getRecommendations({
  grade: 12,
  stream: 'PCM',
  interests: ['technology']
});

// Search careers
const searchResults = await counselor.searchCareers('engineer');

// Get detailed career information
const careerDetails = await counselor.getCareerDetails('software-engineer');
```

### Python SDK
```bash
pip install eliza-career-counselor
```

```python
from eliza_career_counselor import CareerCounselor

counselor = CareerCounselor(api_key='your-api-key')

# Get recommendations
recommendations = counselor.get_recommendations(
    grade=12,
    stream='PCM',
    interests=['technology']
)

# Search careers
results = counselor.search_careers('engineer')
```

### React Hook
```bash
npm install @eliza-career-counselor/react
```

```jsx
import { useCareerCounselor } from '@eliza-career-counselor/react';

function CareerExplorer() {
  const { careers, loading, error } = useCareerCounselor({
    apiKey: 'your-api-key'
  });

  if (loading) return <div>Loading careers...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {careers.map(career => (
        <div key={career.id}>
          <h3>{career.name}</h3>
          <p>{career.description}</p>
        </div>
      ))}
    </div>
  );
}
```

---

## 🔗 Integration Examples

### Web Application Integration
```javascript
// career-service.js
class CareerService {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.eliza-career-counselor.com/v1';
  }

  async getRecommendations(studentProfile) {
    const response = await fetch(`${this.baseUrl}/careers/recommendations`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ studentProfile })
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    return await response.json();
  }

  async searchCareers(query, filters = {}) {
    const params = new URLSearchParams({ q: query, ...filters });
    const response = await fetch(
      `${this.baseUrl}/careers/search?${params}`,
      {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`
        }
      }
    );

    return await response.json();
  }
}

// Usage in React component
import { CareerService } from './career-service';

function CareerRecommendations({ studentProfile }) {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const service = new CareerService(process.env.REACT_APP_API_KEY);

    service.getRecommendations(studentProfile)
      .then(data => {
        setRecommendations(data.recommendations);
        setLoading(false);
      })
      .catch(error => {
        console.error('Failed to get recommendations:', error);
        setLoading(false);
      });
  }, [studentProfile]);

  return (
    <div>
      {loading ? (
        <div>Loading recommendations...</div>
      ) : (
        <div>
          {recommendations.map(rec => (
            <CareerCard key={rec.career.id} career={rec.career} />
          ))}
        </div>
      )}
    </div>
  );
}
```

### Mobile App Integration (React Native)
```javascript
// services/CareerService.js
import AsyncStorage from '@react-native-async-storage/async-storage';

class CareerService {
  constructor() {
    this.apiKey = null;
    this.baseUrl = 'https://api.eliza-career-counselor.com/v1';
  }

  async initialize() {
    this.apiKey = await AsyncStorage.getItem('apiKey');
  }

  async getStoredRecommendations() {
    try {
      const stored = await AsyncStorage.getItem('career_recommendations');
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error('Failed to get stored recommendations:', error);
      return null;
    }
  }

  async fetchRecommendations(studentProfile) {
    const response = await fetch(`${this.baseUrl}/careers/recommendations`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ studentProfile })
    });

    const data = await response.json();

    // Cache recommendations
    await AsyncStorage.setItem('career_recommendations', JSON.stringify(data));

    return data;
  }

  async getRecommendations(studentProfile, useCache = true) {
    if (useCache) {
      const cached = await this.getStoredRecommendations();
      if (cached) return cached;
    }

    return await this.fetchRecommendations(studentProfile);
  }
}
```

### Educational Platform Integration
```javascript
// integration/ElizaCareerCounselor.js
class ElizaCareerIntegration {
  constructor(config) {
    this.apiKey = config.apiKey;
    this.schoolId = config.schoolId;
    this.webhookUrl = config.webhookUrl;
  }

  // Sync student data with career counselor
  async syncStudents(students) {
    const results = [];

    for (const student of students) {
      try {
        const recommendations = await this.getCareerRecommendations(student);
        const careerPlan = await this.createCareerPlan(student, recommendations);

        results.push({
          studentId: student.id,
          recommendations,
          careerPlan,
          status: 'success'
        });
      } catch (error) {
        results.push({
          studentId: student.id,
          error: error.message,
          status: 'failed'
        });
      }
    }

    return results;
  }

  // Get career recommendations for a student
  async getCareerRecommendations(student) {
    const studentProfile = {
      grade: student.grade,
      stream: student.stream,
      interests: student.interests || [],
      preferredSalaryRange: student.salaryRange,
      workPreferences: student.workPreferences
    };

    const response = await fetch(`${this.baseUrl}/careers/recommendations`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
        'X-School-ID': this.schoolId
      },
      body: JSON.stringify({ studentProfile })
    });

    return await response.json();
  }

  // Create personalized career plan
  async createCareerPlan(student, recommendations) {
    const response = await fetch(`${this.baseUrl}/agent/career-plan`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        studentProfile: {
          grade: student.grade,
          stream: student.stream,
          targetScore: student.targetScore,
          preferredCareers: recommendations.map(r => r.career.id)
        }
      })
    });

    return await response.json();
  }

  // Send webhook notification
  async sendWebhook(event, data) {
    if (!this.webhookUrl) return;

    await fetch(this.webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        event,
        data,
        timestamp: new Date().toISOString(),
        source: 'eliza-career-counselor'
      })
    });
  }
}

// Usage in educational platform
const careerIntegration = new ElizaCareerIntegration({
  apiKey: process.env.ELIZA_API_KEY,
  schoolId: 'school_123',
  webhookUrl: 'https://your-platform.com/webhooks/career-updates'
});

// Sync all students
const syncResults = await careerIntegration.syncStudents(studentsData);
```

---

## 📞 Support

### Getting Help
- **Documentation**: [docs.eliza-career-counselor.com](https://docs.eliza-career-counselor.com)
- **API Reference**: [api.eliza-career-counselor.com](https://api.eliza-career-counselor.com)
- **Community Forum**: [community.eliza-career-counselor.com](https://community.eliza-career-counselor.com)
- **Email Support**: support@eliza-career-counselor.com

### Rate Limits by Plan
| Plan | Requests/Hour | Requests/Day | Support |
|------|---------------|--------------|---------|
| Free | 100 | 500 | Community |
| Pro | 1,000 | 10,000 | Email |
| Enterprise | 10,000 | 100,000 | Dedicated |

---

*For the latest API updates and changes, please refer to the [API Changelog](https://api.eliza-career-counselor.com/changelog).* 
