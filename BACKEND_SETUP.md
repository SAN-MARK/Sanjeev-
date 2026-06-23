# 🚀 Sanjeev M Portfolio - Complete Backend Setup

## Overview

Your portfolio website now has a **complete, production-ready backend** with all functionality for managing contacts, projects, certificates, and portfolio data.

---

## 📦 What's Been Built

### Backend Components

#### 1. **Express.js Server** (`server.js`)
- Main application server with CORS support
- Routes all API endpoints
- Error handling middleware
- Health check endpoint

#### 2. **API Routes** (5 main modules)
```
routes/
├── contact.js        → Contact form submissions
├── data.js           → Portfolio data serving
├── projects.js       → Project management
├── certificates.js   → Certificate data
└── stats.js          → Statistics & metrics
```

#### 3. **Controllers** (Business Logic)
```
controllers/
├── contactController.js       → Handles form submissions, storage, email
├── dataController.js          → Serves portfolio & about data
├── projectController.js       → Project data management
├── certificateController.js   → Certificate data management
└── statsController.js         → Statistics calculations
```

#### 4. **Utilities**
```
utils/
└── emailService.js    → Email sending with Nodemailer
                         - Sends to admin
                         - Sends confirmation to visitor
                         - Beautiful HTML templates
```

#### 5. **Data Storage**
```
data/
└── contacts.json      → All contact form submissions
                         - Unique IDs
                         - Read/unread status
                         - Timestamps
```

---

## 🔌 API Endpoints Summary

### Contact Management
| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/api/contact/submit` | Submit new contact |
| GET | `/api/contact/messages` | Get all messages |
| PUT | `/api/contact/:id/read` | Mark as read |
| DELETE | `/api/contact/:id` | Delete message |

### Portfolio Data
| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/data/portfolio` | Get all portfolio data |
| GET | `/api/data/about` | Get about information |

### Projects
| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/projects` | Get all projects |
| GET | `/api/projects/:id` | Get single project |

### Certificates
| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/certificates` | Get all certificates |
| GET | `/api/certificates/:id` | Get single certificate |

### Statistics
| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/stats` | Get all statistics |
| GET | `/api/stats/:category` | Get specific stat category |

---

## 🎯 Key Features

### 1. **Contact Form Processing**
✅ Form validation
✅ Automatic email notifications
✅ Confirmation email to visitor
✅ Database storage in JSON
✅ Admin dashboard view

### 2. **Email Notifications**
✅ Welcome email to new visitors
✅ Notification email to admin
✅ Beautiful HTML templates
✅ Timestamp tracking
✅ Supports multiple email providers

### 3. **Data Management**
✅ Dynamic portfolio data API
✅ Project showcase endpoints
✅ Certificate management
✅ Statistics tracking
✅ Experience timeline data

### 4. **Admin Dashboard** (`admin.html`)
✅ View all contact messages
✅ Mark messages as read
✅ Delete messages
✅ View statistics
✅ Real-time updates

### 5. **Frontend Integration** (`api.js`)
✅ Complete API client library
✅ Contact form handling
✅ Dynamic content loading
✅ Notification system
✅ Error handling

---

## 📁 Files Created

### Backend Files
```
server.js                  # Main Express server
package.json              # Node dependencies
.env                      # Environment variables
.env.example              # Example configuration
.gitignore                # Git ignore rules

routes/
├── contact.js
├── data.js
├── projects.js
├── certificates.js
└── stats.js

controllers/
├── contactController.js
├── dataController.js
├── projectController.js
├── certificateController.js
└── statsController.js

utils/
└── emailService.js

data/
└── contacts.json (auto-created)
```

### Frontend Files
```
index.html                # Main portfolio (updated)
api.js                    # API client library
admin.html                # Admin dashboard

Documentation
├── BACKEND_README.md     # Comprehensive backend docs
├── QUICK_START.md        # Quick start guide
└── BACKEND_SETUP.md      # This file
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Email (Optional)
```bash
# Edit .env
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
```

### 3. Start Backend
```bash
npm start
```

### 4. Test the System
```bash
# Open admin dashboard
http://localhost:3000/admin.html

# Or test contact form
# Fill form on portfolio and submit
```

---

## 📊 Data Structure

### Contact Message
```json
{
  "id": "uuid",
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello Sanjeev...",
  "timestamp": "2026-06-22T10:30:00Z",
  "read": false,
  "status": "new"
}
```

### Portfolio Data
```json
{
  "personal": { name, title, bio, email, linkedin, avatar },
  "skills": { proficient: [], learning: [] },
  "experience": [ { company, role, dates, highlights } ],
  "stats": [ { label, value, suffix } ],
  "achievements": [ { title, description, icon, date } ],
  "technologies": { videoEditing: [], design: [], development: [] },
  "links": { resume, videoPortfolio, certificates }
}
```

