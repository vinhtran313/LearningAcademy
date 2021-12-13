<template>
  <div class="about-page">
    <div class="container">
      <div id="about">
        <div class="block-1">
          <div class="title">
            <h4>About us</h4>
          </div>
          <div class="block-content">
            <a-row
              type="flex"
              justify="center"
              align="middle"
              style="margin-left: -25px; margin-right: -25px; row-gap: 0px"
            >
              <a-col
                :span="16"
                :xs="24"
                :md="16"
                style="padding-left: 25px; padding-right: 25px"
              >
                <NuxtLink to="/">Future Academy</NuxtLink> is a great learning
                experience, providing high-quality online courses for students.
                <NuxtLink to="/">Future Academy</NuxtLink> is also a leading
                quality and prestigious online education system in Vietnam.
                <NuxtLink to="/">Future Academy</NuxtLink> has more than 3 years
                of operation in the field of online training for students.
              </a-col>
              <a-col
                :span="8"
                :xs="24"
                :md="8"
                style="padding-left: 25px; padding-right: 25px"
                class="text-center"
              >
                <img
                  src="/media/about/intro-team.png"
                  alt=""
                  class="img-responsive"
                />
              </a-col>
            </a-row>
          </div>
        </div>
        <div class="block-2">
          <div class="block-wrapper">
            <a-row
              type="flex"
              justify="center"
              align="middle"
              style="margin-left: -25px; margin-right: -25px; row-gap: 0px"
            >
              <a-col
                :span="11"
                :xs="24"
                :md="11"
                style="padding-left: 25px; padding-right: 25px"
              >
                <img
                  src="/media/about/block2.png"
                  alt=""
                  class="img-responsive"
                />
              </a-col>
              <a-col
                :span="13"
                :xs="24"
                :md="13"
                style="padding-left: 25px; padding-right: 25px"
              >
                <div class="block-content">
                  <h5>Why should you choose online education?</h5>
                  <p>
                    With the professional cooperation of experienced and
                    reputable teachers along with the graphic technology
                    investment to make the course more lively with many images
                    to help students get excited about learning, thereby
                    achieving high results in class as well as in important
                    exams. With the mission of improving the value of knowledge,
                    it is also a goal to help Vietnamese students can be fully
                    equipped with knowledge, important skills and foreign
                    languages to confidently define themselves. The
                    <NuxtLink to="/">Future Academy</NuxtLink> program is highly
                    appreciated through a series of awards which frequently
                    mentioned in the press and television.
                  </p>
                </div>
              </a-col>
            </a-row>
          </div>
        </div>
        <div class="block-3">
          <img
            src="/media/about/image-team.67407ec9.png"
            alt=""
            class="img-responsive"
          />
        </div>
        <div class="block-4">
          <div class="container">
            <div id="achievement" class="section-achievement">
              <SectionAchievement />
            </div>
          </div>
        </div>
        <div class="block-5">
          <h4 class="title">Why should you <br />choose Future Academy?</h4>
          <div class="block-content">
            <a-timeline>
              <a-timeline-item>
                <img src="/media/about/block-5-head.png" slot="dot" />

                <div class="ant-timeline-item-content">
                  <div>
                    <span
                      >Parents are relaxed and secure about their
                      children.</span
                    >
                    The course will be like your assistant to teach your child
                    good things such as knowledge, skills and attitudes. Instead
                    of worrying, trying to teach your child uneffectively
                    everyday, now you just need to guide your child and interact
                    with him when needed. Your child will be good at Math,
                    Vietnamese and English <br />It only takes 10-15 minutes a
                    day for parents and children to study happily and naturally
                    without any forcing, 1 to 2 effective lessons a day combined
                    with practicing, your child will be good at writing,
                    spelling and calculation.
                  </div>
                </div>
              </a-timeline-item>
              <a-timeline-item>
                <img src="/media/about/block-5-trophy.png" slot="dot" />

                <div class="ant-timeline-item-content">
                  <div>
                    <span>Study anytime and anywhere. </span> Children can study
                    anytime, anywhere by phone, computer or TV, laptop. This
                    course can work on multiple devices which develop confident
                    life skills for children before entering grade 1.<br />The
                    course also focuses on other skills and knowledge about
                    science and life that help children ready for 1st grade.
                  </div>
                </div>
              </a-timeline-item>
              <a-timeline-item>
                <img src="/media/about/block-5-bachelor.png" slot="dot" />
                <div class="ant-timeline-item-content">
                  <div>
                    <span>Learning and having fun at the same time.</span>
                    Với các nội dung hấp dẫn như phim hoạt hình con học như là
                    giải trí mà vẫn linh động được các kiến thức cần thiết. Đây
                    là điểm nổi trội của khoá học mà chúng tôi mang đến cho các
                    em học sinh.
                  </div>
                </div>
              </a-timeline-item>
            </a-timeline>
          </div>
        </div>
        <div class="block-6 text-center">
          <NuxtLink to="/register"><button>Signup Now</button></NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionAchievement from "../components/homepage/achievement/achievement.vue";
