import React from 'react';
import debounce from 'lodash/debounce';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import unionBy from 'lodash/unionBy';
import { DataGrid, GridRowsProp } from '@mui/x-data-grid';
import { useFindProductsQuery } from '@/generated/graphql';
import Error from '@/components/Error/common';
import columns from './columns';

export default function DynamicListContainer() {
  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: 25,
    page: 0,
  });

  const [search, setSearch] = React.useState('');

  const { page, pageSize } = paginationModel;
  const skip = page === 0 ? 0 : page * pageSize;
  const limit = pageSize;

  const { data, loading, error } = useFindProductsQuery({
    variables: {
      limit,
      skip,
      search,
    },
  });

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  // if (loading) return <div>loading...</div>;
  if (error) return <Error />;

  const rows = unionBy(data?.findProducts, '_id') as GridRowsProp;
  return (
    <Stack spacing={3}>
      <TextField
        label="search"
        defaultValue={search}
        onChange={debounce(handleSearch, 500)}
      />

      <DataGrid
        loading={loading}
        rowHeight={160}
        rows={rows}
        columns={columns}
        // 分页器
        paginationMode="server"
        pageSizeOptions={[5, 10, 25, 50, 100]}
        paginationModel={paginationModel}
        rowCount={data?.findProductsCount || 0}
        onPaginationModelChange={setPaginationModel}
      />
    </Stack>
  );
}
