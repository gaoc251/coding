/**
 * 用自身原型方法apply来实例化的对象。
 */

class HelloPlugin{
    // 在构造函数中获取用户给该插件传入的配置
    constructor(options){
    }
    // Webpack 会调用 HelloPlugin 实例的 apply 方法给插件实例传入 compiler 对象
    apply(compiler) {
      // 在emit阶段插入钩子函数，用于特定时机处理额外的逻辑；
      compiler.hooks.emit.tap('HelloPlugin', (compilation) => {
        // 在功能流程完成后可以调用 webpack 提供的回调函数；
      });
      // 如果事件是异步的，会带两个参数，第二个参数为回调函数，在插件处理完任务时需要调用回调函数通知webpack，才会进入下一个处理流程。
      compiler.plugin('emit',function(compilation, callback) {
        // 支持处理逻辑
        // 处理完毕后执行 callback 以通知 Webpack 
        // 如果不执行 callback，运行流程将会一直卡在这不往下执行 
        callback();
      });
    }
  }
  
  module.exports = HelloPlugin;
  

/**
 * 安装插件时, 只需要将它的一个实例放到Webpack config plugins 数组里面:
 */
const HelloPlugin = require('./hello-plugin.js');
var webpackConfig = {
  plugins: [
    new HelloPlugin({options: true})
  ]
};

/**
 * 先来分析一下webpack Plugin的工作原理

读取配置的过程中会先执行 new HelloPlugin(options) 初始化一个 HelloPlugin 获得其实例。
初始化 compiler 对象后调用 HelloPlugin.apply(compiler) 给插件实例传入 compiler 对象。
插件实例在获取到 compiler 对象后，就可以通过compiler.plugin(事件名称, 回调函数) 监听到 Webpack 广播出来的事件。
并且可以通过 compiler 对象去操作 Webpack。
 */
