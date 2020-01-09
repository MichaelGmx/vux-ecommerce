<template>
  <div id="app">
    <router-view></router-view>
    <tabbar>
      <tabbar-item>
        <img slot="icon" src="./assets/demo/icon_nav_button.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon" src="./assets/demo/icon_nav_msg.png">
        <span slot="label">活动</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="./assets/demo/icon_nav_button.png">
        <span slot="label">社区</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="./assets/demo/icon_nav_article.png">
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon" src="./assets/demo/icon_nav_cell.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import Home from '@/page/Home'
import BannerItem from '@/page/HelloFromVux'

import { Tabbar, TabbarItem } from 'vux'

export default {
  name: 'app',
  components: {
    Home,
    BannerItem,
    Tabbar,
    TabbarItem
  },
  data () {
    return {
      title: '首页'
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
