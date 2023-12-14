
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
            name: '电影类型',
            type: 'pie',
            radius : '65%',
            center: ['50%', '55%'],
            data:[
                {value:13, name:'   恐怖'},
                {value:182, name:'  动作'},
                {value:63, name:'   冒险'},
                {value:83, name:'   动画'},
                {value:87, name:'   传记'},
                {value:156, name:'  喜剧'},
                {value:112, name:'  犯罪'},
                {value:285, name:'  戏剧'}, 
                {value:1, name:'    家庭'},
                {value:2, name:'    黑色'},
                {value:1, name:'    惊悚'}, 
                {value:9, name:'    悬疑'},  
                {value:2, name:'    奇幻'},
                {value:4, name:'    西方'}
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

