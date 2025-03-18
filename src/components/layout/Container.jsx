"use client";

import { Container as MuiContainer } from '@mui/material';
import { styled } from '@mui/material/styles';

// Custom styled Container component using Emotion
const StyledContainer = styled(MuiContainer)(({ theme, background = 'transparent' }) => ({
  position: 'relative',
  backgroundColor: background === 'transparent' ? 'transparent' : theme.palette.background[background] || background,
  padding: theme.spacing(4, 0),
  
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(3, 0),
  },
  
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2, 0),
  },
}));

/**
 * Enhanced Container component with additional styling options
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Container content
 * @param {string} props.className - Additional CSS class
 * @param {string} props.background - Background color (theme color name or CSS value)
 * @param {boolean} props.fluid - Use fluid width (no max-width)
 * @param {Object} props.rest - Additional props passed to MUI Container
 */
export const Container = ({
  children,
  className = '',
  background = 'transparent',
  fluid = false,
  ...rest
}) => {
  return (
    <StyledContainer
      className={className}
      background={background}
      maxWidth={fluid ? false : 'lg'}
      {...rest}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;