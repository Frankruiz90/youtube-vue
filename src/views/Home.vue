<template>
  <div class="home">
    <img-video :videosYoutube="videosYoutube" @videoSelected='callVideo($event)' />
    <iframe-youtube :dataVideo="newDataVideo"/>
  </div>
</template>

<script>
// @ is an alias to /src
import { connectYoutube } from "../crudYoutube";
import ImgVideo from "../components/ImgVideo";
import IframeYoutube from "../components/IframeYoutube";
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
      newDataVideo:{}
    };
  },
  components: {
    ImgVideo,
    IframeYoutube
  },
  created() {
    this.youtubeCall();
  },
  methods: {
    callVideo(dataVideo) {
      this.newDataVideo = dataVideo
      console.log('estoy en home',this.newDataVideo);
    },
    async youtubeCall() {
      try {
        const response = await connectYoutube(
          this.key,
          this.channelId,
          this.resForPage
        );
        if (response && response.data && response.data.items) {
          // this.videosYoutube = response;
          // console.log('in if',this.videosYoutube);
          // response.data.forEach((element) => {
          //   console.log(element);
          //   this.videosYoutube.push(element);
          // });
          this.videosYoutube = response.data;
          console.log(this.videosYoutube);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
