import { MdError } from "react-icons/md";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="notFound">
      <main>
        <div>
          <MdError />
          <h1>404</h1>
        </div>

        <p>
          The page you are looking for cannot be found. Please click below to go
          to the home page.
        </p>

        <Link to="/">Go to Home</Link>
      </main>
    </section>
  );
};

export default NotFound;
