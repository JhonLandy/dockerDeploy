echo Deploy Project
# docker-compose up -d --force-recreate --build

# 保存服务器更改过的代码
git add . && git commit -m update 

# 获取最新版代码
git pull

# 提交记录
git push 

# 强制重新编译容器
docker-compose down
docker-compose up -d --force-recreate --build
# 定制镜像
# docker build -t myapp:pm2 ./backend

# 重启启动容器
# docker stop myapp
# docker rm myapp
# docker run --name myapp -p 3000:3000  -d myapp:pm2
