import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Tooltip,
  DateTime,
  HiloSeries,
} from "@syncfusion/ej2-react-charts";

import { Header } from "../../components";
import {
  financialChartData,
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const Financial = () => {
  const { currentMode } = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Bar' title='Inflation Rate in Percentage' />
      <ChartComponent
        id='bar-chart'
        height='420px'
        width='950px'
        primaryXAxis={FinancialPrimaryXAxis}
        primaryYAxis={FinancialPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
      >
        <Inject services={[DateTime, Legend, Tooltip, HiloSeries]} />
        <SeriesCollectionDirective>
          <SeriesDirective
            type='Hilo'
            name='Apple Inc'
            dataSource={financialChartData}
            xName='x'
            high='high'
            low='low'
          />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Financial;
