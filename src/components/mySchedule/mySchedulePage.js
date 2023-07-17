import React from "react";
import { Link } from "react-router-dom";

const mySchedulePage = () => (
  <div className="schedule">
    <h2>My Course Schedule</h2>
    <p>Here, you can find the courses you enrolled in from the course page.</p>
    <Link to="/" className="btn btn-primary">
      Go back home
    </Link>
    <table className="table">
      <thread>
        <tr>
          <th>Link</th>
          <th>Course Name</th>
          <th>Author</th>
          <th>Category</th>
          <th />
        </tr>
      </thread>
    </table>
  </div>
);

export default mySchedulePage;
