export const barChartDataDashboard = [
  {
    name: "Sales",
    data: [330, 250, 110, 300, 490, 350, 270, 130, 425],
  },
];

export const barChartOptionsDashboard = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "10px",
      fontFamily: "Plus Jakarta Display",
    },
    onDatasetHover: {
      style: {
        fontSize: "10px",
        fontFamily: "Plus Jakarta Display",
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    show: false,
    labels: {
      show: false,
      style: {
        colors: "#fff",
        fontSize: "10px",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: true,
    color: "#fff",
    labels: {
      show: true,
      style: {
        colors: "#fff",
        fontSize: "10px",
        fontFamily: "Plus Jakarta Display",
      },
    },
  },
  grid: {
    show: false,
  },
  fill: {
    colors: "#fff",
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 8,
      columnWidth: "12px",
    },
  },
  responsive: [
    {
      breakpoint: 768,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,
          },
        },
      },
    },
  ],
};

// Helper function to create dates for the current year
const getMonthDates = () => {
  const year = new Date().getFullYear();
  return Array.from({ length: 12 }, (_, i) => new Date(year, i, 1));
};

export const lineChartDataDashboard = [
  {
    name: "Mobile apps",
    data: [
      [new Date(2024, 0, 1).getTime(), 500],
      [new Date(2024, 1, 1).getTime(), 250],
      [new Date(2024, 2, 1).getTime(), 300],
      [new Date(2024, 3, 1).getTime(), 220],
      [new Date(2024, 4, 1).getTime(), 500],
      [new Date(2024, 5, 1).getTime(), 250],
      [new Date(2024, 6, 1).getTime(), 300],
      [new Date(2024, 7, 1).getTime(), 230],
      [new Date(2024, 8, 1).getTime(), 300],
      [new Date(2024, 9, 1).getTime(), 350],
      [new Date(2024, 10, 1).getTime(), 250],
      [new Date(2024, 11, 1).getTime(), 400]
    ]
  },
  {
    name: "Websites",
    data: [
      [new Date(2024, 0, 1).getTime(), 200],
      [new Date(2024, 1, 1).getTime(), 230],
      [new Date(2024, 2, 1).getTime(), 300],
      [new Date(2024, 3, 1).getTime(), 350],
      [new Date(2024, 4, 1).getTime(), 370],
      [new Date(2024, 5, 1).getTime(), 420],
      [new Date(2024, 6, 1).getTime(), 550],
      [new Date(2024, 7, 1).getTime(), 350],
      [new Date(2024, 8, 1).getTime(), 400],
      [new Date(2024, 9, 1).getTime(), 500],
      [new Date(2024, 10, 1).getTime(), 330],
      [new Date(2024, 11, 1).getTime(), 550]
    ]
  }
];

export const lineChartOptionsDashboard = {
  chart: {
    type: "line",
    toolbar: {
      show: false,
    },
    animations: {
      enabled: true,
      easing: 'easeinout',
      speed: 800,
      animateGradually: {
        enabled: true,
        delay: 150
      },
      dynamicAnimation: {
        enabled: true,
        speed: 350
      }
    }
  },
  tooltip: {
    theme: "dark",
    x: {
      format: "MMM dd, yyyy"
    }
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2
  },
  xaxis: {
    type: "datetime",
    labels: {
      style: {
        colors: "#c8cfca",
        fontSize: "10px",
      },
      datetimeFormatter: {
        year: 'yyyy',
        month: 'MMM',
        day: 'dd',
        hour: 'HH:mm'
      }
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    }
  },
  yaxis: {
    labels: {
      style: {
        colors: "#c8cfca",
        fontSize: "10px",
      },
    },
  },
  legend: {
    show: false,
  },
  grid: {
    strokeDashArray: 5,
    borderColor: "#56577A",
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      shadeIntensity: 0,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 0.8,
      opacityTo: 0,
      stops: [],
    },
    colors: ["#0075FF", "#2CD9FF"],
  },
  colors: ["#0075FF", "#2CD9FF"],
};

export const lineChartDataProfile1 = [
  {
    name: "Mobile apps",
    data: [
      [new Date(2024, 0, 1).getTime(), 100],
      [new Date(2024, 1, 1).getTime(), 250],
      [new Date(2024, 2, 1).getTime(), 300],
      [new Date(2024, 3, 1).getTime(), 220],
      [new Date(2024, 4, 1).getTime(), 500],
      [new Date(2024, 5, 1).getTime(), 250],
      [new Date(2024, 6, 1).getTime(), 300],
      [new Date(2024, 7, 1).getTime(), 230],
      [new Date(2024, 8, 1).getTime(), 300],
      [new Date(2024, 9, 1).getTime(), 350],
      [new Date(2024, 10, 1).getTime(), 250],
      [new Date(2024, 11, 1).getTime(), 400]
    ]
  }
];

export const lineChartOptionsProfile1 = {
  chart: {
    type: "line",
    height: "50px",
    toolbar: {
      show: false,
    },
    redrawOnParentResize: true,
  },
  tooltip: {
    theme: "dark",
    x: {
      format: "MMM dd, yyyy"
    }
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2
  },
  xaxis: {
    type: "datetime",
    labels: {
      show: false,
      style: {
        colors: "#c8cfca",
        fontSize: "12px",
      },
      datetimeFormatter: {
        year: 'yyyy',
        month: 'MMM',
        day: 'dd'
      }
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    labels: {
      style: {
        colors: "#c8cfca",
        fontSize: "12px",
      },
    },
  },
  legend: {
    show: false,
  },
  grid: {
    show: false,
    strokeDashArray: 5,
    borderColor: "#56577A",
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      shadeIntensity: 0,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 0.8,
      opacityTo: 0,
      stops: [],
    },
    colors: ["#01B574"],
  },
  colors: ["#01B574"],
};

export const lineChartDataProfile2 = [
  {
    name: "Mobile apps",
    data: [
      [new Date(2024, 0, 1).getTime(), 100],
      [new Date(2024, 1, 1).getTime(), 250],
      [new Date(2024, 2, 1).getTime(), 300],
      [new Date(2024, 3, 1).getTime(), 220],
      [new Date(2024, 4, 1).getTime(), 500],
      [new Date(2024, 5, 1).getTime(), 250],
      [new Date(2024, 6, 1).getTime(), 300],
      [new Date(2024, 7, 1).getTime(), 230],
      [new Date(2024, 8, 1).getTime(), 300],
      [new Date(2024, 9, 1).getTime(), 350],
      [new Date(2024, 10, 1).getTime(), 250],
      [new Date(2024, 11, 1).getTime(), 400]
    ]
  }
];

export const lineChartOptionsProfile2 = {
  chart: {
    type: "line",
    height: "50px",
    toolbar: {
      show: false,
    },
    redrawOnParentResize: true,
  },
  tooltip: {
    theme: "dark",
    x: {
      format: "MMM dd, yyyy"
    }
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2
  },
  xaxis: {
    type: "datetime",
    labels: {
      show: false,
      style: {
        colors: "#c8cfca",
        fontSize: "12px",
      },
      datetimeFormatter: {
        year: 'yyyy',
        month: 'MMM',
        day: 'dd'
      }
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    labels: {
      style: {
        colors: "#c8cfca",
        fontSize: "12px",
      },
    },
  },
  legend: {
    show: false,
  },
  grid: {
    show: false,
    strokeDashArray: 5,
    borderColor: "#56577A",
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      shadeIntensity: 0,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 0.8,
      opacityTo: 0,
      stops: [],
    },
    colors: ["#0075FF"],
  },
  colors: ["#0075FF"],
};
