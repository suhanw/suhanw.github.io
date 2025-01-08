import Head from "next/head";
import AppLoader from "components/app-loader";

const Auteur = () => {
  const metaTitle = "auteur by Suhan Wijaya";
  const metaDescription =
    "Auteur is a full-stack blogging app inspired by Tumblr. Express.js backend, MongoDB, and React.js with Redux framework.";
  const metaImage = "https://www.suhanwijaya.com/images/auteur.png";
  const metaUrl = "https://www.suhanwijaya.com/auteur";

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{metaTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content={metaTitle} />
        <meta name="description" content={metaDescription} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metaUrl} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={metaImage} />

        {/* Twitter */}
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={metaImage} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <AppLoader
        prefetchAssetUrl={"https://auteur-app.onrender.com/scripts/bundle.js"}
        appUrl={"https://auteur-app.onrender.com/"}
      />
    </>
  );
};

export default Auteur;
