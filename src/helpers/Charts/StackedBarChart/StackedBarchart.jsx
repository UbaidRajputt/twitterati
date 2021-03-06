import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Label, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];

export default class StackedBarChart extends PureComponent {
  constructor(){
      super();
      this.state={
        opacity: {
            uv: 1,
            pv: 1,
        }
      }
  }

  handleMouseEnter = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;
    const key = Object.keys(opacity).filter( k => {
        return k!== dataKey
    })
    this.setState({
      opacity: { ...opacity, [key]: 0.5 },
    });
  }

  handleMouseLeave = () => {
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, uv: 1, pv: 1 },
    });
  }



  render() {
    const { opacity } = this.state;
    return (
    <ResponsiveContainer>
      <BarChart
        key={this.props.keyData}
        data={data}
        margin={{
          top: 20, right: 0, left: 0, bottom: 20,
        }}
      >
        <CartesianGrid  strokeDasharray="0 0"/>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} />
        <Bar dataKey="pv" stackId="a" fill="#056677"  fillOpacity={opacity.pv}/>
        <Bar dataKey="uv" stackId="a" fill="#F89D0E" fillOpacity={opacity.uv} />
      </BarChart>
      </ResponsiveContainer>
    );
  }
}