export default {
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
  components: {
    SectionAchievement: SectionAchievement,
  },
};
</script>

<style lang="scss">
#about {
  margin-top: 50px;
  padding-bottom: 30px;

  .block-1 {
    .title {
      padding: 5px 15px 10px 30px;
      background-image: linear-gradient(90deg, #ff6d2b, rgba(255, 0, 0, 0));
      border-radius: 32px;
      h4 {
        font-size: 36px;
        color: #fff;
        font-family: "iCielCadena";
      }
    }
    .block-content {
      font-family: "r0c0i Regular";
      font-size: 20px;
      color: #5f5f5f;
    }
    img {
      margin-top: -50px;
    }
  }
  .block-2 {
    margin-top: 50px;
    background-color: #ff6c29;
    padding: 50px;
    border-radius: 4px;
    .block-content {
      text-align: right;
      h5 {
        margin-bottom: 30px;
        font-family: "iCielCadena";
        font-size: 36px;
        color: #fff;
      }
      p {
        color: #fff;
        font-family: "r0c0i Regular";
        font-size: 20px;
      }
    }
    a {
      color: #fff;
    }
  }
  a {
    color: #ff6c29;
    text-decoration: underline;
  }
  .block-5 {
    padding-top: 100px;
    .title {
      text-align: center;
      font-family: "iCielCadena";
      font-size: 75px;
      color: #ff6c29;
      text-shadow: 3px 3px #fff;
      line-height: 76px;
      margin-bottom: 50px;
      text-transform: uppercase;
    }
    .ant-timeline-item {
      position: relative;
      margin: 0;
      padding-bottom: 20px;
      font-size: 14px;
      list-style: none;
    }
    .ant-timeline-item-head-custom {
      background: #ffe8df;
      top: 45%;
    }
    .ant-timeline-item-tail {
      border-left: 3px dashed #ff6c29;
      top: 50%;
    }
    .ant-timeline-item-content {
      padding: 20px 0;
      margin-left: 50px;
      color: #5f5f5f;
      font-family: "r0c0i Regular";
      font-size: 20px;
    }
    span {
      font-family: "r0c0i bold";
      color: #ff6c29;
    }
  }
  .block-6 {
    button {
      background-color: #ff6c29;
      min-width: 250px;
      border-radius: 30px;
      padding: 10px 25px;
      border: 4px solid #fff;
      color: #fff;
      font-size: 25px;
      height: 65px;
      font-family: "iCielCadena";
      text-transform: uppercase;
      margin: 0 15px;
      text-shadow: 3px 3px 3px #842602;
    }
  }
}
@media only screen and (max-width: 992px) {
  #about {
    .block-5 {
      padding-top: 50px;
      .title {
        font-size: 48px;
      }
      .ant-timeline {
        padding: 0 35px;
      }
      .ant-timeline-item-content {
        text-align: justify;
      }
      .ant-timeline-item-tail {
        top: 40%;
      }
    }
  }
}
@media only screen and (max-width: 768px) {
  .block-content {
    margin-top: 15px;
  }
  #about {
    .block-1 img {
      margin-top: -50px;
    }
    .block-5 {
      padding-top: 50px;
      .title {
        font-size: 48px;
      }
      .ant-timeline {
        padding: 0 35px;
      }
      .ant-timeline-item-content {
        text-align: justify;
      }
      .ant-timeline-item-tail {
        top: 40%;
      }
    }
  }
}
@media only screen and (max-width: 576px) {
  .block-content {
    margin-top: 15px;
  }
  #about {
    .block-1 img {
      margin-top: 10px;
    }
    .block-5 {
      padding-top: 50px;
      .title {
        font-size: 35px;
      }
      .ant-timeline {
        padding: 0 30px;
      }
      .ant-timeline-item-content {
        text-align: justify;
      }
      .ant-timeline-item-tail {
        top: 40%;
      }
    }
  }
}
</style>