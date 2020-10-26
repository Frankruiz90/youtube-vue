<template>
  <div class="images">
    <div v-for="(video, index) in videosYoutube.items" :key="index" class="images__container">
      <img :src="video.snippet.thumbnails.default.url" alt="" class="images__container--image" @click="videoSelected(video.id.videoId,video.snippet.title,video.snippet.description)">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    videoSelected(videoId, title, description) {
      let dataVideo ={'videoId':videoId,'title':title,'description':description}
      console.log(dataVideo);
      this.$emit('videoSelected',dataVideo)
    }
  },
  props: {
    videosYoutube: {
      type: Object,
      default: [],
    },
  },
};
</script>

<style lang="scss" scoped>
.images {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
  overflow: auto;
  &__container {
    margin: 5px 10px;
    &--image {
      cursor: pointer;
    }
  }

}
</style>