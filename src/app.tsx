import "./app.css";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";
import FrontPage from "./pages";

export function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <FrontPage />
      <Footer />
    </>
  );
}
