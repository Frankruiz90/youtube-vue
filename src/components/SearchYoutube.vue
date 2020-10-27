<template>
  <div class="search">
    <input
      type="text"
      v-model="search"
      name=""
      id=""
      placeholder="Bucar video..."
      @keypress.enter="searchVideos()"
      class="search__input"
    />
    <button class="search__button" @click="searchVideos()">
      <i class="material-icons">search</i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  methods: {
    /**
     * emit the string to search in youtube
     */
    async searchVideos() {
      this.$emit("newVideos", this.search);
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  padding: 50px 0;
  &__input {
    padding-left: 10px;
    margin: 5px 0;
    height: 50px;
    border-radius: 12px;
    background: none;
    color: white;
    font-size: 25px;
    border: 1px solid white;
    margin-right: 10px;
    box-shadow: 2px 2px 5px #999;
    &::before {
      opacity: 0.5;
    }
    &:focus {
      border: 2px solid #ff1d25;
    }
    &:focus {
      outline: none;
    }
  }
  &__button {
    border-radius: 100%;
    background: none;
    color: white;
    border: none;
    box-shadow: 2px 2px 5px #999;
    &:hover {
      color: blue;
    }
    &:focus {
      border: none;
      outline: none;
    }
  }
}
</style>