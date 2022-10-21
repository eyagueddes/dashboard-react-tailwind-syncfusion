import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
const Stacked = ({width,height}) => {
  const{currentMode}=useStateContext();
  return (
    <ChartComponent width={width} height={height} chartArea={{border:{width:0}}} id="charts" tooltip={{enable:true}} primaryXAxis={stackedPrimaryXAxis} primaryYAxis={stackedPrimaryYAxis} legendSettings={{background:'white'}} background={currentMode==="Dark" ? '#33373E' :'#fff'}>
    <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]}/>
    <SeriesCollectionDirective>
            {stackedCustomSeries.map((item,index)=><SeriesDirective key={index}{...item}/> )}
        </SeriesCollectionDirective>
        </ChartComponent>
  );
}

export default Stacked;
