function drawChart7(){
	//考勤情况
	var chart = echarts.init(document.querySelector('#kqqk'))
	var option = {
    
    
    legend: {
        data:['在职人数','考勤人数']
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: ['4-9','4-10','4-11','4-12','4-13','4-14','4-15']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} 人'
        }
    },
    series: [
        {
            name:'在职人数',
            type:'line',
            data:[320,277,215,283,310,250,290],
            
        },
        {
            name:'考勤人数',
            type:'line',
            data:[280, 250,190,260,300,220,280],
            
        }
    ]
};

	
	chart.setOption(option)
	
}

function drawChart8(){
	//人员类型分布
	var chart = echarts.init(document.querySelector('#rylx'))
	var option =  {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'right',
        top:'center',
        data:['管理人员','特种作业人员','普通人员']
    },
    series: [
        {
            name:'人员类型',
            type:'pie',
            radius: ['30%', '70%'],
            
            label: {
                formatter: "离职人数:{c}个\n占比:{d}%"
            },
            data:[
                {value:335, name:'管理人员'},
                {value:310, name:'特种作业人员'},
                {value:234, name:'普通人员'},
            ],
            center:['40%','50%']
        }
    ],
    color:['#28909A','#F54F4F','#FED857','#ABC6CA','#F8B7B7','#FCE592']
};

	
	chart.setOption(option)
}



function drawChart9(){
	//劳务工分布趋势
	var chart = echarts.init(document.querySelector('#lwgfbqs'))
	var option = {
   
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:['60后','70后','80后','90后','00后']
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
            boundaryGap : false,
            data : ['2010','2012','2014','2016','2018']
        }
    ],
    yAxis : [
        {
            type: 'value',
	        axisLabel: {
	            formatter: '{value} 人'
	        }
        }
    ],
    series : [
        {
            name:'60后',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[800, 1200, 900, 500,700, 1000, 600]
        },
        {
            name:'70后',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[600, 800, 1000, 700, 900, 1200, 700]
        },
        {
            name:'80后',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[1250, 932, 701, 1154, 890, 730, 1110]
        },
        {
            name:'90后',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[320, 432, 501, 634, 790, 930, 1320]
        },
        {
            name:'00后',
            type:'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {normal: {}},
            data:[0, 0, 0, 200, 300, 530, 320]
        }
    ]
};


	
	chart.setOption(option)
}




function drawChart10(){
	//人员类型分布
	var chart = echarts.init(document.querySelector('#gzffqk'))
	var option =  {
//  tooltip : {
//      formatter: "{a} <br/>{b} : {c}%"
//  },
//  toolbox: {
//      feature: {
//          restore: {},
//          saveAsImage: {}
//      }
//  },
    series: [
        {
        	title:'实发工资',
            name: '实发工资',
            type: 'gauge',
            detail: {
            	formatter:'{value}万元',
            	fontSize:16
            },
            data: [{value: 60.54}],
            min:0,
            max:220,
            splitNumber: 11,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 10
                }
            },
            splitLine: {           // 分隔线
                length: 5,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            center:['25%','50%']
        },
        {
            name: '应发工资',
            title: {
            	text:'应发工资',
            	show:true
            },
            type: 'gauge',
            detail: {
            	formatter:'{value}万元',
            	fontSize:16
            },
            data: [{value: 194.54}],
            min:0,
            max:220,
            splitNumber: 11,
            axisLine:{
            	lineStyle: {       // 属性lineStyle控制线条样式
                    width: 10
                }
            },
            splitLine: {           // 分隔线
                length: 5,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            center:['75%','50%']
        }
    ],
    animationDuration:4000
};

	
	chart.setOption(option)
}




function drawChart11(){
	//项目分布趋势
	var chart = echarts.init(document.querySelector('#xmfbqs'))
	app.title = '多 Y 轴示例';

var colors = ['#5793f3', '#d14a61', '#675bba'];

option = {
    color: colors,

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
//  grid: {
//      right: '30%'
//  },
    
    legend: {
        data:['市政','房建','其他','延时项目总数','按时项目总数']
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            data: ['2010','2011','2012','2013','2014','2015','2016','2017']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '项目总数',
            min: 0,
            max: 250,
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: colors[0]
                }
            },
            axisLabel: {
                formatter: '{value} '
            }
        }
    ],
    series: [
        {
            name:'房建',
            type:'bar',
            data:[20, 49, 70, 232, 25, 76.7, 135.6, 162.2]
        },
        {
            name:'市政',
            type:'bar',
            
            data:[26, 59, 90, 26.4, 28.7, 70.7, 175.6, 182.2]
        },
        {
            name:'其他',
            type:'bar',
           
            data:[20, 22, 33, 45, 63, 102, 203, 234]
        },
        {
            name:'按时项目总数',
            type:'line',
            
            data:[20, 22, 33, 45, 63, 102, 203, 234]
        },
        {
            name:'延时项目总数',
            type:'line',
            
            data:[120, 122, 133, 145, 63, 102, 20, 134]
        }
        
    ]
};


	
	chart.setOption(option)
}




function drawChart12(){
	//考勤情况
	var chart = echarts.init(document.querySelector('#pjgzzs'))
	var option = {
    
    
    legend: {
        data:['特种作业人员','电工','小工','木工','铁工','泥工']
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: ['2010','2011','2012','2013','2014','2015','2016','2017']
    },
    yAxis: {
        type: 'value',
        name:'薪资待遇',
        axisLabel: {
            formatter: '{value}'
        }
    },
    series: [
        {
            name:'特种作业人员',
            type:'line',
            data:[1120, 2049, 3070, 4232, 5625, 8776.7, 11135.6, 9162.2]
        },
        {
            name:'电工',
            type:'line',
            
            data:[2226, 5559, 6960, 7826.4, 7728.7, 8770.7, 7175.6, 8182.2]
        },
        {
            name:'小工',
            type:'line',
           
            data:[3320, 2222, 4433, 5545, 6563, 6102, 7203, 8234]
        },
        {
            name:'木工',
            type:'line',
            
            data:[2720, 4422, 5533, 8845, 8963, 9102, 11203, 9234]
        },
        {
            name:'铁工',
            type:'line',
            
            data:[6120, 3122, 5633, 7145, 8863, 9102, 8820, 6134]
        },
        {
            name:'泥工',
            type:'line',
            
            data:[4120, 6122, 7133, 9145, 10663, 11102, 11120, 11134]
        }
        
    ]
};

	
	chart.setOption(option)
	
}











