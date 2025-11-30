// src/pages/employer/EmployerApplicationsPage.jsx
import React from "react";
import {
  FiGrid,
  FiRefreshCw,
  FiPlusCircle,
  FiFileText,
  FiSettings,
  FiDownload,
  FiPlus,
} from "react-icons/fi";
import "./employerApplicationsPage.scss";
import { useNavigate } from "react-router-dom";
import { ROUTERS } from "../../utils/router";

// 👉 Đổi path avatar cho đúng với project của bạn
import viewApplication from "../../assets/employer/view_application.png";

const CandidateCard = () => {
  return (
    <div className="candidate-card">
      <div className="candidate-header">
        <div className="candidate-avatar">
          <img src={viewApplication} alt="Man" />
        </div>
        <div className="candidate-main">
          <div className="candidate-name">Man</div>
          <div className="candidate-role">User Experience Designer</div>
        </div>
      </div>

      <div className="candidate-divider" />

      <ul className="candidate-meta">
        <li>7 Months Experience</li>
        <li>Education: Master Degree</li>
        <li>Applied: Nov 23, 2025</li>
      </ul>

      <div className="candidate-footer">
        <a href="#download" className="download-link">
          <FiDownload />
          <span>Download Cv</span>
        </a>
      </div>
    </div>
  );
};

const EmployerApplicationsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid employer-dashboard-page">
      <div className="row">
        {/* ========== SIDEBAR TRÁI – GIỮ NGUYÊN ========== */}
        <aside className="col-12 col-md-3 col-lg-2 emp-sidebar-wrapper">
          <div className="emp-sidebar">
            <div className="emp-sidebar-title">EMPLOYERS DASHBOARD</div>

            <ul className="emp-sidebar-menu">
              <li
                className="emp-sidebar-item"
                onClick={() => navigate(ROUTERS.EMPLOYER.DASHBOARD)}
              >
                <span className="emp-icon">
                  <FiGrid />
                </span>
                <span>Overview</span>
              </li>

              <li className="emp-sidebar-item">
                <span className="emp-icon">
                  <FiRefreshCw />
                </span>
                <span>Employers Profile</span>
              </li>

              <li
                className="emp-sidebar-item"
                onClick={() => navigate(ROUTERS.EMPLOYER.POST_JOB)}
              >
                <span className="emp-icon">
                  <FiPlusCircle />
                </span>
                <span>Post a job</span>
              </li>

              <li className="emp-sidebar-item">
                <span className="emp-icon">
                  <FiFileText />
                </span>
                <span>Plans & Billing</span>
              </li>

              <li className="emp-sidebar-item">
                <span className="emp-icon">
                  <FiSettings />
                </span>
                <span>Setting</span>
              </li>
            </ul>
          </div>
        </aside>

        {/* ========== BODY PHẢI: JOB APPLICATIONS ========== */}
        <section className="col-12 col-md-9 col-lg-10 apps-main-col">
          <div className="applications-wrapper">
            {/* Breadcrumb */}
            <div className="breadcrumb-app">
              <span>Dashboard</span>
              <span className="slash">/</span>
              <span>Job</span>
              <span className="slash">/</span>
              <span>UI/UX Designer</span>
              <span className="slash">/</span>
              <span className="current">View Applications</span>
            </div>

            {/* Title + Filter / Sort */}
            <div className="apps-header">
              <h2 className="applications-title">Job Applications</h2>

              <div className="apps-header-actions">
                <button className="btn-text-filter">Filter</button>
                <button className="btn-sort-primary">Sort</button>
              </div>
            </div>

            {/* 3 Column: All Applications / Shortlisted / Create */}
            <div className="row g-4 apps-columns-row">
              {/* Column 1: All Application */}
              <div className="col-12 col-lg-4">
                <div className="app-column">
                  <div className="app-column-header">
                    <span className="column-title">All Application (99)</span>
                    <span className="dots">•••</span>
                  </div>

                  <CandidateCard />
                  <CandidateCard />
                </div>
              </div>

              {/* Column 2: Shortlisted */}
              <div className="col-12 col-lg-4">
                <div className="app-column">
                  <div className="app-column-header">
                    <span className="column-title">Shortlisted (99)</span>
                    <span className="dots">•••</span>
                  </div>

                  <CandidateCard />
                  <CandidateCard />
                </div>
              </div>

              {/* Column 3: Create */}
              <div className="col-12 col-lg-4">
                <div className="app-column create-column">
                  <button className="create-btn">
                    <div className="create-icon-circle">
                      <FiPlus />
                    </div>
                    <span className="create-text">Create</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EmployerApplicationsPage;
