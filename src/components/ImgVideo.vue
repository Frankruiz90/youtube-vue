<template>
  <div class="images images__scrollbar">
    <button
      class="images__button"
      v-if="videosYoutube.prevPageToken"
      @click="PrevPage(videosYoutube.prevPageToken)"
    >
      <i class="material-icons">navigate_before</i>
    </button>
    <div
      v-for="(image, index) in videosYoutube.items"
      :key="index"
      class="images__container"
    >
      <img
        :src="image.snippet.thumbnails.default.url"
        alt=""
        class="images__container--image"
        @click="
          videoSelected(
            image.id.videoId,
            image.snippet.title,
            image.snippet.description
          )
        "
      />
      <p class="images__container--title">{{ image.snippet.title }}</p>
    </div>
    <button
      class="images__button"
      v-if="videosYoutube.nextPageToken"
      @click="sendNextPage(videosYoutube.nextPageToken)"
    >
      <i class="material-icons">navigate_next</i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    /**
     * function emit the video selected for play
     */
    videoSelected(videoId, title, description) {
      let dataVideo = {
        videoId: videoId,
        title: title,
        description: description,
      };
      this.$emit("videoSelected", dataVideo);
    },
    /**
     * function emit event netx page
     */
    sendNextPage(nextPage) {
      this.$emit("nextPageToken", nextPage);
    },
      /**
     * function emit event preview page
     */
    PrevPage(prevPage) {
      this.$emit("prevPageToken", prevPage);
    },
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
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: stretch;
  overflow: auto;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 200px;
  border-radius: 25px;
  border: solid 1px white;
  margin: 0 25px;
  padding-top: 50px;
  &__button {
    height: 50px;
    background: transparent;
    border: none;
    color: white;
    transition: all 0.5s;

    .material-icons {
      font-size: 35px;
      cursor: pointer;
    }
    &:hover {
      font-size: 40px;
    }
    &:focus {
      border: none;
      outline: none;
    }
  }
  &__scrollbar {
    scroll-behavior: smooth;
    overflow: auto;
    overflow-y: hidden;

    &::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }
    &::-webkit-scrollbar-track {
      background: #e4eaea;
      border-radius: 25px;
      opacity: 0.9;
      width: 5px;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background: #949a9a;
      border-radius: 10px;
      opacity: 0.9;
      width: 5px;
    }
  }
  &__container {
    margin: 5px 10px;
    height: 100%;
    &--image {
      cursor: pointer;
      transition: all 0.5s;
      &:hover {
        width: 125px;
      }
    }
    &--title {
      height: 210px;
      font-size: 12px;
    }
  }
}
</style>