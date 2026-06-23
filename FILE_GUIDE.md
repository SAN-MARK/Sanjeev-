# 📁 Project Structure & File Guide

## 🎯 Quick Navigation

- **Starting here?** → Read `QUICK_START.md`
- **Backend details?** → Read `BACKEND_README.md` or `BACKEND_SETUP.md`
- **API documentation?** → Read `API_DOCUMENTATION.md`
- **Deploying?** → Read `DEPLOYMENT.md`

---

## 📂 Frontend Files

### Core Files
| File | Purpose |
|------|---------|
| `index.html` | Main portfolio website - Beautiful, responsive design |
| `api.js` | Frontend API client library - Handles all API calls |
| `admin.html` | Admin dashboard - Manage messages and view stats |

### Documentation Files
| File | Purpose |
|------|---------|
| `QUICK_START.md` | Quick setup guide for beginners |
| `README.md` | Main project readme (if exists) |

---

## ⚙️ Backend Files

### Server & Configuration
| File | Purpose |
|------|---------|
| `server.js` | Main Express.js server entry point |
| `package.json` | Node.js dependencies and scripts |
| `.env` | Environment variables (sensitive data) |
| `.env.example` | Example environment configuration |
| `.gitignore` | Git ignore rules |

### Route Handlers
| File | Purpose |
|------|---------|
| `routes/contact.js` | Contact form endpoints |
| `routes/data.js` | Portfolio data endpoints |
| `routes/projects.js` | Project management endpoints |
| `routes/certificates.js` | Certificate endpoints |
| `routes/stats.js` | Statistics endpoints |

### Business Logic
| File | Purpose |
|------|---------|
| `controllers/contactController.js` | Handles contact submissions, storage, emails |
| `controllers/dataController.js` | Serves portfolio and about data |
| `controllers/projectController.js` | Manages project data |
| `controllers/certificateController.js` | Manages certificate data |
| `controllers/statsController.js` | Calculates and serves statistics |

### Utilities
| File | Purpose |
|------|---------|
| `utils/emailService.js` | Email sending with Nodemailer templates |

### Data Storage
| Folder | Purpose |
|--------|---------|
| `data/` | Stores contact messages and other data |
| `data/contacts.json` | Auto-created file storing all contact messages |

---

## 📚 Documentation Files

### Setup & Getting Started
| File | Purpose |
|------|---------|
| `QUICK_START.md` | ⭐ Start here - Quick setup steps |
| `BACKEND_SETUP.md` | Detailed backend setup and features |
| `BACKEND_README.md` | Comprehensive backend documentation |

### Technical Documentation
| File | Purpose |
|------|---------|
| `API_DOCUMENTATION.md` | Complete API endpoint reference with examples |
| `DEPLOYMENT.md` | Deployment guides for Heroku, AWS, DigitalOcean, etc. |
| `FILE_GUIDE.md` | This file - Overview of all files and purposes |

---

## 🚀 Getting Started - Step by Step

### 1️⃣ Installation
```bash
cd project
npm install
```

### 2️⃣ Configuration
```bash
# Copy and edit .env file
cp .env.example .env

# Add your Gmail app password
```

### 3️⃣ Start Backend
```bash
npm start
```

### 4️⃣ Open Frontend
- Open `index.html` in browser
- Or use local server: `python -m http.server 8000`

### 5️⃣ Test
- Fill contact form and submit
- Check email received
- Visit `admin.html` to see messages

---

## 📊 API Endpoints Overview

### Contact Management (5 endpoints)
```
POST   /api/contact/submit       Submit new contact
GET    /api/contact/messages     Get all messages
PUT    /api/contact/:id/read     Mark as read
DELETE /api/contact/:id          Delete message
```

### Portfolio Data (2 endpoints)
```
GET /api/data/portfolio          Get all portfolio data
GET /api/data/about              Get about information
```

### Projects (2 endpoints)
```
GET /api/projects                Get all projects
GET /api/projects/:id            Get specific project
```

### Certificates (2 endpoints)
```
GET /api/certificates            Get all certificates
GET /api/certificates/:id        Get specific certificate
```

### Statistics (2 endpoints)
```
GET /api/stats                   Get all statistics
GET /api/stats/:category         Get specific stat
```

**Total: 13 API Endpoints**

---

## 🎯 Key Features

### ✅ Contact Form Processing
- Form validation
- Email notifications (admin + user)
- Data storage in JSON
- Admin dashboard view
- Mark as read / Delete

### ✅ Portfolio Data API
- Personal information
- Skills (proficient + learning)
- Experience timeline
- Statistics
- Achievements
- Technologies

### ✅ Project Management
- View all projects
- Project details
- Filter by category
- Links to live projects

### ✅ Certificate Management
- View all certificates
- Certificate details
- Category organization
- Links to credentials

### ✅ Admin Dashboard
- Real-time message updates
- Message management
- Statistics overview
- Contact stats

---

