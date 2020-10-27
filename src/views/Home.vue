<template>
  <div class="home home__container">
    <div class="container__logo">
      <img src="../assets/img/logo.svg" class="container__logo--logo" alt="" />
      <h1 class="container__logo--text">Experimentality</h1>
    </div>
    <search-youtube @newVideos="updateVideos($event)" />
    <img-video
      :videosYoutube="videosYoutube"
      @videoSelected="callVideo($event)"
      @nextPageToken="nextPage($event)"
      @prevPageToken="prevPage($event)"
    />
    <iframe-youtube :dataVideo="newDataVideo" />
  </div>
</template>

<script>
// @ is an alias to /src
import {
  connectYoutube,
  searchYoutube,
  newPage,
  oldPage,
} from "../crudYoutube";
import ImgVideo from "../components/ImgVideo";
import IframeYoutube from "../components/IframeYoutube";
import SearchYoutube from "../components/SearchYoutube";
export default {
  name: "Home",
  data() {
    return {
      key: "AIzaSyA9BuDGkZT53Nrp1eYY-xdQIQi7f799XOA",
      channelId: "UCINawo364C-NCXc_n-3bxOw",
      nextPageToken: "",
      resForPage: 6,
      pages: 1,
      url: null,
      videosYoutube: [],
      newDataVideo: {},
    };
  },
  components: {
    ImgVideo,
    IframeYoutube,
    SearchYoutube,
  },
  created() {
    this.youtubeCall();
  },
  methods: {
    /**
     * call function preview page
     */
    async prevPage(prevPageToken) {
      try {
        const response = await oldPage(
          this.key,
          this.resForPage,
          prevPageToken
        );
        this.videosYoutube = response.data;
      } catch (error) {
        console.log(error);
      }
    },
       /**
     * call function next page
     */
    async nextPage(nextPageToken) {
      try {
        const response = await newPage(
          this.key,
          this.resForPage,
          nextPageToken
        );
        this.videosYoutube = response.data;
      } catch (error) {
        console.log(error);
      }
    },
       /**
     * call function search video
     */
    async updateVideos(newDataVideos) {
      try {
        const response = await searchYoutube(
          this.key,
          this.resForPage,
          newDataVideos
        );
        if (response && response.data) {
          this.videosYoutube = response.data;
        }
      } catch (error) {}
    },
    callVideo(dataVideo) {
      this.newDataVideo = dataVideo;
    },
       /**
     * call function initialiced youtube
     */
    async youtubeCall() {
      try {
        const response = await connectYoutube(
          this.key,
          this.channelId,
          this.resForPage
        );
        if (response && response.data && response.data.items) {
          this.videosYoutube = response.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  position: relative;
  &__container {
    background: -webkit-linear-gradient(
      left,
      rgba(0, 187, 255, 1) 0%,
      rgba(136, 200, 156, 1) 50%,
      rgba(161, 203, 0, 1) 100%
    );
    clip-path: ellipse(71% 68% at 40% 26%);
    .container__logo {
      position: absolute;
      left: 0;
      display: flex;
      &--logo {
        height: 55px;
        margin: 10px 20px;
      }
      &--text {
        font-size: 40px;
        color: #fff;
        margin: 0 auto;
        text-align: center;
        text-shadow: 4px 3px 0 #34d16e;
        font-weight: 700;
        margin-top: 24px;
      }
    }
  }
  height: auto;
  padding-bottom: 210px;
}
</style>
