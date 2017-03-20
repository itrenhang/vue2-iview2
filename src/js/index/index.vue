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
        background:#464c5b;
        position: relative;
        border-bottom:1px solid #657180;
    }
    .logo{
        position: absolute;
        top:10px;
        left:10px;
    }
</style>
<template>
    <div class="layout">
        <div class="header">
            <a href="javascript:;" class="logo">
                <img src="http://img.pindou.com/shop/origin/8/12/a8944663-c74c-4331-9c0b-0e3026897839.png">
            </a>
            <Menu mode="horizontal" theme="dark" class="layout-nav-r1">
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
            <Menu mode="horizontal" theme="dark" active-name="1" class="layout-nav-r1">
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
        <Row type="flex" v-bind:style="{minHeight:rootHeihgt}">
            <i-col span="4" class="layout-menu-left">
                <Menu :active-name="navItem" theme="dark" width="auto" :open-names="navOpen" accordion @on-select="selectNav">
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            导航一
                        </template>
                        <Menu-item name="/">loading</Menu-item>
                        <Menu-item name="/page2">table</Menu-item>
                        <Menu-item name="/page3">upload</Menu-item>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-keypad"></Icon>
                            导航二
                        </template>
                        <Menu-item name="/tree">tree</Menu-item>
                        <Menu-item name="/switch">switch</Menu-item>
                        <Menu-item name="/form">form</Menu-item>
                    </Submenu>
                    <!-- <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-analytics"></Icon>
                            导航三
                        </template>
                        <Menu-item name="3-1">选项 1</Menu-item>
                        <Menu-item name="3-2">选项 2</Menu-item>
                    </Submenu> -->
                </Menu>
            </i-col>
            <i-col span="20">
                <router-view></router-view>
                <div class="layout-copy">
                    2011-2016 &copy; TalkingData
                </div>
            </i-col>
        </Row>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                rootHeihgt:'',
                dotCount:"1",
                navItem:'',
                navOpen:[],
            }
        },
        created(){
            this.getNav();
            var _this = this;
            window.onhashchange = function(){
                _this.getNav();
            }
        },
        methods: {
            getNav(){
                var pathName = this.$route.name;
                if(pathName){
                    var arr = pathName.split('-');
                    this.navOpen.push(arr[0]);
                    this.navItem = arr[1];
                }
            },
            selectNav (item) {
                this.$router.push(item);
            },
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                var h;
                h = document.documentElement.clientHeight;
                vm.$data.rootHeihgt = (h-60)+'px';
                window.onresize = function() {
                    h = document.documentElement.clientHeight;
                    vm.$data.rootHeihgt = (h-60)+'px';
                };
            })
        },

    }
</script>
