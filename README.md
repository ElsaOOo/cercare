# cercare

## search your markdown file in terminal!

## 在命令行中搜索 markdown 文件并在命令行中显示

## install global

```shell
npm i cercare -g
```

## 全局安装

```shell
npm i cercare -g
```

### ?? what is this for

#### when you were programming, you forgot the basic technical information. Each time you had to search in chrome web page. this is annoying. It is convenient to search what you want in terminal, because you use it most often.

### ?? 这个命令行工具是干嘛的

#### 我们在编程的时候，经常会查一些比较基础但是又常常记不在脑子里的东西，可能当时百度或者谷歌了一下解决的当时的问题，下次再次碰到的时候还是会再次在浏览器中搜索。如果把这些你认为是经常会用到的命令或者代码片段保存起来，下次再遇到的时候，先在命令行里搜索一下有没有，毕竟在命令行中搜索是最方便快捷的。

### Example

I want to know how to switch npm registry

```shell
care nvm
```

output:

```shell
显示使用的源地址

    nvm ls

切换源  比如切换到npm官方源

    nvm use npm

了解每个源的下载速度

    nrm test
```

### 例子

比如我想查一下切换 npm 源的指令是什么，在命令行里输入

```shell
care nvm
```

搜索结果就会在命令行里展示 markdown 文件

```shell
显示使用的源地址

    nvm ls

切换源  比如切换到npm官方源

    nvm use npm

了解每个源的下载速度
```

### 原理：

首次在命令行执行`care`命令的时候，不输入任何东西

```shell
care
```

直接回车，会在用户根目录下新建一个`.carenotes`的隐藏文件夹，然后我们在这个文件夹下记录我们平常需要的 markdown 文件，md 文件的命名很重要，因为我们在使用 care 命令时，后面带的参数会匹配 md 的文件名称，模糊匹配成功才会在命令行中显示出来。

### ！！ 所以要先创建 md 文件，创建自己的资料库用来搜索。

### 欢迎提 issue 和新的需求 ☺~
