// src/utils/router.js

export const ROUTERS = {
  USER: {
    HOME: "/",              // Home

    // FIND JOB + JOB DETAIL
    FIND_JOB: "/find-job",  // trang danh sách job
    JOB_DETAIL: "/job-detail", // trang chi tiết job

    // (nếu còn dùng JobPage cũ thì để riêng path này)
    JOB: "/jobs",

    CANDIDATE: "/candidates",
    CUSTOMERSUPPORT: "/support",

    // AUTH
    SIGNIN: "/sign-in",
    CREATEACCOUNT: "/create-account",
    FORGETPASSWORD: "/forgot-password",
    RESETPASSWORD: "/reset-password",
    VERIFICATION: "/verification",
    GOOGLE_CALLBACK: "/auth/google-callback",
  },

  EMPLOYER: {
    DASHBOARD: "/employer/dashboard",
    JOBS: "/employer/jobs",
    PROFILE: "/employer/profile",
    FINECANDIDATES: "/employer/find-candidates",
    APPLICATIONS: "/employer/applications",
    CUSTOMERSUPPORT: "/employer/customer-support",
    POST_JOB: "/employer/post-job",
    VIEWAPPLICATIONS: "/employer/view-applications",
  },
};
