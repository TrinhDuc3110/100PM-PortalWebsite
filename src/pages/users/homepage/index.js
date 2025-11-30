import { memo, useState, useMemo, useRef, useEffect } from "react";

import Illustration from "../../../assets/users/images/illustration-laptop.png";
import ArrowImg from "../../../assets/users/images/arrow-dashed.png";
import ArrowImg2 from "../../../assets/users/images/arrow-dashed(2).png";
import EmployerLogo from "../../../assets/users/images/Employers Logo.png";
import CompanyInfoImg from "../../../assets/users/images/Info.png";
import BookmarkIconImg from "../../../assets/users/images/BookmarkSimple.png";
import LogoMomo from "../../../assets/users/images/Momo.png";
import LocationIcon from "../../../assets/users/images/Location.png";
import BgCandidate from "../../../assets/users/images/register-now.png";
import BgEmployer from "../../../assets/users/images/register-employer.png";



import "./style.scss";

const HomePage = () => {
  /* Lưu các job được bookmark */
  const [savedJobs, setSavedJobs] = useState([]);

  const toggleSave = (key) => {
    setSavedJobs((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };
  
  return (
    <>
      <div className="homepage">
        {/* HERO */}
        <section className="hero">
          <div className="container hero__grid">
            <div className="hero__content">
              <h1 className="hero__title">
                Find a job that suits your interest &amp; skills.
              </h1>

              <p className="hero__subtitle">
                Your career starts here—explore thousands of opportunities
                designed for your growth.
              </p>

              <form className="searchbar">
                <div className="searchbar__field searchbar__field--keyword">
                  <span className="searchbar__icon" />
                  <input placeholder="Job title, Keyword…" />
                </div>

                <div className="searchbar__divider" />

                <div className="searchbar__field searchbar__field--location">
                  <span className="searchbar__icon" />
                  <input placeholder="Your Location" />
                </div>

                <button className="searchbar__btn" type="button">
                  Find Job
                </button>
              </form>

              <div className="suggestion">
                <span className="suggestion__label">Suggestion:</span>
                <a className="suggestion__link" href="#">
                  Designer
                </a>
                <a className="suggestion__link" href="#">
                  Programming
                </a>
                <a className="suggestion__link" href="#">
                  Digital Marketing
                </a>
                <a className="suggestion__link" href="#">
                  Video
                </a>
                <a className="suggestion__link" href="#">
                  Animation
                </a>
              </div>

              <div className="hero__art">
                <img
                  src={Illustration}
                  alt="Person working on laptop illustration"
                />
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="hero-stats">
          <div className="container">
            <div className="home-stats">
              <div className="home-stat">
                <div className="home-stat__icon">🧰</div>
                <div className="home-stat__text">
                  <div className="home-stat__value">1,75,324</div>
                  <div className="home-stat__label">Live Job</div>
                </div>
              </div>

              <div className="home-stat">
                <div className="home-stat__icon">🏢</div>
                <div className="home-stat__text">
                  <div className="home-stat__value">97,354</div>
                  <div className="home-stat__label">Companies</div>
                </div>
              </div>

              <div className="home-stat">
                <div className="home-stat__icon">👤</div>
                <div className="home-stat__text">
                  <div className="home-stat__value">38,47,154</div>
                  <div className="home-stat__label">Candidates</div>
                </div>
              </div>

              <div className="home-stat">
                <div className="home-stat__icon">📦</div>
                <div className="home-stat__text">
                  <div className="home-stat__value">7,532</div>
                  <div className="home-stat__label">New Jobs</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NẾU MUỐN THÊM MOST POPULAR VACANCIES THÌ ĐẶT SECTION Ở ĐÂY */}
              <section className="popular">
          <div className="container">
            <h2 className="popular__title">Most Popular Vacancies</h2>

            <div className="popular__grid">
              {/* Cột 1 */}
              <div className="popular__col">
                <div className="popular__item">
                  <h3 className="popular__job">AI Engineering</h3>
                  <p className="popular__meta">45,904 Open Positions</p>
                </div>
                <div className="popular__item">
                  <h3 className="popular__job">Maxillofacial Surgeons</h3>
                  <p className="popular__meta">74,875 Open Positions</p>
                </div>
                <div className="popular__item">
                  <h3 className="popular__job">Financial Manager</h3>
                  <p className="popular__meta">61,391 Open Positions</p>
                </div>
              </div>

              {/* Cột 2 */}
              <div className="popular__col">
                <div className="popular__item">
                  <h3 className="popular__job">Surgeons</h3>
                  <p className="popular__meta">50,364 Open Positions</p>
                </div>
                <div className="popular__item">
                  <h3 className="popular__job">Software Developer</h3>
                  <p className="popular__meta">43,359 Open Positions</p>
                </div>
                <div className="popular__item">
                  <h3 className="popular__job">Management Analysis</h3>
                  <p className="popular__meta">93,046 Open Positions</p>
                </div>
              </div>

              {/* Cột 3 */}
              <div className="popular__col">
                <div className="popular__item">
                  <h3 className="popular__job">Development</h3>
                  <p className="popular__meta">4,339 Open Positions</p>
                </div>
                <div className="popular__item">
                  <h3 className="popular__job">Psychiatrists</h3>
                  <p className="popular__meta">18,599 Open Positions</p>
                </div>
                <div className="popular__item">
                  <h3 className="popular__job">IT Manager</h3>
                  <p className="popular__meta">50,963 Open Positions</p>
                </div>
              </div>

              {/* Cột 4 */}
              <div className="popular__col">
                <div className="popular__item">
                  <h3 className="popular__job">Sales</h3>
                  <p className="popular__meta">20,079 Open Positions</p>
                </div>
                <div className="popular__item">
                  <h3 className="popular__job popular__job--link">
                    Data Scientist
                  </h3>
                  <p className="popular__meta">28,200 Open Positions</p>
                </div>
                <div className="popular__item">
                  <h3 className="popular__job">Operations Research Analysis</h3>
                  <p className="popular__meta">16,627 Open Positions</p>
                </div>
              </div>
            </div>
          </div>
        </section>
            
            <section className="how-it-works">
          <div className="container">
            <h2 className="how__title">How JobPortal work</h2>

            <div className="how__steps">
              <div className="how__step">
                <div className="how__icon">👤</div>
                <h3 className="how__name">Create account</h3>
                <p className="how__desc">Sign up in minutes and set up your profile to get started.</p>
              </div>

            

              <div className="how__step how__step--active">
                <div className="how__icon">📤</div>
                <h3 className="how__name">Upload CV/Resume</h3>
                <p className="how__desc">Showcase your skills and experience by uploading your latest CV.</p>
              </div>


              <div className="how__step">
                <div className="how__icon">🔍</div>
                <h3 className="how__name">Find suitable job</h3>
                <p className="how__desc">Browse thousands of openings and filter by title, skills, or location.</p>
              </div>


              <div className="how__step">
                <div className="how__icon">⭐</div>
                <h3 className="how__name">Apply job</h3>
                <p className="how__desc">Submit your application directly and track your progress easily.</p>
              </div>

              <img className="how__arrow arrow--1" src={ArrowImg} alt="" aria-hidden="true" />
              <img className="how__arrow arrow--2" src={ArrowImg2} alt="" aria-hidden="true" />
              <img className="how__arrow arrow--3" src={ArrowImg} alt="" aria-hidden="true" />
            </div>
          </div>
        </section>
              <section className="popular-category">
  <div className="container">
    <div className="popular-header">
      <h2 className="popular__title">Popular category</h2>
      <button className="popular__viewall">View All →</button>
    </div>

    <div className="popular-grid">
      {[
        { icon: "🎨", name: "Graphics & Design", meta: "357 Open position" },
        { icon: "💻", name: "Code & Programming", meta: "312 Open position" },
        { icon: "📢", name: "Digital Marketing", meta: "297 Open position" },
        { icon: "🎬", name: "Video & Animation", meta: "247 Open position" },
        { icon: "🎵", name: "Music & Audio", meta: "204 Open position" },
        { icon: "🏦", name: "Account & Finance", meta: "167 Open position" },
        { icon: "🏥", name: "Health & Care", meta: "125 Open position" },
        { icon: "🧠", name: "Data & Science", meta: "57 Open position" },
      ].map((item, i) => (
        <div key={i} className="popular-item">
          <div className="popular-icon">{item.icon}</div>
          <div className="popular-text">
            <h3 className="popular-name">{item.name}</h3>
            <p className="popular-meta">{item.meta}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
     {/* FEATURED JOBS */}
        <section className="featured-jobs">
          <div className="container">
            <div className="fj__header">
              <h2 className="fj__title">Featured job</h2>
              <button className="fj__viewall" type="button">View All →</button>
            </div>

            <div className="fj__grid">
              {/* Card 1 */}
              <article className="fj__card fj--highlight">
                <div className="fj__row fj__row--top">
                  <h3 className="fj__job">Technical Support Specialist</h3>
                </div>

                <div className="fj__row fj__row--meta">
                  <span className="fj__badge fj__badge--part">PART-TIME</span>
                  <span className="fj__salary">Salary: $20,000 – $25,000</span>
                </div>

                <div className="fj__companyline">
                  <img className="fj__logoImg" src={EmployerLogo} alt="Google Inc. logo" />
                  <img className="fj__infoImg" src={CompanyInfoImg} alt="Google Inc. · HCMC, VietNam" />
                  <button
                    type="button"
                    className={`fj__bmBtn ${savedJobs.includes("Technical Support Specialist") ? "active" : ""}`}
                    onClick={() => toggleSave("Technical Support Specialist")}
                    aria-pressed={savedJobs.includes("Technical Support Specialist")}
                    aria-label="Save job"
                    title={savedJobs.includes("Technical Support Specialist") ? "Unsave" : "Save job"}
                  >
                    <img src={BookmarkIconImg} alt="" />
                  </button>
                </div>
              </article>

              {/* Card 2 */}
              <article className="fj__card fj--highlight">
                <div className="fj__row fj__row--top">
                  <h3 className="fj__job">Senior UX Designer</h3>
                </div>

                <div className="fj__row fj__row--meta">
                  <span className="fj__badge fj__badge--full">FULL-TIME</span>
                  <span className="fj__salary">Salary: $20,000 – $25,000</span>
                </div>

                <div className="fj__companyline">
                  <img className="fj__logoImg" src={EmployerLogo} alt="Google Inc. logo" />
                  <img className="fj__infoImg" src={CompanyInfoImg} alt="Google Inc. · HCMC, VietNam" />
                  <button
                    type="button"
                    className={`fj__bmBtn ${savedJobs.includes("Senior UX Designer") ? "active" : ""}`}
                    onClick={() => toggleSave("Senior UX Designer")}
                    aria-pressed={savedJobs.includes("Senior UX Designer")}
                    aria-label="Save job"
                    title={savedJobs.includes("Senior UX Designer") ? "Unsave" : "Save job"}
                  >
                    <img src={BookmarkIconImg} alt="" />
                  </button>
                </div>
              </article>

              {/* Card 3 */}
              <article className="fj__card">
                <div className="fj__row fj__row--top">
                  <h3 className="fj__job">Marketing Officer</h3>
                </div>

                <div className="fj__row fj__row--meta">
                  <span className="fj__badge fj__badge--intern">INTERNSHIP</span>
                  <span className="fj__salary">Salary: $20,000 – $25,000</span>
                </div>

                <div className="fj__companyline">
                  <img className="fj__logoImg" src={EmployerLogo} alt="Google Inc. logo" />
                  <img className="fj__infoImg" src={CompanyInfoImg} alt="Google Inc. · HCMC, VietNam" />
                  <button
                    type="button"
                    className={`fj__bmBtn ${savedJobs.includes("Marketing Officer") ? "active" : ""}`}
                    onClick={() => toggleSave("Marketing Officer")}
                    aria-pressed={savedJobs.includes("Marketing Officer")}
                    aria-label="Save job"
                    title={savedJobs.includes("Marketing Officer") ? "Unsave" : "Save job"}
                  >
                    <img src={BookmarkIconImg} alt="" />
                  </button>
                </div>
              </article>

              {/* Card 4 */}
              <article className="fj__card">
                <div className="fj__row fj__row--top">
                  <h3 className="fj__job">Junior Graphic Designer</h3>
                </div>
                <div className="fj__row fj__row--meta">
                  <span className="fj__badge fj__badge--intern">INTERNSHIP</span>
                  <span className="fj__salary">Salary: $20,000 – $25,000</span>
                </div>
                <div className="fj__companyline">
                  <img className="fj__logoImg" src={EmployerLogo} alt="Google Inc. logo" />
                  <img className="fj__infoImg" src={CompanyInfoImg} alt="Google Inc. · HCMC, VietNam" />
                  <button
                    type="button"
                    className={`fj__bmBtn ${savedJobs.includes("Junior Graphic Designer") ? "active" : ""}`}
                    onClick={() => toggleSave("Junior Graphic Designer")}
                    aria-pressed={savedJobs.includes("Junior Graphic Designer")}
                    aria-label="Save job"
                    title={savedJobs.includes("Junior Graphic Designer") ? "Unsave" : "Save job"}
                  >
                    <img src={BookmarkIconImg} alt="" />
                  </button>
                </div>
              </article>

              {/* Card 5 */}
              <article className="fj__card">
                <div className="fj__row fj__row--top">
                  <h3 className="fj__job">Interaction Designer</h3>
                </div>
                <div className="fj__row fj__row--meta">
                  <span className="fj__badge fj__badge--part">PART-TIME</span>
                  <span className="fj__salary">Salary: $20,000 – $25,000</span>
                </div>
                <div className="fj__companyline">
                  <img className="fj__logoImg" src={EmployerLogo} alt="Google Inc. logo" />
                  <img className="fj__infoImg" src={CompanyInfoImg} alt="Google Inc. · HCMC, VietNam" />
                  <button
                    type="button"
                    className={`fj__bmBtn ${savedJobs.includes("Interaction Designer") ? "active" : ""}`}
                    onClick={() => toggleSave("Interaction Designer")}
                    aria-pressed={savedJobs.includes("Interaction Designer")}
                    aria-label="Save job"
                    title={savedJobs.includes("Interaction Designer") ? "Unsave" : "Save job"}
                  >
                    <img src={BookmarkIconImg} alt="" />
                  </button>
                </div>
              </article>

              {/* Card 6 */}
              <article className="fj__card">
                <div className="fj__row fj__row--top">
                  <h3 className="fj__job">Project Manager</h3>
                </div>
                <div className="fj__row fj__row--meta">
                  <span className="fj__badge fj__badge--full">FULL-TIME</span>
                  <span className="fj__salary">Salary: $20,000 – $25,000</span>
                </div>
                <div className="fj__companyline">
                  <img className="fj__logoImg" src={EmployerLogo} alt="Google Inc. logo" />
                  <img className="fj__infoImg" src={CompanyInfoImg} alt="Google Inc. · HCMC, VietNam" />
                  <button
                    type="button"
                    className={`fj__bmBtn ${savedJobs.includes("Project Manager") ? "active" : ""}`}
                    onClick={() => toggleSave("Project Manager")}
                    aria-pressed={savedJobs.includes("Project Manager")}
                    aria-label="Save job"
                    title={savedJobs.includes("Project Manager") ? "Unsave" : "Save job"}
                  >
                    <img src={BookmarkIconImg} alt="" />
                  </button>
                </div>
              </article>
            </div>
          </div>
        </section>


        <section className="top-companies">
  <div className="container">
    <div className="tc__header">
      <h2 className="tc__title">Top companies</h2>
    </div>

    <div className="tc__grid">
      {Array.from({ length: 6 }).map((_, i) => (
        <article key={i} className="tc-card" role="button" tabIndex={0}>
          {/* row: logo + info */}
          <div className="tc-card__row tc-card__row--meta">
            <div className="tc-card__logo">
              <img src={LogoMomo} alt="MOMO logo" />
            </div>

            <div className="tc-card__info">
              <div className="tc-card__line">
                <span className="tc-card__name">MOMO</span>
                <span className="tc-card__badge">Featured</span>
              </div>

              <div className="tc-card__loc">
                <img className="tc-card__pin" src={LocationIcon} alt="" />
                
              </div>
            </div>
          </div>

          {/* thanh bar mờ */}
          <div className="tc-card__bar" aria-hidden="true" />

          {/* nút */}
          <button type="button" className="tc-card__btn">
            Open Position (3)
          </button>
        </article>
      ))}
    </div>
  </div>
</section>

      <section className="testimonials">
  <div className="container">
    <h2 className="testi__title">Clients Testimonial</h2>

    <div className="testi__row">
      {[
        {
          name: "Phuong Anh",
          role: "UI/UX Designer",
          text: "JobPortal made my job search effortless. I found the perfect role in less than two weeks. The filters and application tracking saved me so much time.",
        },
        {
          name: "Duc Duy",
          role: "Creative Director",
          text: "Posting jobs has never been easier. Within days, I connected with talented candidates that perfectly matched our needs. Highly recommended!",
        },
        {
          name: "Van Duc",
          role: "Photographer",
          text: "As a freelancer, I’ve struggled to find steady projects. Thanks to JobPortal, I now get regular gigs that match my skills and interests.",
        },
      ].map((t, i) => (
        <article className="testi__card" key={i}>
          <div className="testi__stars">★★★★★</div>
          <p className="testi__text">“{t.text}”</p>
          <div className="testi__footer">
            <div className="testi__avatar" />
            <div className="testi__info">
              <div className="testi__name">{t.name}</div>
              <div className="testi__role">{t.role}</div>
            </div>
            <div className="testi__quote">❝❞</div>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

              <div className="become-section">
  <div className="container">
    <div className="become-row">

      {/* Card 1 */}
      <div
        className="become-card card-candidate"
        style={{ backgroundImage: `url(${BgCandidate})` }}
      >
        <div className="become-content">
          <h3>Become a Candidate</h3>
          <p>
            Create your profile, upload your CV, and get matched with jobs that
            fit your skills and career goals.
          </p>

          <button className="become-btn">
            Register Now <span>→</span>
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div
        className="become-card card-employer"
        style={{ backgroundImage: `url(${BgEmployer})` }}
      >
        <div className="become-content">
          <h3>Become a Employers</h3>
          <p>
            Post your openings, reach thousands of qualified candidates, and
            hire the right talent quickly.
          </p>

          <button className="become-btn become-btn--light">
            Register Now <span>→</span>
          </button>
        </div>
      </div>

    </div>
  </div>
</div>




      </div>
    </>
  );
};

export default memo(HomePage);
