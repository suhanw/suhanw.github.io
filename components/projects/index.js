import { useState } from "react";
import cn from "classnames";
import style from "./style";
import utilStyle from "styles/utils";
import { isTouchDevice } from "utils";

const Projects = () => (
  <section
    id={"projects-section"}
    className={cn(style.projects, utilStyle.homeSection)}
  >
    <h2 className={style.title}>projects</h2>
    <div className={style.masonry}>
      <div className={style.column}>
        <ProjectThumbnail
          href={"https://github.com/suhanw/ai-chatbot"}
          imageSrc={"/images/ai-chatbot.png"}
          imageAlt={"Personal challenge to build a ChatGPT clone."}
          stack={[
            "openai.jpg",
            "typescript.jpeg",
            "nodejs.png",
            "react.png",
            "webpack.png",
            "mongodb.png",
            "redis.png",
            "docker.png",
          ]}
        />

        <ProjectThumbnail
          href={"/auteur-preview"}
          imageSrc={"/images/auteur.png"}
          imageAlt={
            "Personal challenge to build a full-stack MVP with Node.js. Design/features inspired by Tumblr."
          }
          stack={[
            "react.png",
            "redux.png",
            "nodejs.png",
            "express.png",
            "mongoose.jpg",
            "mongodb.png",
            "passport.png",
            "socketio.png",
          ]}
        />
      </div>
      <div className={style.column}>
        <ProjectThumbnail
          href={"/tmnt-preview"}
          imageSrc={"/images/tmnt.png"}
          imageAlt={
            "Personal challenge to build a game with React & Redux. Design/features inspired by SNES TMNT."
          }
          stack={["react.png", "redux.png", "html5.png", "css3.png"]}
        />
        <ProjectThumbnail
          href={"/mapmycruise-preview"}
          imageSrc={"/images/mapmycruise.png"}
          imageAlt={
            "Personal challenge to build a MVP with Rails. Design/features inspired by MapMyRun."
          }
          stack={[
            "react.png",
            "redux.png",
            "ruby.png",
            "rails.png",
            "active-record.png",
            "postgresql.png",
            "googlemaps.png",
            "pusher.png",
          ]}
        />
      </div>
    </div>
  </section>
);

const ProjectThumbnail = ({ href, imageSrc, imageAlt, stack }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleMouseEvent = (e) => {
    if (isTouchDevice()) {
      return;
    }

    if (showOverlay && e?.type === "mouseleave") {
      setShowOverlay(false);
    } else if (!showOverlay && e?.type === "mouseenter") {
      setShowOverlay(true);
    }
  };

  return (
    <a
      className={cn(style.cell, showOverlay ? style.show : null)}
      href={href}
      onMouseEnter={handleMouseEvent}
      onMouseLeave={handleMouseEvent}
    >
      <span className={style.overlay}></span>
      <span className={style.overlayContent}>
        <span className={style.iconWrapper}>
          {stack?.length > 0 &&
            stack.map((filename) => (
              <img
                key={filename}
                className={style.icon}
                src={`/tech-icons/${filename}`}
              />
            ))}
        </span>
      </span>
      <img src={imageSrc} alt={imageAlt} />
    </a>
  );
};

export default Projects;
