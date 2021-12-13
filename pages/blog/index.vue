<template>
  <div class="container">
    <div id="blog" style="margin-top: 50px">
      <a-row
        type="flex"
        justify="center"
        style="margin-left: -15px; margin-right: -15px; row-gap: 0px"
      >
        <a-col :span="24" style="padding-left: 15px; padding-right: 15px">
          <div class="title">
            <h4>News</h4>
          </div>
        </a-col>
      </a-row>
      <div class="content">
        <a-row
          type="flex"
          justify="start"
          style="padding-left: 15px; padding-right: 15px; row-gap: 30px"
        >
          <a-col
            :span="6"
            :xs="24"
            :md="12"
            :lg="6"
            v-for="(item, index) in listBlogs"
            :key="index"
            style="padding: 0 15px"
          >
            <NuxtLink :to="`/blog/${item._id}`">
              <div class="text-center item">
                <div class="wrapper">
                  <div class="blog-item-image">
                    <img :src="item.thumbnail" alt="" class="img-responsive" />
                  </div>
                  <div class="text">
                    <h5>{{ item.title }}</h5>
                    <button>Read more</button>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  fetch() {
    this.fetchData();
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
  data() {
    return {
      listBlogs: [],
    };
  },
  methods: {
    async fetchData() {
      let res = await this.$axios.$get("/news");
      this.listBlogs = res.results;
    },
  },
};
</script>

<style lang="scss">
#blog {
  .title {
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
  .content {
    background-color: #fff;
    padding: 25px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background-image: url("/media/list-lesson-bg.png");
    background-repeat: no-repeat;
    background-position: 100%;
    text-align: center;
    .item {
      height: 100%;
    }
    .wrapper {
      cursor: pointer;
      border-radius: 20px;
      border: 5px solid transparent;
      background-color: #ffe8df;
      padding: 10px;
      height: 100%;
      &:hover {
        border: 5px solid #00d847;
        background-color: #efffdf;
      }
      .blog-item-image {
        min-height: 180px;
        img {
          border-radius: 20px;
        }
      }
      .text {
        h5 {
          font-family: "r0c0i Regular";
          font-size: 18px;
          color: #ff6c29;
          text-transform: capitalize;
        }
        button {
          margin-top: 10px;
          font-family: "r0c0i Regular";
          font-size: 18px;
          background-color: #ff6c29;
          color: #fff;
          border: 0;
          padding: 5px;
          min-width: 133px;
          border-radius: 20px;
        }
      }
    }
  }
}
</style>