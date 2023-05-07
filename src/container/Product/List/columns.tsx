import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';
import NorthIcon from '@mui/icons-material/North';
import LinkIcon from '@mui/icons-material/Link';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StraightIcon from '@mui/icons-material/Straight';
import CardMedia from '@mui/material/CardMedia';
import { GridColDef } from '@mui/x-data-grid';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';

const Increment = ({ value, title }) => {
  return (
    <Tooltip arrow title={title}>
      <Typography
        sx={{
          color: 'green',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          // backgroundColor: 'rgba(0, 255, 0, 0.1)',
          borderRadius: '4px',
          padding: '0  2px',
        }}
      >
        <NorthIcon fontSize="inherit" sx={{ height: '12px' }} />
        {value}
      </Typography>
    </Tooltip>
  );
};

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
    width: 140,

    renderCell: (params) => {
      const firstSnapshot = params?.row?.snapshots[0];

      const lastSnapshot =
        params?.row?.snapshots[params?.row?.snapshots.length - 1];

      const increment = firstSnapshot.reviews - lastSnapshot.reviews;

      return (
        <Stack spacing={0} direction="row">
          <Typography>{params?.value}</Typography>
          {increment > 0 && (
            <Increment
              title="The increase in the last 7 days"
              value={increment}
            />
          )}
        </Stack>
      );
    },
  },

  {
    field: 'favorites',
    headerName: 'Favorites',
    width: 140,

    renderCell: (params) => {
      const firstSnapshot = params?.row?.snapshots[0];

      const lastSnapshot =
        params?.row?.snapshots[params?.row?.snapshots.length - 1];

      const increment = firstSnapshot.favorites - lastSnapshot.favorites;

      return (
        <Stack spacing={0} direction="row">
          <Typography>{params?.value}</Typography>

          {increment > 0 && (
            <Increment
              title="The increase in the last 7 days"
              value={increment}
            />
          )}
        </Stack>
      );
    },
  },

  {
    field: 'sales',
    headerName: 'Sales',

    width: 140,

    renderCell: (params) => {
      const firstSnapshot = params?.row?.snapshots[0];

      const lastSnapshot =
        params?.row?.snapshots[params?.row?.snapshots.length - 1];

      const increment = firstSnapshot.sales - lastSnapshot.sales;

      return (
        <Stack spacing={0} direction="row">
          <Typography>{params?.value}</Typography>
          {increment > 0 && (
            <Increment
              title="The increase in the last 7 days"
              value={increment}
            />
          )}
        </Stack>
      );
    },
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

  {
    field: 'actions',
    headerName: 'Actions',
    width: 140,
    renderCell: (params) => {
      return (
        <Stack spacing={1} direction="row">
          <Tooltip arrow title={params?.row?.url}>
            <Link
              href={params?.row?.url}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                window.open(params?.row?.url, '_blank');
              }}
            >
              <IconButton aria-label="delete">
                <LinkIcon fontSize="inherit" />
              </IconButton>
            </Link>
          </Tooltip>

          <Tooltip arrow title={params?.row?.url}>
            <Link href={`/product/${params?.row?.id}`}>
              <IconButton aria-label="delete">
                <VisibilityIcon fontSize="inherit" />
              </IconButton>
            </Link>
          </Tooltip>
        </Stack>
      );
    },
  },
];

export default columns;
