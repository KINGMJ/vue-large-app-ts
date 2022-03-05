# vue-large-app-ts

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Run your unit tests

```
yarn test:unit
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 运行 TS

```shell
# 执行 watch ts
yarn watch-ts
# 如果只监测一个文件，执行
tsc index.js -w
# 另一个窗口执行
node -i -e "$(< index1.js)"
# 重新编译在 node cli 里执行
.load index1.js
```

### demos

- demo1/index.ts: 基本数据类型
- demo1/index1.ts: 引用类型，类型断言
- demo2/index.ts: 函数
- demo3/index.ts: 联合类型
- demo3/index1.ts: 类型别名
- demo4/index.ts: 接口（interface）
