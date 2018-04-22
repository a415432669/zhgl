function drawChart1(){
	var chart1 = echarts.init(document.querySelector('.bintu'));

option = {
    backgroundColor: '#ffffff',

    title: {
        text: '',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series : [
        {
            name:'访问来源',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:274, name:'联盟广告'},
                {value:235, name:'视频广告'},
                {value:400, name:'搜索引擎'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#fed857',
//                  shadowBlur: 200,
//                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};

        // 使用刚指定的配置项和数据显示图表。
        chart1.setOption(option);
}

        
        
function drawChart2(){
	var chart2 = echarts.init(document.querySelector('.t2'));


option2 = {
	title:{text:'85%',left:'center',top:'center'},
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    backgroundColor:'#ffffff',
    color:['#fed857','#ff0000'],
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'直接访问'},
                {value:90, name:'邮件营销'},
            ]
        }
    ]
};

  
  
  chart2.setOption(option2)
}
  
  
function drawChart3(){
	//统计实名制执行等级
var chart3 = echarts.init(document.querySelector('#xmsmzzxdj'))

var option3 = {
    title : {
//      text: '同名数量统计',
//      subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 80,
        bottom: 20,
        data: [{
        	value:65,
        	name:'优秀'
        },{
        	value:20,
        	name:'良'
        },{
        	value:15,
        	name:'差'
        }],
        formatter: "{name}"

        
    },
    series : [
        {
            name: '项目',
            type: 'pie',
            radius : '55%',
            center: ['40%', '50%'],
            data: [{
	        	value:65,
	        	name:'优秀',
	        	
	        },{
	        	value:20,
	        	name:'良'
	        },{
	        	value:15,
	        	name:'差'
	        }],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            label:{
            	formatter: "{b}:{c}个{a}\n占比:{d}%"
            }
        }
    ],
    color:['#FFD857','#AAC6CA','#F54F4F']
};


chart3.setOption(option3)
}




function drawChart4(){
	//项目异动
var chart4 = echarts.init(document.querySelector('#xmyd'))

var option4 = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['无人员', '无考勤', '无工资发放'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'项目异动',
            type:'bar',
            barWidth: '60%',
            data:[5, 3, 1],
            label:{
            	formatter: "{b}:{c}个{a}\n占比:{d}%"
            }
        }
    ]
};


chart4.setOption(option4)
}




//来源分布
function randomValue() {
    return Math.round(Math.random()*3000);
}
function drawChart5(){
	var chart5 = echarts.init(document.querySelector('#lyfb'))




var option5 = option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a}:{b}:{c}人'
    },
//  legend: {
//      type: 'scroll',
//      orient: 'vertical',
//      right: 10,
//      top: 80,
//      bottom: 20,
//      data:['1000-3000人','800-1000人','0-200人']
//  },
    visualMap: {
    	type:'piecewise',
        min: 0,
        max: 3000,
        right:40,
        top: 'center',
        pieces:[
        {min:1000,max:3000},
        {min:800,max:1000},
        {min:600,max:800},
        {min:400,max:600},
        {min:200,max:400},
        {min:0,max:200}
        ],
        inRange:{
        	color:['#8CE2F0','#28909A']
        },
        formatter:'{value}-{value2}人'
    },
    series: [
        {
            name: '来源分布',
            type: 'map',
            mapType: 'china',
            data:[
                {name: '北京', value: randomValue()},
                {name: '天津', value: randomValue()},
                {name: '上海', value: randomValue()},
                {name: '重庆', value: randomValue()},
                {name: '河北', value: randomValue()},
                {name: '河南', value: randomValue()},
                {name: '云南', value: randomValue()},
                {name: '辽宁', value: randomValue()},
                {name: '黑龙江', value: randomValue()},
                {name: '湖南', value: randomValue()},
                {name: '安徽', value: randomValue()},
                {name: '山东', value: randomValue()},
                {name: '新疆', value: randomValue()},
                {name: '江苏', value: randomValue()},
                {name: '浙江', value: randomValue()},
                {name: '江西', value: randomValue()},
                {name: '湖北', value: randomValue()},
                {name: '广西', value: randomValue()},
                {name: '甘肃', value: randomValue()},
                {name: '山西', value: randomValue()},
                {name: '内蒙古', value: randomValue()},
                {name: '陕西', value: randomValue()},
                {name: '吉林', value: randomValue()},
                {name: '福建', value: randomValue()},
                {name: '贵州', value: randomValue()},
                {name: '广东', value: randomValue()},
                {name: '青海', value: randomValue()},
                {name: '西藏', value: randomValue()},
                {name: '四川', value: randomValue()},
                {name: '宁夏', value: randomValue()},
                {name: '海南', value: randomValue()},
                {name: '台湾', value: randomValue()},
                {name: '香港', value: randomValue()},
                {name: '澳门', value: randomValue()}
            ],
            left:50
        }
    ],
};
	
	chart5.setOption(option5)
}


function drawChart6(){
	var chart6 = echarts.init(document.querySelector('#xlfb'))
	var option6 =  {
    
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'right',
        top:'center',
        data: ['硕士研究生及以上','大学本科','大学专科','中等职业教育','高中','初中及以下']
    },
    series : [
        {
            name: '学历分布',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'硕士研究生及以上'},
                {value:310, name:'大学本科'},
                {value:234, name:'大学专科'},
                {value:135, name:'中等职业教育'},
                {value:1548, name:'高中'},
                {value:205,name:'初中及以下'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            label:{
            	formatter: "人数:{c}个\n占比:{d}%"
            },
            center:['40%','55%']
        }
    ],
    
};
	
	chart6.setOption(option6)
	
}

  
  
  
  
  