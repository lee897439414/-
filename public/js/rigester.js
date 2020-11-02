
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

// 表单验证
var validForm = new ValidForm()
$('#email').on('change',function(){
	 valid.call(this, 'isEmail');
})
// 	验证昵称
$('#nickName').on('change',function(){
	 valid.call(this, 'isNickname');
})

// 验证密码
$('#password').on('change',function(){
	valid.call(this, 'isPassword')
})

// 验证验证码
$('#code').on('change',function(){
	valid.call(this, 'isCode');
})

  //验证表单控件
  function valid(fnName) {
    let value = $(this).val();
    console.log('value ==> ', value);

    if (!validForm[fnName](value)) {
      $(this).next().show().attr('name', 1);
    } else {
      $(this).next().hide().removeAttr('name');
    }
  }


// 注册
$('#register').on('click',function(){
	let isEmpty = false
	$('.form-control').each(function(){
		let value = $(this).val()
		if(value == ''){
			isEmpty = true
			$(this).next().show().attr('name',1)
			return false;
		}
	})
	if(isEmpty){
       return
	}
	console.log('isHasError ==> ', $('.error-msg'));
	let isHasError = $('.error-msg[name=="1"]').length > 0
	if(!isHasError){
		
	}
})