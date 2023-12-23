import "./app.css";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";
import FrontPage from "./pages";
import ButtonsPage from "./pages/buttons";
import useHash from "./utils/use-hash";

export function App() {
  const [hash] = useHash();

  return (
    <>
      <Header />
      <Sidebar />
      <div className="main-scroll-container">
        {hash === "#buttons" ? <ButtonsPage /> : <FrontPage />}
      </div>
      <Footer />
    </>
  );
}
