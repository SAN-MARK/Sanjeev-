# Deployment Guide - Sanjeev M Portfolio

## 🚀 Deployment Options

### Option 1: Heroku (Recommended for Beginners)

#### Prerequisites
- Heroku account (free)
- Git installed
- Heroku CLI installed

#### Steps

1. **Login to Heroku**
```bash
heroku login
```

2. **Create Heroku App**
```bash
heroku create your-app-name
```

3. **Set Environment Variables**
```bash
heroku config:set NODE_ENV=production
heroku config:set EMAIL_USER=your_email@gmail.com
heroku config:set EMAIL_PASSWORD=your_app_password
heroku config:set FRONTEND_URL=https://your-app-name.herokuapp.com
```

4. **Add Procfile**
Create `Procfile` in root directory:
```
web: node server.js
```

5. **Deploy**
```bash
git push heroku main
```

6. **View Logs**
```bash
heroku logs --tail
```

---

### Option 2: Railway.app (Simple & Modern)

#### Steps

1. Go to [railway.app](https://railway.app)
2. Connect your GitHub repository
3. Add environment variables in dashboard
4. Deploy automatically

---

### Option 3: Render.com

#### Steps

1. Go to [render.com](https://render.com)
2. Create new Web Service
3. Connect GitHub
4. Add environment variables
5. Deploy

---

### Option 4: DigitalOcean (Full Control)

#### Prerequisites
- DigitalOcean account
- SSH key setup
- Basic Linux knowledge

#### Steps

1. **Create Droplet**
   - Select Ubuntu 22.04
   - Minimum 512MB RAM
   - Choose region closest to you

2. **Connect via SSH**
```bash
ssh root@your_droplet_ip
```

3. **Install Node.js**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

4. **Install PM2**
```bash
sudo npm install -g pm2
```

5. **Clone Repository**
```bash
git clone your-repo-url
cd your-project
npm install
```

6. **Create .env File**
```bash
nano .env
```

7. **Start with PM2**
```bash
pm2 start server.js --name "portfolio-api"
pm2 save
pm2 startup
```

8. **Setup Nginx Reverse Proxy**
```bash
sudo apt-get install nginx
sudo nano /etc/nginx/sites-available/default
```

Add configuration:
```nginx
upstream portfolio_api {
    server localhost:3000;
}

server {
    listen 80 default_server;
    server_name your-domain.com;

    location / {
        proxy_pass http://portfolio_api;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

9. **Enable SSL with Let's Encrypt**
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

---

### Option 5: AWS (Scalable)

#### Using Elastic Beanstalk

1. **Install EB CLI**
```bash
pip install awsebcli
```

2. **Initialize**
```bash
eb init -p "Node.js 18 running on 64bit Amazon Linux 2" portfolio
```

3. **Create Environment**
```bash
eb create production
```

4. **Deploy**
```bash
eb deploy
```

5. **Set Environment Variables**
```bash
eb setenv NODE_ENV=production EMAIL_USER=... EMAIL_PASSWORD=...
```

---

## 📋 Pre-Deployment Checklist

- [ ] All dependencies in `package.json`
- [ ] `.env` file configured
- [ ] `.gitignore` includes `.env`
- [ ] `Procfile` created (for Heroku)
- [ ] Server runs locally without errors
- [ ] All API endpoints tested
- [ ] Contact form working
- [ ] Emails sending correctly
- [ ] Admin dashboard accessible
- [ ] Frontend points to correct API URL

---

## 🔐 Production Security

### 1. Environment Variables
```bash
NODE_ENV=production
PORT=3000
FRONTEND_URL=https://yourdomain.com
EMAIL_USER=your_email
EMAIL_PASSWORD=your_password
```

### 2. CORS Configuration
Update `.env`:
```
FRONTEND_URL=https://yourdomain.com
```

Update `server.js`:
```javascript
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));
```

### 3. HTTPS
- Always use HTTPS in production
- Get SSL certificate (Let's Encrypt free)
- Redirect HTTP to HTTPS

### 4. Rate Limiting
Add rate limiting middleware:
```javascript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

app.use(limiter);
```

---

## 📊 Monitoring & Maintenance

### Uptime Monitoring
- Use Uptime Robot (free)
- Monitor `/api/health` endpoint
- Alert on downtime

### Error Tracking
- Use Sentry for error tracking
- Set up email alerts

### Logs
- Keep logs for debugging
- Archive old logs
- Monitor disk space

---

## 📈 Performance Tips

### 1. Enable Compression
```javascript
import compression from 'compression';
app.use(compression());
```

### 2. Cache Responses
```javascript
app.get('/api/projects', (req, res) => {
  res.set('Cache-Control', 'public, max-age=3600');
  // ...
});
```

### 3. Database Indexing
If using MongoDB:
```javascript
// Create indexes
db.collection('contacts').createIndex({ email: 1 });
db.collection('contacts').createIndex({ timestamp: -1 });
```

### 4. CDN for Static Files
- Use CloudFlare for free CDN
- Cache images and assets

---

## 🆘 Troubleshooting Deployment

### App Crashes on Startup
```bash
# Check logs
heroku logs --tail

# Check package.json main file
# Ensure server.js is correct
```

### Port Already in Use
```bash
# Find process on port 3000
lsof -i :3000

# Kill process
kill -9 <PID>
```

### Environment Variables Not Working
```bash
# Verify variables are set
heroku config

# Re-set if needed
heroku config:set NODE_ENV=production
```

### Database Connection Issues
- Verify connection string
- Check network access
- Ensure credentials are correct

---

## 📞 Getting Help

- **Heroku Docs**: https://devcenter.heroku.com/
- **Railway Docs**: https://docs.railway.app/
- **DigitalOcean Guides**: https://www.digitalocean.com/community/tutorials
- **AWS Documentation**: https://docs.aws.amazon.com/

---

## 🎯 Post-Deployment

1. **Test all endpoints**
   ```bash
   curl https://yourdomain.com/api/health
   ```

2. **Update frontend URL**
   - Change `API_BASE_URL` in frontend

3. **Test contact form**
   - Submit test message
   - Verify email received
   - Check admin dashboard

4. **Setup monitoring**
   - Uptime alerts
   - Error tracking
   - Performance monitoring

5. **Custom domain**
   - Point DNS to deployment
   - Verify SSL certificate

---

## 💡 Tips for Success

✅ **Start Small** - Deploy on free tier first
✅ **Test Thoroughly** - Test all features before production
✅ **Monitor Closely** - Watch logs and errors
✅ **Backup Data** - Regular backups of contacts
✅ **Keep Updated** - Update dependencies regularly
✅ **Document Changes** - Keep changelog
✅ **Have Plan B** - Know your rollback strategy

---

**Happy Deploying! 🚀**

For more help:
📧 iamheresanjeev@gmail.com
🔗 https://linkedin.com/in/sanjeeveditor2008
