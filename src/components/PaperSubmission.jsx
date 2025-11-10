import React from "react";

const PaperSubmission = () => {
  return (
    <section className="paper-submission-section">
      {" "}
      <div className="container">
        {" "}
        <h2 className="section-title">Paper Submission</h2> <hr />
        <div className="cards-grid top-card">
          {" "}
          <div className="card">
            {" "}
            <h3 className="card-title">Important Dates</h3>{" "}
            <ul className="card-list">
              {" "}
              <li>Paper Submission deadline: 10 Dec, 2025</li>{" "}
              <li>Paper Acceptance Notification: 20 Dec, 2025</li>{" "}
              <li>Camera ready Paper Submission: 30 Dec, 2025</li>{" "}
              <li>Paper Registration Deadline: 03 Jan, 2026</li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
        {/* Bottom three cards side by side */}{" "}
        <div className="cards-grid bottom-cards">
          {" "}
          <div className="card">
            {" "}
            <h3 className="card-title">Submission Link</h3>{" "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              {" "}
              ☞ CMT Link will be coming shortly. ☜{" "}
            </a>{" "}
          </div>{" "}
          <div className="card">
            {" "}
            <h3 className="card-title">Paper Template</h3>{" "}
            <a
              href="https://docs.google.com/document/d/1fWVfoe1BM2mGm_8Z9qRz3c7_RT1T1Vdh/edit?usp=sharing&ouid=116738563861057593415&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              {" "}
              ☞ Download Paper Template{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
        <section
          aria-labelledby="cmt-ack-title"
          className="max-w-3xl mx-auto p-4 bg-gray-50 rounded-2xl shadow-sm"
        >
          <h3 id="cmt-ack-title" className="contact-heading sr-only">
            CMT Acknowledgment
          </h3>

          <p className="font-semibold text-sm leading-relaxed text-gray-800">
            The Microsoft CMT service was used for managing the peer-reviewing
            process for this conference. This service was provided for free by
            Microsoft and they bore all expenses, including costs for Azure
            cloud services as well as for software development and support.
          </p>
        </section>
      </div>
    </section>
  );
};

export default PaperSubmission;
