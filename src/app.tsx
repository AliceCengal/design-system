import "./app.css";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Sidebar, SidebarLink } from "./components/sidebar";
import FrontPage from "./pages";
// import ButtonsPage from "./pages/buttons";
// import ColorsPage from "./pages/colors";
// import DialogsPage from "./pages/dialogs";
import useHash from "./utils/use-hash";
import {
  ButtonIcon,
  ChatIcon,
  ColorIcon,
  EditIcon,
  HomeIcon,
  MenuIcon,
  RefreshIcon,
  WebIcon,
} from "./components/icons";
// import FormControlsPage from "./pages/form-controls";
// import MenusPage from "./pages/menus";
import { Suspense, lazy } from "preact/compat";
import { spinner } from "./components/spinner";

const NAVS = [
  {
    label: "home",
    href: "",
    Icon: HomeIcon,
    Page: FrontPage,
  },
  {
    label: "colors",
    href: "#colors",
    Icon: ColorIcon,
    Page: lazy(() => import("./pages/colors")),
  },
  {
    label: "buttons",
    href: "#buttons",
    Icon: ButtonIcon,
    Page: lazy(() => import("./pages/buttons")),
  },
  {
    label: "modal dialogs",
    href: "#dialogs",
    Icon: ChatIcon,
    Page: lazy(() => import("./pages/dialogs")),
  },
  {
    label: "menus",
    href: "#menu",
    Icon: MenuIcon,
    Page: lazy(() => import("./pages/menus")),
  },
  {
    label: "form controls",
    href: "#form-controls",
    Icon: EditIcon,
    Page: lazy(() => import("./pages/form-controls")),
  },
  {
    label: "spinners",
    href: "#spinners",
    Icon: RefreshIcon,
    Page: lazy(() => import("./pages/spinners")),
  },
  {
    label: "skeletons",
    href: "#skeletons",
    Icon: RefreshIcon,
    Page: lazy(() => import("./pages/skeletons")),
  },
  {
    label: "hacker news",
    href: "#hacker-news",
    Icon: WebIcon,
    Page: lazy(() => import("./pages/hacker-news")),
  },
];

export function App() {
  const [hash] = useHash();

  const ThisPage = (NAVS.find((nav) => nav.href === hash) ?? NAVS[0]).Page;

  return (
    <>
      <Header />
      <Sidebar>
        {NAVS.map(({ label, href, Icon }) => (
          <SidebarLink key={label} label={label} href={href} Icon={Icon} />
        ))}
      </Sidebar>
      <Suspense
        fallback={
          <div
            className={spinner({ size: "xlarge", kind: "back" })}
            style={{ marginInline: "auto", marginBlock: "34px" }}
          />
        }
      >
        <ThisPage />
      </Suspense>
      <Footer />
    </>
  );
}
