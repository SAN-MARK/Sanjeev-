# Sanjeev M Portfolio - Backend API

A comprehensive Node.js/Express backend API for managing a professional portfolio website with contact management, project showcase, and email notifications.

## 🚀 Features

- ✅ **Contact Form Management** - Receive and store contact messages
- ✅ **Email Notifications** - Automated email responses to visitors
- ✅ **Portfolio Data API** - Serve dynamic portfolio content
- ✅ **Project Management** - API endpoints for projects and case studies
- ✅ **Certificate Management** - Manage and serve certificate data
- ✅ **Statistics API** - Portfolio statistics and metrics
- ✅ **CORS Enabled** - Secure cross-origin requests
- ✅ **Error Handling** - Comprehensive error management
- ✅ **Data Persistence** - JSON file storage for contacts

## 📋 API Endpoints

### Contact Endpoints
```
POST   /api/contact/submit        - Submit contact form
GET    /api/contact/messages      - Get all contact messages
PUT    /api/contact/:id/read      - Mark message as read
DELETE /api/contact/:id           - Delete contact message
```

### Portfolio Data Endpoints
```
GET /api/data/portfolio  - Get all portfolio data
GET /api/data/about      - Get about information
```

### Projects Endpoints
```
GET /api/projects       - Get all projects
GET /api/projects/:id   - Get specific project
```

### Certificates Endpoints
```
GET /api/certificates    - Get all certificates
GET /api/certificates/:id - Get specific certificate
```

### Statistics Endpoints
```
GET /api/stats           - Get all statistics
GET /api/stats/:category - Get specific stat category
```

## 🛠️ Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup Steps

1. **Clone/Download the project**
```bash
cd b:\NoviTech\FullStack\Day 4\project
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
```bash
# Copy .env.example to .env
cp .env.example .env

# Edit .env with your configuration
```

4. **Start the server**
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

The server will start on `http://localhost:3000`

## 📧 Email Configuration

### Using Gmail

1. **Enable 2-Step Verification**
   - Go to https://myaccount.google.com/
   - Select "Security" from the left menu
   - Enable 2-Step Verification

2. **Create App Password**
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Windows Computer" (or your device)
   - Google will generate a 16-character password
   - Copy this password to `.env` as `EMAIL_PASSWORD`

3. **Update .env**
```
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_16_character_app_password
```

## 📁 Project Structure

```
project/
├── server.js                 # Main Express server
├── package.json             # Dependencies
├── .env                     # Environment variables
├── .env.example             # Example env file
│
├── routes/                  # API route handlers
│   ├── contact.js
│   ├── data.js
│   ├── projects.js
│   ├── certificates.js
│   └── stats.js
│
├── controllers/             # Business logic
│   ├── contactController.js
│   ├── dataController.js
│   ├── projectController.js
│   ├── certificateController.js
│   └── statsController.js
│
├── utils/                   # Utility functions
│   └── emailService.js
│
├── data/                    # Data storage
│   └── contacts.json
│
└── public/                  # Static files (future)
```

## 🔌 API Usage Examples

### Submit Contact Form
```bash
curl -X POST http://localhost:3000/api/contact/submit \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "message": "I would like to collaborate on a project"
  }'
```

### Get Portfolio Data
```bash
curl http://localhost:3000/api/data/portfolio
```

### Get All Projects
```bash
curl http://localhost:3000/api/projects
```

### Get Specific Project
```bash
curl http://localhost:3000/api/projects/1
```

### Get All Certificates
```bash
curl http://localhost:3000/api/certificates
```

### Get Statistics
```bash
curl http://localhost:3000/api/stats
```

## 🎯 Frontend Integration

### Update Frontend to Use API

Replace the contact form submission in your HTML with:

```javascript
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  try {
    const response = await fetch('http://localhost:3000/api/contact/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message })
    });

    const data = await response.json();

    if (data.success) {
      alert(data.message);
      contactForm.reset();
    } else {
      alert('Error: ' + data.message);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to send message');
  }
});
```

### Load Portfolio Data Dynamically

```javascript
async function loadPortfolioData() {
  try {
    const response = await fetch('http://localhost:3000/api/data/portfolio');
    const data = await response.json();
    
    if (data.success) {
      const portfolio = data.data;
      // Use portfolio data to update UI
      console.log(portfolio);
    }
  } catch (error) {
    console.error('Error loading portfolio:', error);
  }
}

loadPortfolioData();
```

## 📊 Data Files

### Contacts Storage (`data/contacts.json`)
Contact form submissions are stored in this file with:
- Unique ID
- Name, Email, Message
- Timestamp
- Read status
- Current status

## 🚨 Error Handling

The API returns consistent error responses:

```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error (development only)"
}
```

## 🔒 Security Considerations

- ✅ CORS is configured to allow requests from specified origins
- ✅ Input validation on contact form submissions
- ✅ Email addresses are validated
- ✅ Environment variables keep sensitive data secure
- ⚠️ In production, implement authentication for admin endpoints
- ⚠️ Use HTTPS for all communications
- ⚠️ Implement rate limiting on contact endpoint

## 📈 Future Enhancements

- [ ] MongoDB integration for data persistence
- [ ] Authentication system for admin dashboard
- [ ] Advanced email templates
- [ ] SendGrid/Mailgun integration
- [ ] Analytics tracking
- [ ] File upload for projects and certificates
- [ ] Newsletter subscription
- [ ] Comment system for projects
- [ ] Social media integration
- [ ] Admin dashboard

## 🧪 Testing the API

### Using Postman
1. Import the API endpoints
2. Set up environment variables
3. Test each endpoint

### Using Thunder Client
1. Create a new request
2. Enter the endpoint URL
3. Set method and body
4. Send request

## 📝 License

This project is part of Sanjeev M's portfolio. All rights reserved.

## 💬 Support

For issues or questions, contact: iamheresanjeev@gmail.com

---

**Built with ❤️ using Node.js + Express**
