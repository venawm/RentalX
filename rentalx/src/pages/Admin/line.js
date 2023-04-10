import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import styled from 'styled-components';

const ChartContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #dee2e6;
  box-shadow: 0px 0px 5px #888888;
  height: 400px; // set a fixed height here
`;


function LineChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false
    };

    const chartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','a'],
      datasets: [
        {
          label: 'Monthly Sales',
          data: [65, 59, 80, 81, 56, 55, 40,33],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }
      ]
    };

    if (chartRef.current) {
      const chart = new Chart(chartRef.current, {
        type: 'line',
        data: chartData,
        options: chartOptions
      });
    }
  }, []);

  return (
    <ChartContainer>
      <h2>Monthly Sales</h2>
      <canvas ref={chartRef} />
    </ChartContainer>
  );
}

export default LineChart;
