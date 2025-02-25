import Chart from "react-apexcharts";

const BarChart = () => {
  let state = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      theme: {
        monochrome: {
          enabled: true,
          color: '#F98118',
          shadeTo: 'light',
          shadeIntensity: 0.65
        }
      }
    },
    series: [
      {
        name: "January (Week 1)",
        data: [30, 40, 45, 50, 49, 60, 70]
      }
    ]
  }
  return (
    <Chart
      options={state.options}
      series={state.series}
      type="bar"
      height="400"
      className="w-auto"
    />
  );
}

export default BarChart;