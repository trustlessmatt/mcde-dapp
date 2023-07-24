import Head from "next/head";
import { FC } from "react";

interface Props {
  title: string;
  description: string;
  url: string;
  twitter: string;
}

const PageHead: FC<Props> = (props: Props) => {
  const { title, description, url, twitter } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      {/* twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@allintime_" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://allintime.xyz/meta.png" />
      <meta property="twitter:url" content={`https://allintime.xyz/`} />
      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://allintime.xyz/" />
      <meta property="og:title" content="All in Time" />
      <meta
        property="og:description"
        content="clothing | collectibles | curio | Est. 2023"
      />
      <meta property="og:image" content="/meta.png" />

      {/* <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" /> */}
      {/* twitter */}
      {/* <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={`@${twitter}`} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}meta.png`} />
      <meta property="twitter:url" content={url} /> */}
      {/* <!-- Open Graph / Facebook --> */}
      {/* <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`/meta.png`} /> */}
    </Head>
  );
};

export default PageHead;
