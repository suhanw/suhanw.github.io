import cn from "classnames";
import style from "./style";
import utilStyle from "styles/utils";

const About = (props) => {
  return (
    <section
      id={"about-section"}
      className={cn(style.about, utilStyle.homeSection)}
    >
      <h2 className={style.title}>about</h2>
      <p className={cn(style.content, style.desktop)}>
        Right-brained techie passionate about coding, product, UX, and fun with
        my family.
      </p>
      <ul className={cn(style.content, style.desktop)}>
        <li>
          👷🏻‍♂️ Senior Software Engineer at{" "}
          <a href={"https://www.cloudcraft.co"} target="_blank">
            Cloudcraft
          </a>{" "}
          by{" "}
          <a href={"https://www.datadoghq.com/"} target={"_blank"}>
            Datadog
          </a>
          .
        </li>
        <li>
          🏗 Building apps with JavaScript, TypeScript, React, Node.js,
          PostgreSQL, AWS.
        </li>
        {/* <li>🌱 Currently learning and experimenting with Jenkins, GitHub Actions, Pulumi.</li> */}
      </ul>
      <ul className={cn(style.content, style.mobile)}>
        <li>
          👷🏻‍♂️ Sr. SWE at{" "}
          <a href={"https://www.cloudcraft.co"} target="_blank">
            Cloudcraft
          </a>{" "}
          by{" "}
          <a href={"https://www.datadoghq.com/"} target={"_blank"}>
            Datadog
          </a>
          .
        </li>
        <li>🏗 JavaScript, TypeScript, React, Node.</li>
        {/* <li>🌱 Learning Jenkins, GitHub Actions, GCP.</li> */}
      </ul>
      {/* <p className={cn(style.content, style.mobile)}>View my <a href='/assets/suhan_wijaya_resume.pdf' target='_blank'>resume</a>.</p>
			<p className={cn(style.content, style.desktop)}>View my <a href='/assets/suhan_wijaya_resume.pdf' target='_blank'>resume</a>.</p> */}
    </section>
  );
};

export default About;
