import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, MapPin } from 'lucide-react';

const data = [
  { name: 'Mon', value: 4000 },
  { name: 'Tue', value: 3000 },
  { name: 'Wed', value: 5000 },
  { name: 'Thu', value: 2780 },
  { name: 'Fri', value: 6890 },
  { name: 'Sat', value: 4390 },
  { name: 'Sun', value: 7490 },
];

const stats = [
  { 
    title: 'Active Users', 
    value: '2.7k', 
    change: '+12.3%',
    icon: Users,
    color: 'from-purple-500 to-pink-500'
  },
  { 
    title: 'Places Visited', 
    value: '1.2k', 
    change: '+8.1%',
    icon: MapPin,
    color: 'from-pink-500 to-rose-500'
  },
  { 
    title: 'Engagement Rate', 
    value: '89%', 
    change: '+5.4%',
    icon: TrendingUp,
    color: 'from-rose-500 to-orange-500'
  },
];

export default function AnalyticsCard() {
  return (
    <div className="bg-purple-900/50 backdrop-blur-sm rounded-xl p-6 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.title} className="flex items-center space-x-4">
              <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color}`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-purple-200 text-sm">{stat.title}</p>
                <div className="flex items-center space-x-2">
                  <p className="text-white text-2xl font-semibold">{stat.value}</p>
                  <span className="text-green-400 text-sm">{stat.change}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7e3af2" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#7e3af2" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="name" 
              stroke="#cabffd" 
              fontSize={12}
            />
            <YAxis 
              stroke="#cabffd" 
              fontSize={12}
            />
            <Tooltip 
              contentStyle={{ 
                background: '#1a103d',
                border: 'none',
                borderRadius: '8px',
                color: '#fff'
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#7e3af2"
              fillOpacity={1}
              fill="url(#colorGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}