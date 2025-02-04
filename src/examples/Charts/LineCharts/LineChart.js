/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
import ReactApexChart from "react-apexcharts";
import PropTypes from "prop-types";

function LineChart({ lineChartData, lineChartOptions }) {
  const chartData = {
    series: lineChartData,
    options: {
      ...lineChartOptions,
      chart: {
        ...lineChartOptions.chart,
        type: "line",
        zoom: {
          enabled: false
        }
      }
    }
  };

  return (
    <ReactApexChart
      options={chartData.options}
      series={chartData.series}
      type="line"
      width="100%"
      height="100%"
    />
  );
}

// Prop Types
LineChart.propTypes = {
  lineChartData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      data: PropTypes.arrayOf(
        PropTypes.arrayOf(PropTypes.number)
      ),
    })
  ).isRequired,
  lineChartOptions: PropTypes.object.isRequired,
};

export default LineChart;
