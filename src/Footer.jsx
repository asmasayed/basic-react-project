
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* About Section */}
        <div className="footer-section about-section">
          <h3>About CareerAi</h3>
          <p>
            I created CareerAi to help students and professionals discover their ideal career paths 
            through personalized assessments. As someone who understands the challenges of choosing 
            the right career, I wanted to build a tool that provides meaningful guidance based on 
            your interests, skills, and aspirations.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/form">Take Assessment</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>

        {/* Connect Section */}
        <div className="footer-section connect-section">
          <h3>Connect With Me</h3>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/asma-sayed-248877348/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://github.com/asmasayed" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="https://x.com/SayedAsma4" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="mailto:sayedasma0@gmail.com">
              <i className="fas fa-envelope"></i> Email
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="bottom-content">
            <p className="made-with-love">
              Made with <span className="footer-heart">❤️</span> by <strong>Asma</strong>
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
}
