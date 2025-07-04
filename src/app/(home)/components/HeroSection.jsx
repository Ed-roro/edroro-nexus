"use client";

import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { poppins700 } from '@/styles';
import { VideoPlayer } from '@/components/media';
import { Section } from '@/components/layout';

// Styled components
const HeroWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  // 21:9 aspect ratio for cinematic look
  paddingTop: '42.85%', // (9/21) * 100%
  backgroundColor: '#000', // Match video background color
  marginBottom: '-6px', // Remove gap between sections
  
  [theme.breakpoints.down('md')]: {
    // 16:9 aspect ratio for smaller screens
    paddingTop: '56.25%', // (9/16) * 100%
  },
}));

const VideoContainer = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 0,
  overflow: 'hidden',
  backgroundColor: '#000', // Match background color
  display: 'flex', // Ensure video fills container
  alignItems: 'center',
  justifyContent: 'center',
});

const ContentOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  color: '#ffffff',
  padding: theme.spacing(4),
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: '4.5rem',
  fontWeight: 700,
  letterSpacing: '0.2rem',
  textShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
  marginBottom: theme.spacing(2),
  
  [theme.breakpoints.down('md')]: {
    fontSize: '3.5rem',
  },
  
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',
  },
}));

/**
 * Hero section with video background and centered text
 */
export const HeroSection = () => {
  return (
    <Section
      fluid
      background="#000" // Set background color to black
      sx={{
        padding: 0,
        '& .MuiContainer-root': {
          padding: 0, // Override Container's default padding
        }
      }}
    >
      <HeroWrapper>
        <VideoContainer>
          <VideoPlayer
            src="/assets/videos/ed-roro-timelapse-home-page.mp4"
            autoPlay
            muted
            loop
            controls={false}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center center',
              display: 'block' // Remove any potential inline spacing
            }}
          />
        </VideoContainer>
        
        <ContentOverlay>
          <HeroTitle variant="h1" className={poppins700.className}>
            Ed.Roro
          </HeroTitle>
        </ContentOverlay>
      </HeroWrapper>
    </Section>
  );
};

export default HeroSection;