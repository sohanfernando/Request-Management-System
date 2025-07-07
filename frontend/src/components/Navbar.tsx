import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Avatar, 
  Menu, 
  MenuItem, 
  Grid, 
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { ExpandMore, Menu as MenuIcon } from '@mui/icons-material';
import DashboardIcon from '../static/icons/dashboard.png';
import RequestsIcon from '../static/icons/requests.png';
import FeedbacksIcon from '../static/icons/feedbacks.png';
import ReportsIcon from '../static/icons/reports.png';
import PatientIcon from '../static/icons/patient.png';
import SettingsIcon from '../static/icons/settings.png';
import MoonIcon from '../static/icons/moon.png';
import NotificationIcon from '../static/icons/notification.png';
import AvatarImage from '../static/images/avatar.png';

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMenuOpen = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { label: 'Dashboard', icon: DashboardIcon, active: false },
    { label: 'Requests', icon: RequestsIcon, active: true },
    { label: 'Feedbacks', icon: FeedbacksIcon, active: false },
    { label: 'Reports', icon: ReportsIcon, active: false },
    { label: 'Patient', icon: PatientIcon, active: false },
  ];

  const renderNavItems = () => (
    <>
      {navItems.map((item) => (
        <Button
          key={item.label}
          color="inherit"
          style={{
            margin: '0 10px',
            backgroundColor: item.active ? '#FFFFFF' : 'transparent',
            color: item.active ? '#A61E44' : '#FFFFFF',
            borderRadius: '5px',
            fontWeight: 'bold',
            padding: '6px 12px',
            display: 'flex',
            alignItems: 'center',
            minWidth: 'auto',
            [theme.breakpoints.down('lg')]: {
              margin: '0 5px',
              padding: '4px 8px',
              fontSize: '0.875rem',
            },
          }}
        >
          <img 
            src={item.icon} 
            alt={item.label} 
            style={{ 
              marginRight: '6px', 
              width: '20px', 
              height: '20px',
              [theme.breakpoints.down('lg')]: {
                width: '16px',
                height: '16px',
                marginRight: '4px',
              }
            }} 
          />
          <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
            {item.label}
          </Box>
        </Button>
      ))}
    </>
  );

  const renderMobileMenu = () => (
    <Drawer
      anchor="left"
      open={mobileMenuOpen}
      onClose={handleMobileMenuToggle}
      sx={{
        '& .MuiDrawer-paper': {
          width: 280,
          backgroundColor: '#830823',
          color: 'white',
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
          e-hospital
        </Typography>
        <List>
          {navItems.map((item) => (
            <ListItem 
              key={item.label}
              sx={{
                backgroundColor: item.active ? '#FFFFFF' : 'transparent',
                color: item.active ? '#A61E44' : '#FFFFFF',
                borderRadius: '5px',
                mb: 1,
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: item.active ? '#f5f5f5' : 'rgba(255,255,255,0.1)',
                },
              }}
            >
              <ListItemIcon>
                <img 
                  src={item.icon} 
                  alt={item.label} 
                  style={{ width: '20px', height: '20px' }} 
                />
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: '#830823', height: { xs: '56px', sm: '64px' } }}>
      <Toolbar sx={{ padding: { xs: '0 8px', sm: '0 16px' }, minHeight: { xs: '56px', sm: '64px' } }}>
        
        {/* Mobile Menu Button */}
        {isMobile && (
          <IconButton
            color="inherit"
            onClick={handleMobileMenuToggle}
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton>
        )}

        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 'bold', 
            whiteSpace: 'nowrap',
            fontSize: { xs: '1.1rem', sm: '1.25rem' }
          }}
        >
          e-hospital
        </Typography>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Grid 
            container 
            justifyContent="center" 
            alignItems="center" 
            sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }}
          >
            {renderNavItems()}

            <Button
              aria-controls="settings-menu"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              color="inherit"
              style={{ margin: '0 10px', padding: '6px 12px', display: 'flex', alignItems: 'center' }}
              endIcon={<ExpandMore />}
            >
              <img src={SettingsIcon} alt="Settings" style={{ marginRight: '6px', width: '20px', height: '20px' }} />
              Settings
            </Button>
            <Menu
              id="settings-menu"
              anchorEl={anchorEl}
              keepMounted
              open={isMenuOpen}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
              <MenuItem onClick={handleMenuClose}>Account</MenuItem>
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            </Menu>
          </Grid>
        )}

        {/* Right side icons and user info */}
        <Grid 
          container 
          alignItems="center" 
          justifyContent="flex-end" 
          sx={{ 
            width: 'auto', 
            flexWrap: 'nowrap',
            gap: { xs: 1, sm: 2 }
          }}
        >
          
          <IconButton color="inherit" sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <img src={MoonIcon} alt="Dark Mode" style={{ width: '24px', height: '24px' }} />
          </IconButton>

          <IconButton color="inherit">
            <Badge badgeContent={1} color="error">
              <img src={NotificationIcon} alt="Notifications" style={{ width: '24px', height: '24px' }} />
            </Badge>
          </IconButton>

          <Box 
            sx={{ 
              height: '30px', 
              width: '1px', 
              backgroundColor: '#FFFFFF', 
              display: { xs: 'none', sm: 'block' }
            }} 
          />

          <Typography 
            variant="body1" 
            sx={{ 
              color: '#FFFFFF', 
              whiteSpace: 'nowrap',
              display: { xs: 'none', sm: 'block' },
              fontSize: { xs: '0.875rem', sm: '1rem' }
            }}
          >
            Welcome <span style={{ fontWeight: 'bold' }}>Admin</span>
          </Typography>
          <IconButton color="inherit">
            <Avatar 
              alt="Admin" 
              src={AvatarImage} 
              sx={{ 
                width: { xs: '32px', sm: '40px' }, 
                height: { xs: '32px', sm: '40px' } 
              }} 
            />
          </IconButton>
        </Grid>
      </Toolbar>

      {/* Mobile Menu */}
      {renderMobileMenu()}
    </AppBar>
  );
};

export default Navbar;
