import "./app.css";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Sidebar, SidebarLink } from "./components/sidebar";
import FrontPage from "./pages";
import ButtonsPage from "./pages/buttons";
import ColorsPage from "./pages/colors";
import DialogsPage from "./pages/dialogs";
import useHash from "./utils/use-hash";
import { ButtonIcon, ColorIcon, HomeIcon } from "./components/icons";

const NAVS = [
  {
    label: "home",
    href: "",
    Icon: HomeIcon,
  },
  {
    label: "colors",
    href: "#colors",
    Icon: ColorIcon,
  },
  {
    label: "buttons",
    href: "#buttons",
    Icon: ButtonIcon,
  },
  {
    label: "modal dialog",
    href: "",
    Icon: HomeIcon,
  },
  {
    label: "form controls",
    href: "",
    Icon: HomeIcon,
  },
  {
    label: "menu",
    href: "",
    Icon: HomeIcon,
  },
];

export function App() {
  const [hash] = useHash();

  return (
    <>
      <Header />
      <Sidebar>
        {NAVS.map(({ label, href, Icon }) => (
          <SidebarLink key={label} label={label} href={href} Icon={Icon} />
        ))}
      </Sidebar>
      <div className="main-scroll-container">
        {hash === "#buttons" ? (
          <ButtonsPage />
        ) : hash === "#colors" ? (
          <ColorsPage />
        ) : hash === "#dialogs" ? (
          <DialogsPage />
        ) : (
          <FrontPage />
        )}
      </div>
      <Footer />
    </>
  );
}
