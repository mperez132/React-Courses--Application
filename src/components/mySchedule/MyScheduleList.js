import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MyScheduleList = ({ courses, onDeleteClick }) => (
  <div className="schedule">
    <h2>My Enrolled Courses</h2>
    <p>Here, you can find the courses you enrolled in from the course page.</p>
    <Link to="/" className="btn btn-primary">
      Go back home
    </Link>
    <table className="table">
      <thead>
        <tr>
          <th>Link</th>
          <th>Course Name</th>
          <th>Author</th>
          <th>Category</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {courses.map((course) => {
          return (
            <tr key={course.id}>
              <td>
                <a
                  className="btn btn-light"
                  href={"http://pluralsight.com/courses/" + course.slug}
                >
                  Watch
                </a>
              </td>
              <td>
                <Link to={"/course/" + course.slug}>{course.title}</Link>
              </td>
              <td>{course.authorName}</td>
              <td>{course.category}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onDeleteClick(course)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);
MyScheduleList.propTypes = {
  courses: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onEnrollClick: PropTypes.func.isRequired,
};
export default MyScheduleList;
