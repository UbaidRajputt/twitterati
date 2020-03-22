import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8',
  },
  {
    name: '25-29', uv: 26.69, pv: 4567, fill: '#83a6ed',
  },
  {
    name: '30-34', uv: 15.69, pv: 1398, fill: '#8dd1e1',
  },
  {
    name: '35-39', uv: 8.22, pv: 9800, fill: '#82ca9d',
  },
  {
    name: '40-49', uv: 8.63, pv: 3908, fill: '#a4de6c',
  },
  {
    name: '50+', uv: 2.63, pv: 4800, fill: '#d0ed57',
  },
  {
    name: 'unknow', uv: 6.67, pv: 4800, fill: '#ffc658',
  },
];

const style = {
  top: '100%',
  bottom: 'auto',
  lineHeight: '24px'
};

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="custom-tooltip" style={{ background: "transparent", color: "#3f51b5", fontWeight: 700, fontFamily:"Roboto Slab" }}>
        <p className="label">{`Name : ${payload[0].payload.name}`}</p>
        <p className="label">{`uv : ${payload[0].payload.uv}`}</p>
        <p className="label">{`pv : ${payload[0].payload.pv}`}</p>
      </div>
    );
  }

  return null;
};


export default class RadialChart extends PureComponent {
render() {
    return (
      <ResponsiveContainer>
        <RadialBarChart key={this.props.keyData} innerRadius="20%" outerRadius="100%" data={data} style={{paddingRight: '100px'}} margin={{top: 0, right: 0, bottom: 0, left: 0}}>
          <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff', fontSize: '10px' }} background  dataKey="uv" />
          <Tooltip content={<CustomTooltip/>} />
          <Legend iconType="circle" iconSize={8} layout="horizontal" verticalAlign="bottom" align="center" wrapperStyle={style} />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  }
}
