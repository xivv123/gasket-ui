# gasket-ui
### 项目启动
安装依赖
```
pnpm i
```
库构建
```
turbo build
```
如果 turbo build 报错
```
运行 npm install -g turbo
```
启动文档
```
pnpm -F docs  docs:dev
```
如果提示没有权限，就复制这一段到PowerShell 中执行
```
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```
