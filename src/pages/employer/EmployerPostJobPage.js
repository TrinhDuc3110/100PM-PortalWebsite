import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ROUTERS } from "../../utils/router";

import {
  FiGrid,
  FiRefreshCw,
  FiPlusCircle,
  FiFileText,
  FiSettings,
} from "react-icons/fi";

import "./employerPostJobPage.scss";

const jobCategories = [
  "Software Development",
  "Data & AI",
  "Cybersecurity",
  "Cloud Computing",
  "IT Infrastructure / System",
  "Product",
  "Business & Project",
];

const benefitOptions = [
  "Async",
  "Distributed team",
  "Vision Insurance",
  "Dental Insurance",
  "Medical Insurance",
  "4 day workweek",
  "Company trip",
  "Company retreats",
  "Learning budget",
  "Free gym membership",
  "Profit sharing",
  "Equity compensation",
  "No whiteboard interview",
  "No politics at work",
];

const EmployerPostJobPage = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [selectedBenefits, setSelectedBenefits] = useState([]);

  const toggleBenefit = (tag) => {
    setSelectedBenefits((prev) =>
      prev.includes(tag) ? prev.filter((x) => x !== tag) : [...prev, tag]
    );
  };

  // xác định sidebar item nào đang active
  const isDashboard = pathname === ROUTERS.EMPLOYER.DASHBOARD;
  const isPostJob = pathname === ROUTERS.EMPLOYER.POST_JOB;

  return (
    <div className="container-fluid employer-dashboard-page">
      <div className="row">
        {/* ========== SIDEBAR ========== */}
        <aside className="col-12 col-md-3 col-lg-2 emp-sidebar-wrapper">
          <div className="emp-sidebar">
            <div className="emp-sidebar-title">EMPLOYERS DASHBOARD</div>

            <ul className="emp-sidebar-menu">
              <li
                className={`emp-sidebar-item ${
                  isDashboard ? "active" : ""
                }`}
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
                className={`emp-sidebar-item ${
                  isPostJob ? "active" : ""
                }`}
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

        {/* ========== BODY PHẢI ========== */}
        <section className="col-12 col-md-9 col-lg-10">
          <div className="postjob-wrapper">
            <h2 className="postjob-title">Post a job</h2>

            {/* Job Title */}
            <div className="mb-4">
              <label className="form-label postjob-label">Job Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Add job title, role, occupation etc ..."
              />
            </div>

            {/* Tag + Job Role */}
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label className="form-label postjob-label">Tag</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add tag, key skill ..."
                />
              </div>
              <div className="col-md-6">
                <label className="form-label postjob-label">Job Role</label>
                <select className="form-select">
                  <option>Select...</option>
                  {jobCategories.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Salary */}
            <div className="mb-2 postjob-section-title">Salary</div>
            <div className="row g-3 mb-4">
              <div className="col-md-4">
                <label className="form-label postjob-label">Min Salary</label>
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Minimum salary ..."
                  />
                  <span className="input-group-text">USD</span>
                </div>
              </div>

              <div className="col-md-4">
                <label className="form-label postjob-label">Max Salary</label>
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Maximum salary ..."
                  />
                  <span className="input-group-text">USD</span>
                </div>
              </div>

              <div className="col-md-4">
                <label className="form-label postjob-label">Salary Type</label>
                <select className="form-select">
                  <option>Select...</option>
                  <option>Monthly</option>
                  <option>Hourly</option>
                </select>
              </div>
            </div>

            {/* Advance Info */}
            <div className="mb-2 postjob-section-title">
              Advance Information
            </div>
            <div className="row g-3 mb-4">
              <div className="col-md-4">
                <label className="form-label postjob-label">Education</label>
                <select className="form-select">
                  <option>Select...</option>
                  <option>Bachelor Degree</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="col-md-4">
                <label className="form-label postjob-label">Experience</label>
                <select className="form-select">
                  <option>Select...</option>
                  <option>Internship</option>
                  <option>1+ year</option>
                </select>
              </div>

              <div className="col-md-4">
                <label className="form-label postjob-label">Job Type</label>
                <select className="form-select">
                  <option>Select...</option>
                  {jobCategories.map((i) => (
                    <option key={i}>{i}</option>
                  ))}
                </select>
              </div>

              <div className="col-md-4">
                <label className="form-label postjob-label">Vacancies</label>
                <input type="number" className="form-control" />
              </div>

              <div className="col-md-4">
                <label className="form-label postjob-label">
                  Expiration Date
                </label>
                <input type="date" className="form-control" />
              </div>

              <div className="col-md-4">
                <label className="form-label postjob-label">Job Level</label>
                <select className="form-select">
                  <option>Select...</option>
                  <option>Internship</option>
                  <option>Fresher</option>
                  <option>Junior</option>
                  <option>Senior</option>
                </select>
              </div>
            </div>

            {/* Location */}
            <div className="mb-2 postjob-section-title">Location</div>
            <div className="postjob-location-box mb-4">
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label postjob-label">Country</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Country"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label postjob-label">City</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City"
                  />
                </div>
              </div>

              <div className="form-check mt-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="remoteCheck"
                  defaultChecked
                />
                <label
                  className="form-check-label postjob-remote-label"
                  htmlFor="remoteCheck"
                >
                  Fully Remote Position · Worldwide
                </label>
              </div>
            </div>

            {/* Job Benefits */}
            <div className="mb-2 postjob-section-title">Job Benefits</div>
            <div className="postjob-tags mb-4">
              {benefitOptions.map((tag) => (
                <span
                  key={tag}
                  className={`postjob-tag ${
                    selectedBenefits.includes(tag) ? "active" : ""
                  }`}
                  onClick={() => toggleBenefit(tag)}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Job Description */}
            <div className="mb-4">
              <div className="mb-2 postjob-section-title">
                Job Description
              </div>
              <textarea
                className="form-control"
                rows="6"
                placeholder="Add job description ..."
              ></textarea>
            </div>

            {/* Apply On */}
            <div className="mb-3 postjob-section-title">Apply Job on:</div>

            <div className="row g-3 mb-4 postjob-apply-options">
              <div className="col-md-4">
                <div className="postjob-apply-card">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="applyOn"
                      id="applyJobportal"
                      defaultChecked
                    />
                    <label
                      className="form-check-label fw-semibold"
                      htmlFor="applyJobportal"
                    >
                      On JobPortal
                    </label>
                  </div>
                  <p className="postjob-apply-text">
                    Candidates will apply directly via JobPortal and you can
                    manage all applications here.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="postjob-apply-card">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="applyOn"
                      id="applyExternal"
                    />
                    <label
                      className="form-check-label fw-semibold"
                      htmlFor="applyExternal"
                    >
                      External Platform
                    </label>
                  </div>
                  <p className="postjob-apply-text">
                    Redirect candidates to your own career site or external job
                    board.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="postjob-apply-card">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="applyOn"
                      id="applyEmail"
                    />
                    <label
                      className="form-check-label fw-semibold"
                      htmlFor="applyEmail"
                    >
                      On Your Email
                    </label>
                  </div>
                  <p className="postjob-apply-text">
                    Receive all applications on your email instead of platform.
                  </p>
                </div>
              </div>
            </div>

            {/* Button */}
            <button className="btn btn-primary postjob-submit-btn">
              Post Job
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EmployerPostJobPage;
