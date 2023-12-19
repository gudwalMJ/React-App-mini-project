import Carina from "../images/CarinaFrança.jpeg";
import Josip from "../images/JosipMilan.jpg";

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1 className="welcome-text">Welcome to IronHack Marketplace</h1>
      <p>
        Experience the cutting-edge Ironhack Marketplace, an application
        developed by Ironhack students, prepared to meet the needs of the most
        demanding customers.{" "}
      </p>
      <h3 className="info">Meet Our Team members:</h3>
      <ul className="team-members">
        <li className="team-member">
          <img src={Carina} alt="Carina França" className="team-member-photo" />
          <div className="team-member-info">
            <strong>Carina França</strong> I&apos;m Brazilian living in
            Portugal, I&apos;m 28 years old, with a background in pharmacy.
            I&apos;m changing careers to IT and really enjoying the process.
            <div>
              <br />
              You can check my{" "}
              <a
                href="https://github.com/settings/profile"
                target="_blank"
                rel="noopener noreferrer"
                className="profile-link"
              >
                GitHub profile{" "}
              </a>{" "}
              , and my{" "}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="profile-link"
              >
                LinkedIn profile
              </a>
              .
            </div>
          </div>
        </li>
        <li className="team-member">
          <img src={Josip} alt="Josip Milan" className="team-member-photo" />
          <div className="team-member-info">
            <strong>Josip Milan</strong> A 32-year-old Croatian currently
            residing in the Netherlands, I have transitioned from a previous
            career as a chef to embark on a new journey in the field of IT.
            Embracing the challenges of this career switch, I am thoroughly
            enjoying the learning process and the opportunities it brings.
            <div>
              <br />
              You can check my{" "}
              <a
                href="https://github.com/gudwalMJ"
                target="_blank"
                rel="noopener noreferrer"
                className="profile-link"
              >
                GitHub profile{" "}
              </a>{" "}
              , and my{" "}
              <a
                href="https://www.linkedin.com/in/josip-milan-4738a9183/"
                target="_blank"
                rel="noopener noreferrer"
                className="profile-link"
              >
                LinkedIn profile{" "}
              </a>
              .
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AboutPage;
