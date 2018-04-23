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

window.onload = function(){
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
					var all = 0
					var c1 = 0
					var c2 = 0
					var c3 = 0
					var c4 = 0
					var c5 = 0
					var c6 = 0
					var listAll = [100,80,60,40,21,45]
					

					var timer = setInterval(function(){
						console.log(listAll)
						console.log(c1,c2,c3,c4,c5,c6)
						if(c1<=listAll[0]&&c1 !== listAll[0]){
							c1 = all
						}else{
							c1 = listAll[0]
						}
						if(c2<=listAll[1]&&c2 !== listAll[1]){
							c2 = all
						}else{
							c2 = listAll[1]
						}
						if(c3<=listAll[2]&&c3 !== listAll[2]){
							c3 = all
						}else{
							c3 = listAll[2]
						}
						if(c4<=listAll[3]&&c4 !== listAll[3]){
							c4 = all
						}else{
							c4 = listAll[3]
						}
						if(c5<=listAll[4]&&c5 !== listAll[4]){
							c5 = all
						}else{
							c5 = listAll[4]
						}
						if(c6<=listAll[5]&&c6 !== listAll[5]){
							c6 = all
						}else{
							c6 = listAll[5]
						}
						
//						console.log(c1,c2,c3,c4,c5,c6)
						drawTj(c1/100,c2/100,c3/100,c4/100,c5/100,c6/100)
						all+=2
						if(all>100){
							clearInterval(timer)
						}
					},40)
					
					
					
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
		
		
		function drawTj(c1,c2,c3,c4,c5,c6){
			
			
					cxt2.save()
					cxt2.beginPath()
					cxt2.rect(0,0,300,250)
					cxt2.fillStyle = '#fff'
					cxt2.fill()
					cxt2.closePath()
					cxt2.restore()
					
					cxt1.save()
					cxt1.beginPath()
					cxt1.rect(0,0,300,250)
					cxt1.fillStyle = '#fff'
					cxt1.fill()
					cxt1.closePath()
					cxt1.restore()
					
					
					
					
					drawArc(cxt1,100,0,2*Math.PI*c1,'#aacbca',img)
					drawArc(cxt1,82,0,2*Math.PI*c2,'#557874',img)
					drawArc(cxt1,64,0,2*Math.PI*c3,'#ffd857',img)
					drawArc(cxt1,46,0,2*Math.PI*c4,'#e73451',img2)
					drawFont(cxt1,"已发工资",-28,-10,12)
					drawFont(cxt1,"76",-15,16,24)
					
					
					drawFont(cxt1,"在建项目",100,-65,12)
					drawFont(cxt1,"所有项目",-130,-100,12)
					drawFont(cxt1,"已实名项目",90,-100,12)
					
					
					drawLine(cxt1,-95,-95,-72,-72)
					drawLine(cxt1,44,-44,95,-95)
					drawLine(cxt1,77,-30,108,-60)
					
					
					
					
					
					
					
					drawArc2(cxt2,100,0,-2*Math.PI*c5,'#ffd857',img3)
					drawArc2(cxt2,64,0,-2*Math.PI*c6,'#557874',img3)
					
					
					
					
					
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
		
		function drawLine(cxt2,x1,y1,x2,y2){
					cxt2.save()
					cxt2.translate(150,125)
					cxt2.beginPath()
					cxt2.moveTo(x1,y1)
					cxt2.lineTo(x2,y2)
					cxt2.strokeStyle = '#000'
					cxt2.lineWidth = 1
					cxt2.stroke()
					cxt2.closePath()
					cxt2.restore()
		}
	
})()
	
},50)

}
