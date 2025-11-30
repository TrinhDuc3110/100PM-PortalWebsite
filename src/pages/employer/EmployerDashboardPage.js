// src/pages/employer/EmployerDashboardPage.js
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FiUsers, FiChevronRight, FiGrid, FiRefreshCw, FiPlusCircle, FiFileText, FiSettings, FiLogOut } from "react-icons/fi";
import "./employerDashboard.scss";
import { useNavigate } from "react-router-dom";
import { ROUTERS } from "../../utils/router";


const jobs = [
  { title: "UI/UX Designer", type: "Full time", remain: 27, apps: 99 },
  { title: "UI/UX Designer", type: "Full time", remain: 27, apps: 99 },
  { title: "UI/UX Designer", type: "Full time", remain: 27, apps: 99 },
  { title: "UI/UX Designer", type: "Full time", remain: 27, apps: 99 },
  { title: "UI/UX Designer", type: "Full time", remain: 27, apps: 99 },
];

const EmployerDashboardPage = () => {
      const navigate = useNavigate();

  return (
    <div className="container-fluid employer-dashboard-page">
      <div className="row">

        {/* ========== SIDEBAR TRÁI ========== */}
        <aside className="col-12 col-md-3 col-lg-2 emp-sidebar-wrapper">
          <div className="emp-sidebar">
            <div className="emp-sidebar-title">EMPLOYERS DASHBOARD</div>

        <ul className="emp-sidebar-menu">
          {/*  Dashboard page: Overview active */}
          <li
            className="emp-sidebar-item active"
            onClick={() => navigate(ROUTERS.EMPLOYER.DASHBOARD)}
          >
            <span className="emp-icon"><FiGrid /></span>
            <span>Overview</span>
          </li>

              <li className="emp-sidebar-item">
                <span className="emp-icon">
                  <FiRefreshCw />
                </span>
                <span>Employers Profile</span>
              </li>

              {/* POST A JOB → POST JOB PAGE */}
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

        {/* ========== BODY PHẢI (FIGMA BẠN GỬI) ========== */}
        <section className="col-12 col-md-9 col-lg-10">
          <div className="dashboard-wrapper">

            {/* TITLE */}
            <h2 className="dashboard-title">Hello , Employer</h2>
            <p className="dashboard-subtitle">
              Here is your daily activities and applications
            </p>

            {/* CARDS */}
            <div className="row g-3 mb-4 mt-3">
              <div className="col-12 col-md-6 col-xl-3">
                <div className="dash-card dash-blue">
                  <div className="dash-number">113</div>
                  <div className="dash-label">Open Jobs</div>
                  <div className="dash-icon dash-icon-blue">
                    {/* thay bằng image nếu bạn có */}
                    <FiGrid />
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-xl-3">
                <div className="dash-card dash-peach">
                  <div className="dash-number">630</div>
                  <div className="dash-label">Saved Candidates</div>
                  <div className="dash-icon dash-icon-peach">
                    <FiUsers />
                  </div>
                </div>
              </div>
            </div>

            {/* HEADER LIST */}
            <div className="list-header d-flex justify-content-between align-items-center">
              <div className="list-title">Recently Posted Jobs</div>

              <button className="btn-view-all">
                View all <FiChevronRight />
              </button>
            </div>

            {/* TABLE HEAD */}
            <div className="table-head d-none d-md-flex">
              <div className="col-job">Jobs</div>
              <div className="col-status">Status</div>
              <div className="col-app">Applications</div>
              <div className="col-actions">Actions</div>
            </div>

            {/* ROWS */}
            {jobs.map((job, i) => (
              <div key={i} className="table-row d-flex align-items-center">
                <div className="col-job">
                  <div className="job-title">{job.title}</div>
                  <div className="job-sub">
                    {job.type} <span>·</span> {job.remain}days remaning
                  </div>
                </div>

                <div className="col-status d-flex align-items-center gap-1">
                  <FaCheckCircle className="status-icon" />
                  <span className="status-text">Active</span>
                </div>

                <div className="col-app d-flex align-items-center gap-1">
                  <FiUsers className="apps-icon" />
                  {job.apps} Applications
                </div>

                <div className="col-actions d-flex justify-content-end">
                  <button className="btn-app"
                  onClick={() => navigate(ROUTERS.EMPLOYER.VIEWAPPLICATIONS)}>View Applications</button>
                </div>
              </div>
            ))}

          </div>
        </section>
      </div>
    </div>
  );
};

export default EmployerDashboardPage;
