import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div style={{ minHeight: 550 }}>{children}</div>
      <Footer />
    </div>
  );
}
