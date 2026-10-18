这是一个商户端的系统文件，部署后无需修改，
--在宝塔创建网站-上传文件-打开设置在配置文件中添加
  # API反向代理到后端
location /api/ {
    proxy_pass https://你的服务端地址/api/;
    proxy_set_header Host wjfserver.paywjf.com;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_ssl_server_name on;
}
