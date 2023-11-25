//加载电影详情
function loadMovieTypeTimeDetail(data) {
	var maxOrder = Math.max.apply(null, data.totalprice);
	var maxOrder1 = Math.max.apply(null, data.maxprice);
	var option = {
		title: { text: '', subtext: '', top: '3', right: '0' },
		tooltip: {
			trigger: 'axis'
		},
		grid: { left: '13%', right: '14%', bottom: '10%' },
		xAxis: {
			type: 'category',
			//name: '年份',
			axisLine: { lineStyle: { color: '#57617B' } },
			axisLabel: { interval: 0, textStyle: { color: '#fff', } },
			data: data.year
		},
		yAxis: [

			{//柱状图
				type: 'value', name: '单部票房（单位：万元）', min: 0, max: maxOrder1 + parseInt(maxOrder1 * 0.2),
				axisLine: { lineStyle: { color: '#57617B' } },
				axisLabel: { margin: 5, textStyle: { fontSize: 12 }, textStyle: { color: '#fff' }, formatter: '{value}万元' },
				splitLine: {
					show: true,
					lineStyle: {
						type: 'dashed',
						color: ['#25CEF3']
					}
				}
			},
			{//折线图
				type: 'value', name: '总票房（单位：万元）', min: 0, max: maxOrder + parseInt(maxOrder * 0.2),
				axisLine: { lineStyle: { color: '#57617B' } },
				axisLabel: { margin: 5, textStyle: { fontSize: 12 }, textStyle: { color: '#fff' }, formatter: '{value}万元' },
				splitLine: { show: false }
			}


		],
		series: [
			{
				name: '总票房（单位：万元）',
				type: 'bar',
				barWidth: 12,
				yAxisIndex: 1,
				itemStyle: {
					normal: {
						barBorderRadius: [10, 10, 0, 0],
						color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
							offset: 0,
							color: "#00BFFF"
						}, {
							offset: 0.8,
							color: "#E0FFFF"
						}], false),
						shadowColor: 'rgba(0, 0, 0, 0.1)',
					}
				},
				data: data.totalprice
			},
			{
				name: '单部最高票房（单位：万元）',
				type: 'line',
				yAxisIndex: 0,
				smooth: false,
				symbolSize: 5,
				lineStyle: { normal: { width: 2 } },
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{//层叠样式
							offset: 0,
							color: 'rgba(230, 48, 123, 0.8)'
						},
						{
							offset: 0.8,
							color: 'rgba(230, 48, 123, 0)'
						}], false),
						shadowColor: 'rgba(0, 0, 0, 0.1)',
						shadowBlur: 10
					}
				},
				itemStyle: { normal: { color: '#DA2F78' } },
				data: data.maxprice
			},
			{
				name: '单部最低票房（单位：万元）',
				type: 'line',
				yAxisIndex: 0,
				smooth: false,
				symbolSize: 5,

				lineStyle: { normal: { width: 2 } },
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0.8,
							color: 'rgba(123, 48,230,0.8 )'
						}, {
							offset: 0,
							color: 'rgba(123, 48,230,0)'
						}], false),
						shadowColor: 'rgba(0, 0, 0, 0.1)',
						shadowBlur: 10
					}
				},
				itemStyle: { normal: { color: '#0a2fda' } },
				data: data.minprice
			}

		]
	};
	var myChart = echarts.init(document.getElementById('movie-type-time-detial'));
	myChart.clear();
	if (data.totalprice.length > 0) {
		myChart.setOption(option);
	} else {
		noDataTip($("#movie-type-time-detial"));
	}
}
//初始化基础信息
function initBaseInfo() {
	//初始化日期
	var dataDate = "2023年11月24日";
	$("#td-data-date").text(dataDate);
}


//初始化页面
function loadPageData() {
	//引入movie_data.js缓存假数据
	if (data.code == 0) {
		//近十年的国产电影票房详情
		loadMovieTypeTimeDetail(data.movieTypeAnalysis);
	}
}
$(function () {
	//加载基础信息
	initBaseInfo();
	//加载页面数据
	loadPageData();
})