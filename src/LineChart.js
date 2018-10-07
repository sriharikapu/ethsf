import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';

const data = [
  { name: 'Mon', You: 1.24, Contributors: 1.24 },
  { name: 'Tue', You: 1.54, Contributors: 1.85 },
  { name: 'Wed', You: 1.76, Contributors: 2.33 },
  { name: 'Thu', You: 2.44, Contributors: 3.55 },
  { name: 'Fri', You: 3.44, Contributors: 4.12 },
  { name: 'Sat', You: 4.01, Contributors: 4.99 },
  { name: 'Sun', You: 5.00, Contributors: 6.01 },
];

function SimpleLineChart() {
  return (
    // 99% per https://github.com/recharts/recharts/issues/172
    <ResponsiveContainer width="99%" height={320}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="You" stroke="#3F51B5" />
        <Line type="monotone" dataKey="Contributors" stroke="#C51162" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default SimpleLineChart;
