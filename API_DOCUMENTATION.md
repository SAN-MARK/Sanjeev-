# API Documentation - Sanjeev M Portfolio Backend

## Base URL
```
http://localhost:3000/api
```

## Health Check

### Check API Status
```http
GET /health
```

**Response (200)**
```json
{
  "status": "ok",
  "message": "Sanjeev M Portfolio Backend is running",
  "timestamp": "2026-06-22T10:30:00.000Z"
}
```

---

## 📧 Contact Endpoints

### Submit Contact Form
Submit a new contact message.

```http
POST /contact/submit
Content-Type: application/json
```

**Request Body**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I would like to collaborate on a project"
}
```

**Response (201)**
```json
{
  "success": true,
  "message": "Message sent successfully! I will get back to you soon.",
  "contact": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "John Doe"
  }
}
```

**Error Response (400)**
```json
{
  "success": false,
  "message": "Name, email, and message are required"
}
```

**Error Response (400)**
```json
{
  "success": false,
  "message": "Invalid email address"
}
```

---

### Get All Contact Messages
Retrieve all contact messages. (Admin only)

```http
GET /contact/messages
```

**Response (200)**
```json
{
  "success": true,
  "total": 5,
  "unread": 2,
  "contacts": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "name": "John Doe",
      "email": "john@example.com",
      "message": "I would like to collaborate...",
      "timestamp": "2026-06-22T10:30:00.000Z",
      "read": false,
      "status": "new"
    }
  ]
}
```

---

### Mark Message as Read
Mark a specific message as read.

```http
PUT /contact/:id/read
```

**URL Parameters**
- `id` (string) - Message ID

**Response (200)**
```json
{
  "success": true,
  "message": "Contact marked as read",
  "contact": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "read": true
  }
}
```

**Error Response (404)**
```json
{
  "success": false,
  "message": "Contact not found"
}
```

---

### Delete Message
Delete a specific contact message.

```http
DELETE /contact/:id
```

**URL Parameters**
- `id` (string) - Message ID

**Response (200)**
```json
{
  "success": true,
  "message": "Contact deleted successfully"
}
```

**Error Response (404)**
```json
{
  "success": false,
  "message": "Contact not found"
}
```

---

## 📚 Portfolio Data Endpoints

### Get All Portfolio Data
Retrieve complete portfolio information.

```http
GET /data/portfolio
```

**Response (200)**
```json
{
  "success": true,
  "data": {
    "personal": {
      "name": "Sanjeev M",
      "title": "Video Editor | UI/UX Designer | Creative Technologist",
      "bio": "I'm a passionate creative technologist...",
      "email": "iamheresanjeev@gmail.com",
      "linkedin": "https://linkedin.com/in/sanjeeveditor2008",
      "avatar": "/images/profile.jpg",
      "tagline": "Building things that matter"
    },
    "skills": {
      "proficient": [
        "Video Editing",
        "Figma",
        "UI/UX Design",
        "CapCut",
        "Canva",
        "Communication"
      ],
      "learning": [
        "React JS",
        "MERN Stack",
        "Frontend Dev",
        "Digital Marketing",
        "N8n"
      ]
    },
    "experience": [
      {
        "id": 1,
        "company": "Marpu Foundation",
        "role": "Social Media Intern",
        "startDate": "2025-12-01",
        "endDate": "2026-01-31",
        "description": "Managed social media content and engagement strategies",
        "highlights": ["Social Strategy", "Content Creation", "Analytics"]
      }
    ],
    "stats": [
      {
        "id": 1,
        "label": "LinkedIn Followers",
        "value": 2400,
        "suffix": "+"
      }
    ],
    "achievements": [...],
    "technologies": {...},
    "links": {
      "resume": "https://drive.google.com/...",
      "videoPortfolio": "https://drive.google.com/...",
      "certificates": "https://drive.google.com/..."
    }
  }
}
```

---

### Get About Information
Retrieve about section details.

```http
GET /data/about
```

**Response (200)**
```json
{
  "success": true,
  "data": {
    "headline": "Building things that matter",
    "bio": "I'm a creative technologist with expertise...",
    "skills": {
      "primary": ["Video Editing", "UI/UX Design", "Web Development"],
      "secondary": ["Motion Graphics", "Figma Design", "MERN Stack"]
    },
    "interests": [
      "Creative Technology",
      "Digital Innovation",
      "User Experience",
      "Storytelling through Design"
    ]
  }
}
```

---

## 🎨 Projects Endpoints

### Get All Projects
Retrieve all projects.

```http
GET /projects
```

**Response (200)**
```json
{
  "success": true,
  "total": 3,
  "projects": [
    {
      "id": 1,
      "title": "PCAS Student Portal",
      "description": "A comprehensive student portal...",
      "image": "/images/project1.png",
      "category": "UI/UX Design",
      "tools": ["Figma", "UI/UX"],
      "liveLink": "https://pcasstudentportal.figma.site",
      "status": "completed",
      "year": 2025,
      "features": ["Dashboard", "Student Records", "Communication"],
      "details": "Designed a user-friendly portal..."
    }
  ]
}
```

---

### Get Specific Project
Retrieve details for a specific project.

```http
GET /projects/:id
```

**URL Parameters**
- `id` (number) - Project ID

**Response (200)**
```json
{
  "success": true,
  "project": {
    "id": 1,
    "title": "PCAS Student Portal",
    "description": "A comprehensive student portal...",
    "category": "UI/UX Design",
    "tools": ["Figma", "UI/UX"],
    "liveLink": "https://pcasstudentportal.figma.site",
    "status": "completed",
    "year": 2025,
    "features": ["Dashboard", "Student Records", "Communication"],
    "details": "Designed a user-friendly portal..."
  }
}
```

**Error Response (404)**
```json
{
  "success": false,
  "message": "Project not found"
}
```

---

## 🏆 Certificates Endpoints

### Get All Certificates
Retrieve all certificates.

```http
GET /certificates
```

**Response (200)**
```json
{
  "success": true,
  "total": 10,
  "certificates": [
    {
      "id": 1,
      "title": "Video Editing Mastery",
      "issuer": "Udemy",
      "date": "2025-06",
      "description": "Advanced video editing techniques...",
      "category": "Video Editing"
    }
  ]
}
```

---

### Get Specific Certificate
Retrieve details for a specific certificate.

```http
GET /certificates/:id
```

**URL Parameters**
- `id` (number) - Certificate ID

**Response (200)**
```json
{
  "success": true,
  "certificate": {
    "id": 1,
    "title": "Video Editing Mastery",
    "issuer": "Udemy",
    "date": "2025-06",
    "description": "Advanced video editing techniques...",
    "category": "Video Editing",
    "credentialUrl": "https://drive.google.com/..."
  }
}
```

---

## 📊 Statistics Endpoints

### Get All Statistics
Retrieve all portfolio statistics.

```http
GET /stats
```

**Response (200)**
```json
{
  "success": true,
  "stats": {
    "portfolio": {
      "projects": 5,
      "certificates": 10,
      "internships": 3,
      "linkedinFollowers": 2400
    },
    "experience": {
      "totalExperienceMonths": 2,
      "internships": 2,
      "specializations": 3
    },
    "skills": {
      "total": 11,
      "proficient": 6,
      "learning": 5
    },
    "content": {
      "videoEdits": 15,
      "designProjects": 8,
      "webProjects": 3
    },
    "achievements": {
      "total": 3,
      "awards": 1,
      "recognitions": 2
    },
    "engagement": {
      "linkedinReach": "2.4K+",
      "videoViews": "5K+",
      "websiteVisits": 0
    }
  }
}
```

---

### Get Specific Statistic
Retrieve specific statistic category.

```http
GET /stats/:category
```

**URL Parameters**
- `category` (string) - One of: `projects`, `certificates`, `skills`, `experience`

**Response (200)**
```json
{
  "success": true,
  "category": "projects",
  "data": {
    "completed": 3,
    "inProgress": 1,
    "total": 5
  }
}
```

**Error Response (404)**
```json
{
  "success": false,
  "message": "Statistics for category 'invalid' not found"
}
```

---

## 🔄 Error Handling

All error responses follow this format:

```json
{
  "success": false,
  "message": "Description of the error",
  "error": "Detailed error (development only)"
}
```

### Common Error Codes

| Code | Meaning |
|------|---------|
| 400 | Bad Request - Invalid input |
| 404 | Not Found - Resource doesn't exist |
| 500 | Internal Server Error |

---

## 📝 Request Examples

### Using cURL

**Submit Contact**
```bash
curl -X POST http://localhost:3000/api/contact/submit \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello Sanjeev"
  }'
