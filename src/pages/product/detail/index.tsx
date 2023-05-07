import React from 'react';
import { useParams } from 'umi';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import MaterialUISwitch from '@/components/MaterialUISwitch';
import Grid from '@mui/material/Grid';
import ProductDetail from '@/container/Product/Detail';

const Retro: React.FunctionComponent = () => {
  const { id } = useParams();
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
        <ProductDetail id={id} />
      </Container>
    </Box>
  );
};

export default Retro;
