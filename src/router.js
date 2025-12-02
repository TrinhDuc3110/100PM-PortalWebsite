// src/router.js
import MasterLayout from "./theme/masterLayout";
import { Routes, Route } from "react-router-dom";
import { ROUTERS } from "./utils/router";

import Homepage from "./pages/users/homepage";
import JobPage from "./pages/users/jobPage";
import CandidatePage from "./pages/users/candidatePage";
import CustomerSupportPage from "./pages/users/customerSupportPage";

import SignInPage from "./pages/users/auth/signin";
import CreateAccountPage from "./pages/users/auth/createAccount";
import ForgetPasswordPage from "./pages/users/auth/forgetPassword";
import ResetPasswordPage from "./pages/users/auth/resetPassword";
import EmailVerificationPage from "./pages/users/auth/verification";
import GoogleCallbackPage from "./pages/users/auth/GoogleCallbackPage";

import FindJob from "./pages/users/jobPage/FindJob";
import JobDetail from "./pages/users/jobPage/JobDetail";

import EmployerMasterLayout from "./theme/employer/masterLayout";
import EmployerDashboardPage from "./pages/employer/EmployerDashboardPage";
import EmployerPostJobPage from "./pages/employer/EmployerPostJobPage";
import EmployerViewApplicationsPage from "./pages/employer/EmployerApplicationsPage";
import EmployerCustomerSupportPage from "./pages/employer/EmployerCustomerSupportPage";
import EmployerApplications from "./pages/employer/EmployerApplicationsPage";

const renderUserRoutes = () => {
  return (
    <Routes>
      {/* GROUP 1 — các trang dùng MasterLayout */}
      <Route element={<MasterLayout />}>
        <Route path={ROUTERS.USER.HOME} element={<Homepage />} />

        {/* Job list + detail */}
        <Route path={ROUTERS.USER.FIND_JOB} element={<FindJob />} />
        <Route path={ROUTERS.USER.JOB_DETAIL} element={<JobDetail />} />
        <Route path={ROUTERS.USER.JOB} element={<JobPage />} />

        <Route path={ROUTERS.USER.CANDIDATE} element={<CandidatePage />} />
        <Route
          path={ROUTERS.USER.CUSTOMERSUPPORT}
          element={<CustomerSupportPage />}
        />
      </Route>

      {/* GROUP 2 — AUTH không kế thừa MasterLayout */}
      <Route path={ROUTERS.USER.SIGNIN} element={<SignInPage />} />
      <Route path={ROUTERS.USER.CREATEACCOUNT} element={<CreateAccountPage />} />
      <Route path={ROUTERS.USER.FORGETPASSWORD} element={<ForgetPasswordPage />} />
      <Route path={ROUTERS.USER.RESETPASSWORD} element={<ResetPasswordPage />} />
      <Route path={ROUTERS.USER.VERIFICATION} element={<EmailVerificationPage />} />
      <Route
        path={ROUTERS.USER.GOOGLE_CALLBACK}
        element={<GoogleCallbackPage />}
      />

      {/* GROUP 3 — EMPLOYER dùng EmployerMasterLayout */}
      <Route element={<EmployerMasterLayout />}>
        <Route
          path={ROUTERS.EMPLOYER.DASHBOARD}
          element={<EmployerDashboardPage />}
        />
        <Route
          path={ROUTERS.EMPLOYER.POST_JOB}
          element={<EmployerPostJobPage />}
        />
        <Route
          path={ROUTERS.EMPLOYER.VIEWAPPLICATIONS}
          element={<EmployerViewApplicationsPage />}
        />
        <Route
          path={ROUTERS.EMPLOYER.CUSTOMERSUPPORT}
          element={<EmployerCustomerSupportPage />}
        />
        <Route
          path={ROUTERS.EMPLOYER.APPLICATIONS}
          element={<EmployerApplications />}
        />
      </Route>
    </Routes>
  );
};

const RouterCustom = () => {
  return renderUserRoutes();
};

export default RouterCustom;
