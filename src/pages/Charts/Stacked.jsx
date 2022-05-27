import React from "react";
import {
  Chart,
  StackingColumnSeries,
  Category,
  Tooltip,
  Legend,
  ChartComponent,
  Inject,
  SeriesCollectionDirective,
  SeriesDirective,
} from "@syncfusion/ej2-react-charts";

import {
  stackedChartData,
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
import { Header } from "../../components";

const Stacked = () => {
  const { currentMode } = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24  p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Stack' title='Budget Chart' />
      <div className='w-full'>
        <ChartComponent
          id='stack-chart'
          legendSettings={{ background: "white" }}
          tooltip={{ enable: true }}
          primaryXAxis={stackedPrimaryXAxis}
          primaryYAxis={stackedPrimaryYAxis}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
          series={stackedCustomSeries}
        >
          <Inject
            services={[StackingColumnSeries, Category, Legend, Tooltip]}
          />
          <SeriesCollectionDirective>
            <SeriesDirective
              name='Food'
              dataSource={stackedChartData}
              xName='x'
              yName='y'
              type='StackingColumn'
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Stacked;
