# 🏗️ Eliza Career Counselor - Technical Architecture

This document provides a comprehensive overview of the technical architecture, design decisions, and implementation details of the Eliza Career Counselor system.

## 📋 Table of Contents

- [System Overview](#system-overview)
- [Architecture Principles](#architecture-principles)
- [Core Components](#core-components)
- [Data Architecture](#data-architecture)
- [API Design](#api-design)
- [Frontend Architecture](#frontend-architecture)
- [Backend Services](#backend-services)
- [Database Design](#database-design)
- [Performance Optimization](#performance-optimization)
- [Security Considerations](#security-considerations)
- [Deployment Architecture](#deployment-architecture)
- [Monitoring & Observability](#monitoring--observability)

---

## 🎯 System Overview

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    User Interface Layer                          │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │   Web App       │  │   Mobile App    │  │   API Clients    │ │
│  │   (React)       │  │   (React Native)│  │   (REST/GraphQL) │ │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────┐
│                 Application Layer                               │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │ Career Service  │  │ Agent Service   │  │ Search Service   │ │
│  │ (Business Logic)│  │ (AI/ML Engine)  │  │ (Search Engine)  │ │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────┐
│                   Data Layer                                      │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │ Career Database │  │ User Profiles   │  │ Analytics DB     │ │
│  │ (PostgreSQL)    │  │ (MongoDB)       │  │ (ClickHouse)     │ │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

### Technology Stack

#### Frontend
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Query + Context API
- **Routing**: React Router
- **Build Tool**: Vite
- **Runtime**: Bun

#### Backend
- **Runtime**: Node.js with TypeScript
- **Framework**: ElizaOS
- **API**: RESTful with OpenAPI specification
- **Authentication**: JWT with API keys
- **Caching**: Redis
- **Job Queue**: Bull with Redis

#### Database
- **Primary**: PostgreSQL (Career data, user sessions)
- **Documents**: MongoDB (User profiles, career plans)
- **Analytics**: ClickHouse (Usage analytics, performance metrics)
- **Cache**: Redis (Session data, frequent queries)

#### AI/ML
- **NLP Engine**: ElizaOS Agent Framework
- **LLM Integration**: OpenAI GPT, Anthropic Claude
- **Embeddings**: OpenAI Ada for semantic search
- **Recommendation Engine**: Custom algorithm with ML models

#### DevOps & Infrastructure
- **Containerization**: Docker
- **Orchestration**: Kubernetes
- **CI/CD**: GitHub Actions
- **Monitoring**: Prometheus + Grafana
- **Logging**: ELK Stack
- **Load Balancing**: Nginx

---

## 🏛️ Architecture Principles

### 1. Scalability
- **Horizontal Scaling**: Stateless services that can be scaled horizontally
- **Microservices**: Modular architecture with independent services
- **Database Sharding**: Data partitioned across multiple database instances
- **Caching Strategy**: Multi-layer caching (CDN, Redis, in-memory)

### 2. Reliability
- **Fault Tolerance**: Circuit breakers and graceful degradation
- **Data Redundancy**: Multiple data backups and replication
- **Error Handling**: Comprehensive error handling and recovery
- **Health Checks**: Automated health monitoring and self-healing

### 3. Performance
- **Response Time**: < 2 seconds for API calls
- **Concurrent Users**: Support for 10,000+ concurrent users
- **Database Optimization**: Indexed queries and query optimization
- **CDN Integration**: Static assets served via CDN

### 4. Security
- **Data Encryption**: End-to-end encryption for sensitive data
- **API Security**: Rate limiting, authentication, authorization
- **Input Validation**: Comprehensive input sanitization
- **Audit Logging**: Complete audit trail for all operations

### 5. Maintainability
- **Code Quality**: TypeScript for type safety
- **Documentation**: Comprehensive API and code documentation
- **Testing**: 80%+ code coverage with automated tests
- **Modular Design**: Clean architecture with separation of concerns

---

## 🔧 Core Components

### 1. Career Database Service

**Purpose**: Centralized storage and retrieval of career information

**Key Features**:
- CRUD operations for career data
- Advanced search and filtering
- Data validation and integrity checks
- Caching for frequently accessed data

**Implementation**:
```typescript
class CareerDatabaseService {
  async getCareerById(id: string): Promise<CareerOption>
  async searchCareers(query: SearchQuery): Promise<CareerOption[]>
  async getCareersByCategory(category: string): Promise<CareerOption[]>
  async getCareersByStream(stream: string): Promise<CareerOption[]>
  async createCareer(career: CareerOption): Promise<string>
  async updateCareer(id: string, updates: Partial<CareerOption>): Promise<void>
}
```

### 2. Recommendation Engine

**Purpose**: Generate personalized career recommendations

**Algorithm**:
1. **Profile Analysis**: Analyze student profile (grade, stream, interests)
2. **Compatibility Scoring**: Calculate compatibility scores for each career
3. **Interest Matching**: Match student interests with career requirements
4. **Constraint Filtering**: Apply salary, location, and other constraints
5. **Ranking & Sorting**: Rank careers by relevance and preference

**Scoring Formula**:
```
Compatibility Score = (Stream Match × 0.3) + (Interest Match × 0.4) + (Skill Match × 0.2) + (Salary Match × 0.1)
```

### 3. Natural Language Processing Engine

**Purpose**: Process and understand user queries

**Components**:
- **Intent Recognition**: Identify user intent (recommendation, details, comparison)
- **Entity Extraction**: Extract career names, subjects, preferences
- **Context Management**: Maintain conversation context
- **Response Generation**: Generate human-like responses

**NLP Pipeline**:
```
User Query → Tokenization → Intent Classification → Entity Recognition → Context Analysis → Response Generation
```

### 4. Search Service

**Purpose**: Provide fast and accurate career search functionality

**Features**:
- **Full-Text Search**: Search across career descriptions and skills
- **Fuzzy Matching**: Handle typos and variations
- **Relevance Ranking**: Rank results by relevance score
- **Facet Filtering**: Filter by multiple criteria simultaneously

**Search Index Structure**:
```json
{
  "career_id": "software-engineer",
  "content": "Software Engineer design develop maintain software applications programming",
  "metadata": {
    "category": "Technology",
    "stream": ["PCM", "PCMB"],
    "salary_range": "600000-2500000",
    "work_life_balance": "Good"
  }
}
```

---

## 💾 Data Architecture

### Database Schema Design

#### Career Table
```sql
CREATE TABLE careers (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  category VARCHAR(50) NOT NULL,
  description TEXT NOT NULL,
  entry_salary INTEGER NOT NULL,
  mid_salary INTEGER NOT NULL,
  senior_salary INTEGER NOT NULL,
  work_hours VARCHAR(50),
  work_environment TEXT,
  stress_level ENUM('Low', 'Medium', 'High'),
  work_life_balance ENUM('Poor', 'Moderate', 'Good', 'Excellent'),
  travel_required BOOLEAN DEFAULT FALSE,
  remote_work BOOLEAN DEFAULT FALSE,
  degree VARCHAR(200),
  entrance_exams JSON,
  top_institutions JSON,
  duration VARCHAR(50),
  skills JSON,
  job_outlook ENUM('Stable', 'Growing', 'High Demand'),
  pros JSON,
  cons JSON,
  suitable_for JSON,
  alternatives JSON,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

#### User Profiles Table
```sql
CREATE TABLE user_profiles (
  id VARCHAR(50) PRIMARY KEY,
  user_id VARCHAR(50) NOT NULL,
  grade INTEGER,
  stream VARCHAR(20),
  interests JSON,
  preferred_salary_min INTEGER,
  preferred_salary_max INTEGER,
  work_preferences JSON,
  location VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

#### Interactions Table
```sql
CREATE TABLE user_interactions (
  id VARCHAR(50) PRIMARY KEY,
  user_id VARCHAR(50) NOT NULL,
  interaction_type ENUM('search', 'recommendation', 'details', 'comparison'),
  query TEXT,
  career_ids JSON,
  response JSON,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  session_id VARCHAR(50)
);
```

### Data Relationships

```
┌─────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Users     │────▶│ User Profiles   │     │   Careers       │
│             │     │                 │     │                 │
│ - id        │     │ - user_id       │     │ - id            │
│ - email     │     │ - grade         │     │ - name          │
│ - created_at│     │ - stream        │     │ - category      │
└─────────────┘     │ - interests     │     │ - description   │
                    │ - preferences   │     │ - salary_info   │
                    └─────────────────┘     │ - requirements  │
                             │             └─────────────────┘
                             │                    ▲
                             ▼                    │
                    ┌─────────────────┐          │
                    │ User Sessions   │          │
                    │                 │          │
                    │ - session_id    │          │
                    │ - user_id       │          │
                    │ - data          │          │
                    └─────────────────┘          │
                                                 │
                    ┌─────────────────┐          │
                    │ Interactions    │◄─────────┘
                    │                 │
                    │ - user_id       │
                    │ - career_ids    │
                    │ - interaction_type│
                    │ - timestamp      │
                    └─────────────────┘
```

---

## 🔌 API Design

### RESTful API Structure

```
/api/v1/
├── /careers                    # Career operations
│   ├── GET /                   # List all careers
│   ├── GET /search             # Search careers
│   ├── GET /:id                # Get career by ID
│   ├── POST /                  # Create new career (admin)
│   └── PUT /:id                # Update career (admin)
├── /recommendations            # Recommendation engine
│   ├── POST /                  # Get recommendations
│   └── GET /:userId            # Get user recommendations
├── /agent                      # AI agent interactions
│   ├── POST /chat              # Chat with career counselor
│   ├── POST /session           # Start counseling session
│   └── POST /career-plan       # Generate career plan
├── /users                      # User management
│   ├── POST /register          # User registration
│   ├── GET /profile            # Get user profile
│   └── PUT /profile            # Update user profile
└── /analytics                  # Analytics and insights
    ├── GET /careers/popular    # Popular careers
    ├── GET /trends             # Career trends
    └── GET /insights/:careerId # Career insights
```

### API Response Format

**Success Response**:
```json
{
  "success": true,
  "data": {
    // Response data
  },
  "meta": {
    "requestId": "req_12345",
    "timestamp": "2024-01-15T10:30:00Z",
    "version": "v1",
    "processingTime": 150
  }
}
```

**Error Response**:
```json
{
  "success": false,
  "error": {
    "code": "CAREER_NOT_FOUND",
    "message": "The requested career could not be found",
    "details": {
      "careerId": "invalid-career-id"
    }
  },
  "meta": {
    "requestId": "req_12345",
    "timestamp": "2024-01-15T10:30:00Z",
    "version": "v1"
  }
}
```

### Rate Limiting

**Rate Limit Headers**:
```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1640995200
X-RateLimit-Retry-After: 60
```

**Rate Limit Response**:
```json
{
  "success": false,
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "API rate limit exceeded",
    "details": {
      "limit": 1000,
      "remaining": 0,
      "resetTime": "2024-01-15T11:00:00Z"
    }
  }
}
```

---

## 🌐 Frontend Architecture

### Component Structure

```
src/frontend/
├── components/
│   ├── ui/                     # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   └── Modal.tsx
│   ├── career/
│   │   ├── CareerCard.tsx
│   │   ├── CareerDetails.tsx
│   │   ├── CareerComparison.tsx
│   │   └── CareerBrowser.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   └── Footer.tsx
│   └── forms/
│       ├── StudentProfileForm.tsx
│       └── CareerPreferenceForm.tsx
├── hooks/
│   ├── useCareerData.ts
│   ├── useRecommendations.ts
│   └── useSearch.ts
├── services/
│   ├── api.ts                  # API client
│   ├── careerService.ts
│   └── authService.ts
├── context/
│   ├── AuthContext.tsx
│   └── CareerContext.tsx
├── utils/
│   ├── constants.ts
│   ├── helpers.ts
│   └── validation.ts
└── pages/
    ├── Home.tsx
    ├── CareerExplorer.tsx
    ├── Profile.tsx
    └── Recommendations.tsx
```

### State Management

**Global State with Context API**:
```typescript
interface CareerContextType {
  careers: CareerOption[];
  userProfile: UserProfile | null;
  recommendations: Recommendation[];
  searchResults: CareerOption[];
  loading: boolean;
  error: string | null;
}

const CareerContext = createContext<CareerContextType | undefined>(undefined);
```

**Server State with React Query**:
```typescript
// Career data fetching
const useCareerData = (filters: CareerFilters) => {
  return useQuery({
    queryKey: ['careers', filters],
    queryFn: () => careerAPI.getCareers(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
  });
};

// User recommendations
const useRecommendations = (userProfile: UserProfile) => {
  return useQuery({
    queryKey: ['recommendations', userProfile.id],
    queryFn: () => recommendationAPI.getRecommendations(userProfile),
    enabled: !!userProfile.id,
  });
};
```

### Performance Optimizations

**Code Splitting**:
```typescript
const CareerExplorer = lazy(() => import('./pages/CareerExplorer'));
const Recommendations = lazy(() => import('./pages/Recommendations'));

// Route-based code splitting
<Route path="/explore" element={
  <Suspense fallback={<LoadingSpinner />}>
    <CareerExplorer />
  </Suspense>
} />
```

**Memoization**:
```typescript
const CareerCard = memo(({ career, onSelect }: CareerCardProps) => {
  return (
    <div onClick={() => onSelect(career)}>
      {/* Career card content */}
    </div>
  );
});
```

**Virtual Scrolling**:
```typescript
// For large career lists
const CareerList = ({ careers }: { careers: CareerOption[] }) => {
  return (
    <FixedSizeList
      height={400}
      width="100%"
      itemCount={careers.length}
      itemSize={100}
    >
      {({ index, style }) => (
        <div style={style}>
          <CareerCard career={careers[index]} />
        </div>
      )}
    </FixedSizeList>
  );
};
```

---

## ⚙️ Backend Services

### Service Architecture

```
src/
├── services/
│   ├── career/
│   │   ├── CareerService.ts     # Career data operations
│   │   ├── CareerValidator.ts   # Data validation
│   │   └── CareerCache.ts       # Caching layer
│   ├── agent/
│   │   ├── AgentService.ts      # AI agent logic
│   │   ├── NLPProcessor.ts      # Natural language processing
│   │   └── ResponseGenerator.ts # Response generation
│   ├── search/
│   │   ├── SearchService.ts     # Search functionality
│   │   ├── SearchIndex.ts       # Search indexing
│   │   └── QueryProcessor.ts    # Query processing
│   └── user/
│       ├── UserService.ts       # User management
│       ├── ProfileService.ts    # Profile operations
│       └── SessionService.ts    # Session management
├── middleware/
│   ├── auth.ts                  # Authentication
│   ├── rateLimit.ts            # Rate limiting
│   ├── validation.ts           # Request validation
│   └── cors.ts                 # CORS handling
└── utils/
    ├── database.ts             # Database utilities
    ├── cache.ts                # Caching utilities
    └── logger.ts               # Logging utilities
```

### Service Communication

**Inter-Service Communication**:
```typescript
// Service interface
interface CareerServiceInterface {
  getCareerById(id: string): Promise<CareerOption>;
  searchCareers(query: SearchQuery): Promise<CareerOption[]>;
  getRecommendations(profile: UserProfile): Promise<Recommendation[]>;
}

// Service implementation
class CareerService implements CareerServiceInterface {
  constructor(
    private database: Database,
    private cache: Cache,
    private searchEngine: SearchEngine
  ) {}

  async getCareerById(id: string): Promise<CareerOption> {
    // Check cache first
    const cached = await this.cache.get(`career:${id}`);
    if (cached) return cached;

    // Fetch from database
    const career = await this.database.getCareerById(id);

    // Cache result
    await this.cache.set(`career:${id}`, career, 3600);

    return career;
  }
}
```

---

## 💽 Database Design

### PostgreSQL Schema

**Careers Table**:
```sql
-- Main careers table
CREATE TABLE careers (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  category VARCHAR(50) NOT NULL,
  description TEXT NOT NULL,
  entry_salary INTEGER NOT NULL,
  mid_salary INTEGER NOT NULL,
  senior_salary INTEGER NOT NULL,
  work_hours VARCHAR(50),
  work_environment TEXT,
  stress_level VARCHAR(20) CHECK (stress_level IN ('Low', 'Medium', 'High')),
  work_life_balance VARCHAR(20) CHECK (work_life_balance IN ('Poor', 'Moderate', 'Good', 'Excellent')),
  travel_required BOOLEAN DEFAULT FALSE,
  remote_work BOOLEAN DEFAULT FALSE,
  degree VARCHAR(200),
  entrance_exams JSONB,
  top_institutions JSONB,
  duration VARCHAR(50),
  skills JSONB,
  job_outlook VARCHAR(20) CHECK (job_outlook IN ('Stable', 'Growing', 'High Demand')),
  pros JSONB,
  cons JSONB,
  suitable_for JSONB,
  alternatives JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for performance
CREATE INDEX idx_careers_category ON careers(category);
CREATE INDEX idx_careers_stream ON careers USING GIN ((skills->'streams'));
CREATE INDEX idx_careers_salary ON careers(entry_salary, mid_salary, senior_salary);
CREATE INDEX idx_careers_search ON careers USING GIN (to_tsvector('english', name || ' ' || description));
```

**Users and Sessions**:
```sql
-- User profiles
CREATE TABLE user_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  grade INTEGER CHECK (grade IN (11, 12)),
  stream VARCHAR(20),
  interests JSONB,
  preferred_salary_min INTEGER,
  preferred_salary_max INTEGER,
  work_preferences JSONB,
  location VARCHAR(100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- User sessions
CREATE TABLE user_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES user_profiles(id),
  session_data JSONB,
  expires_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- User interactions
CREATE TABLE user_interactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES user_profiles(id),
  session_id UUID REFERENCES user_sessions(id),
  interaction_type VARCHAR(50) NOT NULL,
  query TEXT,
  career_ids UUID[] REFERENCES careers(id),
  response JSONB,
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### MongoDB Collections

**Career Plans**:
```javascript
// Career plans collection
{
  _id: ObjectId("..."),
  userId: "user_123",
  primaryCareer: "software-engineer",
  timeline: {
    year1: {
      focus: "Foundation building",
      actions: [
        "Complete 12th with strong PCM performance",
        "Start learning programming basics"
      ]
    },
    year2: {
      focus: "Higher education",
      actions: [
        "Pursue B.Tech in Computer Science",
        "Build portfolio with personal projects"
      ]
    }
  },
  skillDevelopment: {
    technical: ["JavaScript", "Python", "Data Structures"],
    soft: ["Communication", "Problem-solving"],
    certifications: ["AWS Certified Developer"]
  },
  milestones: [
    {
      title: "Complete 12th Board Exams",
      targetDate: "2024-03-31",
      status: "pending"
    }
  ],
  createdAt: ISODate("2024-01-15T10:30:00Z"),
  updatedAt: ISODate("2024-01-15T10:30:00Z")
}
```

---

## ⚡ Performance Optimization

### Caching Strategy

**Multi-Level Caching**:
```typescript
// Redis caching for API responses
const cache = new RedisCache();

class CachedCareerService {
  async getCareerById(id: string): Promise<CareerOption> {
    const cacheKey = `career:${id}`;

    // Check L1 cache (Redis)
    let career = await cache.get(cacheKey);
    if (career) return career;

    // Check L2 cache (in-memory)
    career = memoryCache.get(cacheKey);
    if (career) {
      // Warm Redis cache
      await cache.set(cacheKey, career, 3600);
      return career;
    }

    // Fetch from database
    career = await database.getCareerById(id);

    // Cache in both layers
    memoryCache.set(cacheKey, career, 1800); // 30 minutes
    await cache.set(cacheKey, career, 3600); // 1 hour

    return career;
  }
}
```

### Database Optimization

**Query Optimization**:
```sql
-- Optimized career search query
SELECT c.*, ts_rank(search_vector, query) as rank
FROM careers c, plainto_tsquery('english', $1) query
WHERE search_vector @@ query
ORDER BY rank DESC
LIMIT $2 OFFSET $3;

-- Create search index
CREATE INDEX idx_careers_search_vector ON careers USING GIN (search_vector);
```

**Connection Pooling**:
```typescript
// Database connection pool
const pool = new Pool({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  max: 20, // Maximum pool size
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});
```

### Frontend Optimization

**Bundle Splitting**:
```javascript
// webpack.config.js or vite.config.js
export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@headlessui/react', 'tailwindcss'],
          utils: ['lodash', 'date-fns'],
        },
      },
    },
  },
};
```

**Lazy Loading**:
```typescript
// Route-based lazy loading
const CareerExplorer = lazy(() => import('./pages/CareerExplorer'));
const CareerDetails = lazy(() => import('./components/CareerDetails'));

// Component lazy loading
const HeavyComponent = lazy(() =>
  import('./components/HeavyComponent')
    .then(module => ({ default: module.HeavyComponent }))
);
```

---

## 🔒 Security Considerations

### Authentication & Authorization

**JWT Token Management**:
```typescript
class AuthService {
  generateToken(userId: string): string {
    return jwt.sign(
      { userId, role: 'user' },
      process.env.JWT_SECRET!,
      { expiresIn: '24h' }
    );
  }

  verifyToken(token: string): UserPayload {
    return jwt.verify(token, process.env.JWT_SECRET!) as UserPayload;
  }
}
```

**API Key Authentication**:
```typescript
class APIKeyService {
  async validateAPIKey(apiKey: string): Promise<User | null> {
    const hashedKey = crypto.createHash('sha256').update(apiKey).digest('hex');
    return await database.getUserByAPIKey(hashedKey);
  }

  async generateAPIKey(userId: string): Promise<string> {
    const apiKey = crypto.randomBytes(32).toString('hex');
    const hashedKey = crypto.createHash('sha256').update(apiKey).digest('hex');

    await database.storeAPIKey(userId, hashedKey);
    return apiKey;
  }
}
```

### Data Protection

**Encryption at Rest**:
```typescript
// Database field encryption
const encrypted = encrypt(JSON.stringify(sensitiveData), process.env.ENCRYPTION_KEY);

// API response encryption
const encryptedResponse = encrypt(JSON.stringify(responseData), userKey);
```

**Input Validation & Sanitization**:
```typescript
class InputValidator {
  static sanitizeString(input: string): string {
    return input
      .replace(/[<>]/g, '') // Remove HTML tags
      .trim()
      .substring(0, 1000); // Limit length
  }

  static validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static validateCareerId(id: string): boolean {
    const careerIdRegex = /^[a-z-]+$/;
    return careerIdRegex.test(id) && id.length <= 50;
  }
}
```

### Rate Limiting & Abuse Prevention

**Rate Limiting Implementation**:
```typescript
class RateLimiter {
  private attempts = new Map<string, number[]>();

  async checkLimit(identifier: string, maxAttempts: number, windowMs: number): Promise<boolean> {
    const now = Date.now();
    const windowStart = now - windowMs;

    // Clean old attempts
    const userAttempts = this.attempts.get(identifier) || [];
    const recentAttempts = userAttempts.filter(timestamp => timestamp > windowStart);

    if (recentAttempts.length >= maxAttempts) {
      return false; // Rate limit exceeded
    }

    recentAttempts.push(now);
    this.attempts.set(identifier, recentAttempts);

    return true; // Within limits
  }
}
```

---

## 🚀 Deployment Architecture

### Containerization

**Docker Configuration**:
```dockerfile
# Dockerfile for the application
FROM node:18-alpine

# Install dependencies
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package files
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

# Build application
RUN bun run build

# Expose port
EXPOSE 3000

# Start application
CMD ["bun", "run", "start"]
```

**Docker Compose**:
```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://user:password@db:5432/career_db
      - REDIS_URL=redis://cache:6379
    depends_on:
      - db
      - cache

  db:
    image: postgres:15
    environment:
      - POSTGRES_DB=career_db
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data

  cache:
    image: redis:7-alpine
    volumes:
      - redis_data:/data

volumes:
  postgres_data:
  redis_data:
```

### Kubernetes Deployment

**Deployment Manifest**:
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: career-counselor
spec:
  replicas: 3
  selector:
    matchLabels:
      app: career-counselor
  template:
    metadata:
      labels:
        app: career-counselor
    spec:
      containers:
      - name: career-counselor
        image: career-counselor:latest
        ports:
        - containerPort: 3000
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: db-secret
              key: url
        - name: REDIS_URL
          valueFrom:
            secretKeyRef:
              name: redis-secret
              key: url
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5
```

### CI/CD Pipeline

**GitHub Actions Workflow**:
```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Bun
        uses: oven-sh/setup-bun@v1
      - name: Install dependencies
        run: bun install
      - name: Run tests
        run: bun test
      - name: Build application
        run: bun run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to Kubernetes
        uses: azure/k8s-deploy@v1
        with:
          manifests: |
            k8s/deployment.yaml
            k8s/service.yaml
          images: |
            myregistry.azurecr.io/career-counselor:${{ github.sha }}
          imagepullsecrets: |
            myregistrykey
```

---

## 📊 Monitoring & Observability

### Application Metrics

**Prometheus Metrics**:
```typescript
import { collectDefaultMetrics, register, Gauge, Counter, Histogram } from 'prom-client';

// Default metrics
collectDefaultMetrics();

// Custom metrics
const careerRequests = new Counter({
  name: 'career_requests_total',
  help: 'Total number of career requests',
  labelNames: ['method', 'endpoint', 'status']
});

const recommendationDuration = new Histogram({
  name: 'recommendation_duration_seconds',
  help: 'Time taken to generate recommendations',
  buckets: [0.1, 0.5, 1, 2, 5, 10]
});

const activeUsers = new Gauge({
  name: 'active_users',
  help: 'Number of active users'
});

// Middleware to collect metrics
app.use((req, res, next) => {
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;
    careerRequests.inc({
      method: req.method,
      endpoint: req.path,
      status: res.statusCode
    });

    if (req.path.includes('/recommendations')) {
      recommendationDuration.observe(duration / 1000);
    }
  });

  next();
});
```

### Logging Strategy

**Structured Logging**:
```typescript
import winston from 'winston';

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'career-counselor' },
  transports: [
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error'
    }),
    new winston.transports.File({
      filename: 'logs/combined.log'
    })
  ]
});

// Usage
logger.info('Career recommendation generated', {
  userId: 'user_123',
  careerId: 'software-engineer',
  confidence: 0.92,
  duration: 150
});

logger.error('Database connection failed', {
  error: error.message,
  stack: error.stack,
  connectionString: process.env.DATABASE_URL
});
```

### Health Checks

**Application Health Check**:
```typescript
app.get('/health', async (req, res) => {
  const health = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version,
    uptime: process.uptime(),
    services: {}
  };

  try {
    // Database health check
    await database.query('SELECT 1');
    health.services.database = 'healthy';
  } catch (error) {
    health.services.database = 'unhealthy';
    health.status = 'degraded';
  }

  try {
    // Redis health check
    await cache.ping();
    health.services.cache = 'healthy';
  } catch (error) {
    health.services.cache = 'unhealthy';
    health.status = 'degraded';
  }

  try {
    // AI service health check
    await agent.ping();
    health.services.agent = 'healthy';
  } catch (error) {
    health.services.agent = 'unhealthy';
    health.status = 'unhealthy';
  }

  const statusCode = health.status === 'healthy' ? 200 :
                    health.status === 'degraded' ? 206 : 503;

  res.status(statusCode).json(health);
});
```

### Alerting

**Alert Manager Configuration**:
```yaml
groups:
- name: career-counselor
  rules:
  - alert: HighErrorRate
    expr: rate(http_requests_total{status=~"5.."}[5m]) > 0.1
    for: 5m
    labels:
      severity: critical
    annotations:
      summary: "High error rate detected"
      description: "Error rate is {{ $value }} errors per second"

  - alert: DatabaseConnectionIssues
    expr: up{job="career-counselor-db"} == 0
    for: 1m
    labels:
      severity: warning
    annotations:
      summary: "Database connection lost"
      description: "Career Counselor cannot connect to database"

  - alert: SlowResponseTime
    expr: histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m])) > 5
    for: 5m
    labels:
      severity: warning
    annotations:
      summary: "Slow response times detected"
      description: "95th percentile response time is {{ $value }}s"
```

---

This architecture document provides a comprehensive view of the Eliza Career Counselor system's technical implementation, design decisions, and operational considerations. The modular, scalable architecture ensures high performance, reliability, and maintainability while supporting the complex requirements of AI-powered career guidance for Indian students.
