import React, { useState } from "react";
import "./JobDetail.css";
import fbLogo from "../../../assets/users/images/Rectangle 43.png";
import bookmarkIcon from "../../../assets/users/images/BookmarkSimple.png";
import { Link, useLocation } from "react-router-dom";
import { ROUTERS } from "../../../utils/router"; // vẫn giữ nếu sau này cần
import {
  FaCalendarDays,
  FaClock,
  FaLayerGroup,
  FaBriefcase,
  FaGraduationCap,
  FaLink,
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
  FaEnvelope,
  FaMapLocationDot,
} from "react-icons/fa6";

/* =====================================================
   DATA GIẢ: danh sách job + chi tiết dùng cho JobDetail
   ===================================================== */

// id mặc định nếu không truyền state (VD: vào thẳng link)
const DEFAULT_JOB_ID = 2;

const relatedJobs = [
  {
    id: 1,
    type: "PART-TIME",
    salary: "$12,000 - $25,000",
    title: "Technical Support Specialist",
    company: "Google Inc.",
    location: "HCMC, VietNam",
  },
  {
    id: 2,
    type: "FULL-TIME",
    salary: "$30,000 - $35,000",
    title: "Senior UX Designer",
    company: "Facebook",
    location: "HCMC, VietNam",
  },
  {
    id: 3,
    type: "INTERNSHIP",
    salary: "$10,000 - $15,000",
    title: "Marketing Officer",
    company: "Google Inc.",
    location: "HCMC, VietNam",
  },
  {
    id: 4,
    type: "INTERNSHIP",
    salary: "$12,000 - $25,000",
    title: "Junior Graphic Designer",
    company: "Google Inc.",
    location: "HCMC, VietNam",
  },
  {
    id: 5,
    type: "PART-TIME",
    salary: "$12,000 - $25,000",
    title: "Interaction Designer",
    company: "Google Inc.",
    location: "HCMC, VietNam",
  },
  {
    id: 6,
    type: "PART-TIME",
    salary: "$10,000 - $15,000",
    title: "Project Manager",
    company: "Google Inc.",
    location: "HCMC, VietNam",
  },
];

// map id → detail
const JOB_DETAILS = relatedJobs.reduce((acc, job) => {
  acc[job.id] = {
    title: job.title,
    company: job.company,
    location: job.location,
    salary: job.salary,
    type: job.type,
  };
  return acc;
}, {});

