import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import { GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  {
    field: 'cover',
    headerName: 'Cover',
    renderCell: (params) => {
      return (
        <CardMedia image={params?.value} sx={{ width: 160, height: 100 }} />
      );
    },
    width: 160,
  },
  {
    field: 'title',
    headerName: 'Name',
    width: 320,
    renderCell: (params) => {
      const { row = {} } = params;
      return (
        <Box>
          <Stack direction="row" spacing={1} alignItems="baseline">
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

          <Typography
            sx={{
              wordWrap: 'break-word',
              whiteSpace: 'normal',
            }}
          >
            {params?.value}
          </Typography>
        </Box>
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
    field: 'commentCount',
    headerName: 'Comment',
  },

  {
    field: 'tags',
    headerName: 'Tags',
    width: 140,
    renderCell: (params) => {
      const { row = {} } = params;
      return (
        <Stack spacing={1}>
          {row?.starSeller && <Box>Star Seller</Box>}
          {params?.value.map((tag: string) => {
            return <Box key={tag}>{tag}</Box>;
          })}
        </Stack>
      );
    },
  },
];

export default columns;
