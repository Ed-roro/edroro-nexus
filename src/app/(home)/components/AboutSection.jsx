"use client";

import { Box, Grid, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { poppins600 } from '@/styles';
import { Section } from '@/components/layout';
import Link from 'next/link';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '@/lib/context/ThemeContext';

// Styled components
const SectionTitle = styled(Typography)(({ theme, mode }) => ({
  fontSize: '2.5rem',
  fontWeight: 600,
  marginBottom: theme.spacing(4),
  position: 'relative',
  paddingBottom: theme.spacing(2),
  color: mode === 'dark' ? '#ffffff' : '#333333',
  
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '80px',
    height: '4px',
    backgroundColor: theme.palette.primary.main,
  },
  
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
  },
}));

const HighlightText = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
}));

/**
 * About/Introduction section for the homepage
 */
export const AboutSection = () => {
  const { mode } = useTheme();
  
  return (
    <Section background="paper" id="about">
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={6}>
          <SectionTitle variant="h2" className={poppins600.className} mode={mode}>
            Creating Digital <HighlightText>Experiences</HighlightText>
          </SectionTitle>
          
          <Typography
            variant="body1"
            paragraph
            sx={{
              color: mode === 'dark' ? '#ffffff' : '#333333',
              fontWeight: 500
            }}
          >
            Welcome to Ed.Roro Nexus, where creativity meets technology. I specialize in creating immersive digital experiences through 3D animation, game development, and music production.
          </Typography>
          
          <Typography
            variant="body1"
            paragraph
            sx={{
              color: mode === 'dark' ? '#ffffff' : '#333333',
              fontWeight: 500
            }}
          >
            With a passion for pushing creative boundaries and technical excellence, I bring ideas to life through compelling visuals, interactive experiences, and captivating soundscapes.
          </Typography>
          
          <Box mt={4}>
            <Button 
              component={Link}
              href="/about"
              variant="contained" 
              color="primary"
              size="large"
              endIcon={<ArrowForwardIcon />}
            >
              Learn More
            </Button>
          </Box>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              borderRadius: 2,
              height: 400,
              width: '100%',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Image
              src="/assets/images/profile/creative-style_ed.jpg"
              alt="Ed.Roro Creative Profile"
              fill
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              priority
            />
          </Box>
        </Grid>
      </Grid>
    </Section>
  );
};

export default AboutSection;