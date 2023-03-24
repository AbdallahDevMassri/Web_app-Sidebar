import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./style.analytics.css";
import analyticsImage from "./analytics.jpg";

const data = [
  {
    name: "Jan",
    visits: 100,
    pages: 50,
    sales: 20,
  },
  {
    name: "Feb",
    visits: 200,
    pages: 100,
    sales: 40,
  },
  {
    name: "Mar",
    visits: 300,
    pages: 150,
    sales: 60,
  },
  {
    name: "Apr",
    visits: 400,
    pages: 200,
    sales: 80,
  },
  {
    name: "May",
    visits: 500,
    pages: 250,
    sales: 100,
  },
  {
    name: "Jun",
    visits: 600,
    pages: 300,
    sales: 120,
  },
];

export const AnalyticsComponent = () => {
  return (
    <div className="analytics-container">
      <h1 className="header">Analytics</h1>
      <div className="analytics-content">
        <div className="analytics-graph">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="visits"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="pages" stroke="#82ca9d" />
            <Line type="monotone" dataKey="sales" stroke="#ffc658" />
          </LineChart>
        </div>
        <div className="analytics-image">
          <img src={analyticsImage} alt="Analytics" />
        </div>
      </div>
    </div>
  );
};
