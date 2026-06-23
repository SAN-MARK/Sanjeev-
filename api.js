/**
 * Sanjeev M Portfolio - Frontend API Integration
 * Handles all API calls and dynamic content loading
 */

const API_BASE_URL = 'http://localhost:3000/api';

// ============================================
// Portfolio Data Loading
// ============================================

export const PortfolioAPI = {
  // Get portfolio data
  getPortfolioData: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/data/portfolio`);
      const data = await response.json();
      if (data.success) {
        return data.data;
      }
      throw new Error(data.message);
    } catch (error) {
      console.error('Error fetching portfolio data:', error);
      return null;
    }
  },

  // Get about info
  getAboutInfo: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/data/about`);
      const data = await response.json();
      if (data.success) {
        return data.data;
      }
      throw new Error(data.message);
    } catch (error) {
      console.error('Error fetching about info:', error);
      return null;
    }
  },

  // Get all projects
  getProjects: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/projects`);
      const data = await response.json();
      if (data.success) {
        return data.projects;
      }
      throw new Error(data.message);
    } catch (error) {
      console.error('Error fetching projects:', error);
      return [];
    }
  },

  // Get specific project
  getProject: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/projects/${id}`);
      const data = await response.json();
      if (data.success) {
        return data.project;
      }
      throw new Error(data.message);
    } catch (error) {
      console.error(`Error fetching project ${id}:`, error);
      return null;
    }
  },

  // Get all certificates
  getCertificates: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/certificates`);
      const data = await response.json();
      if (data.success) {
        return data.certificates;
      }
      throw new Error(data.message);
    } catch (error) {
      console.error('Error fetching certificates:', error);
      return [];
    }
  },

  // Get statistics
  getStats: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/stats`);
      const data = await response.json();
      if (data.success) {
        return data.stats;
      }
      throw new Error(data.message);
    } catch (error) {
      console.error('Error fetching stats:', error);
      return {};
    }
  }
};

// ============================================
// Contact Management
// ============================================

export const ContactAPI = {
  // Submit contact form
  submit: async (name, email, message) => {
    try {
      const response = await fetch(`${API_BASE_URL}/contact/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message })
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error submitting contact:', error);
      return {
        success: false,
        message: 'Failed to send message'
      };
    }
  },

  // Get all messages (admin)
  getMessages: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/contact/messages`);
      const data = await response.json();
      if (data.success) {
        return data.contacts;
      }
      throw new Error(data.message);
    } catch (error) {
      console.error('Error fetching messages:', error);
      return [];
    }
  },

  // Mark message as read (admin)
  markAsRead: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/contact/${id}/read`, {
        method: 'PUT'
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error marking message as read:', error);
      return { success: false };
    }
  },

  // Delete message (admin)
  delete: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/contact/${id}`, {
        method: 'DELETE'
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error deleting message:', error);
      return { success: false };
    }
  }
};

// ============================================
// UI Utilities
// ============================================

export const UIUtils = {
  // Show notification
  showNotification: (message, type = 'success', duration = 5000) => {
    const notification = document.createElement('div');
    
    const bgColor = type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3';
    const icon = type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ';

    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${bgColor};
      color: white;
      padding: 20px 25px;
      border-radius: 10px;
      z-index: 10000;
      font-weight: 600;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
      animation: slideIn 0.3s ease-out;
      max-width: 400px;
    `;

    notification.textContent = `${icon} ${message}`;
    document.body.appendChild(notification);

    setTimeout(() => notification.remove(), duration);
  },

  // Show loading spinner
  showLoader: (parent) => {
    const loader = document.createElement('div');
    loader.style.cssText = `
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 3px solid rgba(255, 215, 0, 0.3);
      border-top: 3px solid #FFD700;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    `;
    parent.appendChild(loader);
    return loader;
  },

  // Format date
  formatDate: (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  },

  // Format ISO date to readable format
  formatISODate: (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
};

// ============================================
// Dynamic Content Rendering
// ============================================

export const ContentRenderer = {
  // Render projects
  renderProjects: (projects, container) => {
    container.innerHTML = '';
    projects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';
      projectCard.innerHTML = `
        <div class="project-image">${project.category}</div>
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          ${project.status === 'in-progress' ? '<span class="project-status">In Progress</span>' : ''}
          <p class="project-desc">${project.description}</p>
          <div class="project-tools">
            ${project.tools.map(tool => `<span class="tool-tag">${tool}</span>`).join('')}
          </div>
          <a href="${project.liveLink}" target="_blank">View Project →</a>
        </div>
      `;
      container.appendChild(projectCard);
    });
  },

  // Render certificates
  renderCertificates: (certificates, container) => {
    container.innerHTML = '';
    certificates.forEach(cert => {
      const certBadge = document.createElement('div');
      certBadge.className = 'cert-badge';
      certBadge.innerHTML = `<div class="cert-badge-text">${cert.title}</div>`;
      container.appendChild(certBadge);
    });
  },

  // Render skills
  renderSkills: (skills, container) => {
    container.innerHTML = '';
    skills.forEach(skill => {
      const skillBadge = document.createElement('span');
      skillBadge.className = 'skill-badge filled';
      skillBadge.textContent = skill;
      container.appendChild(skillBadge);
    });
  }
};

// ============================================
// Initialization
// ============================================

export const initializePortfolio = async () => {
  try {
    console.log('Loading portfolio data...');
    
    const portfolio = await PortfolioAPI.getPortfolioData();
    if (portfolio) {
      console.log('Portfolio data loaded:', portfolio);
      // You can use this data to update your page dynamically
    }

    const stats = await PortfolioAPI.getStats();
    if (stats) {
      console.log('Statistics loaded:', stats);
    }

    console.log('Portfolio initialization complete');
  } catch (error) {
    console.error('Portfolio initialization error:', error);
  }
};

// Add CSS animation for notifications
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
document.head.appendChild(style);

export default {
  PortfolioAPI,
  ContactAPI,
  UIUtils,
  ContentRenderer,
  initializePortfolio
};
