import React, { useContext, useState } from "react";
import { convertUnixTimestampToDate } from "../utils/helpers/date-helper";
import {
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  AreaChart,
  Tooltip,
} from "recharts";
import Card from "./Card";
import ThemeContext from "../context/ThemeContext";

const Chart = ({value}) => {
  const [data, setData] = useState(value);

  const [filter, setFilter] = useState("1W");

  const { darkMode } = useContext(ThemeContext);

  const formatData = (data) => {
    return data.c.map((item, index) => {
      return {
        value: item.toFixed(2),
        date: convertUnixTimestampToDate(data.t[index]),
      };
    });
  };

  function CustomTooltip({ payload, label, active }) {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`Дата: ${label}`}</p>
          <p className="intro">{`Цена: ${payload[0].value}$`}</p>
        </div>
      );
    }
  
    return null;
  }

  return (
    <Card>
      
      <ResponsiveContainer>
        <AreaChart data={formatData(data)}>
          <defs>
            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={darkMode ? "#312e81" : "rgb(199 210 254)"}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={darkMode ? "#312e81" : "rgb(199 210 254)"}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke="#312e81"
            fillOpacity={1}
            fill="url(#chartColor)"
            strokeWidth={0.5}
          />
          <Tooltip
            contentStyle={darkMode ? { backgroundColor: "#111827" } : null}
            itemStyle={darkMode ? { color: "#818cf8" } : null}
            content={<CustomTooltip/>}
          />
          <XAxis dataKey="date" />
          <YAxis domain={[20, 200]} />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default Chart;