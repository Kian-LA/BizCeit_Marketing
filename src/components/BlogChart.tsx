import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

interface ChartData {
  name: string;
  value: number;
  [key: string]: any;
}

interface BlogChartProps {
  type: 'bar' | 'line' | 'pie';
  data: ChartData[];
  title: string;
  description?: string;
}

const BlogChart: React.FC<BlogChartProps> = ({ type, data, title, description }) => {
  const colors = ['#84cc16', '#10b981', '#06b6d4', '#8b5cf6', '#f59e0b', '#ef4444'];

  const renderChart = () => {
    switch (type) {
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: 'none', 
                  borderRadius: '8px',
                  color: '#f1f5f9'
                }}
              />
              <Bar dataKey="value" fill="#84cc16" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );
      
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: 'none', 
                  borderRadius: '8px',
                  color: '#f1f5f9'
                }}
              />
              <Line type="monotone" dataKey="value" stroke="#84cc16" strokeWidth={3} dot={{ fill: '#84cc16', strokeWidth: 2, r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        );
      
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: 'none', 
                  borderRadius: '8px',
                  color: '#f1f5f9'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="bg-slate-50 rounded-2xl p-6 my-8">
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      {description && (
        <p className="text-slate-600 mb-6">{description}</p>
      )}
      {renderChart()}
    </div>
  );
};

export default BlogChart;