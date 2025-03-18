"use client";

import { Button as MuiButton, styled } from "@mui/material";
import { inter } from "@/styles";

const propNames = ["outlined", "secondary", "rounded"];

const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) => !propNames.includes(prop),
})(({ theme, outlined, secondary, rounded }) => {
  const palette = theme.palette[secondary ? "secondary" : "primary"];
  let style = {};

  if (outlined) {
    style = {
      backgroundColor: "transparent",
      borderColor: palette.main,
      color: palette.main,
      "&:hover": {
        backgroundColor: palette.main,
        borderColor: palette.light,
        color: palette.contrastText,
      },
    };
  } else {
    style = {
      backgroundColor: palette.main,
      color: palette.contrastText,
      "&:hover": {
        backgroundColor: palette.dark,
        color: palette.contrastText,
      },
    };
  }

  return {
    borderRadius: rounded ? 15 : 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ...style,
  };
});

export const Button = ({ className = "", ...props }) => (
  <StyledButton
    className={`${inter.className} ${className}`}
    variant={props.outlined ? "outlined" : "contained"}
    {...props}
  />
);