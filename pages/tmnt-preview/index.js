import Head from "next/head";
import style from "./style";

export default () => {
  return (
    <>
      <Head>
        <title>TMNT React Preview</title>
      </Head>
      <article className={style.contentWrapper}>
        <h1>TMNT React</h1>
        <a className={style.cta} href="/tmnt">
          www.suhanwijaya.com/tmnt
        </a>
        <p>
          TMNT React is inspired by TMNT 4: Turtles in Time, a classic "beat 'em
          up" 2D scroller game on SNES. It utilizes Redux to track character
          states, React and CSS to animate sprites and program the motion of
          characters.
        </p>

        <h2>Features and Implementation</h2>

        <h3>Viewport that centers on Turtle</h3>
        <p>
          I used three components to setup the display frame:
          <ul>
            <li>
              <strong>Game</strong> creates a div to define the frame width and
              height.
            </li>

            <li>
              <strong>Viewport</strong> is positioned absolute relative to Game.{" "}
            </li>

            <li>
              <strong>Stage</strong> is a child of <strong>Viewport</strong> ,
              renders the location/environment and is sized with the full width
              of the stage level (i.e., the full distance that the turtle may
              potentially travel). This is where the Turtle component lives.
            </li>
          </ul>
          Moving the <strong>Turtle</strong> is simply updating its absolute
          left position relative to Stage, which is tracked via Redux.{" "}
          <strong>Viewport</strong> listens for changes to the turtle's left
          value, and sets its own left position as the negative of the turtle's
          position, when the <strong>Turtle</strong> reaches at least 1/4
          through the Game frame width. Because <strong>Viewport</strong> is
          positioned absolute, a negative left position would place it to the
          left of the Game frame, creating the illusion of panning from left to
          right. When the <strong>Viewport</strong> changes its position as the
          turtle changes its position, it "follows" the turtle.
        </p>
        <figure>
          <img src="/images/tmnt-preview/viewport.gif" />
        </figure>

        <h3>Turtle Combo Attack</h3>
        <p>
          To accomplish a combo attack, I use an array that tracks the number of
          times a player presses the 'attack' key. The Turtle component renders
          the appropriate sprites based on a set of conditions to determine if
          it's a combo attack.
        </p>
        <figure>
          <img src="/images/tmnt-preview/combo-attack.gif" />
        </figure>

        <h3>Foot Soldier</h3>
        <p>
          While the event handlers for controls are defined in the{" "}
          <strong>Turtle</strong> component, the logic for the interaction
          between the <strong>Turtle</strong> and <strong>Foot</strong> soldiers
          lives in the <strong>Foot</strong> component. <strong>Foot</strong> is
          a Redux container that listens for changes to <srong>Turtle</srong>{" "}
          position and actions (i.e., move or attack). This would minimize the
          number of operations in the game as the <srong>Turtle</srong> does not
          have to keep track of all the <strong>Foot</strong> soldiers in front
          of it, and only the <strong>Foot</strong> nearest to the{" "}
          <strong>Turtle</strong> would update and re-render.
        </p>
        <p style={{ marginTop: "0.8em" }}>
          When <strong>Turtle</strong> approaches a <strong>Foot</strong>, the{" "}
          <strong>Foot</strong> is "activated" by moving forward and attacking.
          Only the nearest <strong>Foot</strong> responds and re-renders when
          the Turtle approaches. Additionally, while every <strong>Foot</strong>{" "}
          listens for <strong>Turtle</strong> changes, any change to{" "}
          <srong>Turtle</srong> state does not cause a re-render to{" "}
          <strong>Foot</strong>
        </p>
        <figure>
          <img src="/images/tmnt-preview/foot-response.gif" />
        </figure>
        <p>
          <strong>Foot</strong> listens for <strong>Turtle</strong> attacks, and
          reduces health when the attack lands within the <strong>Foot</strong>
          's hitbox.
        </p>
        <figure>
          <img src="/images/tmnt-preview/turtle-attack.gif" />
        </figure>
      </article>
    </>
  );
};
