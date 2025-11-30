import React, { useState } from "react";                  // 👈 thêm useState
import "./JobDetail.css";
import fbLogo from "../../../assets/users/images/Rectangle 43.png";
import bookmarkIcon from "../../../assets/users/images/BookmarkSimple.png";
import { Link } from "react-router-dom";

// Tạm thời fake cứng, sau này có thể lấy từ API / state / useLocation
const JOB_TITLE = "Senior UX Designer";
const COMPANY_NAME = "Facebook";

const JobDetail = () => {
  // trạng thái đã lưu / chưa lưu
  const [saved, setSaved] = useState(false);

  return (
    <main className="job-detail-page">
      {/* ===== TOP BAR: JOB DETAILS + BREADCRUMB ===== */}
      <section className="job-detail-topbar">
        <div className="container job-detail-topbar__inner">
          <h2 className="job-detail-topbar__title">Job Details</h2>

          <nav className="job-detail-breadcrumb">
            <Link to="/">Home</Link>
            <span className="separator">/</span>
            <Link to="/find-job">Find Job</Link>
            <span className="separator">/</span>
            <span className="current">{JOB_TITLE}</span>
          </nav>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <div className="container job-detail-shell">
        {/* HEADER */}
        <header className="job-detail-header">
          <div className="job-detail-header-left">
            <div className="job-detail-logo">
              <img src={fbLogo} alt={COMPANY_NAME} />
            </div>

            <div className="job-detail-title-block">
              <h1 className="job-detail-title">{JOB_TITLE}</h1>

              {/* at Facebook + badge cùng 1 hàng */}
              <div className="job-detail-company-row">
                <p className="job-detail-company">
                  at <span>{COMPANY_NAME}</span>
                </p>

                <span className="badge badge-type">FULL-TIME</span>
                <span className="badge badge-featured">Featured</span>
              </div>
            </div>
          </div>

          <div className="job-detail-header-right">
            {/* Nút tròn chứa icon bookmark – toggle xanh giống FindJob */}
            <button
              className={`bookmark-btn ${saved ? "is-saved" : ""}`}
              type="button"
              onClick={() => setSaved(prev => !prev)}
            >
              <img src={bookmarkIcon} alt={saved ? "Unsave job" : "Save job"} />
            </button>

            {/* Nút Apply Now to, ít bo góc + có mũi tên */}
            <button className="apply-btn" type="button">
              <span>Apply Now</span>
              <span className="apply-arrow">→</span>
            </button>
          </div>
        </header>

        <div className="job-detail-layout">
          {/* LEFT: DESCRIPTION */}
          <section className="job-detail-left">
            <h2 className="section-title">Job Description</h2>
            <p>
              At Facebook, we&apos;re not just creating products — we&apos;re
              designing exceptional digital experiences that connect millions of
              people worldwide. Our team of designers, developers and innovators
              work together to craft user-focused solutions that drive real
              impact.
            </p>
            <p>
              As a Senior UX Designer, you will transform design concepts into
              test-driven, scalable and maintainable solutions. Working closely
              with product managers, engineers and other designers, you&apos;ll
              play a key role in shaping intuitive user journeys and delivering
              outstanding design systems for our global audience.
            </p>

            <h3 className="sub-title">Requirements</h3>
            <ul className="dot-list">
              <li>
                Great troubleshooting and analytical skills combined with the
                desire to tackle challenges head-on.
              </li>
              <li>
                3+ years of experience in design or UX roles within fast-paced
                product teams.
              </li>
              <li>
                Strong experience with design tools such as Figma, Sketch or
                Adobe XD.
              </li>
              <li>
                Solid understanding of design systems, component libraries and
                responsive UI patterns.
              </li>
              <li>
                Experience collaborating with engineers and product managers in
                an Agile environment.
              </li>
            </ul>

            <h3 className="sub-title">Desirable</h3>
            <ul className="dot-list">
              <li>
                Experience with e-commerce or large-scale consumer products.
              </li>
              <li>
                Ability to run usability testing sessions and user interviews.
              </li>
              <li>
                Basic knowledge of HTML/CSS to communicate effectively with
                developers.
              </li>
              <li>
                Passion for data-driven design and A/B testing.
              </li>
            </ul>

            <h3 className="sub-title">Benefits</h3>
            <ul className="dot-list">
              <li>Flexible working hours and hybrid working policy.</li>
              <li>25 days annual leave, plus public holidays.</li>
              <li>Competitive salary with yearly performance bonus.</li>
              <li>Health insurance and wellness budget.</li>
              <li>
                Learning &amp; development budget for courses, books and
                conferences.
              </li>
              <li>
                Join an open, supportive team that loves building meaningful
                products.
              </li>
            </ul>
          </section>

          {/* RIGHT: SIDEBAR */}
          <aside className="job-detail-right">
            {/* Salary + location card */}
            <div className="detail-card salary-card">
              <div className="salary-col">
                <p className="card-label">Salary (USD)</p>
                <p className="salary-value">$100,000 - $120,000</p>
                <p className="salary-note">Yearly salary</p>
              </div>
              <div className="divider" />
              <div className="salary-col">
                <p className="card-label">Job Location</p>
                <p className="card-main-text">HCMC, Vietnam</p>
              </div>
            </div>

            {/* Job overview card */}
            <div className="detail-card overview-card">
              <h3 className="card-title">Job Overview</h3>
              <div className="overview-grid">
                <div className="overview-item">
                  <span className="overview-icon">
                    <i className="ri-calendar-line" />
                  </span>
                  <div>
                    <p className="card-label">Job posted</p>
                    <p className="card-main-text">5 Oct, 2025</p>
                  </div>
                </div>
                <div className="overview-item">
                  <span className="overview-icon">
                    <i className="ri-timer-line" />
                  </span>
                  <div>
                    <p className="card-label">Job expire in</p>
                    <p className="card-main-text">14 Oct, 2025</p>
                  </div>
                </div>
                <div className="overview-item">
                  <span className="overview-icon">
                    <i className="ri-bar-chart-2-line" />
                  </span>
                  <div>
                    <p className="card-label">Job level</p>
                    <p className="card-main-text">Entry Level</p>
                  </div>
                </div>
                <div className="overview-item">
                  <span className="overview-icon">
                    <i className="ri-briefcase-4-line" />
                  </span>
                  <div>
                    <p className="card-label">Experience</p>
                    <p className="card-main-text">$50k-80k/month</p>
                  </div>
                </div>
                <div className="overview-item">
                  <span className="overview-icon">
                    <i className="ri-graduation-cap-line" />
                  </span>
                  <div>
                    <p className="card-label">Education</p>
                    <p className="card-main-text">Graduation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Share card */}
            <div className="detail-card share-card">
              <p className="card-title">Share this job:</p>
              <div className="share-row">
                <button type="button" className="btn-outline copy-link-btn">
                  Copy Links
                </button>
                <div className="share-icons">
                  <button type="button" className="share-icon-btn">
                    <i className="ri-linkedin-fill" />
                  </button>
                  <button type="button" className="share-icon-btn">
                    <i className="ri-facebook-fill" />
                  </button>
                  <button type="button" className="share-icon-btn">
                    <i className="ri-twitter-x-line" />
                  </button>
                  <button type="button" className="share-icon-btn">
                    <i className="ri-mail-line" />
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default JobDetail;
