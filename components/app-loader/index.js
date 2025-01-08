import { useEffect } from "react";
import style from "./style";

function AppLoader({ prefetchUrl, appUrl }) {
  useEffect(() => {
    fetch(prefetchUrl)
      .then(() => window.location.replace(appUrl))
      .catch((err) => console.error(err));
  }, []);

  return (
    <article className={style.contentWrapper}>
      <h2>Warming up my free server...</h2>
      <p>I appreciate your patience.</p>

      <figure>
        <span className={style.loader}></span>
        <img src="/images/loading.jpg" />
      </figure>
    </article>
  );
}

export default AppLoader;
