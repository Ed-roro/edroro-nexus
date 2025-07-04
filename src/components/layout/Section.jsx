"use client";

import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Container from './Container';

// Styled components
const SectionWrapper = styled(Box)(({ theme, background = 'transparent', fullHeight = false }) => ({
  position: 'relative',
  backgroundColor: background === 'transparent' ? 'transparent' : theme.palette.background[background] || background,
  minHeight: fullHeight ? '100vh' : 'auto',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  overflow: 'hidden',
}));

/**
 * Section component for homepage and other page sections
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Section content
 * @param {string} props.className - Additional CSS class
 * @param {string} props.background - Background color (theme color name or CSS value)
 * @param {boolean} props.fullHeight - Make section full viewport height
 * @param {boolean} props.fluid - Use fluid width container
 * @param {string} props.id - Section ID for navigation
 */
export const Section = ({
  children,
  className = '',
  background = 'transparent',
  fullHeight = false,
  fluid = false,
  id,
  ...rest
}) => {
  return (
    <SectionWrapper
      className={className}
      background={background}
      fullHeight={fullHeight}
      id={id}
      component="section"
      {...rest}
    >
      <Container fluid={fluid}>
        {children}
      </Container>
    </SectionWrapper>
  );
};

export default Section;