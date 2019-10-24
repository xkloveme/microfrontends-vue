/*
 * @describe: 描述
 * @Author: superDragon
 * @Date: 2019-10-24 15:18:34
 * @LastEditors: superDragon
 * @LastEditTime: 2019-10-24 18:38:13
 */
/**
 * @author Kuitos
 * @since 2019-05-16
 */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue';
import App from './App';
import './index.css';

Vue.use(ElementUI);

let instance = null;

export async function bootstrap () {
  console.log('react app bootstraped');
}

export async function mount (props) {
  console.log('props from main framework', props);
  instance = new Vue({
    el: '#vueRoot',
    render: h => h(App),
  });
}

export async function unmount () {
  instance.$destroy();
  instance = null;
}
new Vue({
  el: '#vueRoot',
  render: h => h(App),
});