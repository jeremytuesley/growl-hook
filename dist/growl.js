import React, { useEffect } from "react";
import "./growl.css";
export const Growl = ({
  active,
  message,
  onDismissed,
  timeout = 3
}) => {
  const SECOND = 1000;
  useEffect(() => {
    if (active) setTimeout(() => onDismissed(), timeout * SECOND);
  }, [active, onDismissed, timeout]);
  return /*#__PURE__*/React.createElement("div", {
    className: `growl${active ? " active" : ""}`
  }, message, /*#__PURE__*/React.createElement("div", {
    onClick: onDismissed,
    className: "growl-close"
  }));
};
export function useGrowl() {
  // state of the growl
  const [growlActive, setGrowlActive] = React.useState(false);
  return [
  // the first arg is the state
  growlActive,
  // the second arg is a fn that allows you to safely set its state
  active => {
    setGrowlActive(active);
  }];
}