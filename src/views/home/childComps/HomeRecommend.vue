<template>
  <div class="home-recommend">
    <div v-for="item in recommends" class="home-recommend-item">
      <a :href="item.link">
        <img :src="item.image">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HomeRecommend",
        props:{
          recommends: {
            type: Array,
            default() {
              return [];
            }
          }
        }

    }
</script>

<style scoped>
  .home-recommend{
    display: flex;
    width: 100%;
    text-align: center;
    padding: 5px;
    border-bottom: 10px solid #eee;
  }

  .home-recommend-item{
    flex: 1;
  }

  .home-recommend-item img{
    width: 70px;
    height: 65px;
    border-radius: 100%;

  }
</style>
