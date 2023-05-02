import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import MaterialUISwitch from '@/components/MaterialUISwitch';
import Grid from '@mui/material/Grid';
import ProductList from '@/container/Product/List';

const Retro: React.FunctionComponent = () => {
  return (
    <Box>
      <AppBar color="default" position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Product
          </Typography>
          <MaterialUISwitch />
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 3 }}>
        <ProductList />
        {/* <Grid container spacing={8}>
          <Grid item>
            <Stack spacing={2}>11</Stack>
          </Grid>
          <Grid item xs={8}>
            <ProductList />
          </Grid>
        </Grid> */}
      </Container>
    </Box>
  );
};

export default Retro;
