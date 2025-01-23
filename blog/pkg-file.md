# package.json文件中各字段

## dependencies 相关
管理项目中的各种依赖项

### `dependencies`
项目运行所需要的依赖，在执行`npm install`的时候会根据此项安装对应依赖。一股脑放置在此字段内的各种依赖可能会出现`幽灵依赖`问题
### `devDependencies`
仅在开发时用到的依赖包
### `peerDependencies`
用于依赖包中，在项目中不起作用。开发时一般会配合 devDependencies 来实现开发和发包时的版本解耦。

``` json
{
    "peerDependencies": {
        "react": "16 || 17 || 18"
    },
    "devDependencies": {
        "react": "16"
    }
}
```

### optionalDependencies
定义可选依赖项，和 dependencies 非常类似，主要的差别：在 optionalDependencies 中的依赖包安装报错甚至找不到时不会影响到包管理器的安装行为。
