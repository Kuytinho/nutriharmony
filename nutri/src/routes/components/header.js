import { Link } from "react-router-dom";
import { AppBar, Toolbar, Drawer, List, ListItem, ListItemText, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setIsDrawerOpen(true)}>
          <MenuIcon />
        </IconButton>
        <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
          <div style={{ backgroundColor: '#008000', height: '100%' }}>
            <List sx={{ backgroundColor: '#008000',  display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', overflowY: 'auto' }}>
              <ListItem button component={Link} to="/">
                <ListItemText primaryTypographyProps={{ color: 'red' }} primary="Home" />
              </ListItem>
              <ListItem button component={Link} to="/consultorias">
                <ListItemText primaryTypographyProps={{ color: 'red' }} primary="Consultorias" />
              </ListItem>
              <ListItem button component={Link} to="/programas">
                <ListItemText primaryTypographyProps={{ color: 'red' }} primary="Programas" />
              </ListItem>
              <ListItem button component={Link} to="/blog">
                <ListItemText primaryTypographyProps={{ color: 'red' }} primary="Blog" />
              </ListItem>
              <ListItem button component={Link} to="/galeria">
                <ListItemText primaryTypographyProps={{ color: 'red' }} primary="Galeria" />
              </ListItem>
              <ListItem button component={Link} to="/agendamento">
                <ListItemText primaryTypographyProps={{ color: 'red' }} primary="Marcar Consulta" />
              </ListItem>
            </List>
          </div>
        </Drawer>
        <Typography variant="h6" color="inherit">Nutri</Typography>
        <Typography variant="h6" color="secondary">Harmony</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
