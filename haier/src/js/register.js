window.onload = function () {
    new Register();
}
//构造函数
function Register() {
    this.text = document.querySelector('#uname');
    this.pass = document.querySelector('#upwd');
    this.reg = document.querySelector('#reg');
    //添加事件
    this.addEvent();
}

//原型事件
Register.prototype.addEvent = function () {
    //给注册按钮添加事件
    this.reg.onclick = function () {
        //先获取用户名和密码
        let uname = this.text.value;
        let upwd = this.pass.value;

        //用户名和密码是否为空
        if (!uname || !upwd) {
            alert('用户名或密码不能为空！');
            return;
        }

        //正则判断
        //用户名规则
        let re_user = /^[\u4e00-\u9fa5]{3,5}$/;
        if (!re_user.test(uname)) {
            alert('用户名必须是3-5位的汉字');
            return;
        }

        //密码规则  数字字母下划线 3-12位 
        let re_pass = /^\w{3,12}$/;
        if (!re_pass.test(upwd)) {
            alert('密码必须是3-12位数字字母下划线的组合');
            return;
        }

        //判断cookie中是否有当前注册的用户名。若有提示已存在，没有，可以注册
        //获取当前cookie
        let cookie_str = getCookie('Registers')?getCookie('Registers') : '';
        //把cookie字符串转换成对象
        let cookie_obj = convertStrToObject(cookie_str);
        //判断这个对象在不在我当前注册的用户里
        if (uname in cookie_obj) {
            //返回true,说明已存在
            alert('该用户名已存在');
            return;
        } else {
            cookie_obj[uname] = upwd;
            alert('注册成功');
            location.href='login.html';
        }          
        
        //加入cookie
        //document.cookie = 'key=value;expires=日起对象;path=/;domain=域名;secure';
        createCookie('Registers', JSON.stringify(cookie_obj), { expires: 7, path: '/' });

        //清空输入框
        this.text.value = this.pass.value = '';

    }.bind(this);

}