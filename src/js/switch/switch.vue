<template>
    <div>
        <div class="layout-breadcrumb">
            <Breadcrumb>
                <Breadcrumb-item href="#">首页</Breadcrumb-item>
                <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                <Breadcrumb-item>某应用</Breadcrumb-item>
            </Breadcrumb>
        </div>
        <div class="layout-content">
            <div class="layout-content-main">
                <i-col class="demo-spin-col" v-show="isAjaxOk">
                    <Spin fix>
                        <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
                        <div>Loading</div>
                    </Spin>
                </i-col>
                <div v-show="!isAjaxOk">
                    <div>
                        <iSwitch @on-change="change"></iSwitch>
                    </div>
                    <!-- Checkbox -->
                    <div>
                        <Checkbox-group v-model="social">
                            <Checkbox label="twitter">
                                <Icon type="social-twitter"></Icon>
                                <span>Twitter</span>
                            </Checkbox>
                            <Checkbox label="facebook">
                                <Icon type="social-facebook"></Icon>
                                <span>Facebook</span>
                            </Checkbox>
                            <Checkbox label="github">
                                <Icon type="social-github"></Icon>
                                <span>Github</span>
                            </Checkbox>
                            <Checkbox label="snapchat">
                                <Icon type="social-snapchat"></Icon>
                                <span>Snapchat</span>
                            </Checkbox>
                        </Checkbox-group>
                        <div>{{social}}</div>
                        <Checkbox-group v-model="fruit">
                            <Checkbox label="香蕉"></Checkbox>
                            <Checkbox label="苹果"></Checkbox>
                            <Checkbox label="西瓜"></Checkbox>
                        </Checkbox-group>
                        <div>{{fruit}}</div>
                    </div>
                    <!-- Radio -->
                    <div>
                        <Radio-group v-model="phone">
                            <Radio label="apple">
                                <Icon type="social-apple"></Icon>
                                <span>Apple</span>
                            </Radio>
                            <Radio label="android">
                                <Icon type="social-android"></Icon>
                                <span>Android</span>
                            </Radio>
                            <Radio label="windows">
                                <Icon type="social-windows"></Icon>
                                <span>Windows</span>
                            </Radio>
                        </Radio-group>
                        <div>{{phone}}</div>
                        <Radio-group v-model="animal">
                            <Radio label="金斑蝶"></Radio>
                            <Radio label="爪哇犀牛"></Radio>
                            <Radio label="印度黑羚"></Radio>
                        </Radio-group>
                        <div>{{animal}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>
<script>
export default {
        data () {
            return {
                isAjaxOk:false,
                social: ['facebook', 'github'],
                fruit: ['苹果'],
                animal:'爪哇犀牛',
                phone:'apple'

            }
        },
        methods:{
            change (status) {
                this.$Message.info('开关状态：' + status);
                console.log(this.social)
            }
        }
    }
</script>
<style>

</style>