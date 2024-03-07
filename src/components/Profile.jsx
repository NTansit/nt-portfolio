import ntProfilePic from "../assets/nt-profile-pic.jpg";
import githubPic from "../assets/github.png";
import linkedinPic from "../assets/linkedin.png";

export default function Profile() {
  const resumeDownload = () => {
    window.open("../assets/nt-resume.pdf", "_blank", "noreferrer");
  };
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <>
      <section id="profile">
        <div className="section__pic-container">
          <img src={ntProfilePic} alt="Nathapon profile picture" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Nathapon Tansit</h1>
          <p className="section__text__p2">Frontend Developer</p>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onClick={() =>
                openInNewTab(
                  "https://drive.google.com/file/d/1V2DBSvjLZP3MEUGT9EeXabKC6U1F1Gc3/view?usp=drive_link"
                )
              }
            >
              Download CV
            </button>
            <button
              className="btn btn-color-1"
              onClick="location.href='./#contact'"
            >
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src={linkedinPic}
              alt="My LinkedIn profile"
              className="icon"
              onClick={() =>
                openInNewTab("https://www.linkedin.com/in/nathapontansit/")
              }
            />
            <img
              src={githubPic}
              alt="My Github profile"
              className="icon"
              onClick={() => openInNewTab("https://github.com/NTansit")}
            />
          </div>
        </div>
      </section>
    </>
  );
}
