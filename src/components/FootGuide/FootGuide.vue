<template>
  <div class="footer-guide">
    <span class="guide-item " :class="{on:$route.path==='/msite'}" @click="goto('/msite')" >
        <span>
            <i class="iconfont icon-16gl-U"></i>
        </span>
        <span>首页</span>
    </span>
    <span class="guide-item" :class="{on:$route.path==='/search'}" @click="goto('/search')" >
        <span>
            <i class="iconfont icon-search"></i>
        </span>
        <span>搜索</span>
    </span>
    <span class="guide-item" :class="{on:$route.path==='/order'}" @click="goto('/order')" >
        <span>
            <i class="iconfont icon-dingdan"></i>
        </span>
        <span>订单</span>
    </span>
    <span class="guide-item" :class="{on:$route.path==='/profile'}" @click="goto('/profile')" >
        <span>
            <i class="iconfont icon-a-gerenyonghu"></i>
        </span>
        <span>我的</span>
    </span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      methods:{
          name:'FootGuide',
          goto(path){
            // 编程式路由跳转
            this.$router.replace(path)  //replace 不能进行返回
          }
      }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    @import '../../common/stylus/minxins.styl'
    .footer-guide{
        display flex
        top-border-1px(#cccccc)
        position fixed
        left 0
        bottom 0
        height 50px
        width 100%
        }
        .guide-item
            display flex
            width 25%
            // background: red
            flex-direction: column
            align-items: center
            justify-content: center
            &.on //&:父级引用
                color $green
            span
                // display: flex
                // background: yellow
                font-size: 12px
                i
                    font-size: 22px
            
            
</style>
