"use client";

import { Box, Grid, Typography, Button, TextField, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { poppins600 } from '@/styles';
import { Section } from '@/components/layout';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

// Styled components
const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 600,
  marginBottom: theme.spacing(1),
  
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
  },
}));

const ContactForm = styled('form')(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const ContactCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  backgroundColor: theme.palette.background.paper,
}));

const ContactInfoItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(2),
}));

/**
 * Contact section for the homepage
 */
export const ContactSection = () => {
  return (
    <Section background="#f8f9fa" id="contact">
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <SectionTitle variant="h2" className={poppins600.className}>
            Get In Touch
          </SectionTitle>
          
          <Typography variant="body1" paragraph>
            Have a project in mind or want to collaborate? Feel free to reach out!
          </Typography>
          
          <ContactForm>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  margin="normal"
                  required
                />
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  required
                  type="email"
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Subject"
                  variant="outlined"
                  margin="normal"
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  margin="normal"
                  required
                  multiline
                  rows={4}
                />
              </Grid>
              
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<SendIcon />}
                  type="submit"
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </ContactForm>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <ContactCard elevation={3}>
            <Typography variant="h5" gutterBottom className={poppins600.className}>
              Contact Information
            </Typography>
            
            <Box mt={4}>
              <ContactInfoItem>
                <IconWrapper>
                  <EmailIcon />
                </IconWrapper>
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">
                    Email
                  </Typography>
                  <Typography variant="body1">
                    contact@edroro.com
                  </Typography>
                </Box>
              </ContactInfoItem>
              
              <ContactInfoItem>
                <IconWrapper>
                  <LocationOnIcon />
                </IconWrapper>
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">
                    Location
                  </Typography>
                  <Typography variant="body1">
                    New York, NY
                  </Typography>
                </Box>
              </ContactInfoItem>
              
              <ContactInfoItem>
                <IconWrapper>
                  <PhoneIcon />
                </IconWrapper>
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">
                    Phone
                  </Typography>
                  <Typography variant="body1">
                    +1 (555) 123-4567
                  </Typography>
                </Box>
              </ContactInfoItem>
            </Box>
            
            <Box mt={4}>
              <Typography variant="h6" gutterBottom>
                Connect on Social Media
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Follow me on social media for updates on new projects and content.
              </Typography>
              {/* Social media icons would go here */}
            </Box>
          </ContactCard>
        </Grid>
      </Grid>
    </Section>
  );
};

export default ContactSection;