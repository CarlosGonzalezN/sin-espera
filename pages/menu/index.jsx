import Layout from "../../containers/loyout/layout";
import Head from "next/head";
import Container from "../../containers/container";

export default function Products() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Container />
      </Layout>
    </div>
  );
}
