import React from "react";

const RegistrationFeesTable = () => {
  const data = [
    { category: "Regular Author (Student/Academician)", fees: "1500 INR" },
    { category: "Regular Author (Industry)", fees: "2000 INR" },
    {
      category: "Attendees (Author but not presenter)",
      fees: "One day: 500 INR",
    },
    { category: "Attendees (Non-author)", fees: "One day: 750 INR , Two days: 1000 INR" },
  ];

  return (
    <div className="table-container">
      <h2 className="table-title">Registration Fees Details</h2>
      <table className="fees-table">
        <thead>
          <tr>
            <th>Registration Category</th>
            <th>Registration Fees (Indian Author)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.category}</td>
              <td>{item.fees}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="register-btn-container">
        <a
          href="https://docs.google.com/document/d/1-7KyYcrvevNnXwrgVd1viJRHPpC6o_5c/edit?usp=sharing&ouid=116738563861057593415&rtpof=true&sd=true" // <-- change to your real link
          target="_blank"
          rel="noopener noreferrer"
          className="register-btn"
        >
          Register Now
        </a>
      </div>
    </div>
  );
};

export default RegistrationFeesTable;
