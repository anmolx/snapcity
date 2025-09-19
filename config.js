// config.js
const config = {
  backendUrl: process.env.NODE_ENV === 'production' 
    ? window.location.origin 
    : 'http://localhost:5000'
};

// For Node.js environment
if (typeof module !== 'undefined' && module.exports) {
  module.exports = config;
}