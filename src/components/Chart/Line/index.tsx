import React from 'react';
import { Line } from '@ant-design/charts';

interface DataItem {
  key: string;
  value: string | number;
  category?: string;
}

interface ILineChartProps {
  data: DataItem[];
  options?: Record<string, unknown>;
}

const LineChart: React.FunctionComponent<ILineChartProps> = (props) => {
  const { data, options } = props;

  const config = {
    data,
    appendPadding: 8,
    xField: 'key',
    yField: 'value',
    seriesField: 'category',
    yAxis: {
      grid: {
        line: {
          style: {
            lineWidth: 0,
          },
        },
      },
      label: {
        style: {
          fontSize: 14,
          fill: '#92929d',
          textAlign: 'right',
        },
        offset: 0,
        formatter: (v: number) => `${v}`,
      },
    },
    xAxis: {
      // tickCount: 8,
      line: null,
      grid: {
        line: {
          style: {
            lineWidth: 1,
            stroke: '#F1F1F5',
          },
        },
      },
      tickLine: null,
      label: {
        style: {
          fontSize: 14,
          fill: '#92929d',
        },
        // formatter: (i: string) => {
        //   return moment(i).format('M-D');
        // },
        offset: 20,
      },
    },
    tooltip: {
      formatter: (datum) => {
        return { name: datum.category, value: `${datum.value}` };
      },
    },
    smooth: true,
    color: ['#8A64EB', '#64E8DE'],
    lineStyle: {
      lineWidth: 3,
    },
    legend: false,
    ...options,
  };

  return <Line {...config} />;
};

LineChart.defaultProps = {
  options: {},
};

export default LineChart;
