import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTERS } from "../../../utils/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./accountstyle.scss";

import { FaBriefcase } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";

// Hình minh hoạ + blob nền
import SignInIllustration from "../../../assets/users/images/sign-in.png";
import Ellipse1 from "../../../assets/users/images/Ellipse 1.png";
import Ellipse2 from "../../../assets/users/images/Ellipse 2.png";

// 👉 IMPORT API
import AuthApi from "../../../service/authApi";

const CreateAccountPage = () => {
  const [role, setRole] = useState("candidate"); // candidate | employer
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  // state form
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [acceptTerms, setAcceptTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getRoleNumber = () => (role === "candidate" ? 0 : 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    // validate đơn giản
    if (!formData.fullName || !formData.email || !formData.password) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrorMsg("Password and Confirm Password do not match.");
      return;
    }

    if (!acceptTerms) {
      setErrorMsg("Please agree to the Terms of Services.");
      return;
    }

    const payload = {
      email: formData.email,
      password: formData.password,
      fullName: formData.fullName,
      role: getRoleNumber(), // 0 hoặc 1
    };

    try {
      setLoading(true);
      const res = await AuthApi.register(payload);

      // Swagger trả { message: "Đăng ký thành công" }
      setSuccessMsg(res.data?.message || "Register successfully.");
      // sau khi đăng ký ok thì cho chuyển sang Sign In
      setTimeout(() => {
        navigate(ROUTERS.USER.SIGNIN);
      }, 1000);
    } catch (err) {
      const msg =
        err?.response?.data?.message ||
        "Something went wrong. Please try again.";
      setErrorMsg(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-background">
      {/* BLOB NỀN */}
      <img src={Ellipse1} alt="" className="blob blob-orange-top" />
      <img src={Ellipse2} alt="" className="blob blob-yellow-bottom" />

      {/* CONTENT */}
      <div className="auth-content">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            {/* CỘT TRÁI – FORM */}
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <div className="auth-card">
                {/* Logo */}
                <div className="d-flex align-items-center mb-4">
                  <div className="logo-icon d-flex align-items-center justify-content-center">
                    <FaBriefcase />
                  </div>
                  <span className="logo-text ms-2">JobPortal</span>
                </div>

                {/* Tiêu đề + Log in link */}
                <h2 className="auth-title mb-1">Create account.</h2>
                <p className="auth-subtitle mb-4">
                  Already have account?{" "}
                  <Link to={ROUTERS.USER.SIGNIN} className="link-login">
                    Sign in
                  </Link>
                </p>

                {/* Title nhỏ phía trên */}
                

                

                {/* FORM */}
                <form onSubmit={handleSubmit}>
                  <div className="row g-3 mb-1">
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control input-soft"
                        placeholder="Full name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control input-soft"
                        placeholder="Username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control input-soft"
                      placeholder="Email address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3 position-relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control input-soft"
                      placeholder="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      className="btn-eye"
                      onClick={() => setShowPassword((v) => !v)}
                    >
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>

                  <div className="mb-3 position-relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      className="form-control input-soft"
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      className="btn-eye"
                      onClick={() => setShowConfirmPassword((v) => !v)}
                    >
                      {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>

                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="terms"
                      checked={acceptTerms}
                      onChange={(e) => setAcceptTerms(e.target.checked)}
                    />
                    <label
                      className="form-check-label small"
                      htmlFor="terms"
                    >
                      I’ve read and agree with your{" "}
                      <span className="terms-link">Terms of Services</span>
                    </label>
                  </div>

                  {/* Hiển thị lỗi / success */}
                  {errorMsg && (
                    <p className="text-danger small mb-2">{errorMsg}</p>
                  )}
                  {successMsg && (
                    <p className="text-success small mb-2">{successMsg}</p>
                  )}

                  <button
                    type="submit"
                    className="btn btn-primary w-100 auth-primary-btn mb-4"
                    disabled={loading}
                  >
                    {loading ? "Creating..." : "Create"}
                    <span className="ms-1">→</span>
                  </button>
                </form>

                

                {/* Social buttons */}
                <div className="d-flex flex-column flex-sm-row gap-3">
                  
                  <button type="button" className="social-btn flex-fill">
                    <FcGoogle size={20} />
                    <span>Sign up with Google</span>
                  </button>
                </div>
              </div>
            </div>

            {/* CỘT PHẢI – ẢNH MINH HỌA */}
            <div className="col-md-6 d-none d-md-flex justify-content-center">
              <img
                src={SignInIllustration}
                alt="Create account"
                className="auth-illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountPage;
