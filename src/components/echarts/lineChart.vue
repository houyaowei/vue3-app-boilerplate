<template>
  <div id="customerChart" style="width: 100%; height: 300px"></div>
</template>

<script setup>
import { onMounted } from "vue";
import * as echarts from "echarts";

onMounted(() => {
  init();
});
function init() {
  let myChart = echarts.init(document.getElementById("customerChart"));
  // 绘制图表
  myChart.setOption({
    title: { text: "总用户量" },
    tooltip: {},
    xAxis: {
      data: ["12-3", "12-4", "12-5", "12-6", "12-7", "12-8"],
    },
    yAxis: {},
    series: [
      {
        name: "用户量",
        type: "line",
        data: [5, 20, 36, 10, 10, 20],
        areaStyle: {
          color: {
            colorStops: [
              // 渐变颜色
              {
                offset: 0.4,
                color: "#BEDBFD",
              },
              {
                offset: 1,
                color: "#FFF",
              },
            ]
          },
        },
      },
    ],
  });
  window.onresize = function () {
    //自适应大小
    myChart.resize();
  };
}
</script>
