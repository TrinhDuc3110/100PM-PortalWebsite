import React, { useState } from "react";
import JobCard from "../../../components/Jobs/JobCard";
import "./FindJob.css";
import slidersIcon from "../../../assets/users/images/Sliders.png";

const PAGE_SIZE = 12;

// ======================= FAKE DATA 60 JOBS =======================
const ALL_JOBS = [
  // -------- Page 1 --------
  {
    id: 1,
    title: "Technical Support Specialist",
    company: "Google Inc.",
    type: "PART-TIME",
    salary: "$20,000 - $25,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 2,
    title: "Senior UX Designer",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$20,000 - $25,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 3,
    title: "Marketing Officer",
    company: "Google Inc.",
    type: "INTERNSHIP",
    salary: "$20,000 - $25,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 4,
    title: "Junior Graphic Designer",
    company: "Google Inc.",
    type: "INTERNSHIP",
    salary: "$15,000 - $20,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 5,
    title: "Interaction Designer",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$20,000 - $25,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 6,
    title: "Project Manager",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$25,000 - $30,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 7,
    title: "Software Engineer",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$20,000 - $25,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 8,
    title: "Visual Designer",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$20,000 - $25,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 9,
    title: "UI/UX Designer",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$20,000 - $25,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 10,
    title: "Product Designer",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$20,000 - $25,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 11,
    title: "Networking Engineer",
    company: "Google Inc.",
    type: "INTERNSHIP",
    salary: "$20,000 - $25,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 12,
    title: "Marketing Manager",
    company: "Google Inc.",
    type: "INTERNSHIP",
    salary: "$20,000 - $25,000",
    location: "HCMC, Vietnam",
  },

  // -------- Page 2 --------
  {
    id: 13,
    title: "Backend Developer",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$25,000 - $30,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 14,
    title: "Frontend Developer",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$20,000 - $25,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 15,
    title: "Full Stack Engineer",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$25,000 - $35,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 16,
    title: "Mobile App Developer",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$20,000 - $30,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 17,
    title: "QA Engineer",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$15,000 - $22,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 18,
    title: "Automation Test Engineer",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$18,000 - $25,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 19,
    title: "DevOps Engineer",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$25,000 - $35,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 20,
    title: "System Administrator",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$18,000 - $25,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 21,
    title: "Cloud Engineer",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$25,000 - $35,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 22,
    title: "Security Engineer",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$25,000 - $35,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 23,
    title: "Site Reliability Engineer",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$25,000 - $35,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 24,
    title: "Technical Writer",
    company: "Google Inc.",
    type: "PART-TIME",
    salary: "$15,000 - $20,000",
    location: "HCMC, Vietnam",
  },

  // -------- Page 3 --------
  {
    id: 25,
    title: "Data Scientist",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$30,000 - $40,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 26,
    title: "Data Analyst",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$20,000 - $28,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 27,
    title: "Business Intelligence Engineer",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$25,000 - $35,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 28,
    title: "Machine Learning Engineer",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$30,000 - $40,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 29,
    title: "Product Manager",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$30,000 - $40,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 30,
    title: "Associate Product Manager",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$20,000 - $28,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 31,
    title: "Business Analyst",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$20,000 - $28,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 32,
    title: "Finance Analyst",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$20,000 - $28,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 33,
    title: "Operations Manager",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$25,000 - $35,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 34,
    title: "Customer Success Manager",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$20,000 - $30,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 35,
    title: "Account Manager",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$20,000 - $30,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 36,
    title: "Sales Manager",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$25,000 - $35,000",
    location: "HCMC, Vietnam",
  },

  // -------- Page 4 --------
  {
    id: 37,
    title: "Digital Marketing Specialist",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$20,000 - $28,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 38,
    title: "Content Marketing Specialist",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$18,000 - $25,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 39,
    title: "SEO Specialist",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$18,000 - $25,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 40,
    title: "Social Media Manager",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$18,000 - $25,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 41,
    title: "Brand Manager",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$25,000 - $35,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 42,
    title: "Copywriter",
    company: "Google Inc.",
    type: "PART-TIME",
    salary: "$15,000 - $20,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 43,
    title: "Motion Designer",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$20,000 - $28,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 44,
    title: "3D Artist",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$20,000 - $30,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 45,
    title: "Game Developer",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$25,000 - $35,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 46,
    title: "UI Motion Designer",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$20,000 - $28,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 47,
    title: "Email Marketing Specialist",
    company: "Google Inc.",
    type: "PART-TIME",
    salary: "$15,000 - $20,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 48,
    title: "Community Manager",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$18,000 - $25,000",
    location: "HCMC, Vietnam",
  },

  // -------- Page 5 --------
  {
    id: 49,
    title: "HR Manager",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$20,000 - $30,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 50,
    title: "Talent Acquisition Specialist",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$18,000 - $25,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 51,
    title: "Recruiter",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$18,000 - $25,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 52,
    title: "People Operations Specialist",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$20,000 - $28,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 53,
    title: "Training Coordinator",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$15,000 - $22,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 54,
    title: "Office Manager",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$18,000 - $25,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 55,
    title: "Administrative Assistant",
    company: "Google Inc.",
    type: "PART-TIME",
    salary: "$12,000 - $18,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 56,
    title: "Customer Support Representative",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$15,000 - $22,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 57,
    title: "Technical Account Manager",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$25,000 - $35,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 58,
    title: "Partner Success Manager",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$25,000 - $35,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 59,
    title: "Solutions Architect",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$30,000 - $40,000",
    location: "HCMC, Vietnam",
  },
  {
    id: 60,
    title: "Innovation Program Manager",
    company: "Google Inc.",
    type: "FULL-TIME",
    salary: "$30,000 - $40,000",
    location: "HCMC, Vietnam",
  },
];



