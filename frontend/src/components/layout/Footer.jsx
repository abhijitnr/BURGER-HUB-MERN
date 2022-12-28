import {
  AiFillYoutube,
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>BURGER-HUB</h2>
        <p>We are trying to provide you with the best test possible.</p>
        <br />
        <em>We pay attention to genuine feedback.</em>

        <strong>All rights reserved @burger-hub.</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>
        <a
          href="https://www.youtube.com/c/GYANSforGYANI"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillYoutube />
        </a>

        <a
          href="https://www.linkedin.com/in/abhijit-biswas-3b6586162/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>

        <a href="https://github.com/abhijitnr" target="_blank" rel="noreferrer">
          <AiFillGithub />
        </a>

        <a
          href="https://www.instagram.com/abhijit.gyans/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
