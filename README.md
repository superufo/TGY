### TGY

------


- forward:  PC->Phone 作为Client客户端,可以任意访问Phone上的 Server 服务器        

  ​	adb forward tcp:8888 tcp:8888    


- reverse:反向代理  

​	Phone->PC   adb reverse tcp:8097 tcp:8097  adb reverse tcp:8081 tcp:8081



-  react-devtools   npm install -g react-devtools

  android avd  命令无效，可以重启，使得环境变量彻底生效
  adb devices


- bundle 

  8081端口的服务就是React Native项目的一个本地服务器，用于提供JSBundle包和一些静态资源

  React-native bundle --platform Android --dev false --entry-file index.
  .js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res


- 模拟器

  打开模拟器D:\sdk\tools
  emulator.exe -netdelay none -netspeed full -avd api23

  打开模拟机dev
  adb shell input keyevent 82   ( http://192.168.1.60:8097/ )

  
- npm 错误

  npm install时报错Maximum call stack size exceeded 
  给npm降级或者升级
  降级 ： npm install -g npm@5.4.0
  升级 ： npm install -g npm  


- react-native   版本
  npm info react-native

1.  NativeBase  : https://github.com/GeekyAnts/NativeBase/blob/master/README.md 
    npm install native-base --save   

    yarn add react-native-cli --save 
   react-native link
   npm install @expo/vector-icons --save

2. react-native link  
   根据package.json文件中的dependencies和devDependencies记录来链接所有需要链接的原生库

   cd D:\reactnative_pro\rn-lw  

    yarn install   react-native link   react-native-splash-screen

3. nvm

    nvm  ls   nvm use 9.8.0   cd D:\reactnative_pro\rn-lw

   

------

### 依赖库

1. Provider  原组件变得可以接受Redux的store作为props.

2.   react-navigation: 是官方主推的导航库，支持ios和安卓，如果你想很好的支持安卓用户最好用这个，
     [导航器性能对比]http://reactnative.cn/docs/0.43/navigation.html

3.  redux  react-redux  redux-saga  redux-logger( 日志)

4. 消息推送01:jpush-react-native: 极光推送官方支持的 React Native 插件（Android & iOS）

5. 消息推送02:react-native-code-push: 微软的热更新开源库

6. react-native-vector-icons: 是可以直接使用图片名就能加载图标的第三方库,类似于web的iconfont矢量图，使用很方便, 你不需要在工程文件夹里塞各种图片, 节省很多空间.

7. react-native-scrollable-tab-view：是一个很好用的可滑动的tab导航，（如果你的项目的tab没有超过一屏的话就用react-navigation的TabNavigator）

8. react-native-google-analytics-bridge收集细粒度的数据,主要用于产品部门，大数据，项目运营人员对用户行为以及数据的分析

   

------

### 编程规范

 使用的是airbnb，但是这还不够，希望大部分的代码格式类的工作都能自动化做，开发人员只需要注重业务代码就好。 
    为此需要用prettier+eslint+sublimelinter+airbnb，在保存代码的时候就对代码进行格式化，提交代码之前再做一次严格的airbnb校验。基本就能保证代码的可维护性。