```

**Get Portfolio Data**
```bash
curl http://localhost:3000/api/data/portfolio
```

**Get Projects**
```bash
curl http://localhost:3000/api/projects
```

---

### Using JavaScript (Fetch API)

**Submit Contact**
```javascript
const response = await fetch('http://localhost:3000/api/contact/submit', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    message: 'Hello Sanjeev'
  })
});

const data = await response.json();
console.log(data);
```

**Get Portfolio Data**
```javascript
const response = await fetch('http://localhost:3000/api/data/portfolio');
const data = await response.json();
console.log(data.data);
```

---

### Using Axios

```javascript
import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

// Submit contact
axios.post(`${API_URL}/contact/submit`, {
  name: 'John Doe',
  email: 'john@example.com',
  message: 'Hello'
})
.then(res => console.log(res.data))
.catch(err => console.error(err));

// Get portfolio data
axios.get(`${API_URL}/data/portfolio`)
.then(res => console.log(res.data.data))
.catch(err => console.error(err));
```

---

## 🔐 Authentication

Currently, all endpoints are public. For future admin functionality, add authentication:

```javascript
// Example auth middleware
const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ error: 'No token' });
  // Verify token...
  next();
};

// Use on protected routes
app.get('/contact/messages', auth, getMessages);
```

---

## 📊 Rate Limiting

Consider adding rate limiting in production:

```javascript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);
```

---

## 📝 API Response Status Codes

| Code | Status | Meaning |
|------|--------|---------|
| 200 | OK | Request succeeded |
| 201 | Created | Resource created successfully |
| 400 | Bad Request | Invalid input data |
| 404 | Not Found | Resource not found |
| 500 | Server Error | Internal server error |

---

## 💡 Tips

- ✅ All requests return JSON
- ✅ Always check `success` property
- ✅ Handle errors gracefully
- ✅ Implement retry logic for failed requests
- ✅ Cache responses when appropriate
- ✅ Use environment variables for API URLs

---

## 📞 Support

For API questions or issues:
- Email: iamheresanjeev@gmail.com
- LinkedIn: https://linkedin.com/in/sanjeeveditor2008

---

**Last Updated**: 2026-06-22
**API Version**: 1.0.0
