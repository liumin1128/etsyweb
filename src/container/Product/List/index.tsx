import Stack from '@mui/material/Stack';
import unionBy from 'lodash/unionBy';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import { DataGrid, GridRowsProp } from '@mui/x-data-grid';
import { useFindProductsQuery } from '@/generated/graphql';
import Error from '@/components/Error/common';
import Skeleton from '@/components/Skeleton/Dynamic/List';
import columns from './columns';

export default function DynamicListContainer() {
  const { data, loading, error } = useFindProductsQuery();

  if (loading) return <Skeleton />;
  if (error) return <Error />;

  console.log('data');
  console.log(data);

  return (
    <Stack spacing={1}>
      <DataGrid
        rowHeight={160}
        rows={unionBy(data?.findProducts, '_id') as GridRowsProp}
        columns={columns}
      />

      {/* {data?.findProducts?.map((i) => {
        if (!i) return null;
        return (
          <Stack key={i?._id} spacing={1}>
            {i._id}
            <Typography>{i.title}</Typography>
          </Stack>
        );
      })} */}
    </Stack>
  );
}
