import * as React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import Typography from '@mui/material/Typography';

interface IChartProps {
  value: number;
  primaryText: string;
}

const Chart: React.FunctionComponent<IChartProps> = (props) => {
  const { value, primaryText } = props;

  return (
    <>
      <CircularProgressbarWithChildren
        value={value}
        styles={{
          path: {
            stroke: 'rgba(138, 100, 235, 1)',
            strokeLinecap: 'round',
          },
          trail: {
            stroke: 'rgba(235, 232, 253, 1)',
          },
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: 14,
            lineHeight: '14px',
            textAlign: 'center',
            marginTop: '-16px',
          }}
        >
          {primaryText}
        </Typography>
      </CircularProgressbarWithChildren>
    </>
  );
};

export default Chart;
