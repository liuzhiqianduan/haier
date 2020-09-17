window.onload = function () {
    new Login();
}

function Login() {
    this.text = document.querySelector('#uname');
    this.pass = document.querySelector('#upwd');
    this.log = document.querySelector('#log');
    //添加事件
    this.addEvent();
}

Login.prototype.addEvent = function () {
    this.log.onclick = function () {

         //先获取用户名和密码
         let uname = this.text.value;
         let upwd = this.pass.value;
 
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
        
        //检测当前cookie中是否存在. 存在，可登录。不存在，去注册
        //获取cookie
        let cookie_str = getCookie('Registers') ? getCookie('Registers') : '';
        //转成对象
        let cookie_obj = convertStrToObject(cookie_str);
        if (uname in cookie_obj) {
            if (upwd === cookie_obj[uname]) {
                alert('登陆成功');
                location.href = '../index.html';
                return;
            }else {
                alert('密码错误');
                return;
            } 
        } else {
            alert('用户名不存在');
        }

    }.bind(this);
}