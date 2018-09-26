# Talk in js 之代理模式
- 将js的面向对象通过送花的情景讲出来
    1. 对象 JSON Object 描述性，对象字面量，js 是动态灵活的语言
    2. 将现实世界跟代码结合，属性和方法 组成的复杂数据结构 key：value，value值为function 方法，对象有行为或动作时用方法
    3. 接口，两个对象实现同样的方法，可以在执行中互换使用，这是代理模式的核心

 - 代理模式proxyable，实现了更复杂更有用的功能，更好的控制对象。小丽实现跟小红一样的接口，更了解目标对象，小红过些时间心情好，小红不需要了解小红的复杂细节，面向对象的魅力，对象比较多，对象可以把复杂性隐去。

 - js语法
    1. JSON Object
    2. this 关键字 在对象内部使用this引用对象本身
    3.定时器 setTimeout(fn,10000);
