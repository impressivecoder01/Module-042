import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';
const resultData = [
  {
    "student": "Student 1",
    "physics": 78,
    "chemistry": 82
  },
  {
    "student": "Student 2",
    "physics": 85,
    "chemistry": 79
  },
  {
    "student": "Student 3",
    "physics": 92,
    "chemistry": 88
  },
  {
    "student": "Student 4",
    "physics": 67,
    "chemistry": 71
  },
  {
    "student": "Student 5",
    "physics": 74,
    "chemistry": 69
  },
  {
    "student": "Student 6",
    "physics": 88,
    "chemistry": 91
  },
  {
    "student": "Student 7",
    "physics": 59,
    "chemistry": 64
  },
  {
    "student": "Student 8",
    "physics": 91,
    "chemistry": 87
  },
  {
    "student": "Student 9",
    "physics": 73,
    "chemistry": 76
  },
  {
    "student": "Student 10",
    "physics": 80,
    "chemistry": 83
  }
]
const ResultCart = () => {
    return (
        <div>
            <LineChart width={500} height={500} data={resultData}>
                <XAxis dataKey={'student'}></XAxis>
                <YAxis></YAxis>
            <Line stroke='red' dataKey={'physics'}></Line>
            <Line dataKey={'chemistry'}></Line>

            </LineChart>
        </div>
    );
};

export default ResultCart;