<style scoped>
    .layout{
        background: #f5f7f9;
        position: relative;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #464c5b;
    }
    
    .layout-nav-r1{
        float:right;
    }
    .header-tab{
        float:left;
        color:#fff;
        padding:0 20px;
    }
    .header{
        height:60px;
        background:#fff;
        position: relative;
        /*border-bottom:1px solid #657180;*/
        display: flex;
    }
    .logo{
        position: absolute;
        top:10px;
        left:10px;
    }
    .content_box{
        display: flex;
    }
    .nav_left{
        flex:0 0 200px;
        overflow-y: scroll
    }
    .nav_leftT{
        flex:0 0 60px;
    }
    .content_right{
        flex:1;
        overflow-y: scroll
    }
    .content_rightT{
        flex:1;
    }
    .logo_box{
        flex:0 0 200px;
        background:#464c5b;
    }
    .logo_boxT{
        flex:0 0 60px;
        background:#464c5b;
    }
    .header_right{
        flex:1;
    }
    .nav_switch{
        float:left;
        margin:18px 0 0 10px;
    }
    .navItem{
        position: relative;
        z-index:50;
    }
    .navItem:hover ul{
        display: block;
    }
    .nav_ul{
        position: absolute;
        background: #fff;
        top:0;
        left:61px;
        z-index: 2000;
        display: none;
        padding:10px 0;
        box-shadow:2px 0px 4px #ccc;
    }
    .nav_ul li{
        position: relative;
        z-index:100;
    }
    
    .nav_ul li a{
        color:#000;
        display: block;
        padding:4px 14px;
    }
    .nav_ul li a.active{
        color:#3399ff;
    }
    .nav_ul li:hover a{
        position: relative;
        z-index:100;
        background: #5cadff;
        color:#fff;
    }
</style>
<template>
    <div class="layout">
        <div class="header">
            <div :class="!navSwitchOk?'logo_boxT':'logo_box'">
                <a href="javascript:;" class="logo">
                    <img v-show="navSwitchOk" src="http://img.pindou.com/shop/origin/8/12/a8944663-c74c-4331-9c0b-0e3026897839.png">
                    <img v-show="!navSwitchOk" src="../../css/img/logo.png" width="36" height="36">
                </a>
            </div>
            <div class="header_right">
                <Icon type="navicon-round" size="24" color="#000" class="nav_switch" @click.native="navSwitch"></Icon>
                <Menu mode="horizontal" theme="light" class="layout-nav-r1">
                    <div>
                        <Menu-item name="1">
                            <Badge dot :count="dotCount">
                                <Icon type="ios-bell" size="20"></Icon>
                            </Badge>
                        </Menu-item>
                        <Menu-item name="2">
                            <Icon type="gear-b" size="18"></Icon>
                        </Menu-item>
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="person" size="16"></Icon>
                                Mike
                            </template>
                            <Menu-group title="使用">
                                <Menu-item name="1-1">个人中心</Menu-item>
                                <Menu-item name="1-2">设置</Menu-item>
                                <Menu-item name="1-3">退出</Menu-item>
                            </Menu-group>
                        </Submenu>
                    </div>
                </Menu>
                <Menu mode="horizontal" theme="light" active-name="1" class="layout-nav-r1">
                    <div>
                        <Menu-item name="1">
                            <Icon type="ios-paper"></Icon>
                            内容管理
                        </Menu-item>
                        <Menu-item name="2">
                            <Icon type="ios-people"></Icon>
                            用户管理
                        </Menu-item>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="stats-bars"></Icon>
                                统计分析
                            </template>
                            <Menu-group title="使用">
                                <Menu-item name="3-1">新增和启动</Menu-item>
                                <Menu-item name="3-2">活跃分析</Menu-item>
                                <Menu-item name="3-3">时段分析</Menu-item>
                            </Menu-group>
                            <Menu-group title="留存">
                                <Menu-item name="3-4">用户留存</Menu-item>
                                <Menu-item name="3-5">流失用户</Menu-item>
                            </Menu-group>
                        </Submenu>
                        <Menu-item name="4">
                            <Icon type="settings"></Icon>
                            综合设置
                        </Menu-item>
                        <div class="header-tab">
                            ｜
                        </div>
                    </div>
                </Menu>
            </div>
        </div>
        <Row type="flex" v-bind:style="{minHeight:rootHeihgt}" class="content_box">
            <i-col class="layout-menu-left" :class="!navSwitchOk?'nav_leftT':'nav_left'">
                <!-- nav菜单折叠前 -->
                <Menu :active-name="$route.path" theme="dark" width="auto" :open-names="[$route.name]" accordion @on-select="selectNav" v-show="navSwitchOk">
                    <Submenu :name="item.type" v-for="item in $router.options.routes">
                        <template slot="title">
                            <Icon :type="item.icon"></Icon>
                            {{item.name}}
                        </template>
                        <Menu-item v-for="child in item.children" :name="child.path">{{child.title}}</Menu-item>
                    </Submenu>
                </Menu>
                <!-- nav菜单折叠后 -->
                <Menu :active-name="$route.name" theme="dark" width="60px" v-show="!navSwitchOk">
                    <Menu-item :name="item.type" v-for="item in $router.options.routes" class="navItem">
                        <Icon :type="item.icon" size="20"></Icon>
                        <ul class="nav_ul">
                            <li v-for="child in item.children">
                                <router-link :to="child.path" :class="$route.path==child.path?'active':''">{{child.title}}</router-link>
                            </li>
                        </ul>
                    </Menu-item>
                </Menu>
            </i-col>
            <i-col :class="!navSwitchOk?'content_rightT':'content_right'">
                <router-view></router-view>
                <div class="layout-copy">
                    2011-2016 &copy; TalkingData
                </div>
            </i-col>
        </Row>
        <!-- 登录 -->
        <Modal v-model="isLogin" :mask-closable="false" :closable="false" class="login" :styles="{'border':'2px solid #ccc','borderRadius':'5px'}" width="400">
            <i-form ref="loginForm" :model="loginForm" :rules="ruleInline">
                <Form-item prop="user">
                    <Input type="text" v-model="loginForm.user" placeholder="Username">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </Form-item>
                <Form-item prop="password">
                    <Input type="password" v-model="loginForm.password" placeholder="Password">
                        <Icon type="ios-locked-outline" slot="prepend"></Icon>
                    </Input>
                </Form-item>
            </i-form>
            <div slot="footer">
                <Button type="success" size="large" long @click.native="loginFn('loginForm')" :loading="loginLoading">登录</Button>
            </div>
        </Modal>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                rootHeihgt:'',
                dotCount:"1",
                isLogin:false,
                loginLoading:false,
                navSwitchOk:true,
                loginForm: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ]
                }
            }
        },
        created(){
            
        },
        methods: {
            navSwitch (){
                this.navSwitchOk = !this.navSwitchOk;
            },
            selectNav (item) {
                this.$router.push(item);
            },
            loginFn(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.loginLoading = true;
                        setTimeout(()=>{
                            this.$Message.success('登录成功!');
                            this.loginLoading = false;
                            this.isLogin = false;
                        },1000);
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                });
            }
        },
        mounted () {
            console.log(this.$router)
            var h;
            var _this = this;
            h = document.documentElement.clientHeight;
            this.rootHeihgt = (h-60)+'px';
            window.onresize = function() {
                h = document.documentElement.clientHeight;
                _this.rootHeihgt = (h-60)+'px';
            };
        },

    }
</script>
