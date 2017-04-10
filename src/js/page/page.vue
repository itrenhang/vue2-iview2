
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
                <i-col class="demo-spin-col" style="zIndex:1">
                    <Spin fix>
                        <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
                        <div>Loading</div>
                    </Spin>
                </i-col>
            </div>
        </div>
    </div>
</template>
<script>
export default {
         data () {
            return {
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                
            })
        },
    }
</script>
<style>

</style>