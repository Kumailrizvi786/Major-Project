import React from 'react';
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';

const UserProgressChart = ({ userDetails }) => {
  const totalExercises = userDetails.result.length;
  const completedExercises = userDetails.result.filter(result => result.score > 0).length;
  const completionPercentage = Math.round((completedExercises / totalExercises) * 100);

  const pdata = [
    { name: 'Completed', value: completedExercises },
    { name: 'Incomplete', value: totalExercises - completedExercises },
  ];

  return (
    <div className="user-progress-chart">
      <h2 className="text-2xl font-bold mt-2 mb-4">Overall Attempt Exercise :  {userDetails.result?.length} </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={pdata}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
      <p className="mt-4">Completion Percentage: {completionPercentage}%</p>
    </div>
  );
};

export default UserProgressChart;
