<template>
  <div class="container">
    <div id="school-page" v-if="storeList.length > 0">
      <a-row
        type="flex"
        justify="center"
        style="margin-left: -15px; margin-right: -15px; row-gap: 0px"
      >
        <a-col
          :span="6"
          :xs="24"
          :md="6"
          style="padding-left: 15px; padding-right: 15px"
        >
          <a-collapse
            v-model="activeKey"
            :bordered="false"
            class="school-collapse"
            expandIconPosition="right"
          >
            <template #expandIcon="props">
              <a-icon type="caret-right" :rotate="props.isActive ? 90 : 0" />
            </template>

            <a-collapse-panel
              key="1"
              header="Pre-Primary"
              class="collapse-panel"
            >
              <ul>
                <li
                  v-for="level in storeList[0].classes"
                  :key="level.id"
                  class="gray"
                  v-bind:class="[classKey == level.id ? 'active' : '']"
                >
                  <NuxtLink :to="`/schools/${level.id}`">{{
                    level.classTitle
                  }}</NuxtLink>
                </li>
              </ul>
            </a-collapse-panel>
            <a-collapse-panel
              key="2"
              header="Elementary"
              class="collapse-panel"
            >
              <ul>
                <li
                  v-for="level in storeList[1].classes"
                  :key="level.id"
                  class="gray"
                  v-bind:class="[classKey == level.id ? 'active' : '']"
                >
                  <NuxtLink :to="`/schools/${level.id}`">{{
                    level.classTitle
                  }}</NuxtLink>
                </li>
                <li
                  class="gray"
                  v-bind:class="[
                    classKey == storeList[2].classes[0].id ? 'active' : '',
                  ]"
                >
                  <NuxtLink :to="`/schools/${storeList[2].classes[0].id}`">{{
                    storeList[2].classes[0].classTitle
                  }}</NuxtLink>
                </li>
              </ul>
            </a-collapse-panel>
            <a-collapse-panel
              key="3"
              header="Secondary School"
              class="collapse-panel"
            >
              <!-- <ul>
                <li
                  v-for="level in storeList[2].classes"
                  :key="level.id"
                  class="gray"
                  v-bind:class="[classKey == level.id ? 'active' : '']"
                >
                  <NuxtLink :to="`/schools/${level.id}`">{{
                    level.classTitle
                  }}</NuxtLink>
                </li>
              </ul> -->
            </a-collapse-panel>
            <!-- <a-collapse-panel
              key="4"
              header="High School"
              class="collapse-panel"
            >
              <ul>
                <li
                  v-for="level in storeList[3].classes"
                  :key="level.id"
                  class="gray"
                  v-bind:class="[classKey == level.id ? 'active' : '']"
                >
                  <NuxtLink :to="`/schools/${level.id}`">{{
                    level.classTitle
                  }}</NuxtLink>
                </li>
              </ul>
            </a-collapse-panel> -->
          </a-collapse>
        </a-col>
        <a-col
          :span="18"
          :xs="24"
          :md="18"
          style="padding-left: 15px; padding-right: 15px"
        >
          <div class="list-course">
            <div class="title">
              <h4>Courses</h4>
            </div>
            <div class="content">
              <VueSlickCarousel
                v-bind="carrouselSetting"
                v-if="listLectures.length"
              >
                <div
                  class="course-item-wrapper"
                  v-for="(item, index) in listLectures"
                  :key="index"
                >
                  <NuxtLink :to="`/lesson/${item._id}`">
                    <div class="course-item">
                      <div class="course-item-image">
                        <img
                          class="carrousel-image img-responsive"
                          :src="item.thumbnail"
                        />
                      </div>
                      <div class="course-item-content">
                        <h4>{{ item.title }}</h4>
                        <!-- <p>{{ item.description }}</p> -->
                      </div>
                    </div>
                  </NuxtLink>
                </div>
              </VueSlickCarousel>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";

