import React, { memo } from "react";
import "./employerCustomerSupportPage.scss";

import {
  FaClipboardList,
  FaCogs,
  FaDatabase,
  FaRobot,
  FaUserCog,
  FaExclamationTriangle,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { ROUTERS } from "../../utils/router";

const EmployerCustomerSupportPage = () => {
  const navigate = useNavigate();

  const supportList = [
    {
      icon: <FaClipboardList />,
      title: "Getting Started",
      desc: "Learn the basics of Airtable",
    },
    {
      icon: <FaCogs />,
      title: "Billing",
      desc: "Learn how to manage plans and invoices",
    },
    {
      icon: <FaDatabase />,
      title: "Designing your Base",
      desc: "Learn how to build your base to enable your workflows",
    },
    {
      icon: <FaRobot />,
      title: "Automations",
      desc: "Learn about Airtable automations and how to build them",
    },
    {
      icon: <FaUserCog />,
      title: "Managing your Account",
      desc: "Learn how to manage your Airtable account",
    },
    {
      icon: <FaExclamationTriangle />,
      title: "Troubleshooting",
      desc: "Get help with an issue",
    },
  ];

  return (
    <div className="employer-page-wrapper py-4 px-3">
      <h2 className="fw-bold employer-page-title mb-4">Customer Support</h2>

      <div className="row g-4">
        {supportList.map((item, index) => (
          <div key={index} className="col-12 col-sm-6 col-lg-4">
            <div className="support-card">
              <div className="support-icon">{item.icon}</div>
              <h4 className="support-title">{item.title}</h4>
              <p className="support-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(EmployerCustomerSupportPage);
