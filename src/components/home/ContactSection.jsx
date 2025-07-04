"use client";

import { Box, Grid, Typography, Button, TextField, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { poppins600 } from '@/styles';
import { Section } from '@/components/layout';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { useTheme as useMuiTheme } from '@mui/material/styles';
import { useTheme } from '@/lib/context/ThemeContext';

// Styled components for consistent appearance regardless of theme
const ContactSectionWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#f8f9fa',
  color: '#333333',
  '& .MuiInputBase-root': {
    backgroundColor: '#ffffff',
  },
  '& .MuiInputLabel-root': {
    color: '#666666',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#e0e0e0',
    },
    '&:hover fieldset': {
      borderColor: '#bbbbbb',
    },
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 600,
  marginBottom: theme.spacing(1),
  color: '#333333',
  
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
  backgroundColor: '#ffffff',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
}));

const ContactInfoItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#ffffff',
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
  const { mode } = useTheme();
  const muiTheme = useMuiTheme();

  return (
    <ContactSectionWrapper>
      <Section background="transparent" id="contact">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <SectionTitle variant="h2" className={poppins600.className}>
              Get In Touch
            </SectionTitle>
            
            <Typography variant="body1" paragraph sx={{ color: '#333333', fontWeight: 500 }}>
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
              <Typography variant="h5" gutterBottom className={poppins600.className} sx={{ color: '#333333' }}>
                Contact Information
              </Typography>
              
              <Box mt={4}>
                <ContactInfoItem>
                  <IconWrapper>
                    <EmailIcon />
                  </IconWrapper>
                  <Box>
                    <Typography variant="subtitle2" sx={{ color: '#666666', fontWeight: 500 }}>
                      Email
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#333333' }}>
                      contact@edroro.com
                    </Typography>
                  </Box>
                </ContactInfoItem>
                
                <ContactInfoItem>
                  <IconWrapper>
                    <LocationOnIcon />
                  </IconWrapper>
                  <Box>
                    <Typography variant="subtitle2" sx={{ color: '#666666', fontWeight: 500 }}>
                      Location
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#333333' }}>
                      New York, NY
                    </Typography>
                  </Box>
                </ContactInfoItem>
                
                <ContactInfoItem>
                  <IconWrapper>
                    <PhoneIcon />
                  </IconWrapper>
                  <Box>
                    <Typography variant="subtitle2" sx={{ color: '#666666', fontWeight: 500 }}>
                      Phone
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#333333' }}>
                      +1 (555) 123-4567
                    </Typography>
                  </Box>
                </ContactInfoItem>
              </Box>
              
              <Box mt={4}>
                <Typography variant="h6" gutterBottom sx={{ color: '#333333' }}>
                  Connect on Social Media
                </Typography>
                <Typography variant="body2" sx={{ color: '#666666', fontWeight: 500 }}>
                  Follow me on social media for updates on new projects and content.
                </Typography>
                {/* Social media icons would go here */}
              </Box>
            </ContactCard>
          </Grid>
        </Grid>
      </Section>
    </ContactSectionWrapper>
  );
};

export default ContactSection;