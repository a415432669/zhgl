var app = new Vue({
				el:'#app',
				data:{
					tabToggle:true,
					partToggle:[false,true],
					name:'hello',
					contentToggle:'21',
					alertContent:[{id:1,state:'待处理'},{id:2,state:'待处理'}],
					seeMoreButton:false
				},
				methods:{
					tabClick:function(data){
						console.log(data)
						console.log(this.partToggle[data])
						
						if(!data){
							this.contentToggle = '11'
							showChart(this.contentToggle)
							if(this.partToggle[data]){
								this.tabToggle=false
								this.partToggle=[false,false]
							}else{
								this.tabToggle=true
								this.partToggle=[true,false]
							}
							
						}else{
							this.contentToggle = '21'
							showChart(this.contentToggle)
							if(this.partToggle[data]){
								this.tabToggle=false
								this.partToggle=[false,false]
							}else{
								this.tabToggle=true
								this.partToggle=[false,true]
							}
							
						}
					},
					toggleDetail:function(data){
						this.contentToggle = data
						showChart(data)
					},
					seeMore:function(){
						this.seeMoreButton = true
						this.alertContent=[{id:1,state:'待处理'},{id:2,state:'待处理'},{id:3,state:'待处理'},{id:4,state:'已处理'},{id:5,state:'已处理'},{id:6,state:'已处理'},{id:7,state:'待处理'},{id:8,state:'待处理'},{id:9,state:'待处理'},{id:10,state:'待处理'}]
					}
					
					
				},
				mounted:function(){
					showChart('kj')
					mainChart1()
					mainChart2()
					
				}
			})


function showChart(data){
	switch(data){
		case '11':
			page11()
			break;
		case '12':
			page12()
			break;
		case '13':
			page13()
			break;
		case 'kj':
			pagekj()
			break;
	}
}


function pagekj(){
	setTimeout(function(){
		drawChart1()
		drawChart2()
	},50)
}
function page11(){
	setTimeout(function(){
		drawChart3()
		drawChart4()
	},50)
}
function page12(){
	setTimeout(function(){
		drawChart5()
		drawChart6()
		drawChart7()
		drawChart8()
		drawChart9()
	},50)
}

function page13(){
	setTimeout(function(){
		drawChart10()
		drawChart11()
		drawChart12()
	},50)
}


$('#datetimepicker1').datetimepicker({lang:'ch'});
$('#datetimepicker2').datetimepicker({lang:'ch'});
$.datetimepicker.setLocale('ch');//设置中文

$(".zxf_pagediv").createPage({
		pageNum: 20,
		current: 6,
		backfun: function(e) {
		console.log(e);//回调
	}
});
if($(window).scrollTop()>=650){
		$('.nav').addClass('active')	
	}else{
		$('.nav').removeClass('active')
}

$(window).scroll(function(event){
	if($(window).scrollTop()>=650){
		$('.nav').addClass('active')	
	}else{
		$('.nav').removeClass('active')
	}
	
});

$('.backTop').click(function(){
	$(window).scrollTop(0)
})



$('.fullscreen').click(function(){
	if(this.nodeName=='SPAN'){
		this.parentNode.parentNode.parentNode.webkitRequestFullscreen()
	}else{
		this.parentNode.webkitRequestFullscreen()
	}
//	console.log([this])
//	this.requestFullscreen()
})
