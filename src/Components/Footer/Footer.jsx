import React from 'react'
import './Footer.css'
function Footer() {
  return (
      <div style={{height:"max-content"}}>
      <footer className="footer">
          <div className="footer-content">
              <p>© 2024 Amul. All rights reserved.</p>
              <p>
                  <a href="https://amul.com/privacy-policy">Privacy Policy</a>
                  <a href="https://amul.com/terms-of-service">Terms of Service</a>
              </p>
              <p>
                  Follow us on:
                  <a href="https://www.facebook.com/website" target="_blank" rel="noreferrer">
                      Facebook
                  </a>
                  ,{" "}
                  <a href="https://www.twitter.com/website" target="_blank" rel="noreferrer">
                      Twitter
                  </a>
                  ,
                  <a href="https://www.instagram.com/website" target="_blank" rel="noreferrer">
                      Instagram
                  </a>
              </p>
          </div>
      </footer>
      </div>

  )
}

export default Footer
