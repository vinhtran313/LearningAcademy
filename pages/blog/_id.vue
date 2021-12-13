<template>
  <div class="container">
    <div id="blog" style="margin-top: 50px">
      <a-row
        type="flex"
        justify="center"
        align="top"
        style="margin-left: -15px; margin-right: -15px; row-gap: 0px"
      >
        <a-col :span="24">
          <div class="title">
            <h4>{{ blogData.title }}</h4>
          </div>
        </a-col>
        <div class="content" v-html="blogData.content"></div>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  fetch() {
    this.fetchData();
  },
  data() {
    return {
      blogData: {},
    };
  },
  head() {
    return {
      title: "Future Academy",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "My custom description",
        },
      ],
    };
  },
  methods: {
    async fetchData() {
      let id = this.$route.params.id;
      let res = await this.$axios.$get(`/news/${id}`);
      this.blogData = res;
      var output = this.decode(this.blogData.content);
      this.blogData.content = output;
    },
    decode(html) {
      if (process.browser) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
      }
    },
  },
};
</script>

<style lang="scss">
#blog {
  .content {
    background-color: #fff;
    padding: 25px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background-image: url("/media/list-lesson-bg.png");
    background-repeat: no-repeat;
    background-position: 100%;
    text-align: center;
    p {
      -webkit-text-stroke-width: 0 px;
      box-sizing: border-box;
      color: rgb(241, 90, 36);
      font-family: "r0c0i Regular";
      font-size: 14px;
      font-style: normal;
      font-variant-caps: normal;
      font-variant-ligatures: normal;
      font-weight: 400;
      letter-spacing: normal;
      margin-bottom: 1rem;
      margin-top: 0px;
      orphans: 2;
      padding-left: 10px;
      padding-right: 10px;
      text-align: left;
      text-decoration-color: initial;
      text-decoration-style: initial;
      text-decoration-thickness: initial;
      text-indent: 0px;
      text-transform: none;
      white-space: normal;
      widows: 2;
      word-spacing: 0px;
      strong {
        font-family: "r0c0i bold";
      }
    }
  }
  .title {
    padding: 5px 10px;
    text-align: center;
    background-color: #ff6c29;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-image: url("/media/course-bg-1.png"),
      url("/media/course-bg-2.png");
    background-repeat: no-repeat, no-repeat;
    background-position: 0 100%, 100% 0;
    h4 {
      font-size: 35px;
      color: #fff;
      font-family: "icielCadena";
      text-transform: uppercase;
    }
  }
}
@media only screen and (max-width: 992px) {
  #blog .content {
    max-width: 100%;
    img {
      max-width: 100%;
    }
  }
}
</style>