<template>
  <div>
    <x-header :left-options="{backText: ''}">
      {{title}}
    </x-header>

    <swiper loop auto :list="demo01_list" v-model="demo01_index" @on-index-change="demo01_onIndexChange"></swiper>

    <tab>
      <tab-item selected @on-item-click="onItemClick">汪星人</tab-item>
      <tab-item @on-item-click="onItemClick">喵星人</tab-item>
      <tab-item @on-item-click="onItemClick">小动物</tab-item>
    </tab>

    <swiper class="grid-btns">
      <swiper-item>
        <grid>
          <grid-item label="Grid" v-for="i in 4" :key="i">
            <!-- <img slot="icon" src="../assets/grid_icon.png"> -->
            {{i}}
          </grid-item>
        </grid>
      </swiper-item>
      <swiper-item>
        <grid>
          <grid-item label="Grid" v-for="i in 4" :key="i">
            <!-- <img slot="icon" src="../assets/grid_icon.png"> -->
            {{i}}
          </grid-item>
        </grid>
      </swiper-item>
    </swiper>

  </div>
</template>

<script>
import { XHeader, Swiper, SwiperItem, Tab, TabItem, Grid, GridItem } from 'vux'
import * as api from '../store/api'

const baseList = [{
  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
  title: '送你一朵fua'
}, {
  img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
  title: '送你一辆车'
}, {
  img: 'https://static.vux.li/demo/5.jpg', // 404
  title: '送你一次旅行',
  fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
}]

export default {
  components: {
    XHeader,
    Swiper,
    SwiperItem,
    Tab,
    TabItem,
    Grid,
    GridItem
  },
  data () {
    return {
      title: '首页',
      demo01_list: baseList,
      demo01_index: 0,
      info: null
    }
  },
  mounted () {
    let self = this
    this.$http.post(api.homeBannerApi, {
      SearchCond_1: "",
      OrderBy_1: " SysID",
      PageSize: 99999
    }).then(response => (
      // this.info = response
      console.log(response)
    )).catch(function (error) { // 请求失败处理
      console.log(error)
    })
  },
  methods: {
    demo01_onIndexChange (index) {
      this.demo01_index = index
    },
    onItemClick (index) {
      console.log('on item click:', index)
    }
  }
}
</script>

<style lang="less">
  .grid-btns {
    height: 200px;
    background-color: #eee;

    .vux-indicator {
      left: 50%;
      right: initial;
      margin-left: -10px;

      a {
        .vux-icon-dot {
          &.active {
            width: 12px;
          }
        }
      }
    }
  }
</style>
