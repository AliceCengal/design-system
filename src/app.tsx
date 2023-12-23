import "./app.css";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";
import FrontPage from "./pages";
import ButtonsPage from "./pages/buttons";

export function App() {
  return (
    <>
      <Header />
      <Sidebar />
      {/* <FrontPage /> */}
      <ButtonsPage />
      <Footer />
    </>
  );
}
