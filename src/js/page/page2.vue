
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
                    <Table :columns="columns1" :data="data1"></Table>

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
                columns1: [
                    {
                        title: '姓名',
                        key: 'name',
                        render (row, column, index) {
                            return `<Icon type="person"></Icon> <strong>${row.name}</strong>`;
                        }
                    },
                    {
                        title: '年龄',
                        key: 'age',
                        sortable: true,
                    },
                    {
                        title: '地址',
                        key: 'address',
                        filters: [
                            {
                                label: '北京',
                                value: '北京'
                            },
                            {
                                label: '上海',
                                value: '上海'
                            },
                            {
                                label: '深圳',
                                value: '深圳'
                            }
                        ],
                        filterMethod (value, row) {
                            return row.address.indexOf(value) > -1;
                        }
                    }
                ],
                data1: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居',
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    }
                ]
            }
        },
        created(){
            
        },
        methods:{
            
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                
            })
        },
    }
</script>
<style>

</style>