import React from 'react';
import Stack from '@mui/material/Stack';
import dayjs from 'dayjs';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import ImageGallery from 'react-image-gallery';
import { useFindProductByIdQuery } from '@/generated/graphql';
import 'react-image-gallery/styles/css/image-gallery.css';
import LineChart from '@/components/Chart/Line';

const getData = (detail, key) => {
  const sss = [];
  for (let i = 0; i < 30; i += 1) {
    const day = dayjs()
      .add(-30 + i, 'days')
      .format('MM-DD');
    const obj = {
      key: day,
      value: 0,
      category: 'day',
    };

    const item = detail?.snapshots?.find(
      (d) => dayjs(parseFloat(d?.createdAt as string)).format('MM-DD') === day,
    );
    if (item) {
      obj.value = item[key] as number;
    }
    sss.push(obj);
  }

  return sss;
};

export default function DynamicListContainer({ id }) {
  const { data, loading, error } = useFindProductByIdQuery({
    variables: { id },
  });

  if (loading) return <div>loading...</div>;
  if (error) return <div>error...</div>;

  const detail = data?.findProductById;

  console.log(data);

  return (
    <Stack>
      <Grid container spacing={4}>
        <Grid item md={7}>
          <Stack>
            <ImageGallery
              showPlayButton={false}
              showNav={false}
              thumbnailPosition="left"
              items={data?.findProductById?.pictures?.map((i) => {
                if (i.indexOf('video') !== -1) {
                  return {
                    original: i,
                    thumbnail: i,
                    renderItem: () => {
                      return (
                        <video width="100%" height="100%" controls>
                          <source alt="" src={i} type="video/mp4" />
                        </video>
                      );
                    },
                    renderThumbInner: () => {
                      return (
                        <Box
                          sx={{
                            padding: '20px',
                            color: 'red',
                            border: '1px red  solid',
                          }}
                        >
                          video
                        </Box>
                      );
                    },
                  };
                }
                return {
                  original: i,
                  thumbnail: i,
                };
              })}
            />
          </Stack>
        </Grid>

        <Grid item md={5}>
          <Stack spacing={4}>
            <Stack spacing={1.5}>
              <Typography variant="caption">Price</Typography>
              <Typography variant="h1">
                {detail?.currencySymbol} {detail?.currencyValue}
              </Typography>
            </Stack>

            <Stack spacing={1.5}>
              <Typography variant="caption">Title</Typography>
              <Typography variant="body1">{detail?.title}</Typography>
            </Stack>

            <Stack spacing={1.5}>
              <Typography variant="caption">Kinds</Typography>
              <Breadcrumbs separator="›" aria-label="breadcrumb">
                {detail?.kinds?.map((i) => {
                  return (
                    <Link underline="hover" key={i} color="inherit" href="/">
                      {i}
                    </Link>
                  );
                })}
              </Breadcrumbs>
            </Stack>

            <Stack spacing={1.5}>
              <Typography variant="caption">Tags</Typography>
              <Stack direction="row" flexWrap="wrap">
                {detail?.tags?.map((i) => {
                  return (
                    <Chip
                      sx={{ mr: 1, mb: 1 }}
                      key={i}
                      label={i}
                      variant="outlined"
                      // size="small"
                    />
                  );
                })}
              </Stack>
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <Stack spacing={2}>
            <Typography variant="h3">Sales</Typography>
            <LineChart data={getData(detail, 'sales')} />
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <Stack spacing={2}>
            <Typography variant="h3">Reviews</Typography>
            <LineChart data={getData(detail, 'reviews')} />
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <Stack spacing={2}>
            <Typography variant="h3">Favorites</Typography>
            <LineChart data={getData(detail, 'favorites')} />
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}
