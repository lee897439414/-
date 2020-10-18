class ValidForm {
    constructor(){
        // 邮箱验证
        this.emailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        // 昵称
        this.nicknameReg = /^[\w\u4e00-\u9fa5]{1,10}$/
        // 密码
        this.isP = /^[A-Za-z]\w{5,15}$/ 
        // 验证码
        this.codeReg = /^\d{6}$/
    }
    // 邮箱验证
    isEmail(value){
        return this.emailReg.test(value)
    }
    // 昵称 验证
    isNickname(value){
        return this.nicknameReg.test(value) 
    }
    // 验证密码
    isPassword(value){
        return this.isP.test(value) 
    }
    // 验证码验证
     isCode(value){
         return this.codeReg.test(value)
     }
}  