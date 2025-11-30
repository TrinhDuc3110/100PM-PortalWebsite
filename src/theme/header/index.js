import { memo } from "react";
import "./style.scss";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { ROUTERS } from "../../utils/router";

import { FaPhoneVolume } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa"; // 👉 avatar icon
import { FiSearch } from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const navigate = useNavigate();

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/find-job", label: "Find Job" },
    { to: "/candidates", label: "Candidates" },
    { to: "/support", label: "Customer Supports" },
  ];

  // Lấy token & tên user từ localStorage
  const token = localStorage.getItem("token");
  const fullName = localStorage.getItem("fullName");

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("fullName");
    navigate(ROUTERS.USER.SIGNIN);
  };

  return (
    <>
      {/* TOP BAR */}
      <div className="header_top">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            {/* LEFT NAV */}
            <nav className="header_nav">
              <ul className="d-flex align-items-center gap-4 mb-0">
                {navItems.map((item) => (
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

            {/* RIGHT: Phone + language */}
            <div className="d-flex align-items-center gap-4 header_top_right">
              <div className="d-flex align-items-center gap-2 top_phone">
                <FaPhoneVolume />
                <span>0123456789</span>
              </div>

              <div className="d-flex align-items-center gap-2 top_lang">
                <img
                  src="https://flagcdn.com/w20/vn.png"
                  alt="VN"
                  className="flag"
                />
                <span>English</span>
                <i className="fa fa-caret-down arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN BAR */}
      <div className="header_bottom">
        <div className="container">
          <div className="row align-items-center g-3">
            {/* LOGO */}
            <div className="col-12 col-md-3">
              <div className="header_logo d-flex align-items-center gap-2">
                <FaBriefcase className="logo_icon" />
                <span className="logo_text">JobPortal</span>
              </div>
            </div>

            {/* SEARCH */}
            <div className="col-12 col-md-5">
              <div className="header_search d-flex align-items-center">
                <button className="lang_btn d-flex align-items-center">
                  <img
                    className="flag"
                    src="https://flagcdn.com/w20/vn.png"
                    alt="VN"
                  />
                  <span className="code">VN</span>
                  <span className="caret">▾</span>
                </button>

                <FiSearch className="search_icon" />

                <input
                  type="text"
                  placeholder="Job title, keyword, company"
                  aria-label="Search jobs"
                />
              </div>
            </div>

            {/* RIGHT ACTIONS */}
            <div className="col-12 col-md-4 d-flex justify-content-end header_actions gap-2">
              {/* CHƯA LOGIN → hiện Sign In + Post A Jobs */}
              {!token && (
                <>
                  <button
                    className="btn btn-outline-primary header_btn"
                    onClick={() => navigate(ROUTERS.USER.SIGNIN)}
                  >
                    Sign In
                  </button>

                  <button
                    className="btn btn-primary header_btn"
                    onClick={() => navigate(ROUTERS.USER.CREATEACCOUNT)}
                  >
                    Post A Jobs
                  </button>
                </>
              )}

              {/* ĐÃ LOGIN → hiện avatar + tên + logout */}
              {token && (
                <>
                  <div className="d-flex align-items-center profile-wrapper">
                    <div className="profile-avatar">
                      <FaUserCircle size={28} />
                    </div>

                    <span className="ms-2 profile-name">
                      {fullName || "User"}
                    </span>
                  </div>

                  <button
                    className="btn btn-outline-primary header_btn"
                    onClick={handleLogout}
                  >
                    Log out
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Header);
