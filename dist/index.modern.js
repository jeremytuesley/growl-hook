import React, { useEffect } from 'react';

const Growl = ({
  active,
  message,
  onDismissed,
  timeout: _timeout = 3
}) => {
  const SECOND = 1000;
  useEffect(() => {
    if (active) setTimeout(() => onDismissed(), _timeout * SECOND);
  }, [active, onDismissed, _timeout]);
  return /*#__PURE__*/React.createElement("div", {
    className: `growl${active ? ' active' : ''}`
  }, message, /*#__PURE__*/React.createElement("div", {
    onClick: onDismissed,
    className: "growl-close"
  }));
};
function useGrowl() {
  const [growlActive, setGrowlActive] = React.useState(false);
  return [growlActive, active => {
    setGrowlActive(active);
  }];
}

export { Growl, useGrowl };
//# sourceMappingURL=index.modern.js.map
