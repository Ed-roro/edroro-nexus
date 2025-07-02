import { Box } from '@mui/material';
import {
  HeroSection,
  AboutSection,
  ServicesSection,
  PortfolioSection,
  ContactSection
} from '@/components/home';

export default function Home() {
  return (
    <Box component="main">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </Box>
  );
}
