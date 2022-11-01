import Layout from "../../containers/loyout/layout";
import Head from "next/head";
import Container from "../../containers/container";
import { Navb } from "../../components";

export default function Products({ data, dataCategoria }) {
  return (
    <>
      {" "}
      <Navb></Navb> <Container data={data} dataCategoria={dataCategoria} />
    </>
  );
}
export async function getStaticProps() {
  try {
    const res = await fetch("http://localhost:3005/productos");
    const resCategoria = await fetch("http://localhost:3005/categoria");
    const dataCategoria = await resCategoria.json();
    const data = await res.json();
    return {
      props: {
        data,
        dataCategoria,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
