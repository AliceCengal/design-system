import { createElement, HTMLAttributes } from "react";
import { cx } from "../../lib/cva";

function icon(key: string, name: string) {
  return {
    [name]: function ({
      className,
      ...props
    }: HTMLAttributes<HTMLSpanElement>) {
      return createElement(
        "span",
        { className: cx("material-icons-outlined", className), ...props },
        key
      );
    },
  }[name];
}

export const LoginIcon = icon("login", "Login");
export const SearchIcon = icon("search", "Search");
export const HomeIcon = icon("home", "Home");
export const ButtonIcon = icon("indeterminate_check_box", "Button");
export const CollapseIcon = icon("keyboard_double_arrow_left", "Collapse");
export const ExpandIcon = icon("keyboard_double_arrow_right", "Expand");
export const OutboundIcon = icon("open_in_new", "Outbound");
export const ColorIcon = icon("palette", "Color");
export const ChatIcon = icon("chat_bubble_outline", "Chat");
export const EditIcon = icon("edit", "Edit");
export const MenuIcon = icon("menu", "Menu");
export const RefreshIcon = icon("refresh", "Refresh");
export const WebIcon = icon("web", "Web");
export const TabIcon = icon("tab", "Tab");
