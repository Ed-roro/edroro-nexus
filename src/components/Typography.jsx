"use client";

import React from "react";
import styled from "@emotion/styled";
import { EdLink as NextLink } from "@/components/EdLink";
import { poppins500, inter } from "@/styles";

const propNames = ["primary", "muted"];

const DefaultHStyled = styled("h1", {
  shouldForwardProp: (prop) => !propNames.includes(prop),
})(({ theme, primary, muted }) => {
  let color = null;
  if (primary) {
    color = theme.palette.primary.main;
  } else if (muted) {
    color = theme.palette.text.secondary;
  }
  return {
    padding: "1.25rem",
    color,
  };
});

const DefaultP = styled.p`
  font-size: 1.25rem;
  padding: 1.25rem;

  a {
    padding: 0;
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

const DefaultLink = styled(NextLink)`
  font-size: 1.25rem;
  padding: 1.25rem;

  &:visited {
    color: inherit;
  }

  &:active,
  &:hover {
    text-decoration: underline;
  }
`;

export const Heading = ({ children, level = 1, className = "", ...props }) => {
  const Tag = DefaultHStyled.withComponent(`h${level}`);
  return (
    <Tag className={`${poppins500.className} ${className}`} {...props}>
      {children}
    </Tag>
  );
};

export const Paragraph = ({ children, className = "", ...props }) => (
  <DefaultP className={`${inter.className} ${className}`} {...props}>
    {children}
  </DefaultP>
);

export const Link = ({ children, href, className = "", ...props }) => (
  <DefaultLink
    className={`${inter.className} ${className}`}
    href={href}
    {...props}
  >
    {children}
  </DefaultLink>
);