"use client";

import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { poppins700 } from '@/styles';
import { VideoPlayer } from '@/components/media';
import { Section } from '@/components/layout';

// Styled components
const VideoContainer = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 0,
});

const ContentOverlay = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  color: '#ffffff',
  height: '100vh',
  padding: theme.spacing(4),
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: '5rem',
  fontWeight: 700,
  letterSpacing: '0.2rem',
  textShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
  marginBottom: theme.spacing(2),
  
  [theme.breakpoints.down('md')]: {
    fontSize: '4rem',
  },
  
  [theme.breakpoints.down('sm')]: {
    fontSize: '3rem',
  },
}));

/**
 * Hero section with video background and centered text
 */
export const HeroSection = () => {
  return (
    <Section fullHeight fluid>
      <VideoContainer>
        <VideoPlayer
          src="/assets/videos/ed-roro-timelapse-home-page.mp4"
          autoPlay
          muted
          loop
          controls={false}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </VideoContainer>
      
      <ContentOverlay>
        <HeroTitle variant="h1" className={poppins700.className}>
          Ed.Roro
        </HeroTitle>
      </ContentOverlay>
    </Section>
  );
};

export default HeroSection;