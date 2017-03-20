const routes = [{
    path: '/',
    component: function(resolve) {
        require(['../index/index.vue'], resolve);
    },
    children: [{
        path: '/',
        component: function(resolve) {
            require(['../page/page.vue'], resolve);
        },
        name: '1-/'
    }, {
        path: '/page2',
        component: function(resolve) {
            require(['../page/page2.vue'], resolve);
        },
        name: '1-/page2'
    }, {
        path: '/page3',
        component: function(resolve) {
            require(['../page/page3.vue'], resolve);
        },
        name: '1-/page3'
    },, {
        path: '/tree',
        component: function(resolve) {
            require(['../tree/tree.vue'], resolve);
        },
        name: '2-/tree'
    }, {
        path: '/switch',
        component: function(resolve) {
            require(['../switch/switch.vue'], resolve);
        },
        name: '2-/switch'
    }, {
        path: '/form',
        component: function(resolve) {
            require(['../form/form.vue'], resolve);
        },
        name: '2-/form'
    }]
}];
module.exports = routes;