import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';

import CardMedia from '@mui/material/CardMedia';
import { GridColDef } from '@mui/x-data-grid';
import Chip from '@mui/material/Chip';
const columns: GridColDef[] = [
  {
    field: 'cover',
    headerName: 'Cover',
    renderCell: (params) => {
      return (
        <CardMedia image={params?.value} sx={{ width: 200, height: 120 }} />
      );
    },
    width: 200,
  },
  {
    field: 'title',
    headerName: 'Name',
    width: 320,
    renderCell: (params) => {
      const { row = {} } = params;
      return (
        <Stack spacing={1}>
          <Stack direction="row" spacing={2} alignItems="baseline">
            <Typography variant="h5">
              {row?.currencySymbol} {row?.currencyValue}
            </Typography>
            {row?.originalCurrencySymbol && (
              <Typography
                variant="caption"
                sx={{ textDecoration: 'line-through' }}
              >
                {row?.originalCurrencySymbol} {row?.originalCurrencyValue}
              </Typography>
            )}
          </Stack>

          <Stack>
            <Typography
              sx={{
                wordWrap: 'break-word',
                whiteSpace: 'normal',
              }}
            >
              {params?.value}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1}>
            {row?.starSeller && (
              <Chip size="small" variant="outlined" label="Star Seller" />
            )}
            {row?.bestSeller && (
              <Chip size="small" variant="outlined" label="Best Seller" />
            )}
            {row?.freeShipping && (
              <Chip size="small" variant="outlined" label="Free Shipping" />
            )}
            {row?.etsyPick && (
              <Chip size="small" variant="outlined" label="Etsy Pick" />
            )}

            <Tooltip arrow title={params?.row?.tags.join(',')}>
              <Chip size="small" variant="outlined" label="Tags" />
            </Tooltip>
          </Stack>
        </Stack>
      );
    },
  },

  // { field: 'id', headerName: 'Id', width: 120 },
  {
    field: 'stars',
    headerName: 'Stars',
    width: 140,
    renderCell: (params) => {
      return (
        <Stack spacing={1} direction="row">
          <Typography variant="caption">{params?.value.toFixed(1)}</Typography>
          <Rating value={params?.value} size="small" readOnly />
        </Stack>
      );
    },
  },
  {
    field: 'reviews',
    headerName: 'Reviews',
  },

  {
    field: 'favorites',
    headerName: 'Favorites',
  },

  {
    field: 'sales',
    headerName: 'Sales',
  },

  // {
  //   field: 'starSeller',
  //   headerName: 'StarSeller',
  //   width: 140,
  //   renderCell: (params) => {
  //     const { row = {} } = params;
  //     return (
  //       <Stack spacing={1}>
  //         {row?.starSeller && <Box>Star Seller</Box>}
  //         {row?.bestSeller && <Box>Best Seller</Box>}
  //         {row?.freeShipping && <Box>Free Shipping</Box>}
  //         {row?.etsyPick && <Box>Etsy Pick</Box>}
  //         {/* {params?.value.map((tag: string) => {
  //           return <Box key={tag}>{tag}</Box>;
  //         })} */}
  //       </Stack>
  //     );
  //   },
  // },

  {
    field: 'kinds',
    headerName: 'Kinds',
    width: 140,
    renderCell: (params) => {
      return (
        <Stack spacing={1}>
          {params?.value.map((tag: string) => {
            return <Box key={tag}>{tag}</Box>;
          })}
        </Stack>
      );
    },
  },
];

export default columns;
