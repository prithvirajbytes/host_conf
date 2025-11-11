import React from "react";
  
const CMTAcknowledgement = () => {
  return (
    <section className="paper-submission-section">
      <div className="container">
        <h2 className="section-title font-bold">CMT Acknowledgement</h2>
        <hr />
        <div className="cards-grid top-card">
          <div className="card">
            <p className="font-bold text-sm leading-relaxed text-gray-800">
              The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CMTAcknowledgement;