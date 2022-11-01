
// 使用方法，编译hello.c文件，然后执行hello文件，hello会开启循环打印，地址是动态输出
// gcc hello.c -o hello
// ./hello
// 0x10b3d4ee0

Interceptor.attach(ptr("0x10b3d4ee0"), {
    onEnter: function(args) {
        args[0] = ptr("1337");  
        send(args[0].toInt32());
    }
});