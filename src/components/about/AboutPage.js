import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const AboutPage = () => (
  <div>
    <h2>About</h2>
    <p>
      This app uses React, Redux, React Router, and many other helpful
      libraries. It mimics the basics of a course page where you can add,
      enroll, and delete courses.
    </p>
    <p>Click the button below to return to the home page.</p>
    <Link to="/" className="btn btn-primary">
      Go back home
    </Link>
  </div>
);

export default AboutPage;
