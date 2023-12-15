import { Link } from "react-router-dom";
import Carina from "../images/CarinaFrança.jpeg";
import Josip from "../images/JosipMilan.jpg";

const AboutPage = () => {
  return (
    <div className="about-page">
      {" "}
      <h1 className="welcome-text"> Welcome to IronHack Market </h1>
      <h3>Information about the team members:</h3>
      <ul className="team-members">
        <li>
          <img src={Carina} alt="photo-carina" className="photo-carina" />
          <br />
          <p>
            <strong>Carina França</strong> I&apos;m Brazilian living in
            Portugal, I&apos;m 28 years old, with a background in pharmacy,
            I&apos;m changing careers to IT and really enjoying the process.{" "}
            <p>
              You can check my GitHub profile{" "}
              <Link to="https://github.com/settings/profile">here </Link>
              and my Linkedin profile
              <Link to="#"> here</Link>
            </p>
          </p>
        </li>
        <li>
          {" "}
          <img src={Josip} alt="Photo Josip" className="photo-Josip" />
          <strong>Josip Milan</strong>{" "}
          <p>
            A 32-year-old Croatian currently residing in the Netherlands, I have
            transitioned from a previous career as a chef to embark on a new
            journey in the field of IT. Embracing the challenges of this career
            switch, I am thoroughly enjoying the learning process and the
            opportunities it brings.
          </p>{" "}
          You can check my GitHub profile
          <Link to="https://github.com/gudwalMJ">here </Link>and my Linkedin
          profile
          <Link to="www.linkedin.com/in/josip-milan-4738a9183"> here</Link>
        </li>
      </ul>
    </div>
  );
};

export default AboutPage;