const JobDetail = () => {
  const location = useLocation();

  // lấy jobId truyền từ Link (FindJob hoặc Related Jobs)
  const jobIdFromState = location.state?.jobId;
  const jobDetail =
    JOB_DETAILS[jobIdFromState] || JOB_DETAILS[DEFAULT_JOB_ID];

  const jobTitle = jobDetail.title;
  const companyName = jobDetail.company;

  // trạng thái bookmark
  const [saved, setSaved] = useState(false);

  // trạng thái bật / tắt modal Apply
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  const handleApplySubmit = (e) => {
    e.preventDefault();
    // sau này bạn nối API apply job ở đây
    alert("Fake apply thành công! Sau này nối API ở đây nhé 😊");
    setIsApplyOpen(false);
  };

  return (
    <main className="job-detail-page">
      {/* ===== TOP BAR: JOB DETAILS + BREADCRUMB ===== */}
      <section className="job-detail-topbar">
        <div className="container job-detail-topbar__inner">
          <h2 className="job-detail-topbar__title">Job Details</h2>

          <nav className="job-detail-breadcrumb">
            <Link to="/">Home</Link>
            <span className="separator">/</span>
            <Link to={ROUTERS.USER.FIND_JOB || "/find-job"}>Find Job</Link>
            <span className="separator">/</span>
            <span className="current">{jobTitle}</span>
          </nav>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <div className="container job-detail-shell">
        {/* HEADER */}
        <header className="job-detail-header">
          <div className="job-detail-header-left">
            <div className="job-detail-logo">
              <img src={fbLogo} alt={companyName} />
            </div>

            <div className="job-detail-title-block">
              <h1 className="job-detail-title">{jobTitle}</h1>

              {/* at Company + badge cùng 1 hàng */}
              <div className="job-detail-company-row">
                <p className="job-detail-company">
                  at <span>{companyName}</span>
                </p>

                <span className="badge badge-type">
                  {jobDetail.type || "FULL-TIME"}
                </span>
                <span className="badge badge-featured">Featured</span>
              </div>
            </div>
          </div>

          <div className="job-detail-header-right">
            {/* Bookmark */}
            <button
              className={`bookmark-btn ${saved ? "is-saved" : ""}`}
              type="button"
              onClick={() => setSaved((prev) => !prev)}
            >
              <img src={bookmarkIcon} alt={saved ? "Unsave job" : "Save job"} />
            </button>

            {/* Apply Now mở modal */}
            <button
              className="apply-btn"
              type="button"
              onClick={() => setIsApplyOpen(true)}
            >
              <span>Apply Now</span>
              <span className="apply-arrow">→</span>
            </button>
          </div>
        </header>

        <div className="job-detail-layout">
          {/* LEFT: DESCRIPTION (tạm dùng chung nội dung cho mọi job) */}
          <section className="job-detail-left">
            <h2 className="section-title">Job Description</h2>
            <p>
              At {companyName}, we&apos;re not just creating products — we&apos;re
              designing exceptional digital experiences that connect millions of
              people worldwide. Our team of designers, developers and innovators
              work together to craft user-focused solutions that drive real
              impact.
            </p>
            <p>
              As a {jobTitle}, you will transform design concepts into
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
              {/* LEFT: SALARY */}
              <div className="salary-col salary-left">
                <p className="salary-label">Salary (USD)</p>
                <p className="salary-value">
                  {jobDetail.salary || "$100,000 - $120,000"}
                </p>
                <p className="salary-note">Yearly salary</p>
              </div>

              <div className="divider" />

              {/* RIGHT: LOCATION + MAP ICON */}
              <div className="salary-col location-col">
                <FaMapLocationDot className="location-icon" />
                <p className="salary-label">Job Location</p>
                <p className="location-text">
                  {jobDetail.location || "HCMC, VietNam"}
                </p>
              </div>
            </div>

            {/* Job overview card */}
            <div className="detail-card overview-card">
              <h3 className="card-title">Job Overview</h3>
              <div className="overview-grid">
                <div className="overview-item">
                  <span className="overview-icon">
                    <FaCalendarDays />
                  </span>
                  <div>
                    <p className="card-label">Job posted</p>
                    <p className="card-main-text">5 Oct, 2025</p>
                  </div>
                </div>
                <div className="overview-item">
                  <span className="overview-icon">
                    <FaClock />
                  </span>
                  <div>
                    <p className="card-label">Job expire in</p>
                    <p className="card-main-text">14 Oct, 2025</p>
                  </div>
                </div>
                <div className="overview-item">
                  <span className="overview-icon">
                    <FaLayerGroup />
                  </span>
                  <div>
                    <p className="card-label">Job level</p>
                    <p className="card-main-text">Entry Level</p>
                  </div>
                </div>
                <div className="overview-item">
                  <span className="overview-icon">
                    <FaBriefcase />
                  </span>
                  <div>
                    <p className="card-label">Experience</p>
                    <p className="card-main-text">$50k-80k/month</p>
                  </div>
                </div>
                <div className="overview-item">
                  <span className="overview-icon">
                    <FaGraduationCap />
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
                <button type="button" className="share-copy-btn">
                  <FaLink className="share-copy-icon" />
                  <span>Copy Links</span>
                </button>

                <div className="share-icons">
                  <button type="button" className="share-icon-btn">
                    <FaLinkedinIn />
                  </button>
                  <button type="button" className="share-icon-btn">
                    <FaFacebookF />
                  </button>
                  <button type="button" className="share-icon-btn">
                    <FaXTwitter />
                  </button>
                  <button type="button" className="share-icon-btn">
                    <FaEnvelope />
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ===== RELATED JOBS ===== */}
      <div className="container related-jobs-section">
        <h2 className="related-jobs-title">Related Jobs</h2>

        <div className="related-jobs-grid">
          {relatedJobs.map((job) => (
            <Link
              key={job.id}
              to={ROUTERS.USER.JOB_DETAIL || "/job-detail"}
              state={{ jobId: job.id }}
              className="related-job-link"
            >
              <article className="related-job-card">
                <div className="related-job-top">
                  <span
                    className={`related-job-type related-job-type--${job.type
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {job.type}
                  </span>
                  <span className="related-job-salary">
                    Salary: {job.salary}
                  </span>
                </div>

                <div className="related-job-main">
                  <div className="related-job-logo">
                    <img src={fbLogo} alt={job.company} />
                  </div>

                  <div className="related-job-info">
                    <h3 className="related-job-title">{job.title}</h3>
                    <p className="related-job-company">{job.company}</p>
                    <p className="related-job-location">{job.location}</p>
                  </div>

                  <button
                    className="related-job-bookmark"
                    type="button"
                    onClick={(e) => e.preventDefault()} // tránh click bookmark bị điều hướng
                  >
                    <img src={bookmarkIcon} alt="Save job" />
                  </button>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      {/* ===== APPLY MODAL ===== */}
      {isApplyOpen && (
        <div
          className="apply-modal-backdrop"
          onClick={() => setIsApplyOpen(false)}
        >
          <div
            className="apply-modal"
            onClick={(e) => e.stopPropagation()} // tránh click trong modal bị tắt
          >
            <button
              type="button"
              className="apply-modal-close"
              onClick={() => setIsApplyOpen(false)}
            >
              ×
            </button>

            <h3 className="apply-modal-title">Apply Job: {jobTitle}</h3>

            <form className="apply-form" onSubmit={handleApplySubmit}>
              <div className="form-group">
                <label className="form-label">Choose Resume</label>
                <select className="form-select" defaultValue="">
                  <option value="" disabled>
                    Select...
                  </option>
                  <option value="cv1">My Resume 1</option>
                  <option value="cv2">My Resume 2</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Cover Letter</label>
                <textarea
                  className="form-textarea"
                  rows={5}
                  placeholder="Write down your biography here. Let the employers know who you are..."
                />
              </div>

              <div className="apply-actions">
                <button
                  type="button"
                  className="btn btn-outline cancel-btn"
                  onClick={() => setIsApplyOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary apply-submit">
                  Apply now
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default JobDetail;