// ======================= COMPONENT =======================
const FindJob = () => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [jobs, setJobs] = useState(ALL_JOBS);
  const [page, setPage] = useState(1);

  // Submit search -> lọc trên ALL_JOBS
  const handleSubmit = (e) => {
    e.preventDefault();

    const kw = keyword.toLowerCase().trim();
    const loc = location.toLowerCase().trim();

    const filtered = ALL_JOBS.filter((job) => {
      const matchKw =
        !kw ||
        job.title.toLowerCase().includes(kw) ||
        job.company.toLowerCase().includes(kw);
      const matchLoc = !loc || job.location.toLowerCase().includes(loc);
      return matchKw && matchLoc;
    });

    setJobs(filtered);
    setPage(1);
  };

  const totalPages = Math.max(1, Math.ceil(jobs.length / PAGE_SIZE));

  const handleChangePage = (newPage) => {
    if (newPage === page || newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
  };

  const start = (page - 1) * PAGE_SIZE;
  const paginatedJobs = jobs.slice(start, start + PAGE_SIZE);

  return (
    <main className="find-job-page">
      {/* title “Find Job” */}
      <section className="find-job-title">
        <div className="container">
          <h1>Find Job</h1>
        </div>
      </section>

      {/* search bar + filters */}
      <section className="find-job-search">
        <div className="container">
          <form className="find-job-search-bar" onSubmit={handleSubmit}>
            <div className="search-input search-input--keyword">
              <span className="search-icon">
                <i className="ri-search-line" />
              </span>
              <input
                type="text"
                placeholder="Search by Job title, Position, Keyword..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>

            <div className="search-input search-input--location">
              <span className="search-icon">
                <i className="ri-map-pin-line" />
              </span>
              <input
                type="text"
                placeholder="City, state or zip code"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <button
              type="button"
              className="btn btn-outline filter-btn"
              onClick={() => alert("Filter modal / drawer here")}
            >
              <span className="filter-btn__icon">
                <img src={slidersIcon} alt="Filters" />
              </span>
              <span>Filters</span>
            </button>

            <button type="submit" className="btn btn-primary find-job-btn">
              Find Job
            </button>
          </form>
        </div>
      </section>

      {/* job cards + pagination */}
      <section className="find-job-content">
        <div className="container">
          <div className="job-grid">
            {paginatedJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination">
            <button
              className="page-btn"
              onClick={() => handleChangePage(page - 1)}
              disabled={page === 1}
            >
              &lt;
            </button>

            {Array.from({ length: totalPages }, (_, idx) => {
              const p = idx + 1;
              return (
                <button
                  key={p}
                  className={`page-number ${p === page ? "active" : ""}`}
                  onClick={() => handleChangePage(p)}
                >
                  {p.toString().padStart(2, "0")}
                </button>
              );
            })}

            <button
              className="page-btn"
              onClick={() => handleChangePage(page + 1)}
              disabled={page === totalPages}
            >
              &gt;
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FindJob;
