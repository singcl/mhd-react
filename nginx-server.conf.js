/* eslint-disable no-console */
var fs = require('fs')
var path = require('path')

/* ------------------------------------- nginx http server 配置处 ------------------------------------- */
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
        url: 'http://recommender-api-ms.juejin.im/' // 请求的url
    }
]

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
}}

/*备注*/

// nginx -s stop 关闭服务
// ajax请求的时候，用相对路径

/* ------------------------------------- 以下为写入NGXIN HTTP 配置 ------------------------------------- */
// 写反向代理服务器配置文件，不存在则创建 http://nodejs.cn/api/fs.html#fs_fs_access_path_mode_callback
function proxyServerConf(data) {
    data.forEach(function(item, index) {
        var filePath = path.resolve(__dirname, `./nginx/conf/vhost/${item.name}.conf`)
        fs.writeFile(
            filePath,
            serverTpl(item).val,
            'utf8',
            function(err) {
                if (err) {
                    return console.error(err)
                }
            }
        )
    })
}

proxyServerConf(data)
