<template>
  <div v-if="dataVideo.videoId" class="video">
    <div class="container__iframe">
      <iframe
        class="container__iframe--iframe"
        id="ytplayer"
        type="text/html"
        width="500"
        height="500"
        :src="'http://www.youtube.com/embed/' + dataVideo.videoId"
        frameborder="0"
      />
    </div>
    <div class="video__container">
      <h1 class="video__container--title">{{ dataVideo.title }}</h1>
      <p class="video__container--description">{{ dataVideo.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataVideo: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style lang="scss" scoped>
.video {
  margin: 35px;
  padding: 25px;
  border-radius: 25px;
  border: 1px solid white;
  // margin-bottom: 100px;
  .container__iframe {
    &--iframe {
      border-radius: 10px;
      -webkit-box-shadow: 0 10px 6px -6px #777;
      -moz-box-shadow: 0 10px 6px -6px #777;
      box-shadow: 0 10px 6px -6px #777;
    }
  }

  &__container {
  }
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    &__container {
      max-width: 50%;
      &--title {
        width: 100%;
        line-height: 1.2em;
      }
      &--description {
        padding: 5px 20px;
      }
    }
  }
}
</style>