### Project Data
```json
{
  "id": 1,
  "title": "Project Name",
  "description": "...",
  "category": "UI/UX Design",
  "tools": ["Figma", "Design"],
  "liveLink": "https://...",
  "status": "completed",
  "year": 2025,
  "features": [],
  "details": "..."
}
```

---

## 🔐 Security Features

✅ **CORS Configuration** - Control which domains can access API
✅ **Input Validation** - Email and message validation
✅ **Error Handling** - Secure error messages
✅ **Environment Variables** - Sensitive data in .env
✅ **No Exposed Credentials** - Email passwords in .env only

---

## 🎨 Frontend Integration

### Contact Form
```javascript
// Automatically sends to /api/contact/submit
// Shows success/error message
// Clears form on success
```

### Dynamic Data Loading
```javascript
// Load portfolio data
const portfolio = await PortfolioAPI.getPortfolioData();

// Load projects
const projects = await PortfolioAPI.getProjects();

// Load certificates
const certs = await PortfolioAPI.getCertificates();
```

### Notifications
```javascript
UIUtils.showNotification('Message sent!', 'success');
UIUtils.showNotification('Error occurred', 'error');
```

---

## 📈 Admin Dashboard Features

### Features
- ✅ View all contact messages
- ✅ See unread message count
- ✅ Mark messages as read
- ✅ Delete messages
- ✅ View portfolio statistics
- ✅ See engagement metrics
- ✅ Real-time updates every 30 seconds

### Access
```
http://localhost:3000/admin.html
```

---

## 🧪 Testing Endpoints

### Test Contact Submission
```bash
curl -X POST http://localhost:3000/api/contact/submit \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Testing the API"
  }'
```

### Test Getting Portfolio Data
```bash
curl http://localhost:3000/api/data/portfolio
```

### Test Getting Projects
```bash
curl http://localhost:3000/api/projects
```

### Test Getting Statistics
```bash
curl http://localhost:3000/api/stats
```

---

## ⚙️ Configuration Options

### Change Server Port
Edit `.env`:
```
PORT=5000
```

### Change Frontend URL
Edit `.env`:
```
FRONTEND_URL=https://yourdomain.com
```

### Production Mode
Edit `.env`:
```
NODE_ENV=production
```

### Email Provider
In `.env`, configure your email service:
```
# Gmail (current)
EMAIL_USER=your@gmail.com
EMAIL_PASSWORD=your_app_password

# Or SendGrid
SENDGRID_API_KEY=your_key

# Or Mailgun
MAILGUN_API_KEY=your_key
MAILGUN_DOMAIN=your_domain
```

---

## 🐛 Troubleshooting

### Contact Form Not Working?
1. Check backend is running: `npm start`
2. Check `.env` configuration
3. Open browser console for errors
4. Verify API endpoint is reachable

### Email Not Sending?
1. Verify Gmail app password is correct
2. Check 2-Step Verification is enabled
3. Check `.env` EMAIL settings
4. Look for errors in server console

### Admin Dashboard Won't Load?
1. Backend must be running
2. Check browser console for CORS errors
3. Verify API endpoints are accessible
4. Check network tab for failed requests

### 404 Errors on API?
1. Verify correct endpoint URL
2. Check server is running
3. Check route files are in `routes/` directory
4. Verify imports in `server.js`

---

## 📚 Additional Resources

### Documentation Files
- `BACKEND_README.md` - Comprehensive backend documentation
- `QUICK_START.md` - Quick setup guide
- `.env.example` - Environment variables template

### External Resources
- [Express.js Docs](https://expressjs.com/)
- [Nodemailer Docs](https://nodemailer.com/)
- [Gmail App Passwords](https://myaccount.google.com/apppasswords)

---

## 🎯 Next Steps

### To Deploy
1. Move to production server
2. Update `.env` with production values
3. Set `NODE_ENV=production`
4. Use PM2 for process management
5. Setup SSL/HTTPS

### To Enhance
1. Add database (MongoDB)
2. Add authentication system
3. Add file uploads
4. Create advanced admin panel
5. Add API documentation (Swagger)

### To Scale
1. Add caching (Redis)
2. Add job queues
3. Add rate limiting
4. Monitor with APM
5. Load balancing

---

## 📞 Support & Contact

- **Email**: iamheresanjeev@gmail.com
- **LinkedIn**: https://linkedin.com/in/sanjeeveditor2008
- **Portfolio**: Your main website

---

## ✨ Summary

Your portfolio website now has:

✅ **Complete Backend** - Node.js + Express
✅ **Contact Management** - Form submission + email
✅ **API Endpoints** - 13 endpoints for data management
✅ **Admin Dashboard** - Manage messages and view stats
✅ **Email Integration** - Automated notifications
✅ **Data Persistence** - JSON storage
✅ **Frontend Ready** - All APIs integrated
✅ **Well Documented** - Multiple guide files

**Ready to receive messages and manage your portfolio! 🎉**

---

*Built with ❤️ using Node.js, Express.js, and Nodemailer*
