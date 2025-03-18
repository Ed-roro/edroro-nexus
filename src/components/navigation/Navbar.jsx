"use client";

import { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  Typography, 
  Button, 
  Box, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText,
  useScrollTrigger,
  Container
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/lib/constants/appConstants';
import { poppins500 } from '@/styles';

// Styled components
const StyledAppBar = styled(AppBar)(({ theme, transparent, trigger }) => ({
  backgroundColor: transparent && !trigger 
    ? 'transparent' 
    : theme.palette.background.default,
  color: transparent && !trigger 
    ? '#fff' 
    : theme.palette.text.primary,
  boxShadow: transparent && !trigger 
    ? 'none' 
    : theme.shadows[4],
  transition: 'all 0.3s ease',
}));

const NavButton = styled(Button)(({ theme, active }) => ({
  marginLeft: theme.spacing(2),
  color: 'inherit',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    width: active ? '100%' : '0%',
    height: '2px',
    bottom: '0',
    left: '0',
    backgroundColor: theme.palette.primary.main,
    transition: 'width 0.3s ease',
  },
  '&:hover::after': {
    width: '100%',
  },
}));

const MobileNavItem = styled(ListItemButton)(({ theme, active }) => ({
  borderLeft: active ? `4px solid ${theme.palette.primary.main}` : '4px solid transparent',
  backgroundColor: active ? theme.palette.action.selected : 'transparent',
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(1, 2),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

/**
 * Responsive Navbar component with mobile drawer
 * 
 * @param {Object} props - Component props
 * @param {string} props.logo - Logo URL
 * @param {boolean} props.transparent - Use transparent background when at top
 */
export const Navbar = ({ logo, transparent = false }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  
  // Detect scroll position for transparent navbar effect
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <DrawerHeader>
        <Typography variant="h6" component="div" className={poppins500.className}>
          EdRoro Nexus
        </Typography>
        <IconButton edge="end" color="inherit" aria-label="close drawer">
          <CloseIcon />
        </IconButton>
      </DrawerHeader>
      <List>
        {NAV_LINKS.map((item) => {
          const isActive = pathname === item.path;
          return (
            <ListItem key={item.name} disablePadding>
              <Link href={item.path} style={{ width: '100%', textDecoration: 'none', color: 'inherit' }}>
                <MobileNavItem active={isActive}>
                  <ListItemText primary={item.name} />
                </MobileNavItem>
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
      <StyledAppBar position="sticky" transparent={transparent} trigger={trigger}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {/* Logo */}
            <Typography
              variant="h6"
              noWrap
              component={Link}
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
              className={poppins500.className}
            >
              EdRoro Nexus
            </Typography>

            {/* Mobile menu button */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Mobile logo */}
            <Typography
              variant="h6"
              noWrap
              component={Link}
              href="/"
              sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'none' },
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
              className={poppins500.className}
            >
              EdRoro
            </Typography>

            {/* Desktop navigation */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
              {NAV_LINKS.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <NavButton
                    key={item.name}
                    component={Link}
                    href={item.path}
                    active={isActive}
                  >
                    {item.name}
                  </NavButton>
                );
              })}
            </Box>
          </Toolbar>
        </Container>
      </StyledAppBar>

      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;