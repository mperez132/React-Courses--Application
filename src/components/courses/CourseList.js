import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CourseList = ({ courses, onDeleteClick, onEnrollClick }) => (
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
      {courses
        .filter((course) => course.enrolled < 1)
        .map((course) => {
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
                  className="btn btn-success"
                  onClick={() => onEnrollClick(course)}
                >
                  Enroll(Works?)
                </button>
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
);

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onEnrollClick: PropTypes.func.isRequired,
};

export default CourseList;
