import React, { useState } from "react";

function App() {
  const [selectedOrganizations, setSelectedOrganizations] = useState([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);

  // Sample jobs data
  const jobs = [
    { organization: "Company A", jobType: "Full-Time" },
    { organization: "Company B", jobType: "Part-Time" },
    { organization: "Company A", jobType: "Full-Time" },
    { organization: "Company C", jobType: "Part-Time" },
    { organization: "Company C", jobType: "Full-Time" }
    // Add more job objects
  ];

  const style = { display: "flex", justifyContent: "space-around" };
  // Filter function by organization
  const filterByOrganization = (job) => {
    if (selectedOrganizations.length === 0) return true;
    if (selectedOrganizations.includes("All")) return true;
    return selectedOrganizations.includes(job.organization);
  };

  // Filter function by job type
  const filterByJobType = (job) => {
    if (selectedJobTypes.length === 0) return true;
    if (selectedJobTypes.includes("All")) return true;
    return selectedJobTypes.includes(job.jobType);
  };

  const filteredJobs = jobs
    .filter((job) => filterByOrganization(job))
    .filter((job) => filterByJobType(job));

  return (
    <div>
      <h2>Filter Jobs</h2>
      <div style={style}>
        <div>
          <label>
            <p>Company:</p>
            <select
              multiple
              value={selectedOrganizations}
              onChange={(e) =>
                setSelectedOrganizations(
                  Array.from(e.target.selectedOptions, (option) => option.value)
                )
              }
            >
              <option value="All">All Company</option>
              <option value="Company A">Company A</option>
              <option value="Company B">Company B</option>
              <option value="Company C">Company C</option>
              {/* Add more organization options */}
            </select>
          </label>
        </div>
        <br />
        <br />
        <div>
          <label>
            <p>Job Types:</p>
            <select
              multiple
              value={selectedJobTypes}
              onChange={(e) =>
                setSelectedJobTypes(
                  Array.from(e.target.selectedOptions, (option) => option.value)
                )
              }
            >
              <option value="All">All Jobs</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              {/* Add more job type options */}
            </select>
          </label>
        </div>
      </div>
      <h3 style={{ textAlign: "center" }}>Filtered Jobs</h3>
      <div style={style}>
        <ul>
          {filteredJobs.map((job, index) => (
            <li key={index}>
              {job.organization} - {job.jobType}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
