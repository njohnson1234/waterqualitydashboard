window.feed = function (callback) {
  var tick = {};
  tick.plot0 = Math.ceil(0 + Math.random() * 1000000);
  callback(JSON.stringify(tick));
};

var myConfig = {
  type: "gauge",
  globals: {
    fontSize: 15,
    backgroundColor: "#F2EFED",
  },
  plotarea: {
    marginTop:50,
  },
  plot: {
    size: "100%",
    valueBox: {
      placement: "center",
      //text: "pH",
      fontSize: 30,
      backgroundColor: "#EDEDED",
    },
  },
  tooltip: {
    //borderRadius: 5,
  },
  scaleR: {
    aperture: 180,
    minValue: 0,
    maxValue: 14,
    step: 1,
    center: {
      visible: false,
    },
    tick: {
      visible: false,
    },
    item: {
      offsetR: 0,
      rules: [
        {
          rule: "%i == 9",
          offsetX: 15,
        },
      ],
    },
    labels: ["0", "1", "2", "3", "4"],
    ring: {
      size: 20,
      rules: [
        {
          rule: "%v < 2",
          backgroundColor: "red",
        },
        {
          rule: "%v >= 2 && %v < 5",
          backgroundColor: "yellow",
        },
        {
          rule: "%v >= 5 && %v < 9",
          backgroundColor: "green",
        },
        {
          rule: "%v >= 9 && %v < 12",
          backgroundColor: "yellow",
        },
        {
          rule: "%v >= 12",
          backgroundColor: "red",
        },
      ],
    },
  },
  // refresh: {
  //   type: "feed",
  //   transport: "js",
  //   url: "feed()",
  //   interval: 1500,
  //   resetTimeout: 1000,
  // },
  series: [
    {
      values: [7.2], // starting value
      backgroundColor: "black",
      indicator: [6, 5, 5, 5, 0.75],
      animation: {
        effect: 2,
        method: 1,
        sequence: 4,
        speed: 5,
      },
    },
  ],
};

zingchart.render({
  id: "myChart",
  data: myConfig,
  height: 200,
  width: 220,
});

var myConfig2 = {
  type: "gauge",
  globals: {
    fontSize: 15,
    backgroundColor: "#F2EFED",
  },
  plotarea: {
    marginTop:50,
  },
  plot: {
    size: "100%",
    valueBox: {
      placement: "center",
      //text: "pH",
      fontSize: 30,
      backgroundColor: "#EDEDED",
    },
  },
  tooltip: {
    //borderRadius: 5,
  },
  scaleR: {
    aperture: 180,
    minValue: 0,
    maxValue: 14,
    step: 1,
    center: {
      visible: false,
    },
    tick: {
      visible: false,
    },
    item: {
      offsetR: 0,
      rules: [
        {
          rule: "%i == 9",
          offsetX: 15,
        },
      ],
    },
    labels: ["-5", "-3", "-1", "1", "3"],
    ring: {
      size: 20,
      rules: [
        {
          rule: "%v < 2",
          backgroundColor: "red",
        },
        {
          rule: "%v >= 2 && %v < 5",
          backgroundColor: "yellow",
        },
        {
          rule: "%v >= 5 && %v < 9",
          backgroundColor: "green",
        },
        {
          rule: "%v >= 9 && %v < 12",
          backgroundColor: "yellow",
        },
        {
          rule: "%v >= 12",
          backgroundColor: "red",
        },
      ],
    },
  },
  // refresh: {
  //   type: "feed",
  //   transport: "js",
  //   url: "feed()",
  //   interval: 1500,
  //   resetTimeout: 1000,
  // },
  series: [
    {
      values: [6], // starting value
      backgroundColor: "black",
      indicator: [6, 5, 5, 5, 0.75],
      animation: {
        effect: 2,
        method: 1,
        sequence: 4,
        speed: 5,
      },
    },
  ],
};

zingchart.render({
  id: "myChart2",
  data: myConfig2,
  height: 200,
  width: 220,
});

var myConfig3 = {
  type: "gauge",
  globals: {
    fontSize: 15,
    backgroundColor: "#F2EFED",
  },
  plotarea: {
    marginTop:50,
    width: "200",
  },
  plot: {
    size: "100%",
    valueBox: {
      placement: "center",
      //text: "pH",
      fontSize: 30,
      backgroundColor: "#EDEDED",
    },
  },
  tooltip: {
    //borderRadius: 5,
  },
  scaleR: {
    aperture: 180,
    minValue: 0,
    maxValue: 10,
    step: 1,
    center: {
      visible: false,
    },
    tick: {
      visible: false,
    },
    item: {
      offsetR: 0,
      rules: [
        {
          rule: "%i == 9",
          offsetX: 15,
        },
      ],
    },
    labels: ["0", "1", "2", "3", "4"],
    ring: {
      size: 20,
      rules: [
        {
          rule: "%v < 2",
          backgroundColor: "red",
        },
        {
          rule: "%v >= 2 && %v < 4",
          backgroundColor: "yellow",
        },
        {
          rule: "%v >= 4 && %v < 6",
          backgroundColor: "green",
        },
        {
          rule: "%v >= 6 && %v < 8",
          backgroundColor: "yellow",
        },
        {
          rule: "%v >= 8",
          backgroundColor: "red",
        },
      ],
    },
  },
  // refresh: {
  //   type: "feed",
  //   transport: "js",
  //   url: "feed()",
  //   interval: 1500,
  //   resetTimeout: 1000,
  // },
  series: [
    {
      values: [4], // starting value
      backgroundColor: "black",
      indicator: [6, 5, 5, 5, 0.75],
      animation: {
        effect: 2,
        method: 1,
        sequence: 4,
        speed: 5,
      },
    },
  ],
};

zingchart.render({
  id: "myChart3",
  data: myConfig3,
  height: 200,
  width: 220,
});