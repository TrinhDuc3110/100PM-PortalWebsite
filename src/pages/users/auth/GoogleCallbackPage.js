import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import { ROUTERS } from "../../../utils/router";

const GoogleCallbackPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const token = params.get("token");
    const role = params.get("role");
    const expires = params.get("expires");

    if (token) {
      // Lưu token
      localStorage.setItem("token", token);
      if (role) localStorage.setItem("role", role);
      if (expires) localStorage.setItem("token_expires", expires);

      // Decode token để lấy fullName
      try {
        const decoded = jwtDecode(token);
        const fullName =
          decoded.unique_name || decoded.fullName || decoded.name;
        if (fullName) {
          localStorage.setItem("fullName", fullName);
        }
      } catch (e) {
        console.error("Decode token error:", e);
      }

      // Chuyển về trang Home
      navigate(ROUTERS.USER.HOME);
    } else {
      // Không có token → quay lại SignIn
      navigate(ROUTERS.USER.SIGNIN);
    }
  }, [location, navigate]);

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      Signing you in with Google...
    </div>
  );
};

export default GoogleCallbackPage;
