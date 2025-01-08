import { useEffect } from "react";
import Head from "next/head";
import style from "./style";

function AppLoader({ prefetchUrl, appUrl }) {
  useEffect(() => {
    fetch(prefetchUrl)
      .then(() => window.location.replace(appUrl))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Head>
        <link rel="preload" as="image" href="/images/loading.jpg" />
      </Head>
      <article className={style.contentWrapper}>
        <h2>Warming up my free server...</h2>
        <p>It's loading, I swear.</p>

        <figure>
          <span className={style.loader}></span>
          <img src="/images/loading.jpg" />
        </figure>
      </article>
    </>
  );
}

export default AppLoader;
