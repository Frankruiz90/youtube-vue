<template>
  <div>
    <iframe
      id="ytplayer"
      type="text/html"
      width="260"
      height="260"
      :src="'http://www.youtube.com/embed/' + dataVideo.videoId"
      frameborder="0"
    />
    <h1>{{dataVideo.title}}</h1>
    <p>{{dataVideo.description}}</p>
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
</style>