import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/founder.png";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>BURGER-HUB</h4>

          <p>
            We are BURGER-HUB. The place for the most tasty burgers on the
            planet.
          </p>

          <p>
            Explore our menu of burgers and food. Click below to see our menu.
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>

          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Abhijit Biswas</h3>
            </div>

            <p>I am Abhijit Biswas, the founder and CEO of BURGER-HUB.</p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
