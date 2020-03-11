import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

export default function IndividualLinesComponent(data) {
  const [line, setline] = useState(data);
  console.log('line', data);
  return <Line/>
}
