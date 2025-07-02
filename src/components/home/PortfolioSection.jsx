"use client";

import { Box, Grid, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { poppins600 } from '@/styles';
import { Section } from '@/components/layout';
import { ProjectCard } from '@/components/portfolio';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Styled components
const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 600,
  marginBottom: theme.spacing(1),
  textAlign: 'center',
  
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
  },
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  marginBottom: theme.spacing(6),
  textAlign: 'center',
  color: '#666666', // Darker than default secondary text
  maxWidth: '800px',
  margin: '0 auto',
  marginBottom: theme.spacing(6),
  fontWeight: 500, // Slightly bolder for better readability
}));

const ViewAllButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

/**
 * Portfolio section for the homepage
 */
export const PortfolioSection = () => {
  // Sample projects data
  const featuredProjects = [
    {
      id: 'project1',
      title: '3D Character Animation',
      description: 'A fully rigged and animated 3D character for a short film project.',
      image: 'https://via.placeholder.com/600x400?text=3D+Animation',
      category: 'animation',
      tags: ['3D Modeling', 'Rigging', 'Animation'],
      date: '2023-06-15',
    },
    {
      id: 'project2',
      title: 'Indie Game Development',
      description: 'A 2D platformer game with unique mechanics and original artwork.',
      image: 'https://via.placeholder.com/600x400?text=Game+Development',
      category: 'games',
      tags: ['Unity', 'C#', 'Game Design'],
      date: '2023-04-22',
    },
    {
      id: 'project3',
      title: 'Music Composition',
      description: 'Original soundtrack composed for an indie game project.',
      image: 'https://via.placeholder.com/600x400?text=Music+Production',
      category: 'music',
      tags: ['Composition', 'Sound Design', 'Mixing'],
      date: '2023-02-10',
    },
    {
      id: 'project4',
      title: 'YouTube Content Creation',
      description: 'Educational video series about game development and 3D animation.',
      image: 'https://via.placeholder.com/600x400?text=Video+Content',
      category: 'videos',
      tags: ['Editing', 'Tutorial', 'YouTube'],
      date: '2023-01-05',
    },
  ];

  return (
    <Section id="portfolio">
      <SectionTitle variant="h2" className={poppins600.className} color="#333333">
        Featured Projects
      </SectionTitle>
      
      <SectionSubtitle variant="subtitle1">
        Explore a selection of my recent work across different creative disciplines.
      </SectionSubtitle>
      
      <Grid container spacing={4}>
        {featuredProjects.map((project) => (
          <Grid item xs={12} sm={6} md={3} key={project.id}>
            <ProjectCard
              id={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              category={project.category}
              tags={project.tags}
              date={project.date}
            />
          </Grid>
        ))}
      </Grid>
      
      <Box display="flex" justifyContent="center">
        <ViewAllButton
          component={Link}
          href="/portfolio"
          variant="outlined"
          color="primary"
          size="large"
          endIcon={<ArrowForwardIcon />}
        >
          View All Projects
        </ViewAllButton>
      </Box>
    </Section>
  );
};

export default PortfolioSection;