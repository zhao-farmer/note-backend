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
  title: "赵建辉的后端知识库",
  description: "包含java、python、golang、C++、C#等后端技术栈",

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
      /* ====================  java相关 ===================== */

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
          items: [
            {text:'一、复习回顾、静态、继承、引用类型使用',link:'/markdown/java/lang/advance/01'},
            {text:'二、抽象类,接口、代码块、final、单例、枚举',link:'/markdown/java/lang/advance/02'},
            {text:'三、多态、包、权限修饰符、内部类,Object类,Date类',link:'/markdown/java/lang/advance/03'},
            {text:'四、常用API、正则表达式,泛型、Collection集合API',link:'/markdown/java/lang/advance/04'},
            {text:'五、迭代器，数据结构,List,Set ,TreeSet集合,Collections工具类',link:'/markdown/java/lang/advance/05'},
            {text:'六、Map,HashMapTreeMap,斗地主、图书管理系统，排序算法',link:'/markdown/java/lang/advance/06'},
            {text:'七、异常，线程的创建方式,,线程安全，线程同步',link:'/markdown/java/lang/advance/07'},
            {text:'八、线程状态,volatile关键字、原子性、并发包、死锁、线程池',link:'/markdown/java/lang/advance/08'},
            {text:'九、方法引用,Stream流,File类,递归,字节流',link:'/markdown/java/lang/advance/09'},
            {text:'十、字符流, 缓冲流、转换流、序列化流，打印流，属性集',link:'/markdown/java/lang/advance/10'},
            {text:'十一、Socket网络编程、NIO',link:'/markdown/java/lang/advance/11'},
            {text:'十二、JUnit单元测试、反射、注解、动态代理',link:'/markdown/java/lang/advance/12'},
            {text:'十三、XML和Dom4j,装饰模式,工厂模式,commons-io工具包,Base64',link:'/markdown/java/lang/advance/13'},
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
      ],
       
      /* ====================  python相关 ===================== */
      '/markdown/python/lang/': [

      ],
      '/markdown/python/framework/': [
        {
          text: "fastapi",
          items: [
            {text:'一、基础',link:'/markdown/python/framework/fastapi/01'},
          ]
        },
        {
          text: "gradio",
          items: [
            {text:'一、初识Gradio',link:'/markdown/python/framework/gradio/01'},
            {text:'二、构建页面-输入输出',link:'/markdown/python/framework/gradio/02'},
            {text:'三、Blocks使用',link:'/markdown/python/framework/gradio/03'},
            {text:'四、机器学习实战',link:'/markdown/python/framework/gradio/04'},
            {text:'五、一些示例',link:'/markdown/python/framework/gradio/05'},
            {text:'六、其他相关',link:'/markdown/python/framework/gradio/06'},
          ]
        },
      ],

      /* ====================  Golang相关 ===================== */

      /* ====================  C/C++相关 ===================== */

      /* ====================  C#相关 ===================== */
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
