import { useEffect, useState } from "react";
import style from "./style";

function AppLoader({ prefetchUrl, appUrl }) {
  const getRandomGif = () => {
    const gifs = [
      "/images/puppydogeyes-sad.gif",
      "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMG82eml0YjIwY2V0aDgwbXdldjA5eGpneHM2aG91OWdndmpoOXFzcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l41lOdm2mFEG0eGmQ/giphy.gif",
      "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGpqemoxYmJ2aXg4bHZieWcwZTR3OWF6YzV1N2RoY3FvOXJuYjNjMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2tLyBxzziMXYdibWHw/giphy.gif",
      "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnNod2UyNDY2MXo5NG9uZDNxNjhmYW9kMGo0dW1waGhmaDQ4cTFraiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/25MomqaozfaDt7Zq8M/giphy.gif",
    ];
    const randomInt = Math.floor(Math.random() * gifs.length);
    return gifs[randomInt];
  };

  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetch(prefetchUrl)
      .then((res) => {
        if (!res.ok) {
          throw res;
        }
        // window.location.replace(appUrl);
      })
      .catch((err) => {
        console.error(err);
        setHasError(true);
      });
  }, []);

  return (
    <>
      <article className={style.contentWrapper}>
        {!hasError ? (
          <>
            <h2>Warming up my free server...</h2>
            <p>It's loading soon, I swear.</p>

            <figure>
              <img src={getRandomGif()} />
            </figure>
          </>
        ) : (
          <>
            <h2>Sorry, I lied. Something went wrong.</h2>

            <figure>
              <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWJ4bTMxaWR4cXVhaXkxYXBoam1jaXJka2M2cDA1bGVoNnBndm43cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9M5jK4GXmD5o1irGrF/giphy.gif" />
            </figure>
          </>
        )}
      </article>
    </>
  );
}

export default AppLoader;
