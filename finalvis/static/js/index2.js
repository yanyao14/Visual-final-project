$(function () {
    echart_2();
    function echart_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_2'));  
     
        myChart.setOption({
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '1%',
                right: '50%',
                top: '10%',
                bottom: '10%',
                containLabel: true,
            },
            xAxis: {
                type: 'value',
                position:'top',
                splitLine: {show: false},
                boundaryGap: [0, 0.01],
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#9ea7c4',
                        fontSize: 12
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#6173A3'
                    }
                },
            },
            yAxis: {
                type: 'category',
             
                data: ['<6分','6~7分','7~8分','8~9分','9~10分'],
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#9ea7c4',
                        fontSize: 12
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#6173A3'
                    }
                },
            },
            series: [
                {
                name: '分数段电影数量：',
                itemStyle: {
                    normal: {
                        color: function(params) {
                            // build a color map as your need.
                            var colorList = [
                                '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                                '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                                '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                            ];
                            return colorList[params.dataIndex]
                        },
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                type: 'bar',
                data: [7072,27273,79582,32927,9206]//共156060
            },{
                type: 'pie',
                radius: [20, '55%'],
                center: ['75%', '50%'],
                roseType: 'radius',
                color: [ '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'],
                data: [{
                    value: 4.5,
                    name: '<6分'
                }, {
                    value: 17.5,
                    name: '6~7分'
                }, {
                    value: 68.5,
                    name: '7~8分'
                }, {
                    value: 21.1,
                    name: '8~9分'
                }, {
                    value: 5.9,
                    name: '9~10分'
                }],
                label: {
                    normal: {
                        textStyle: {
                            fontSize: 13
                        },
                        formatter: function(param) {
                            return param.name + '\n' + Math.round(param.percent) + '%';
                        }
                    }
                },
                labelLine: {
                    normal: {
                        smooth: true,
                        lineStyle: {
                            width: 2
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 20,
                        shadowColor: 'rgba(0, 0, 0, 0.4)'
                    }
                },
       
                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function(idx) {
                    return Math.random() * 200;
                }
            }]
        });
    }

});