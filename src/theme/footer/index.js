import { memo } from "react";
import { FaArrowRight } from "react-icons/fa";
import "./style.scss";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Cột 1 */}
          <div className="footer_col">
            <h1 className="footer_logo">
              <i className="fa-solid fa-briefcase"></i> JobPortal
            </h1>
            <ul>
              <li>
                <span>Call now:</span> 1900-000
              </li>
              <li>
                Quarter 6, Linh Trung Ward, Thu Duc City, Ho Chi Minh City,
                Vietnam
              </li>
            </ul>
          </div>

          {/* Cột 2 */}
          <div className="footer_col">
            <h4>Quick Link</h4>
            <ul>
              <li>About</li>
              <li>
                <FaArrowRight className="arrow" /> Contact
              </li>
              <li>Pricing</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Cột 3 */}
          <div className="footer_col">
            <h4>Candidate</h4>
            <ul>
              <li>Browse Jobs</li>
              <li>Browse Employers</li>
              <li>Candidate Dashboard</li>
              <li>Saved Jobs</li>
            </ul>
          </div>

          {/* Cột 4 */}
          <div className="footer_col">
            <h4>Employers</h4>
            <ul>
              <li>Post a Job</li>
              <li>Browse Candidates</li>
              <li>Employers Dashboard</li>
              <li>Applications</li>
            </ul>
          </div>

          {/* Cột 5 */}
          <div className="footer_col">
            <h4>Support</h4>
            <ul>
              <li>Faqs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="footer_bottom">
        <div className="container footer_bottom_container">
          <p>© 2025 JobPortal - Job Portal. All rights Reserved</p>
          <div className="footer_socials">
            <FaFacebookF />
            <FaYoutube />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
