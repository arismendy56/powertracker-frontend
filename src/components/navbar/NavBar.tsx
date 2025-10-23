import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const drawerWidth = 240;

// Updated navItems with paths
const navItems = [
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Blocks', path: '/blocks' },
  { name: 'History', path: '/history' }
];

interface Props {
  window?: () => Window;
}

const Navbar = (props: Props) => {
  const { window } = props;
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 2 }}>
        <img 
          src="/powertracker-logo.png" 
          alt="PowerTracker Logo" 
          style={{ width: 30, height: 30, marginRight: 8 }} 
          onError={(e) => {
            console.log('Logo failed to load');
            e.currentTarget.style.display = 'none';
          }}
        />
        <Typography variant="h6">
          PowerTracker
        </Typography>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton 
              component={Link} 
              to={item.path}
              sx={{ 
                textAlign: 'center',
                backgroundColor: location.pathname === item.path ? 'primary.main' : 'transparent',
                color: location.pathname === item.path ? 'primary.contrastText' : 'inherit',
                '&:hover': {
                  backgroundColor: location.pathname === item.path ? 'primary.dark' : 'rgba(0, 0, 0, 0.04)',
                },
              }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
          {/* Logo and text for desktop */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <img 
              src="/powertracker-logo.png" 
              alt="PowerTracker Logo" 
              style={{ width: 32, height: 32, marginRight: 12 }}
              onError={(e) => {
                console.log('Desktop logo failed to load');
                e.currentTarget.style.display = 'none';
              }}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              PowerTracker
            </Typography>
          </Box>
          
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button 
                key={item.name} 
                component={Link} 
                to={item.path}
                sx={{ 
                  color: '#fff',
                  backgroundColor: location.pathname === item.path ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navbar;