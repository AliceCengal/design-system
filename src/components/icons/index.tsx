import { createElement, forwardRef, HTMLAttributes } from "react";
import {
  MdChatBubbleOutline,
  MdCheck,
  MdEdit,
  MdHome,
  MdIndeterminateCheckBox,
  MdKeyboardArrowDown,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdLogin,
  MdMenu,
  MdOpenInNew,
  MdPalette,
  MdRadioButtonChecked,
  MdRadioButtonUnchecked,
  MdRefresh,
  MdSearch,
  MdTab,
  MdWeb,
} from "react-icons/md";

function icon(comp: any, name: string) {
  return {
    [name]: forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
      function ({ className, ...props }, ref) {
        return createElement(comp, {
          ref,
          size: 24,
          ...props,
        });
      }
    ),
  }[name];
}

export const LoginIcon = icon(MdLogin, "Login");
export const SearchIcon = icon(MdSearch, "Search");
export const HomeIcon = icon(MdHome, "Home");
export const ButtonIcon = icon(MdIndeterminateCheckBox, "Button");
export const CollapseIcon = icon(MdKeyboardDoubleArrowLeft, "Collapse");
export const ExpandIcon = icon(MdKeyboardDoubleArrowRight, "Expand");
export const OutboundIcon = icon(MdOpenInNew, "Outbound");
export const ColorIcon = icon(MdPalette, "Color");
export const ChatIcon = icon(MdChatBubbleOutline, "Chat");
export const EditIcon = icon(MdEdit, "Edit");
export const MenuIcon = icon(MdMenu, "Menu");
export const RefreshIcon = icon(MdRefresh, "Refresh");
export const WebIcon = icon(MdWeb, "Web");
export const TabIcon = icon(MdTab, "Tab");
export const CheckIcon = icon(MdCheck, "Check");
export const ExpandedIcon = icon(MdKeyboardArrowDown, "Expanded");
export const RadioOffIcon = icon(MdRadioButtonUnchecked, "RadioOff");
export const RadioOnIcon = icon(MdRadioButtonChecked, "RadioOn");
