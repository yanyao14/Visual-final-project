var recommend = echarts.init(document.getElementById("recommend"));
option = {
  dataset: {
    source: [
      ['name', '评分', '上映时间', '类型', 'a'],
      ['高山下的花环', 9.5, 1984, '剧情 战争', 1],
      ['辛德勒的名单', 9.5, 1993, '剧情 历史 战争', 1],
      ['美丽人生', 9.5, 1997, '剧情 喜剧 爱情 战争', 1],
      ['阿甘正传', 9.5, 1994, '剧情 爱情', 1],
      ['泰坦尼克号', 9.5, 1997, '剧情 爱情 灾难', 1],
      ['初步举证', 9.6, 2022, '剧情', 1],
      ['茶馆', 9.6, 1982, '剧情 历史', 1],
      ['控方证人', 9.6, 1957, '剧情 悬疑 犯罪', 1],
      ['霸王别姬', 9.6, 1993, '剧情 爱情 同性', 1],
      ['肖申克的救赎', 9.7, 1994, '剧情 犯罪', 1]
    ]
  },
  grid: {
    top: '1%',
    bottom: '20%',
    left: '1%',
    right: '30%'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  yAxis: [
    {
      type: 'category',
      show: false,
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  xAxis: [
    {
      type: 'value',
      show: false
    }
  ],
  series: [
    {
      type: 'bar',
      barWidth: '80%',
      label: {
        show: true,
        formatter: '{b}',
        fontSize: 15,
        color: 'rgba(255, 255, 255, 1)'
      },
      encode: {
        tooltip: [1, 2, 3],
        x: 'a',
        y: 'name'
      },
      itemStyle: {
        color: "rgba(52, 177, 255, 1)",
        borderRadius: [6, 6, 6, 6]
      }
    }
  ]
};
recommend.setOption(option);