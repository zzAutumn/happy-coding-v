<template>
  <div class="future">
    <page-header></page-header>
    <div  class="card-container" style="background:#eee;padding: 20px">
      <Card :bordered="false">
          <p slot="title">谈谈未来</p>
          <div class="weather-img">
            <img src="../../assets/weather3.svg">
          </div>
          <h5 class="title">en~~~</h5>
          <h5 class="content">
            我觉得我可能会写得毫无头绪，就想到什么写什么了。遇见你，喜欢你，和你在一起是我觉得很开心的事。我觉得自己也是很自私，只顾自己的想法和追求，有个人能够容忍我，接受我并且也说喜欢我，对我来说是很幸福的一件事。
            几个月前，我还以为我们可以一起过周年纪念日......
            我不擅长说你喜欢听的话，甚至有时候很想你，也不会跟你说。
            觉得高中的日子很好，这样就可以和你天天在一起。
            现在觉得不想过周末，无聊，不过还好,我还可以和电脑玩耍，哈哈~~，所以我现在的生活跟以前一样，工作，一个人的生活，然后和你聊天。
            其实我很矛盾，想让你来上海找工作，是因为我觉得你可以做些不一样的工作，能力是慢慢锻炼的，只要你不怕辛苦，不要没有尝试就说自己不行。另一方面，来上海工作，你家里人肯定又会像上次
            那样很不放心，不说你妈妈可能会发现我们的事情，让你一个人在外面生活，不像家里那样舒适，周末也约不到丹哥，这些我觉得对你来说都是挑战吧。
            以前喜欢你，只是单纯的喜欢，也不在乎你是不是也喜欢我，我觉得
            你可以找到更好的人，只要你过得好就行了。
            恋爱一年了，但是我也不知道恋爱该有的样子是什么样的。我觉得应
            该是两个人一起努力，过着简单的生活那样子吧。
            关于未来，我们前面还有很多困难，但是我也不想去想那么多，每天做好自己的事情就可以了。至于到时候怎么样，我没有办法预测。但是，只要你还喜欢我，你还不说放弃，我会一直在你这边。
          </h5>
          <div class="face-img">
            <img src="../../assets/face-kiss.svg">
          </div>
          <h5 class="card-foot">Happy First Anniversary & I Love You</h5>
      </Card>
    </div>
    <page-footer class="footer-layout"></page-footer>
  </div>
</template>

<script>
import PageHeader from '@/components/pages/PageHeader'
import PageFooter from '@/components/pages/PageFooter'
export default {
  components: {
    PageHeader,
    PageFooter
  }
}
</script>

<style scoped>
.footer-layout{
  position: fixed;
}
.card-container{
  margin: 10px auto;
}
.weather-img,.face-img{
  width: 40px;
  height: 40px;
}
.weather-img > img{
  width: 100%;
  height: 100%;
}
.face-img > img{
  width: 100%;
  height: 100%;
}
h5[class='title']{
  text-indent: 2em;
}
h5[class='content']{
  margin-bottom: 10px;
}
h5[class='card-foot']{
  text-align: center;
  margin-bottom: 30px;
  text-shadow: 2px 2px 2px #bbbec4;
}
</style>
