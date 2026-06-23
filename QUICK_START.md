# Sanjeev M Portfolio - Quick Start Guide

## 📦 Project Overview

This is a complete portfolio website with:
- **Frontend**: Beautiful responsive HTML/CSS/JavaScript portfolio
- **Backend**: Node.js/Express API for data management and contact handling
- **Features**: Contact form, projects showcase, certifications, and more

## 🚀 Quick Start

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Configure Email (Optional but Recommended)
Edit `.env` file with your Gmail app password:
```
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_16_char_app_password
```

To get Gmail app password:
1. Go to https://myaccount.google.com/apppasswords
2. Select Mail and your device
3. Copy the 16-character password
4. Paste into `.env` as `EMAIL_PASSWORD`

### Step 3: Start Backend Server
```bash
npm start
```
Or with auto-reload:
```bash
npm run dev
```

Server will run on: `http://localhost:3000`

### Step 4: Open Frontend
Open `index.html` in your browser or serve it using a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server
```

## 📡 API Endpoints

### Contact Form
```bash
POST http://localhost:3000/api/contact/submit
```
**Body:**
```json
{
  "name": "Your Name",
  "email": "your@email.com",
  "message": "Your message here"
}
```

### Get Portfolio Data
```bash
GET http://localhost:3000/api/data/portfolio
```

### Get Projects
```bash
GET http://localhost:3000/api/projects
```

### Get Certificates
```bash
GET http://localhost:3000/api/certificates
```

### Get Statistics
```bash
GET http://localhost:3000/api/stats
```

## 📚 File Structure

```
project/
├── index.html              # Main portfolio page
├── api.js                  # Frontend API integration
├── server.js               # Express server
├── package.json            # Dependencies
├── .env                    # Environment variables
├── BACKEND_README.md       # Backend documentation
│
├── routes/                 # API routes
├── controllers/            # Business logic
├── utils/                  # Helper functions
└── data/                   # Data storage
```

## 🧪 Testing

### Test Contact Form
```bash
curl -X POST http://localhost:3000/api/contact/submit \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@test.com","message":"Hello"}'
```

### Test Getting Data
```bash
curl http://localhost:3000/api/data/portfolio
curl http://localhost:3000/api/projects
curl http://localhost:3000/api/certificates
```

## 📋 Checklist

- [ ] Node.js installed
- [ ] Dependencies installed (`npm install`)
- [ ] `.env` file configured
- [ ] Backend running (`npm start`)
- [ ] Frontend accessible
- [ ] Contact form working
- [ ] API endpoints responding

## 🔗 Links

- **Portfolio Resume**: https://drive.google.com/drive/folders/14NtOuxYFGLBPGtR4xCHm-DhUT_EnrqsT
- **Video Portfolio**: https://drive.google.com/drive/folders/1dMWGUD389PxxAwrftMkhnCxO9vpzurAp
- **Certificates**: https://drive.google.com/drive/folders/12VB6CPAuVJ_xKnKy8_25hoJz-1WZ9aom
- **LinkedIn**: https://linkedin.com/in/sanjeeveditor2008
- **Email**: iamheresanjeev@gmail.com

## ⚙️ Advanced Configuration

### Change Port
Edit `.env`:
```
PORT=5000
```

### Change Frontend URL
Edit `.env`:
```
FRONTEND_URL=https://yourdomain.com
```

### Enable Production Mode
Edit `.env`:
```
NODE_ENV=production
```

## 🐛 Troubleshooting

### Contact form not working?
- Check if backend is running on port 3000
- Check browser console for errors
- Verify `.env` configuration
- Check email configuration

### API returns 404?
- Make sure backend server is running
- Check endpoint URL is correct
- Verify routes are properly imported

### Email not sending?
- Gmail: Verify app password is correct
- Check `.env` EMAIL_USER and EMAIL_PASSWORD
- Verify 2-Step Verification is enabled on Gmail
- Check inbox and spam folder

## 📞 Support

For issues or questions:
- Email: iamheresanjeev@gmail.com
- LinkedIn: https://linkedin.com/in/sanjeeveditor2008

## 📄 License

All rights reserved © 2026 Sanjeev M

---

**Happy Coding! 🚀**
