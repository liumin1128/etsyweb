import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ImageGallery from 'react-image-gallery';
import { useFindProductByIdQuery } from '@/generated/graphql';

import 'react-image-gallery/styles/css/image-gallery.css';

export default function DynamicListContainer({ id }) {
  const { data, loading, error } = useFindProductByIdQuery({
    variables: { id },
  });

  if (loading) return <div>loading...</div>;
  if (error) return <div>error...</div>;

  console.log(data);
  return (
    <Stack spacing={3}>
      <Grid container>
        <Grid item md={6}>
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
        </Grid>
      </Grid>
    </Stack>
  );
}
