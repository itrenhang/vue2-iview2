import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router';
// import bootstrapCss from '../../../node_modules/bootstrap/dist/css/bootstrap.css';
// import bootstrapJs from '../../../node_modules/bootstrap/dist/js/bootstrap.js';
import '../../css/index.css';
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS


Vue.use(VueRouter);
Vue.use(iView);

const router = new VueRouter({
	// mode: 'history',
	routes:routes,
});

const app = new Vue({
	router:router
}).$mount('#app');
