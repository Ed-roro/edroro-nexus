"use client";

import Link from "next/link";
import { useState, useCallback, Fragment, forwardRef } from "react";
import Dialog from "@/components/EdLink/Dialog";

// Function to check if the URL is external
const isExternal = (href) => {
  const isUrl = URL.canParse(href);

  if (!isUrl) {
    return false;
  }

  const url = new URL(href);
  const allowed = [
    "ed-roro.com",
  ];
  if (allowed.includes(url.hostname)) {
    return false;
  }

  const match = href.match(/:\/\/(.[^/]+)/);
  return (
    match !== null && match.length > 0 && match[1] !== window.location.hostname
  );
};

export const EdLink = forwardRef(function GWBLink(props, ref) {
  // Pulling out the properties that will be passed to the OK button
  const { href, target = "_blank", rel = "noopener noreferrer" } = props;
  const [showDialog, setShowDialog] = useState(false);

  const handleClose = useCallback(() => {
    setShowDialog(false);
  }, [setShowDialog]);

  const handleClick = useCallback(
    (e) => {
      if (isExternal(href)) {
        e.preventDefault();
        setShowDialog(true);
      }
    },
    [href, setShowDialog]
  );

  return (
    <Fragment>
      <Link ref={ref} onClick={handleClick} {...props} />
      <Dialog
        open={showDialog}
        close={handleClose}
        link={{ href, rel, target }}
      />
    </Fragment>
  );
});