import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: {
    VueSlickCarousel: VueSlickCarousel,
  },
  fetch() {
    this.fetchDataLecture();
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
      activeKey: ["1"],
      carrouselSetting: {
        focusOnSelect: true,
        speed: 500,
        infinite: false,
        centerPadding: "0px",
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows: false,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows: false,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows: false,
            },
          },
        ],
      },

      classKey: this.$route.params.id,
      listLectures: [],
    };
  },
  methods: {
    fetchDataLecture() {
      this.$axios
        .$get(`/study/lecture/?classId=${this.classKey}`)
        .then((res) => {
          this.listLectures = res.results;
          let element = this.$store.state.class.listClass.find((el) =>
            el.classes.some((item) => item.id == this.classKey)
          );
          this.activeKey = element.order;
        })
        .catch((e) => {
          return this.$nuxt.error({
            statusCode: e.statusCode,
            message: "The page you were looking for doesn't exist.",
          });
        });
    },
  },
  computed: {
    storeList: {
      get: function () {
        return this.$store.state.class.listClass;
      },
      set: function () {
        return;
      },
    },
  },
};
</script>

<style lang="scss">
#school-page {
  margin-top: 50px;
  .ant-collapse-header {
    background-color: #fff;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: #ff6c29;
    color: #fff;
    text-align: center;
    font-family: "iCielCadena";
    font-size: 20px;
    text-transform: uppercase;
  }
  .collapse-panel.ant-collapse-item-active .ant-collapse-header {
    background-color: #00d847;
  }
  .ant-collapse-content {
    background-color: #fff;
    color: rgba(0, 0, 0, 0.85);
  }
  .slick-dots li {
    button {
      width: 10px;
      height: 10px;
      &:before {
        width: 10px;
        height: 10px;
      }
    }
    &.slick-active {
      button {
        background-color: #f44;
      }
    }
    button {
      background-color: #b4b4b4;
      border-radius: 50%;
      &:before {
        content: "";
      }
    }
  }
}
.school-collapse {
  background-color: transparent;
}
.collapse-panel {
  margin-bottom: 40px;
  background-color: transparent;
  border: none !important;
  .ant-collapse-content {
    border: none;
    .ant-collapse-content-box {
      padding: 0;
      padding-top: 0 !important;
      li {
        text-align: center;
        list-style: none;
        padding: 15px 0;
        a {
          position: relative;
          font-size: 18px;
          color: #ff6c29;
          font-family: "r0c0i bold";
          &:before {
            content: "";
            width: 8px;
            height: 8px;
            position: absolute;
            background: #ff6c29;
            top: 30%;
            left: -20px;
            border-radius: 50%;
          }
        }
        &.active {
          a {
            color: #00d847;
            &:before {
              background: #00d847;
            }
          }
        }
        &:hover {
          a {
            color: #00d847;
            &:before {
              background: #00d847;
            }
          }
        }
      }
    }
    .gray {
      background-color: #f3f3f3;
    }
  }
}
.list-course {
  .content {
    background-color: #fff;
    padding: 25px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    h4 {
      font-size: 20px;
      color: #ff6c29;
      font-family: "icielCadena";
      text-transform: uppercase;
      margin: 5px 0;
    }
    .course-item-image {
      height: 150px;
      img {
        border-radius: 4px;
      }
    }
    .course-item-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 0 5px;
      p {
        text-align: justify;
        font-family: "r0c0i Regular";
        font-size: 16px;
        color: #5f5f5f;
      }
    }
  }
  .title {
    padding: 10px 0;
    text-align: center;
    background-color: #ff6c29;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-image: url("/media/course-bg-1.png"),
      url("/media/course-bg-2.png");
    background-repeat: no-repeat, no-repeat;
    background-position: 0 100%, 100% 0;
    h4 {
      font-size: 36px;
      color: #fff;
      font-family: "icielCadena";
      text-transform: uppercase;
    }
  }
}
.course-item-wrapper {
  padding: 0 15px;
}
.course-item {
  padding: 15px 5px;
  background-color: #ffe8df;
  border-radius: 20px;
  border: 4px solid transparent;
  &:hover {
    border: 4px solid #00d847;
    background-color: #efffdf;
  }
}
@media only screen and (max-width: 768px) {
  #school-page {
    .ant-collapse-header {
      font-size: 16px;
    }
  }
}
@media only screen and (max-width: 576px) {
  #school-page {
    .course-item {
      .course-item-image {
        max-height: 125px;
        text-align: center;
        img {
          max-height: 100%;
        }
      }
    }
  }
}
</style>