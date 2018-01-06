var fs = require('fs')
var path = require('path')
/* ------------------------------------- nginx server 配置处 ------------------------------------- */
/*栗子*/
var data = [
    {
        name: 'tieba', // 名称 --- 不能中文字符
        port: 8016, // 端口
        path: path.resolve(__dirname, './').replace(/\\/g, '/'), // 本地项目路径(注意NGINX 配置中必须使用linux通用的'/')
        index: 'index', // 项目首页的html文件名
        url: 'http://tieba.baidu.com/' // 请求的url
    },
    {
        name: 'juejin', // 名称 --- 不能中文字符
        port: 8017, // 端口
        path: path.resolve(__dirname, './').replace(/\\/g, '/'), // 本地项目路径(注意NGINX 配置中必须使用linux通用的'/')
        index: 'index', // 项目首页的html文件名
        url: 'https://timeline-merger-ms.juejin.im/' // 请求的url
    }
]

/*备注*/

// nginx -s stop 关闭服务
// ajax请求的时候，用相对路径
// 开启nginx服务需要到文件夹中双击打开，切莫IDE里打开

/* ------------------------------------- 以下为处理事件 ------------------------------------- */
// 反向代理服务器配置模板
var serverTpl = (data) => {
return {
name: data.name + '.conf',
// ES6 模板字符串
val: `
# ${data.name}
server {
    listen        ${data.port};
    server_name   127.0.0.1 localhost;
    access_log    logs/${data.name}.log;
    charset       utf-8;
    location =/ {
        rewrite / /${data.index}.html permanent;
    }
    location / {
        proxy_pass  ${data.url};
        proxy_redirect  default;
    }
    location ~* ^.+.(ico|gif|jpg|jpeg|png|html)$ {
        root  ${data.path};
    }
    location ~* ^.+.(css|js|txt|xml|swf|wav|json)$ {
        root  ${data.path};
    }
}`
// 字符串拼接模板
/*
'#' +
data.name +
'\n' +
'server{\n' +
'listen  ' +
data.port +
';\n' +
'server_name 127.0.0.1 localhost;\n' +
'access_log  logs/' +
data.name +
'.log;\n' +
'charset utf-8;\n' +
'location =/ {\n' +
'rewrite / /' +
data.index +
'.html permanent;\n' +
'}\n' +
'location / {\n' +
'proxy_pass  ' +
data.url +
';\n' +
'proxy_redirect  default;\n' +
'}\n' +
'location ~* ^.+.(ico|gif|jpg|jpeg|png|html)$ {\n' +
'root  ' +
data.path +
';\n' +
'}\n' +
'location ~* ^.+.(css|js|txt|xml|swf|wav|json)$ {\n' +
'root  ' +
data.path +
';\n' +
'}\n' +
'}\n'
*/
}}

/* eslint-disable no-console */
var _nodeInit = function(data) {
    /*初始化*/
    var sum = 0
    var pathImg = 'nginx/conf/vhost/'
    files = fs.readdirSync(pathImg)
    files.forEach(function(file, index) {
        // 记总共步数
        sum = index
    })
    if (fs.existsSync(pathImg)) {
        // 先清空内部所有配置文件
        files.forEach(function(file, index) {
            var curPath = pathImg + '/' + file
            if (fs.statSync(curPath).isDirectory()) {
                fs.rmdirSync(pathImg)
            } else {
                fs.unlinkSync(curPath, function(err) {
                    if (err) throw err
                })
            }
            if (index === sum) {
                // 结束时添加
                for (var i = 0; i < data.length; i++) {
                    (function(data) {
                        /*conf/vhost/为文件默认创建地方*/
                        fs.appendFile(
                            pathImg + data.name + '.conf',
                            serverTpl(data).val,
                            'utf8',
                            function(err) {
                                if (err) {
                                    return console.error(err)
                                }
                            }
                        )
                    })(data[i])
                }
            }
        })
    }
}

_nodeInit(data)
