import { memo } from "react";
import './style.scss';
import { NavLink } from "react-router-dom";

import { FaPhoneVolume } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";


const Header = () => { 
   return (
    <>
    <div className="header_top">
      <div className="container">
        <div className="row">
          {/* Bên trái: Navigation */}
          <div className="col-6">
            <nav className="header_nav">
              <ul>
                {[
                  { to: "/", label: "Home" },
                  { to: "/find-job", label: "Find Job" },
                  { to: "/employers", label: "Employers" },
                  { to: "/candidates", label: "Candidates" },
                  { to: "/pricing", label: "Pricing Plans" },
                  { to: "/support", label: "Customer Supports" },
                ].map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        isActive ? "nav_link active" : "nav_link"
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Bên phải */}
          <div className="col-6 header_top_right">
            <ul>
              <li>
                <FaPhoneVolume />
                <span className="phone-text">Phone Number</span>
              </li>
              <li>
                <img
                  src="https://flagcdn.com/w20/vn.png"
                  alt="Vietnam Flag"
                  className="flag"
                />
                <span>English</span>
                <i className="fa fa-caret-down arrow"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="header_bottom">
      <div className="container">
        <div className="row header_bar">
          {/* LEFT: Logo */}
          <div className="col-xl-3 col-6">
            <div className="header_logo">
              <FaBriefcase className="logo_icon" />
              <span className="logo_text">JobPortal</span>
            </div>
          </div>

          {/* CENTER: Lang + Search */}
          <div className="col-xl-6 col-12">
            <div className="searchbar">
              <button className="lang">
                <img
                  className="flag"
                  src="https://flagcdn.com/w20/vn.png"
                  alt="VN"
                />
                <span className="code">VN</span>
                <span className="arrow">▼</span>
              </button>

              <FiSearch className="search_icon" />
              <input
                type="text"
                placeholder="Job title, keyword, company"
                aria-label="Search jobs"
              />
            </div>
          </div>

          {/* RIGHT: Actions */}
          <div className="col-xl-3 col-6">
            <div className="right_actions">
              <button className="btn btn-outline">Sign In</button>
              <button className="btn btn-primary">Post A Jobs</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default memo(Header);
