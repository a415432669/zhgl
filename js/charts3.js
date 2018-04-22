function mainChart1(){
	var chart = echarts.init(document.querySelector('#dtyl'))
	
option = {
    color: ['#3398DB'],
    title:{
    	text:'管理人员动态一览',
    	left:'center'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
//  grid: {
//      left: '3%',
//      right: '4%',
//      bottom: '3%',
//      containLabel: true
//  },
    xAxis : [
        {
            type : 'category',
            data : ['考勤人数','在岗人数','管理人员'],
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
            name:'管理人员动态一览',
            type:'bar',
            barWidth: '60%',
            data:[321,290,356]
        }
    ]
};


	
	chart.setOption(option)
}


function mainChart2(){
	var chart = echarts.init(document.querySelector('#qkyl'))
	
option = {
    color: ['#3398DB'],
    title:{
    	text:'项目情况预览',
    	left:'center'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
//  grid: {
//      left: '3%',
//      right: '4%',
//      bottom: '3%',
//      containLabel: true
//  },
    xAxis : [
        {
            type : 'category',
            data : ['已发工资','未发工资'],
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
            name:'管理人员动态一览',
            type:'bar',
            barWidth: '60%',
            data:[321,290]
        }
    ]
};


	
	chart.setOption(option)
}
