import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTERS } from "../../../utils/router";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";

import { FaBriefcase } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";

import SignInIllustration from "../../../assets/users/images/sign-in.png";
import Ellipse1 from "../../../assets/users/images/Ellipse 1.png";
import Ellipse2 from "../../../assets/users/images/Ellipse 2.png";

// 👉 IMPORT API LOGIN
import AuthApi from "../../../service/authApi";

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  // form handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Gọi API LOGIN (normal sign in)
   // Gọi API LOGIN
const handleLogin = async (e) => {
  e.preventDefault();
  setErrorMsg("");

  if (!formData.email || !formData.password) {
    setErrorMsg("Please enter your email and password.");
    return;
  }

  try {
    setLoading(true);

    // GỌI API
    const res = await AuthApi.login(formData);

    // 👉 Tạm log ra để nếu cần bạn còn xem được object
    console.log("LOGIN RESPONSE:", res.data);

    // ===== 1. Lưu token =====
    const token =
      res.data?.token ||
      res.data?.data?.token ||
      res.data?.result?.token;

    if (token) {
      localStorage.setItem("token", token);
    }

    // ===== 2. Lấy USERNAME từ response =====
    // Giả định vài format phổ biến:
    // { token, username }
    // { token, user: { userName } }
    // { token, data: { userName } }
    let username =
      res.data?.username ||
      res.data?.userName ||
      res.data?.user?.username ||
      res.data?.user?.userName ||
      res.data?.data?.username ||
      res.data?.data?.userName ||
      res.data?.data?.user?.username ||
      res.data?.data?.user?.userName;

    // Nếu backend KHÔNG trả username → fallback: lấy phần trước @ trong email
    if (!username && formData.email) {
      username = formData.email.split("@")[0];
    }

    if (username) {
      // Header đang đọc key "fullName" nên ta lưu username vào đó
      localStorage.setItem("fullName", username);
    }

    // ===== 3. Điều hướng về HOME =====
    navigate(ROUTERS.USER.HOME);
  } catch (err) {
    const msg =
      err?.response?.data?.message ||
      "Login failed. Please check your credentials.";
    setErrorMsg(msg);
  } finally {
    setLoading(false);
  }
};


  const API_BASE_URL =
    "https://determined-hermann.103-28-36-75.plesk.page/api";

  const handleGoogleLogin = () => {
    const FRONTEND_URL = "http://localhost:3000";
    const callbackUrl = `${FRONTEND_URL}${ROUTERS.USER.GOOGLE_CALLBACK}`;

    const url = `${API_BASE_URL}/Auth/external-login?provider=Google&returnUrl=${encodeURIComponent(
      callbackUrl
    )}`;

    window.location.href = url; // redirect tới backend
  };

  return (
    <div className="auth-background">
      <img src={Ellipse1} alt="" className="blob blob-orange-top" />
      <img src={Ellipse2} alt="" className="blob blob-yellow-bottom" />

      <div className="auth-content">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            {/* LEFT – FORM */}
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <div className="auth-card">
                {/* Logo */}
                <div className="d-flex align-items-center mb-4">
                  <div className="logo-icon d-flex align-items-center justify-content-center">
                    <FaBriefcase />
                  </div>
                  <span className="logo-text ms-2">JobPortal</span>
                </div>

                <h2 className="auth-title mb-1">Sign in</h2>
                <p className="auth-subtitle mb-4">
                  Don&apos;t have an account?
                  <Link to={ROUTERS.USER.CREATEACCOUNT} className="link-login">
                    {" "}
                    Create Account
                  </Link>
                </p>

                {/* FORM */}
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <input
                      type="email"
                      name="email"
                      className="form-control input-soft"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3 position-relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className="form-control input-soft"
                      placeholder="Password"
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

                  {/* Error message */}
                  {errorMsg && (
                    <p className="text-danger small mb-2">{errorMsg}</p>
                  )}

                  {/* Remember + forgot */}
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="rememberMe"
                      />
                      <label
                        className="form-check-label small"
                        htmlFor="rememberMe"
                      >
                        Remember me
                      </label>
                    </div>

                    <Link
                      to={ROUTERS.USER.FORGETPASSWORD}
                      className="small link-login"
                    >
                      Forgot password
                    </Link>
                  </div>

                  {/* LOGIN BUTTON */}
                  <button
                    type="submit"
                    className="btn btn-primary w-100 auth-primary-btn mb-4"
                    disabled={loading}
                  >
                    {loading ? "Signing in..." : "Sign in"}
                    <span className="ms-1">→</span>
                  </button>
                </form>

                

                <div className="d-flex flex-column flex-sm-row gap-3">
                  <button
                    type="button"
                    className="social-btn flex-fill"
                    onClick={handleGoogleLogin}
                  >
                    <FcGoogle size={20} />
                    <span>Sign in with Google</span>
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT – IMAGE */}
            <div className="col-md-6 d-none d-md-flex justify-content-center">
              <img
                src={SignInIllustration}
                alt="Sign in"
                className="sign-in"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
