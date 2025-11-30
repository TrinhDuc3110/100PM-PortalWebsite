import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 thêm
import "./JobCard.css";
import employersLogo from "../../assets/users/images/Employers Logo.png";
import bookmarkIcon from "../../assets/users/images/BookmarkSimple.png";
import mapPinIcon from "../../assets/users/images/MapPin.png";

const JobCard = ({ job }) => {
  const { title, company, type, salary, location } = job;
  const typeKey = (type || "").toLowerCase().replace("-", "");

  const [saved, setSaved] = useState(false);

  const navigate = useNavigate(); // 👈 hook điều hướng

  // click vào card -> sang trang Job Detail (fake: dùng chung 1 trang)
  const handleCardClick = () => {
    navigate("/job-detail");
  };

  // click bookmark chỉ toggle state, không điều hướng
  const handleBookmarkClick = (e) => {
    e.stopPropagation(); // 👈 chặn bubble để không chạy handleCardClick
    setSaved((prev) => !prev);
  };

  return (
    <article className="job-card" onClick={handleCardClick}>
      {/* dòng trên cùng: title + bookmark (bookmark mình để ở footer) */}
      <div className="job-card__header">
        <h3 className="job-card__title">{title}</h3>
      </div>

      {/* dòng thứ 2: badge + salary */}
      <div className="job-card__meta">
        <span
          className={`job-card__badge job-card__badge--${typeKey || "default"}`}
        >
          {type}
        </span>
        <span className="job-card__salary">Salary: {salary}</span>
      </div>

      {/* dòng dưới: logo + company + location + bookmark */}
      <div className="job-card__footer">
        <div className="job-card__company">
          <div className="job-card__logo">
            <img src={employersLogo} alt={company} />
          </div>
          <div className="job-card__company-text">
            <p className="job-card__location">
              <img
                src={mapPinIcon}
                alt="Location"
                className="job-card__location-icon"
              />
              <span>{location}</span>
            </p>
          </div>
        </div>

        <button
          className={`job-card__bookmark ${saved ? "is-saved" : ""}`}
          type="button"
          onClick={handleBookmarkClick} // 👈 dùng handler mới
        >
          <img src={bookmarkIcon} alt={saved ? "Unsave job" : "Save job"} />
        </button>
      </div>
    </article>
  );
};

export default JobCard;
