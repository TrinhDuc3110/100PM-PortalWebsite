import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { ROUTERS } from "../../../utils/router";   

import "bootstrap/dist/css/bootstrap.min.css";
import "./verificationstyle.scss";

import { FaBriefcase } from "react-icons/fa";
import Ellipse1 from "../../../assets/users/images/Ellipse 1.png";
import Ellipse2 from "../../../assets/users/images/Ellipse 2.png";

const EmailVerificationPage = () => {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  return (
    <div className="verify-background">
      {/* BLOB nền */}
      <img src={Ellipse1} alt="" className="verify-blob verify-blob-orange" />
      <img src={Ellipse2} alt="" className="verify-blob verify-blob-yellow" />

      {/* CONTENT trung tâm */}
      <div className="verify-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-5">
              <div className="auth-card verify-card">
                {/* Logo JobPortal */}
                <div className="verify-logo d-flex justify-content-center mb-4">
                  <div className="logo-icon d-flex align-items-center justify-content-center">
                    <FaBriefcase />
                  </div>
                  <span className="logo-text ms-2">JobPortal</span>
                </div>

                {/* Title + subtitle */}
                <h2 className="auth-title text-center mb-3">
                  Email Verification
                </h2>
                <p className="verify-subtitle text-center mb-4">
                  To get started, please verify your email address. We’ve sent
                  you a link — just click it to activate your account.
                </p>

                {/* Form */}
                <form>
                  <div className="mb-4">
                    <input
                      type="text"
                      className="form-control input-soft"
                      placeholder="Verification code"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                    />
                  </div>

                  <button
                    type="button"
                    className="btn btn-primary w-100 auth-primary-btn mb-3"
                    onClick={() => navigate(ROUTERS.USER.SIGNIN)}
                    >
                    Verify My Account <span className="ms-1">→</span>
                    </button>

                </form>

                {/* Resend */}
                <p className="verify-footer text-center mb-0">
                  Didn’t receive any code?{" "}
                  <button type="button" className="verify-resend">
                    Resend
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationPage;