## 📦 Dependencies

### Production Dependencies
```json
{
  "express": "4.18.2",
  "cors": "2.8.5",
  "dotenv": "16.0.3",
  "nodemailer": "6.9.3",
  "express-validator": "7.0.0",
  "uuid": "9.0.0"
}
```

### What Each Does
- **express** - Web server framework
- **cors** - Cross-origin resource sharing
- **dotenv** - Environment variables management
- **nodemailer** - Email sending
- **express-validator** - Input validation
- **uuid** - Generate unique IDs

---

## 🔐 Security Features

✅ CORS configuration
✅ Input validation
✅ Email validation
✅ Environment variables for secrets
✅ Error handling
✅ No exposed credentials
✅ Secure email templates

---

## 📈 What You Can Do Now

### Immediate
- ✅ Accept contact form submissions
- ✅ Send automated emails
- ✅ View all messages in admin dashboard
- ✅ Manage contact messages
- ✅ Serve portfolio data dynamically

### After Configuration
- ✅ Deploy to Heroku/AWS/DigitalOcean
- ✅ Use custom domain
- ✅ Enable SSL/HTTPS
- ✅ Scale to production

### Future Enhancements
- ☐ Add MongoDB database
- ☐ User authentication
- ☐ Advanced admin panel
- ☐ File uploads
- ☐ Email templates
- ☐ Newsletter system

---

## 🧪 Testing Checklist

- [ ] Backend runs: `npm start`
- [ ] Health check: `curl http://localhost:3000/api/health`
- [ ] Contact form works
- [ ] Email received
- [ ] Admin dashboard loads
- [ ] All API endpoints respond
- [ ] Frontend loads
- [ ] No console errors

---

## 📞 Quick Links

### Important URLs
- **API Base**: http://localhost:3000/api
- **Health Check**: http://localhost:3000/api/health
- **Portfolio**: http://localhost:8000/index.html
- **Admin**: http://localhost:8000/admin.html

### Important Files
- Configuration: `.env`
- Main Server: `server.js`
- Main Portfolio: `index.html`
- Admin Dashboard: `admin.html`

### Important Contacts
- **Email**: iamheresanjeev@gmail.com
- **LinkedIn**: https://linkedin.com/in/sanjeeveditor2008

---

## 🎓 Learning Path

### 1. Beginner
- Read `QUICK_START.md`
- Set up locally
- Test contact form
- Read `BACKEND_README.md`

### 2. Intermediate
- Read `API_DOCUMENTATION.md`
- Test all API endpoints
- Modify portfolio data
- Explore admin dashboard

### 3. Advanced
- Read `BACKEND_SETUP.md`
- Customize endpoints
- Add new features
- Deploy to production

### 4. Professional
- Read `DEPLOYMENT.md`
- Deploy to cloud
- Set up monitoring
- Implement security

---

## 🚀 Deployment Quick Links

- **Heroku**: https://www.heroku.com/
- **Railway**: https://railway.app/
- **Render**: https://render.com/
- **DigitalOcean**: https://www.digitalocean.com/
- **AWS**: https://aws.amazon.com/

---

## 📋 Troubleshooting

### Backend Won't Start
- Check Node.js installed: `node --version`
- Install dependencies: `npm install`
- Check port 3000 not in use

### Contact Form Not Working
- Backend running? Check `npm start`
- Check `.env` configuration
- Check browser console for errors
- Check network tab for failed requests

### Emails Not Sending
- Gmail: Verify app password correct
- Check `.env` EMAIL settings
- Enable 2-Step Verification on Gmail
- Check server console for errors

### Admin Dashboard Won't Load
- Backend must be running
- Check CORS errors
- Verify API endpoints accessible
- Check network tab

---

## 💡 Pro Tips

✅ Use `npm run dev` for auto-reload during development
✅ Test locally before deploying
✅ Keep `.env` file in `.gitignore`
✅ Backup `data/contacts.json` regularly
✅ Monitor server logs for errors
✅ Update dependencies regularly

---

## 📝 Files Created Today

✅ Backend: 19 files
✅ Frontend: 3 files (updated)
✅ Documentation: 5 files
✅ Configuration: 3 files
**Total: 30+ files**

---

## 🎉 Summary

You now have a **complete, production-ready portfolio website** with:

✅ Stunning frontend design
✅ Fully functional backend API
✅ Contact form management
✅ Email notifications
✅ Admin dashboard
✅ Comprehensive documentation
✅ Multiple deployment options

**Everything is ready to use!**

---

For detailed information, check the documentation files:
- 📖 `QUICK_START.md` - Start here
- 📖 `API_DOCUMENTATION.md` - API reference
- 📖 `DEPLOYMENT.md` - Deployment guide
- 📖 `BACKEND_SETUP.md` - Detailed setup

**Happy coding! 🚀**

---

*Last Updated: 2026-06-22*
*Portfolio Version: 2.0 (With Backend)*
