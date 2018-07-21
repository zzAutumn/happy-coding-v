<template>
  <Timeline>
    <TimelineItem pending="true">
      <Icon type="android-star" slot="dot"></Icon>
      <p class="time"><router-link to="/year-2010">2010年</router-link></p>
      <p class="content">高二：我们成为了同桌</p>
    </TimelineItem>
    <TimelineItem>
      <Icon type="android-favorite" slot="dot"></Icon>
      <p class="time"><router-link to="/year-2012">2012年</router-link></p>
      <p class="content">高三：我们经历了高考，然后去了各自的大学</p>
    </TimelineItem>
    <TimelineItem>
      <Icon type="social-octocat" slot="dot"></Icon>
      <p class="time"><router-link to="/year-2016">2016年</router-link></p>
      <p class="content">大学毕业的时候我们一起去了成都</p>
    </TimelineItem>
    <TimelineItem>
      <Icon type="android-boat" slot="dot"></Icon>
      <p class="time"><router-link to="/year-2017">2017年</router-link></p>
      <p class="content">你来北京，我们一起去了故宫、颐和园......</p>
    </TimelineItem>
    <TimelineItem>
      <Icon type="social-snapchat-outline" slot="dot"></Icon>
      <p class="time">2018年</p>
      <p class="content">我来上海工作，我们一起去了迪士尼</p>
    </TimelineItem>
    <TimelineItem>
      <Icon type="android-send" slot="dot"></Icon>
      <p class="time">未来</p>
      <p class="content">以后我们还要一起去更多的地方看看......</p>
    </TimelineItem>
  </Timeline>
</template>

<script>
export default {
  name: 'MyTimeLine',
  data () {
    return {
      red: 'red'
    }
  }
}
</script>

<style scoped>
.ivu-timeline{
  margin-left: 10px;
}
.time{
  font-size: 14px;
  font-weight: bold;
}
.content{
  padding-left: 5px;
}
</style>
