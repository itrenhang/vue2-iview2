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
                    <Tree :data="baseData" show-checkbox></Tree>
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
                baseData: [{
                    expand: true,
                    title: '所有门店',
                    children: [{
                        title: '北京',
                        expand: true,
                        disabled: true,
                        children: [{
                            title: '北苑路',
                            disableCheckbox: true
                        }, {
                            title: '天通苑',
                        }]
                    }, {
                        title: '上海',
                        expand: true,
                        checked: true,
                        children: [{
                            title: '徐汇',
                        }]
                    }]
                }]
            }
        },
        methods:{
            
        }
    }
</script>
<style>

</style>