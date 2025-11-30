import { memo } from "react";
import "./candidatePage.scss";

// 👉 IMPORT LOGO 
import clickup from "../../../assets/partner-logos/clickup.png";
import dropbox from "../../../assets/partner-logos/dropbox.png";
import elastic from "../../../assets/partner-logos/elastic.png";
import github from "../../../assets/partner-logos/github.png";
import freshbooks from "../../../assets/partner-logos/freshbooks.png";
import helpscout from "../../../assets/partner-logos/helpscout.png";
import hubspot from "../../../assets/partner-logos/hubspot.png";
import intuit from "../../../assets/partner-logos/intuit.png";
import google from "../../../assets/partner-logos/googlelogo.png";
import paychex from "../../../assets/partner-logos/paychex.png";
import salesforce from "../../../assets/partner-logos/salesforce.png";
import sap from "../../../assets/partner-logos/sap.png";
import segment from "../../../assets/partner-logos/segment.png";
import servicenow from "../../../assets/partner-logos/servicenow.png";
import shopify from "../../../assets/partner-logos/shopify.png";

const CandidatePage = () => {
  const brands = [
    clickup,
    dropbox,
    elastic,
    github,
    freshbooks,
    helpscout,
    hubspot,
    intuit,
    google,
    paychex,
    salesforce,
    sap,
    segment,
    servicenow,
    shopify,
  ];

  return (
    <div className="candidate-page container py-5">

      <h2 className="candidate-title text-center mb-4">
        Popular companies using JobPortal
      </h2>

      <div className="row justify-content-center g-3 g-md-4">
        {brands.map((logo, index) => (
          <div
            key={index}
            className="col-4 col-sm-3 col-md-2 d-flex justify-content-center"
          >
            <div className="brand-logo-card">
              <img src={logo} alt="brand logo" className="brand-logo-img" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(CandidatePage);
