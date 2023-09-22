import axios from "axios";
import url from "../../../pages/host"


var diagrama=[]
axios.get(`${url}/api/product`).then(res=>{
for (let i = 0; i < 12; i++) {
  diagrama.push(0)
  for (let j = 0; j < res.data.length; j++) {
    if (res.data[j].time_create.slice(5,7)==`${i}`.padStart(2,'0')) {
      var a=res.data[j]?1:0
      diagrama[i]=diagrama[i]+a*1
    }
  }
}
})

var diagrama1=[]
axios.get(`${url}/auth/users`).then(res=>{
const Filter=res.data.filter(item=>item.position_id==3)
for (let i = 0; i < 12; i++) {
  diagrama1.push(0)
  for (let j = 0; j < Filter.length; j++) {
    if (Filter[j].time_create.slice(5,7)==`${i}`.padStart(2,'0')) {
      var a=Filter[j]?1:0
      diagrama1[i]=diagrama1[i]+a*1
    }
  }
}
})



const lineChart = {
  series: [
    {
      name: "Sold products",
      data: diagrama,
      offsetY: 0,
    },
    {
      name: "How many drivers have been added",
      data: diagrama1,
      offsetY: 0,
    },
  ],

  options: {
    chart: {
      width: "100%",
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },

    legend: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },

    yaxis: {
      labels: {
        style: {
          fontSize: "14px",
          fontWeight: 600,
          colors: ["#8c8c8c"],
        },
      },
    },

    xaxis: {
      labels: {
        style: {
          fontSize: "14px",
          fontWeight: 600,
          colors: [
            "#8c8c8c",
            "#8c8c8c",
            "#8c8c8c",
            "#8c8c8c",
            "#8c8c8c",
            "#8c8c8c",
            "#8c8c8c",
            "#8c8c8c",
            "#8c8c8c",
            "#8c8c8c",
            "#8c8c8c",
            "#8c8c8c",
          ],
        },
      },
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "Jan",
      ],
    },

    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
  },
};

export default lineChart;
