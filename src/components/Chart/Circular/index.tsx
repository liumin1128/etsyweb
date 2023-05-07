import * as React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface IChartProps {
  value: number;
  primaryText: string;
  secondaryText: string;
}

const Chart: React.FunctionComponent<IChartProps> = (props) => {
  const { value, primaryText, secondaryText } = props;

  return (
    <>
      <CircularProgressbarWithChildren
        value={value}
        styles={{
          path: {
            stroke: 'rgba(138, 100, 235, 1)',
            strokeLinecap: 'round',
            strokeWidth: 5,
          },
          trail: {
            stroke: 'rgba(235, 232, 253, 1)',
            strokeWidth: 5,
          },
        }}
      >
        <Stack spacing={1}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 30,
              lineHeight: '22px',
              textAlign: 'center',
            }}
          >
            {primaryText}
          </Typography>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: 16,
              lineHeight: '22px',
              color: '#9A9EA7',
            }}
          >
            {secondaryText}
          </Typography>
        </Stack>
      </CircularProgressbarWithChildren>
    </>
  );
};

export default Chart;
