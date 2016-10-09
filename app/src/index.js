import store from './store/store.js';

const Vue = window.Vue;
// const Vuex = window.Vuex;

// Vue.use(Vuex);

require.ensure(['./base/router/routers.js', 'vue-resource', 'vue-router', '_'], (require) => {
  // import bridge from 'bridge';
  // import AppData from 'appData';
  // import Toast from 'vux-components/toast';
  // import Loading from 'vux-components/loading';

  // import routerConfig from './base/router/routers.js';
  // const store = require('vuex');
  const routerConfig = require('./base/router/routers.js');
  const VueResource = require('vue-resource');
  // const Vuex = require('vuex');
  // import pageConfig from './js/page-title.config.js';
  //
  const VueRouter = require('vue-router');
  //
  // 插件
  // let hasDisableScroller = true;
  // const scrollRouterList = ['deposit-help-info',
  //   'charge-guide-hk', 'rate-desc',
  //   'charge-guide',
  //   'charge-us',
  // ];


  // bridge.init();
  // 不显示关闭按钮
  // bridge.initClose(0);
  // 需要刷新
  // bridge.initRefresh(0);

  Vue.use(VueRouter);

  Vue.use(VueResource);
  Vue.http.options.emulateJSON = true;
  // 开启跨域
  Vue.http.options.xhr = {
    withCredentials: true,
  };

  // 路由系统配置
  const router = new VueRouter({
    saveScrollPosition: true,
  });

  routerConfig(router);

  function touchmoveHandle(e) {
    e.preventDefault();
  }

  function disableScroller() {
    /**
     * 禁用滚动
     */
    document.addEventListener('touchmove', touchmoveHandle, false);
  }

  console.log('store', store);
  const App = Vue.extend({
    components: {
      // toast: Toast,
      // loading: Loading,
    },
    store,
    data() {
      return {
        toast: {
          error: false,
          text: false,
          success: false,
          showContent: '',
        },
        loading: {
          show: false,
          text: '处理中...',
        },
        blockShow: false,
      };
    },
    ready() {
      disableScroller();
    },
    methods: {
      getRate(type) {
        console.log(type);
        // return _.find(AppData.moneyExchangeList(), (item) => {
        //   return item.ratename === type;
        // });
      },
      showToast: (text, type) => {
        switch (type) {
          case 'cancel':
            this.toast.error = true;
            break;
          case 'success':
            this.toast.success = true;
            break;
          default:
            this.toast.text = true;
        }
        this.toast.showContent = text;
      },
      showLoading(isShow, text) {
        this.loading.show = isShow;
        if (text) {
          this.loading.text = text;
        }
      },
      /**
       * 路由后退
       */
      goBack: () => {
        window.history.go(-1);
      },
    },
  });

  // router.beforeEach((transition) => {
  // const random = Math.random(1000) * 10000;
  // if (transition.from.name === 'charge' && AppData.get('showBankList')) {
  //   AppData.set('event:bankList', random);
  //   router.go({
  //     name: 'charge',
  //   });
  // } else {
  // transition.next();
  // }
  // });


  // router.afterEach((transition) => {
  // pageConfig.setTitle(transition.to.name);
  // if (scrollRouterList.indexOf(transition.to.name) > -1) {
  //   hasDisableScroller = false;
  //   document.removeEventListener('touchmove', touchmoveHandle);
  // } else if (!hasDisableScroller) {
  //   disableScroller();
  // }
  // });

  router.start(App, '#app');
});
