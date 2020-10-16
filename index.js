// 导入express
var express = require('express')
// 创建实例
var app = express()
// 导入path 模块
var path = require('path')
// 导入ejs
var ejs = require('ejs')
// 设置模板路径
app.set('views',path.resolve(__dirname,'views'))
// 设置模板引擎类型为html，需要执行app.engine()设置
app.set('view engine','html')
// ejs模板引擎解析成.html文件
app.engine('.html',ejs.__express)
// 设置静态资源文件
app.use(express.static(path.resolve(__dirname,'public')))
// 配置化路由
app.use('/',(req,res)=>{
	res.render('register')
})

app.listen(8001,()=>{
	console.log('后台成功启动8888')
})