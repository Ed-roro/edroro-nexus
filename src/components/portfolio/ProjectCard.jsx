"use client";

import { Button, Chip, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { formatDate } from '@/lib/utils/dateUtils';
import { useTheme } from '@/lib/context/ThemeContext';

// Styled components
const TagsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(0.5),
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));

const ProjectTag = styled(Chip)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
}));

/**
 * Project Card component for portfolio items
 * 
 * @param {Object} props - Component props
 * @param {string} props.id - Project ID
 * @param {string} props.title - Project title
 * @param {string} props.description - Project description
 * @param {string} props.image - Project thumbnail image
 * @param {string} props.category - Project category
 * @param {Array<string>} props.tags - Project tags
 * @param {string} props.date - Project date
 * @param {string} props.link - Project link
 */
export const ProjectCard = ({
  id,
  title,
  description,
  image,
  category,
  tags = [],
  date,
  link,
}) => {
  const { mode } = useTheme();
  const formattedDate = date ? formatDate(date, { format: 'medium' }) : null;
  
  return (
    <Card
      interactive
      elevation={2}
      image={image}
      imageAlt={title}
      imageHeight={240}
      overlay
      title={title}
      subtitle={formattedDate}
      themeMode={mode}
    >
      <Typography
        variant="body2"
        sx={{
          color: mode === 'dark' ? '#cccccc' : '#666666',
          fontWeight: 500,
          mb: 2
        }}
      >
        {description}
      </Typography>
      
      {tags.length > 0 && (
        <TagsContainer>
          {tags.map((tag) => (
            <ProjectTag 
              key={tag} 
              label={tag} 
              size="small" 
              variant="outlined"
              color="primary"
            />
          ))}
        </TagsContainer>
      )}
      
      <Stack direction="row" spacing={1} justifyContent="flex-end">
        <Button 
          component={Link}
          href={`/portfolio/${category}/${id}`}
          size="small" 
          color="primary"
        >
          View Details
        </Button>
        
        {link && (
          <Button 
            component="a"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            size="small" 
            variant="contained" 
            color="primary"
          >
            Live Demo
          </Button>
        )}
      </Stack>
    </Card>
  );
};

export default ProjectCard;