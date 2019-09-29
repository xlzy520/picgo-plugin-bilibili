## picgo-plugin-smms-user

[![下载](https://img.shields.io/npm/dm/picgo-plugin-smms-user.svg?color=brightgreen)](https://npmcharts.com/compare/picgo-plugin-smms-user?minimal=true)
[![版本](https://img.shields.io/npm/v/picgo-plugin-smms-user.svg?color=brightgreen)](https://www.npmjs.com/package/picgo-plugin-smms-user)
[![许可](https://img.shields.io/badge/license-mit-brightgreen.svg)](https://github.com/chengww5217/picgo-plugin-smms-user/blob/master/License)


为 [PicGo](https://github.com/Molunerfinn/PicGo) 开发的一款插件，新增了[SM.MS注册用户](https://sm.ms/home/) 图床。
使用SM.MS V2的API上传，适用于注册了SM.MS的用户。填写`Authorization`即可

### 安装

- 在线安装

    打开 [PicGo](https://github.com/Molunerfinn/PicGo) 详细窗口，选择**插件设置**，搜索**smms-user**安装，然后重启应用即可。

- 离线安装

    克隆该项目，复制项目到 以下目录：
    - Windows: `%APPDATA%\picgo\`
    - Linux: `$XDG_CONFIG_HOME/picgo/` or `~/.config/picgo/`
    - macOS: `~/Library/Application\ Support/picgo/`

    切换到新目录执行 `npm install ./picgo-plugin-smms-user`，然后重启应用即可。

### 截图

![](https://i.loli.net/2019/09/29/LPmKlQ4zFX9JpNw.jpg)

### 配置
在[这里](https://sm.ms/home/apitoken)获取Authorization

|参数名称|类型|描述|是否必须|
|:--:|:--:|:--:|:--:|
|Authorization|input|Authorization即API Token|true|


## My-PicGo
repo: https://github.com/xlzy520/PicGo

基于PicGo的改造，修改了一些功能，增加了自定义的一些功能

-  主体： 扩大高宽，允许缩小放大
- 上传区：在Github图床增加一个预选存放路径选择框
   ![](http://xlzy520.cn/Rem/dev/TIM20190929151459.jpg)
- 相册：增加全选按钮，增加文件名显示
- GitHub图床：增加预选路径配置，预选路径配置编辑
  ![](http://xlzy520.cn/Rem/dev/TIM20190929152607.jpg)
  ![](http://xlzy520.cn/Rem/dev/TIM20190929152616.jpg)
- 设置：增加PicGo配置上传下载同步功能（自己使用，暂未添加接口）

### Todo
- 相册优化，增加获取来自smms的接口数据；
- 设置优化
- 预选存储路径优化
- smms保存时可以通过选择的路径进行重命名，模拟目录 
