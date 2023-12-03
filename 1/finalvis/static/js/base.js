
var pie_types =echarts.init(document.getElementById("pie_types"),'infographic'); 
option = {
    title : {
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
	label: {
	     normal: {
	          textStyle: {
	                color: 'red'  // 改变标示文字的颜色
	          }
	     }
	},
    series : [
        {
            name: '电影类型分析',
            type: 'pie',
            radius : '50%',
            center: ['45%', '47%'],
            data:[
                {value:13, name:'Horror'},
                {value:72, name:'Action'},
                {value:52, name:'Adventure'},
                {value:45, name:'Animation'},
                {value:6, name:'Biography'},
                {value:75, name:'Comedy'},
                {value:73, name:'Crime'},
                {value:173, name:'Drama'}, 
                {value:5, name:'War'},
                {value:20, name:'Thriller'}, 
                {value:12, name:'Sci-Fi'},
                {value:14, name:'Romance'},
                {value:44, name:'Mystery'},  
                {value:18, name:'Fantasy'},
                {value:9, name:'History'}
            ],
          
            itemStyle: {
                emphasis: {
                    shadowBlur: 4,
                    shadowOffsetX: 0, 
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
            
        }
    ]
};
pie_types.setOption(option);

