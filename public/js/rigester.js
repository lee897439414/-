
let time = 5
$('#getCode').on('click',function(){
	var that = this
	$(that).text(time+'s后重新发送').prop('disabled',true)
	var  timer = setInterval(function(){
		console.log($(that))
		$(that).text(time+'s后重新发送')
		if(time <= 0){
			clearInterval(timer)
			$(that).text('获取邮箱验证码').prop('disabled',false)
			time = 5
		}else{
			time --
			$(that).text(time+'s后重新发送')
		}
	},1000)
})