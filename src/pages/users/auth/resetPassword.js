import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTERS } from "../../../utils/router";

import "bootstrap/dist/css/bootstrap.min.css";
import "./resetPasswordstyle.scss";

import { FaBriefcase } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";


import Ellipse1 from "../../../assets/users/images/Ellipse 1.png";
import Ellipse2 from "../../../assets/users/images/Ellipse 2.png";

const ResetPasswordPage = () => {
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();


  return (
    <div className="reset-background">
      {/* BLOB nền */}
      <img src={Ellipse1} alt="" className="reset-blob reset-blob-orange" />
      <img src={Ellipse2} alt="" className="reset-blob reset-blob-yellow" />

      {/* CONTENT trung tâm */}
      <div className="reset-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-5">
              <div className="auth-card reset-card">

                {/* Logo JobPortal */}
                <div className="reset-logo d-flex justify-content-center mb-4">
                  <div className="logo-icon d-flex align-items-center justify-content-center">
                    <FaBriefcase />
                  </div>
                  <span className="logo-text ms-2">JobPortal</span>
                </div>

                {/* Title + subtitle */}
                <h2 className="auth-title text-center mb-3">Reset Password</h2>
                <p className="reset-subtitle text-center mb-4">
                  Choose a strong password to keep your account safe. Re-enter it
                  to confirm before continuing.
                </p>

                {/* Form */}
                <form>
                  <div className="mb-3 position-relative">
                    <input
                      type={showNew ? "text" : "password"}
                      className="form-control input-soft"
                      placeholder="New Password"
                    />
                    <button
                      type="button"
                      className="btn-eye"
                      onClick={() => setShowNew((v) => !v)}
                    >
                      {showNew ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>

                  <div className="mb-4 position-relative">
                    <input
                      type={showConfirm ? "text" : "password"}
                      className="form-control input-soft"
                      placeholder="Confirm Password"
                    />
                    <button
                      type="button"
                      className="btn-eye"
                      onClick={() => setShowConfirm((v) => !v)}
                    >
                      {showConfirm ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>

                  <button
                    type="button"
                    className="btn btn-primary w-100 auth-primary-btn mb-4"
                    onClick={() => navigate(ROUTERS.USER.VERIFICATION)}
                    >
                    Reset Password <span className="ms-1">→</span>
                    </button>

                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
