import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "components/layout";
import Intro from "components/intro";
import About from "components/about";
import Blog from "components/blog";
import Projects from "components/projects";
import Toolbox from "components/toolbox";
import Contact from "components/contact";
import Credits from "components/credits";
import { getPinnedPosts } from "data";
import BottomMenu from "components/bottom-menu";
import style from "./style";

export const getStaticProps = async () => {
  const pinnedPosts = getPinnedPosts();
  return {
    props: {
      pinnedPosts,
    },
  };
};

const Home = ({ pinnedPosts }) => {
  const router = useRouter();

  useEffect(() => {
    const handleHashChange = (url, options) => {
      if (
        !url ||
        typeof document === "undefined" ||
        typeof window === "undefined"
      )
        return;

      const sectionId = `${url?.substring?.(2)}-section`;
      const section = document.getElementById(sectionId);

      if (section) {
        const scrollDistance = section?.offsetTop || 0;
        window.scrollTo({ top: scrollDistance, behavior: "smooth" });
      }
    };

    handleHashChange(router?.asPath);

    if (router?.asPath !== "/") {
      router.replace("/"); // to remove `/index.html` appended by LinkedIn
    }

    router.events.on("hashChangeComplete", handleHashChange);

    return () => router.events.off("hashChangeComplete", handleHashChange);
  }, []);

  const metaTitle = "Suhan Wijaya";
  const metaDescription =
    "Right-brained techie who builds apps with JavaScript, React, Redux, Node.js, Hapi, Express, NoSQL, SQL, REST, GraphQL.";
  const metaImage =
    "https://www.suhanwijaya.com/images/digital-garden-social.png";
  const metaUrl = "https://www.suhanwijaya.com/index.html";

  return (
    <Layout>
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
      <Intro />
      <About />
      <Blog pinnedPosts={pinnedPosts} />
      <Projects />
      <Contact />
      <Toolbox />
      <Credits />
      <BottomMenu>
        <div className={style.social}>
          <a
            href={"https://www.linkedin.com/comm/in/suhanwijaya/"}
            target={"_blank"}
          >
            <img
              src={"/images/linked-in.png"}
              alt={`Suhan's LinkedIn profile`}
            />
          </a>
          <a href={"https://x.com/suhanw"} target={"_blank"}>
            <img
              src={"/images/twitter-x.png"}
              alt={`Suhan's Twitter profile`}
            />
          </a>
          <a href={"https://github.com/suhanw"} target={"_blank"}>
            <img src={"/images/github.png"} alt={`Suhan's GitHub profile`} />
          </a>
        </div>
      </BottomMenu>
    </Layout>
  );
};

export default Home;
