import Chart from "react-apexcharts";

const BarChart = () => {
  let state = {
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
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
        data: [30, 40, 45, 50, 49, 60, 70, 91]
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