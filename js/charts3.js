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

setTimeout(function(){
	
	(function(){
		var img = new Image()
		var img2 = new Image()
		var img3 = new Image()
		img.src = 'img/content/xia.png'
		img2.src = 'img/content/right.png'
		img3.src = 'img/content/shang.png'
		var canvas1 = document.getElementById('canvas1')
		var cxt1 = canvas1.getContext('2d')
		var canvas2 = document.getElementById('canvas2')
		var cxt2 = canvas2.getContext('2d')
		
//		img.onload = function(){
//			img2.onload = function(){
				img3.onload = function(){
					console.log(canvas2)
					drawArc(cxt1,100,0,2*Math.PI,'#aacbca',img)
					drawArc(cxt1,82,0,3*Math.PI/2,'#557874',img)
					drawArc(cxt1,64,0,5*Math.PI/4,'#ffd857',img)
					drawArc(cxt1,46,0,4*Math.PI/4,'#e73451',img2)
					drawFont(cxt1,"已发工资",-28,-10,12)
					drawFont(cxt1,"76",-15,16,24)
					drawArc2(cxt2,100,0,-Math.PI/8*3,'#ffd857',img3)
					drawArc2(cxt2,64,0,-Math.PI/8*7,'#557874',img3)
					cxt2.save()
					cxt2.translate(150,125)
					cxt2.beginPath()
					cxt2.arc(0,0,40,0,2*Math.PI)
					cxt2.fillStyle = '#aacbca'
					cxt2.fill()
					cxt2.closePath()
					cxt2.restore()
					drawFont(cxt2,"管理人员",-24,-8,12)
					drawFont(cxt2,"888人",-26,16,20)
					drawFont(cxt2,"考勤人数200人",-100,-80,12)
					drawFont(cxt2,"在岗人数200人",60,-80,12)
					
					
					
					cxt2.save()
					cxt2.translate(150,125)
					cxt2.beginPath()
					cxt2.moveTo(-70,-80)
					cxt2.lineTo(-40,-50)
					cxt2.strokeStyle = '#000'
					cxt2.lineWidth = 1
					cxt2.stroke()
					cxt2.closePath()
					cxt2.restore()
					
					
					cxt2.save()
					cxt2.translate(150,125)
					cxt2.beginPath()
					cxt2.moveTo(90,-80)
					cxt2.lineTo(77,-60)
					cxt2.strokeStyle = '#000'
					cxt2.lineWidth = 1
					cxt2.stroke()
					cxt2.closePath()
					cxt2.restore()
					
				}
				
//				
//			}
//		}
			
		function drawArc(cxt,r,startDeg,endStartDeg,color,img){
			
			cxt.save()
//			cxt.beginPath()
//			cxt.rect(0,0,300,250)
//			cxt.fill()
//			cxt.closePath()
			
			
			cxt.translate(150,125)
			cxt.rotate(-Math.PI/2)
			cxt.save()
			cxt.beginPath()
			cxt.arc(0,0,r,startDeg,endStartDeg)
			cxt.lineWidth = 18
			cxt.lineCap = 'round'
			cxt.strokeStyle = color
			cxt.stroke()
			cxt.closePath()
			
			cxt.beginPath()
			cxt.drawImage(img,r-10,-5,18,18)
			cxt.closePath()
			cxt.restore()
			cxt.restore()
		}
		
		function drawFont(cxt,content,x,y,size){
			
			cxt.save()
			cxt.translate(150,125)
			cxt.save()
			cxt.beginPath()
			cxt.font=size+"px Arial";
			cxt.fillText(content,x,y);
			cxt.closePath()
			cxt.restore()
			cxt.restore()
		}
		
		
		function drawArc2(cxt,r,startDeg,endStartDeg,color,img){
			
			cxt.save()
//			cxt.beginPath()
//			cxt.rect(0,0,300,250)
//			cxt.fill()
//			cxt.closePath()
			
			
			cxt.translate(150,125)
			cxt.save()
			cxt.beginPath()
			cxt.arc(0,0,r,startDeg,endStartDeg,true)
			cxt.lineWidth = 18
			cxt.lineCap = 'round'
			cxt.strokeStyle = color
			cxt.stroke()
			cxt.closePath()
			
			cxt.beginPath()
			cxt.drawImage(img,r-10,-15,18,18)
			cxt.closePath()
			cxt.restore()
			cxt.restore()
		}
	
})()
	
},50)
