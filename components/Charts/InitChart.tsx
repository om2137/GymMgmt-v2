'use client'
import { Cell, Label, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

interface props {
  data: {
    value: number;
    date: string;
  }[]
}
const data01 = [
  { name: 'monthly', value: 400 },
  { name: 'quarterly', value: 300 },
  { name: 'yearly', value: 300 },
  { name: 'half yearly', value: 200 },
];

// Colors for Pie Slices
const COLORS = ['#3b82f6', '#22c55e', '#eab308', '#ef4444'];
export function LineChartComp(props: props) {
  return (
    <div className="h-full w-full">
      <ResponsiveContainer>
        <LineChart 
          data={props.data}
          margin={{ top: 60, right: 30, left: -10, bottom: 20 }}
          
        >
          <Label name="clients" />
          <XAxis dataKey="date" fontSize={10} stroke="#fff" name="Date" />
          <YAxis dataKey="value" fontSize={10} stroke="#fff" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1e293b',
              color: '#fff',
              borderRadius: '8px',
              fontSize: '12px',
            }}
            itemStyle={{
              fontSize: '12px', // Adjust individual item font size
              color: '#fff'
            }}
            cursor={{ stroke: 'red', strokeWidth: 1 }}
          />
          <Line dataKey="value" stroke="#fff"/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export function PieChartComp() {
  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            stroke="none"
            data={data01}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`} 
            fontSize={10}
          >
            {data01.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{
              color: '#fff', 
              borderRadius: '8px',
              fontSize: '12px', 
              padding: '4px', 
            }}
            itemStyle={{
              fontSize: '12px' 
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}