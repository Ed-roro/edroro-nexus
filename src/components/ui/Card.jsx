"use client";

import { Card as MuiCard, CardContent, CardMedia, CardActions, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { inter } from '@/styles';

// Custom styled Card component using Emotion
const StyledCard = styled(MuiCard)(({ theme, elevation = 1, interactive = false }) => ({
  borderRadius: theme.shape.borderRadius * 2,
  transition: 'all 0.3s ease-in-out',
  boxShadow: theme.shadows[elevation],
  overflow: 'hidden',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  
  // Interactive hover effect
  ...(interactive && {
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: theme.shadows[elevation + 2],
    },
  }),
}));

// Custom styled CardMedia
const StyledCardMedia = styled(CardMedia)(({ theme, overlay = false }) => ({
  position: 'relative',
  
  // Optional dark overlay
  ...(overlay && {
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
      pointerEvents: 'none',
    },
  }),
}));

// Custom styled CardContent
const StyledCardContent = styled(CardContent)(({ theme, compact = false }) => ({
  padding: compact ? theme.spacing(2) : theme.spacing(3),
  flexGrow: 1,
}));

// Custom styled CardActions
const StyledCardActions = styled(CardActions)(({ theme, compact = false }) => ({
  padding: compact ? theme.spacing(1, 2) : theme.spacing(2, 3),
  justifyContent: 'flex-end',
}));

/**
 * Enhanced Card component with additional styling options
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional CSS class
 * @param {number} props.elevation - Card elevation (1-24)
 * @param {boolean} props.interactive - Enable hover effects
 * @param {string} props.image - Image URL for card media
 * @param {string} props.imageAlt - Alt text for image
 * @param {number} props.imageHeight - Image height in pixels
 * @param {boolean} props.overlay - Add gradient overlay to image
 * @param {string} props.title - Card title
 * @param {string} props.subtitle - Card subtitle
 * @param {React.ReactNode} props.actions - Card actions (buttons, etc.)
 * @param {boolean} props.compact - Use compact padding
 * @param {Object} props.rest - Additional props passed to MUI Card
 */
export const Card = ({
  children,
  className = '',
  elevation = 1,
  interactive = false,
  image,
  imageAlt = '',
  imageHeight = 200,
  overlay = false,
  title,
  subtitle,
  actions,
  compact = false,
  ...rest
}) => {
  return (
    <StyledCard 
      className={`${inter.className} ${className}`}
      elevation={elevation}
      interactive={interactive}
      {...rest}
    >
      {image && (
        <StyledCardMedia
          component="img"
          height={imageHeight}
          image={image}
          alt={imageAlt}
          overlay={overlay}
        />
      )}
      
      <StyledCardContent compact={compact}>
        {title && (
          <Typography variant="h6" component="h2" gutterBottom sx={{ color: '#333333' }}>
            {title}
          </Typography>
        )}
        
        {subtitle && (
          <Typography variant="subtitle1" sx={{ color: '#666666', fontWeight: 500 }} gutterBottom>
            {subtitle}
          </Typography>
        )}
        
        {children}
      </StyledCardContent>
      
      {actions && (
        <StyledCardActions compact={compact}>
          {actions}
        </StyledCardActions>
      )}
    </StyledCard>
  );
};

export default Card;