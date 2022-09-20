import Footer from "../../components/footer";
import Nav from "../../components/nav";
export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
