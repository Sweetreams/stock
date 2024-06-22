import React, { useContext } from "react";
import Header from "./Header";
import { mockCompanyDetailsSP500, mockCompanyDetailsTesla, mockHistoricalDataTesla, mockStockQuoteTesla } from "../constants/mock";
import Details from "./Details";
import Overview from "./Overview";
import Chart from "./Chart";
import ThemeContext from "../context/ThemeContext";

const DashboardTesla = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    
    <div
      className={`h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-neutral-100"
      }`}
    >
      <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
        <Header name={mockCompanyDetailsTesla.name} />
      </div>
      <div className="md:col-span-2 row-span-4">
        <Chart value={mockHistoricalDataTesla}/>
      </div>
      <div>
        <Overview
          symbol={mockCompanyDetailsSP500.ticker}
          price={mockStockQuoteTesla.pc}
          change={mockStockQuoteTesla.d}
          changePercent={mockStockQuoteTesla.dp}
          currency={mockCompanyDetailsTesla.currency}
        />
      </div>
      <div className="row-span-2 xl:row-span-3">
        <Details details={mockCompanyDetailsTesla} />
      </div>
    </div>
  );
};

export default DashboardTesla;