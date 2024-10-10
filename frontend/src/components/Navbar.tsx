import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Avatar, Menu, MenuItem, Grid, Badge } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

// Import icons
import DashboardIcon from '../static/icons/dashboard.png';
import RequestsIcon from '../static/icons/requests.png';
import FeedbacksIcon from '../static/icons/feedbacks.png';
import ReportsIcon from '../static/icons/reports.png';
import PatientIcon from '../static/icons/patient.png';
import SettingsIcon from '../static/icons/settings.png';
import MoonIcon from '../static/icons/moon.png'; // Moon icon
import NotificationIcon from '../static/icons/notification.png'; // Notification bell
import AvatarImage from '../static/images/avatar.png'; // Avatar image

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: '#830823', height: '64px' }}>
      <Toolbar style={{ padding: '0 16px', minHeight: '64px' }}>
        {/* Brand Name */}
        <Typography variant="h6" style={{ fontWeight: 'bold', flexGrow: 1 }}>
          e-hospital
        </Typography>

        {/* Centered Menu Items */}
        <Grid container justifyContent="center" alignItems="center" style={{ flexGrow: 2 }}>
          <Button color="inherit" style={{ margin: '0 10px', padding: '6px 12px', display: 'flex', alignItems: 'center' }}>
            <img src={DashboardIcon} alt="Dashboard" style={{ marginRight: '6px', width: '20px', height: '20px' }} />
            Dashboard
          </Button>
          <Button
            color="inherit"
            style={{
              margin: '0 10px',
              backgroundColor: '#FFFFFF',
              color: '#A61E44',
              borderRadius: '5px',
              fontWeight: 'bold',
              padding: '6px 12px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img src={RequestsIcon} alt="Requests" style={{ marginRight: '6px', width: '20px', height: '20px' }} />
            Requests
          </Button>
          <Button color="inherit" style={{ margin: '0 10px', padding: '6px 12px', display: 'flex', alignItems: 'center' }}>
            <img src={FeedbacksIcon} alt="Feedbacks" style={{ marginRight: '6px', width: '20px', height: '20px' }} />
            Feedbacks
          </Button>
          <Button color="inherit" style={{ margin: '0 10px', padding: '6px 12px', display: 'flex', alignItems: 'center' }}>
            <img src={ReportsIcon} alt="Reports" style={{ marginRight: '6px', width: '20px', height: '20px' }} />
            Reports
          </Button>
          <Button color="inherit" style={{ margin: '0 10px', padding: '6px 12px', display: 'flex', alignItems: 'center' }}>
            <img src={PatientIcon} alt="Patient" style={{ marginRight: '6px', width: '20px', height: '20px' }} />
            Patient
          </Button>

          {/* Settings with Dropdown Icon */}
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

        {/* Right Section with Moon Icon, Notification, Welcome Text, and Avatar */}
        <Grid container alignItems="center" justifyContent="flex-end" style={{ width: 'auto', flexWrap: 'nowrap' }}>
          {/* Moon Icon */}
          <IconButton color="inherit" style={{ marginRight: '15px' }}>
            <img src={MoonIcon} alt="Dark Mode" style={{ width: '24px', height: '24px' }} />
          </IconButton>

          {/* Notification Bell with Red Dot */}
          <IconButton color="inherit" style={{ marginRight: '15px' }}>
            <Badge badgeContent={1} color="error"> {/* Red dot for notifications */}
              <img src={NotificationIcon} alt="Notifications" style={{ width: '24px', height: '24px' }} />
            </Badge>
          </IconButton>

          {/* Vertical Divider */}
          <div style={{ height: '30px', width: '1px', backgroundColor: '#FFFFFF', marginRight: '15px' }} />

          {/* Welcome Text and Avatar */}
          <Typography variant="body1" style={{ marginRight: '10px', color: '#FFFFFF', whiteSpace: 'nowrap' }}>
            Welcome <span style={{ fontWeight: 'bold' }}>Admin</span>
          </Typography>
          <IconButton color="inherit">
            <Avatar alt="Admin" src={AvatarImage} style={{ width: '40px', height: '40px' }} /> {/* Adjusted avatar size */}
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
