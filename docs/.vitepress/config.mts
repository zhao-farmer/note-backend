import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid';

// 默认的 defineConfig 改为 withMermaid
export default withMermaid({

  // markdown 设置
  markdown: {
      // 开启数学公式
      math: true
  },

  // 应用配置信息
  lang:'zh-cn',
  title: "后端技术",
  description: "包含对应语言以及框架相关",

  base:'/note-backend',

  // 主题配置
  themeConfig: {
    // 标题栏
    nav: [
      {
        text: "Java相关",
        items: [
          {
            text: "java基础",
            link: "/markdown/java/lang/",
          },
          {
            text: "java专家",
            link: "/markdown/java/expert/",
          },
          {
            text: "spring系列框架",
            link: "/markdown/java/spring/",
          },
          {
            text: "其他框架",
            link: "/markdown/java/framework/",
          },
          {
            text: "java桌面端",
            link: "/markdown/java/desktop/",
          },
          {
            text: "扩展语言",
            link: "/markdown/java/extend/",
          },
          {
            text: "其他相关",
            link: "/markdown/java/other/",
          },
        ],
      },
      {
        text: "python相关",
        items: [
          {
            text: "python语言",
            link: "/markdown/python/lang/",
          },
          {
            text: "python框架",
            link: "/markdown/python/framework/",
          },
          {
            text: "AI相关",
            link: "/markdown/python/AI/",
          },
        ],
      },
      {
        text: "golang相关",
        items: [
          {
            text: "go语言",
            link: "/markdown/golang/lang/",
          },
          {
            text: "go框架",
            link: "/markdown/golang/framework/",
          },
        ],
      },
      {
        text: "C++相关",
        items: [
          {
            text: "C++基础",
            link: "/markdown/cpp/lang/",
          },
          {
            text: "C++桌面端",
            link: "/markdown/cpp/desktop/",
          },
        ],
      },
      {
        text: "C#相关",
        items: [
          {
            text: "C#语言",
            link: "/markdown/C-Sharp/lang/",
          },
          {
            text: "C#框架",
            link: "/markdown/C-Sharp/framework/",
          },
          {
            text: "unity相关",
            link: "/markdown/C-Sharp/unity/",
          },
        ],
      },
      

     
    ],
    // 侧边栏
    sidebar: {
        '/markdown/java/lang/': [
          {
            text: 'java基础',
            // 相对路径会自动追加子路径前缀
            items: [
              {text:'一、认识java',link:'/markdown/java/lang/base/01'},
              {text:'二、变量与运算符',link:'/markdown/java/lang/base/02'},
              {text:'三、流程控制语句',link:'/markdown/java/lang/base/03'},
              {text:'四、IDEA的安装与使用',link:'/markdown/java/lang/base/04'},
              {text:'五、数组',link:'/markdown/java/lang/base/05'},
              {text:'六、面向对象编程（基础）',link:'/markdown/java/lang/base/06'},
              {text:'七、面向对象编程（进阶）',link:'/markdown/java/lang/base/07'},
              {text:'八、面向对象编程（高级）',link:'/markdown/java/lang/base/08'},
              {text:'九、异常处理',link:'/markdown/java/lang/base/09'},
              {text:'十、多线程',link:'/markdown/java/lang/base/10'},
              {text:'十一、常用类和基础API',link:'/markdown/java/lang/base/11'},
              {text:'十二、集合框架',link:'/markdown/java/lang/base/12'},
              {text:'十三、泛型',link:'/markdown/java/lang/base/13'},
              {text:'十四、数据结构与集合源码',link:'/markdown/java/lang/base/14'},
              {text:'十五、File类与IO流',link:'/markdown/java/lang/base/15'},
              {text:'十六、网络编程',link:'/markdown/java/lang/base/16'},
              {text:'十七、反射机制',link:'/markdown/java/lang/base/17'},
              {text:'十八、JDK8-17新特性',link:'/markdown/java/lang/base/18'},
            ],
          },
          {
            text: 'java进阶',
            // 相对路径会自动追加子路径前缀
            items: [
              {text:'一、认识java',link:'/markdown/java/lang/advance/01'},
              {text:'二、变量与进制',link:'/markdown/java/lang/advance/02'},
              {text:'三、运算符与流程控制',link:'/markdown/java/lang/advance/03'},
              {text:'四、数组',link:'/markdown/java/lang/advance/04'},
              {text:'五、类与对象',link:'/markdown/java/lang/advance/05'},
              {text:'六、面向对象-特性',link:'/markdown/java/lang/advance/06'},
              {text:'七、类的成员',link:'/markdown/java/lang/advance/07'},
              {text:'八、类的类别',link:'/markdown/java/lang/advance/08'},
              {text:'九、类的关键字',link:'/markdown/java/lang/advance/09'},
              {text:'十、异常处理',link:'/markdown/java/lang/advance/10'},
            ],
          },
        ],
        '/markdown/java/other/': [
          {
            text: "开发工具",
            items: [
              {text:'一、IntelliJ IDEA 常用快捷键一览表',link:'/markdown/java/other/tool/01'},
            ]
          },
        ]
       

    },

    // 右边目录是否关闭
    aside:true,
    // 右边目录配置
    outline:{
      level:[2,4],
      label:'目录'
    },

  }
})
