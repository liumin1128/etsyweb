import React from 'react';
import debounce from 'lodash/debounce';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import unionBy from 'lodash/unionBy';
import { DataGrid, GridRowsProp } from '@mui/x-data-grid';
import { useFindProductsQuery } from '@/generated/graphql';
import Error from '@/components/Error/common';
import columns from './columns';

export default function DynamicListContainer({ id }) {
  return <Stack spacing={3}>wwww{id}</Stack>;
}
