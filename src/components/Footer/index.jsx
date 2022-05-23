import './Footer.css';

function Footer() {
  return (
    <footer data-testid="footer">
      <div className="footer-left">
        <nav className="footer-nav">
          <a href="https://github.com/unamednada/"><img src="./images/github_icon.png" alt="github" /></a>
          <a href="https://www.linkedin.com/in/unamednada/"><img src="./images/linkedin_icon.png" alt="linkedin" /></a>
        </nav>
      </div>
      <div className="footer-right">
        <p>Created with React, CSS3 and loads of love</p>
      </div>
    </footer>
  );
}

export default Footer;
