const routes = [
{
    path: '/',
    name:'导航一',
    icon:'ios-navigate',
    type:'1',
    component: function(resolve) {
        require(['../index/index.vue'], resolve);
    },
    children: [{
        path: '/',
        component: function(resolve) {
            require(['../page/page.vue'], resolve);
        },
        name: '1',
        title:'loading',
    }, {
        path: '/page2',
        component: function(resolve) {
            require(['../page/page2.vue'], resolve);
        },
        name: '1',
        title:'table',
    }, {
        path: '/page3',
        component: function(resolve) {
            require(['../page/page3.vue'], resolve);
        },
        name: '1',
        title:'upload'
    }]
},
{
    path: '/',
    name:'导航二',
    icon:'ios-keypad',
    type:'2',
    component: function(resolve) {
        require(['../index/index.vue'], resolve);
    },
    children: [{
        path: '/tree',
        component: function(resolve) {
            require(['../tree/tree.vue'], resolve);
        },
        name: '2',
        title:'tree'
    }, {
        path: '/switch',
        component: function(resolve) {
            require(['../switch/switch.vue'], resolve);
        },
        name: '2',
        title:'switch'
    }, {
        path: '/form',
        component: function(resolve) {
            require(['../form/form.vue'], resolve);
        },
        name: '2',
        title:'form'
    }]
}];
module.exports = routes;