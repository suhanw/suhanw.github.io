import Head from "next/head";
import AppLoader from "components/app-loader";

const AiChatbot = () => {
  const metaTitle = "AI Chatbot by Suhan Wijaya";
  const metaDescription =
    "Full-stack AI Chatbot inspired by ChatGPT. React, Node.js, MongoDB, Redis, Docker. ";
  const metaImage = "https://www.suhanwijaya.com/images/ai-chatbot-preview.jpg";
  const metaUrl = "https://www.suhanwijaya.com/ai-chatbot";

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
        prefetchUrl="https://chatbot-server-mi7w.onrender.com/health"
        appUrl="https://chatbot-server-mi7w.onrender.com/"
      />
    </>
  );
};

export default AiChatbot;
