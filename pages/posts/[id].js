import Head from "next/head";
import { useRouter } from "next/router";
import style from "./style";
import { getAllPostIds, getPostData } from "data";
import Date from "components/date";
import Layout from "components/layout";
import BottomMenu from "components/bottom-menu";

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

const Post = ({ postData }) => {
  const router = useRouter();

  const metaTitle = `${postData?.title} by Suhan Wijaya`;
  const metaDescription = postData?.description;
  const metaImage = postData?.image;
  const metaUrl = `https://www.suhanwijaya.com${router?.asPath}`;

  return (
    // <Layout topMenu>
    <Layout>
      <Head>
        <title>{metaTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta name="title" content={metaTitle} />
        <meta name="description" content={metaDescription} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metaUrl} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        {/* https://blog.hootsuite.com/social-media-image-sizes-guide/#LinkedIn_image_sizes */}
        <meta property="og:image" content={metaImage} />

        {/* Twitter */}
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={metaImage} />
        <meta name="twitter:card" content="summary_large_image" />

        {postData?.canonical_url && (
          <link rel="canonical" href={postData.canonical_url} />
        )}

        {/* CSS for `remark-prism` code block highlights */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/themes/prism-okaidia.min.css"
          integrity="sha512-mIs9kKbaw6JZFfSuo+MovjU+Ntggfoj8RwAmJbVXQ5mkAX5LlgETQEweFPI18humSPHymTb5iikEOKWF7I8ncQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <article className={style.contentWrapper}>
        <h1 className={style.title}>{postData?.title}</h1>
        <div className={style.description}>{postData?.description}</div>
        <div className={style.date}>
          <Date dateString={postData.date} />
          <SocialIcons
            url={metaUrl}
            title={metaTitle}
            description={metaDescription}
          />
        </div>
        <div
          className={style.content}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
        <div className={style.footer}>
          <SocialIcons
            url={metaUrl}
            title={metaTitle}
            description={metaDescription}
          />
        </div>
        <div className={style.author}>
          <a href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=suhanwijaya">
            <img src="https://github.com/suhanw.png?size=200" />
          </a>
          <span>
            Liked what you've read? <br />
            <a href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=suhanwijaya">
              Follow me on LinkedIn!
            </a>
          </span>
        </div>
      </article>
      <BottomMenu>
        <div className={style.authorMobile}>
          <a href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=suhanwijaya">
            <img src="https://github.com/suhanw.png?size=200" />
          </a>
          <span>
            Liked what you've read? <br />
            <a href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=suhanwijaya">
              Follow me on LinkedIn!
            </a>
          </span>
        </div>
      </BottomMenu>
    </Layout>
  );
};

const SocialIcons = ({ url, title, description }) => (
  <span className={style.socialIcons}>
    <a
      href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`}
      target={"_blank"}
      aria-label={"Share this article on LinkedIn"}
    >
      <img src={"/images/linkedin-share.png"} />
    </a>
    <a
      href={`https://x.com/intent/tweet?text=${title}%20@suhanw%20${url}`}
      target={"_blank"}
      aria-label={"Share this article on Twitter"}
    >
      <img src={"/images/twitter-x-share.png"} />
    </a>
  </span>
);

export default Post;
