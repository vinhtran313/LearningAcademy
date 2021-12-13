<template>
  <div class="container">
    <div id="lesson-detail" v-if="orderLessons.length > 0">
      <a-row
        type="flex"
        justify="start"
        style="
          margin-left: -15px;
          margin-right: -15px;
          align-content: stretch;
          row-gap: 20px;
        "
      >
        <a-col
          :span="16"
          :xs="{ span: 24, order: 1 }"
          :md="{ span: 17, order: 1 }"
          :lg="{ span: 17, order: 1 }"
          style="padding-left: 15px; padding-right: 15px"
          v-if="curLesson"
        >
          <div class="title">
            <h4>{{ curLesson.title }}</h4>
          </div>
          <div class="video-responsive">
            <iframe
              width="100%"
              height="100%"
              frameborder="0"
              allowfullscreen="1"
              :src="curLesson.url.replace('embed?v=', 'embed/')"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </a-col>
        <a-col
          :span="8"
          :xs="{ span: 24, order: 3 }"
          :md="{ span: 7, order: 2 }"
          style="padding-left: 15px; padding-right: 15px"
        >
          <div class="title">
            <h4>Lessons</h4>
          </div>
          <div class="content">
            <div class="list-lessons">
              <div
                class="item"
                v-for="(item, index) in orderLessons"
                :key="item._id"
                v-bind:class="[
                  { gray: index % 2 == 0 },
                  { active: activeKey == item._id },
                ]"
                @click="activeKey = item._id"
              >
                <p>Lesson {{ item.order }} - {{ item.title }}</p>
              </div>
            </div>
          </div>
        </a-col>
        <a-col
          :span="16"
          :xs="{ span: 24, order: 2 }"
          :md="{ span: 20, order: 3 }"
          :lg="{ span: 17, order: 3 }"
          style="padding-left: 15px; padding-right: 15px"
          class="text-left"
        >
          <div class="rating">
            <a-row style="row-gap: 0px">
              <a-col :span="12" :xs="24" :md="12">
                <div class="wrapper">
                  <div class="text-left">
                    <span>Rating</span>
                  </div>
                  <div class="text-right">
                    <a-rate v-model="rating" disabled allowHalf></a-rate>
                  </div>
                </div>
                <div class="wrapper-content">
                  <span
                    ><a-icon
                      type="star"
                      :style="{ fontSize: '25px', color: '#ff6c29' }"
                    />{{ curLesson.rating.toFixed(1) }} / 5</span
                  >
                  <!-- <span
                    ><a-icon type="user" />{{
                      fakeListLesson[activeKey].numberStudents
                    }}</span
                  > -->
                </div>
              </a-col>
              <a-col :span="12" :xs="24" :md="12" class="text-right">
                <div class="wrapper-button">
                  <button @click="routingToExercise">Exercise</button>
                </div>
              </a-col>
            </a-row>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  middleware: "auth",
  async fetch() {
    await this.fetchLessons();
    this.fetchExercises();
  },
  data() {
    return {
      listLesson: [],
      activeKey: 1,
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
  computed: {
    rating() {
      let lessonRating = this.curLesson.rating;
      if (this.between(lessonRating, 0, 0.5)) {
        return 0.5;
      }
      if (this.between(lessonRating, 0.5, 1)) {
        return 1;
      }
      if (this.between(lessonRating, 1, 1.5)) {
        return 1.5;
      }
      if (this.between(lessonRating, 1.5, 2)) {
        return 2;
      }
      if (this.between(lessonRating, 2, 2.5)) {
        return 2.5;
      }
      if (this.between(lessonRating, 2.5, 3)) {
        return 3;
      }
      if (this.between(lessonRating, 3, 3.5)) {
        return 3.5;
      }
      if (this.between(lessonRating, 3.5, 4)) {
        return 4;
      }
      if (this.between(lessonRating, 4, 4.5)) {
        return 4.5;
      }
      if (this.between(lessonRating, 4.5, 5)) {
        return 5;
      }
    },

    orderLessons: {
      get: function () {
        return _.orderBy(this.listLesson, "order");
      },
    },
    curLesson: {
      get: function () {
        return this.orderLessons.find((el) => el._id == this.activeKey);
      },
    },
  },
  methods: {
    compare(a, b) {
      if (a.order < b.order) {
        return -1;
      }
      if (a.order > b.order) {
        return 1;
      }
      return 0;
    },
    between(x, min, max) {
      return x >= min && x <= max;
    },
    async fetchLessons() {
      try {
        let id = this.$route.params.id;
        let rs = await this.$axios.$get(
          `/study/lesson/?lectureId=${id}&limit=1000`
        );
        this.listLesson = rs.results;
        this.listLesson.sort((a, b) => a.order - b.order);
        this.activeKey = this.listLesson[0]._id;
      } catch (error) {
        return this.$nuxt.error({
          statusCode: error.statusCode,
          message: "The page you were looking for doesn't exist.",
        });
      }
    },
    async fetchExercises() {
      let rs = await this.$axios.$get(`/exercise?lessonId=${this.activeKey}`);
    },
    routingToExercise() {
      let lessonId = this.curLesson._id;
      // let nextLessonIndex =
      //   this.listLesson.findIndex((el) => this.curLesson._id == el._id) + 1;
      // let nextLessonId = this.listLesson[nextLessonIndex]._id;
      this.$store.commit("lesson/setCurLesson", lessonId);
      this.$router.push(`/exercise/${lessonId}`);
    },
  },
};
</script>

<style lang="scss">
#lesson-detail {
  margin-top: 50px;
  padding-bottom: 150px;
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
      font-size: 25px;
      color: #fff;
      font-family: "icielCadena";
      text-transform: uppercase;
    }
  }
  .video-responsive {
    height: calc(100% - 55px);
    max-height: 600px;
    background: url("/media/video-bg.png") no-repeat;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    display: flex;
    padding: 20px;
    min-height: 400px;
  }
  .content {
    background-color: #fff;
    background-image: url("/media/list-lesson-bg.png");
    background-repeat: no-repeat;
    background-position: 100%;
    text-align: center;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    height: 100%;
    max-height: 500px;
    overflow-y: scroll;
    .list-lessons {
      cursor: pointer;
      text-align: left;
      height: 100%;
      padding: 0;
      overflow-y: scroll;
      .item {
        padding: 10px 15px;
        font-family: "r0c0i Bold";
        font-size: 16px;
        color: #ff6c29;
        &.gray {
          background-color: #f2f2f2;
        }
        &:hover,
        &.active {
          color: #00d847;
        }
      }
    }
  }
  .rating {
    .wrapper {
      margin-top: 28px;
      background-color: #fff;
      padding: 10px 20px;
      border-radius: 23px;
      align-items: center;
      display: flex;
      justify-content: space-between;
      span {
        color: #ff6c29;
      }
    }
    .wrapper-content {
      margin-top: 10px;
      color: #ff6c29;
      display: flex;
      justify-content: flex-end;
      span {
        font-weight: 700;
        padding: 0 15px;
        font-family: "r0c0i Bold";
        font-size: 25px;
      }
    }
    .wrapper-button {
      margin-top: 20px;
      button {
        padding: 15px 50px;
        font-family: "iCielCadena";
        font-size: 28px;
        background-color: #f44;
        border: 5px solid #fff;
        color: #fff;
        line-height: 35px;
        border-radius: 42px;
        text-shadow: 2px 2px #c00000;
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .rating {
    padding-top: 25px;
  }
}
</style>