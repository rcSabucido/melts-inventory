import Chart from "react-apexcharts";

const BarChart = () => {
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
    <div class="p-8 pt-0">
      <div class="border border-solid border-orange-400/40 border-2 rounded-md">
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

export default BarChart;