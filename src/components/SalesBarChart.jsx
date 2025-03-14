import Chart from "react-apexcharts";

const SalesBarChart = ({data}) => {
  let state = {
    options: {
      plotOptions: {
        bar: {
          columnWidth: '50%'
        }
      },
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
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
        name: "Items sold",
        data: data
      }
    ]
  }
  return (
    <div className="p-8 pt-0">
      <div className="border border-solid border-orange-400/40 border-2 rounded-md">
        <Chart
          options={state.options}
          series={state.series}
          type="bar"
          height="240"
          className="w-auto"
        />
      </div>
    </div>
  );
}

export default SalesBarChart;