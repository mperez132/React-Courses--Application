import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => (
  <div>
    <h2>The page you are looking for is not here.</h2>
    <p>This is not a valid URL. Click the button below to return home. </p>
    <Link to="/" className="btn btn-primary">
      Go back home
    </Link>
  </div>
);

export default PageNotFound;
