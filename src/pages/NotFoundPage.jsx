import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      Sorry.... This page not exist
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFoundPage;