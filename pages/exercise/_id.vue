<template>
  <div class="container">
    <div id="test">
      <div class="block-content">
        <div
          class="wrapper-question"
          id="question-form"
          :key="componentKey"
          v-if="exerciseList.length > 0 && answerSheet.length > 0"
        >
          <a-row
            v-for="(quest, questionIndex) in exerciseList"
            :key="quest.id"
            type="flex"
            justify="center"
            class="item"
            :class="getCorrectClass(quest.id)"
          >
            <a-col :span="3" :xs="24" :md="24" :lg="3" class="text-center title"
              >Câu {{ questionIndex + 1 }}</a-col
            >
            <a-col :span="13" :xs="24" :md="24" :lg="13">
              <div class="wrapper">
                <div class="question">{{ quest.title }}</div>
                <div class="answer">
                  <a-radio-group @change="onChangeAnswer($event, quest.id)">
                    <a-radio
                      v-for="(answer, answerIndex) in quest.multiChoices"
                      :key="answerIndex"
                      :style="radioStyle"
                      :value="answer"
                      class="radio-box"
                      >{{ answer }}</a-radio
                    >
                  </a-radio-group>
                </div>
              </div>
            </a-col>
            <a-col
              :span="8"
              :xs="24"
              :md="24"
              :lg="8"
              class="text-center block-img"
            >
              <img :src="quest.description" class="img-responsive" />
            </a-col>
          </a-row>
        </div>

        <a-row
          type="flex"
          justify="center"
          align="middle"
          style="row-gap: 0px"
          v-if="!result"
        >
          <a-col :span="24" class="total text-center">
            <p>
              You've been finished
              <span>{{ answerCount }}/{{ exerciseList.length }}</span>
              questions.
              <br />
              Make sure to finish all questions before turning in.
            </p>
            <button @click="submitTurnIn">Turn in</button>
          </a-col>
        </a-row>
        <a-row
          type="flex"
          justify="center"
          align="middle"
          style="row-gap: 0px"
          v-else
        >
          <a-col :span="24" class="total text-center result-block">
            <div class="result-text">
              <div class="item">
                Correct<span>{{ correctAnswer }}</span>
              </div>
              <div class="item">
                Wrong<span>{{ exerciseList.length - correctAnswer }}</span>
              </div>
            </div>
          </a-col>
          <a-col :span="24" class="total text-center result-block">
            <div class="result-text-p">
              <p>Remember to review today's lesson at home!</p>
            </div>
          </a-col>
          <a-col :span="24" class="total text-center result-block">
            <div class="result-button">
              <button @click="testAgain"><< Test again</button>
              <button @click="nextLesson">Next Lesson >></button>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
    <ModalExercise :visible="modalVisible" @close="closeModal" />
  </div>
</template>

<script>
export default {
  middleware: "auth",

  async fetch() {
    await this.fetchExercises();
    this.initData();
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
      modalVisible: false,
      result: false,
      correctAnswer: 0,
      radioStyle: {
        display: "block",
        height: "30px",
        lineHeight: "30px",
      },
      componentKey: 0,
      answerSheet: [],
      exerciseList: [],
    };
  },
  methods: {
    async fetchExercises() {
      let rs = await this.$axios.$get(
        `/exercise/?lessonId=${this.$route.params.id}`
      );
      this.exerciseList = rs.results[0].questionList;
    },
    onChangeAnswer(event, questionId) {
      let index = this.answerSheet.findIndex((el) => el.id == questionId);
      this.answerSheet[index].answer = event.target.value;
    },
    submitTurnIn() {
      if (this.answerCount != this.exerciseList.length) {
        this.openModal();
        return;
      }
      for (let i = 0; i < this.answerSheet.length; i++) {
        let ans = this.answerSheet[i];
        let ques = this.exerciseList.find((el) => el.id == ans.id);
        if (ans.answer == ques.answer) {
          this.answerSheet[i].isTrue = true;
          this.correctAnswer++;
        }
        this.result = true;
      }
    },
    openModal() {
      this.modalVisible = true;
    },
    closeModal() {
      this.modalVisible = false;
    },
    getCorrectClass(questId) {
      let ans = this.answerSheet.find((el) => el.id == questId);
      return {
        correct: ans.answer != null && ans.isTrue && this.result == true,
        false: ans.answer != null && !ans.isTrue && this.result == true,
      };
    },
    initData() {
      this.answerSheet = [];
      this.correctAnswer = 0;
      for (let i = 0; i < this.exerciseList.length; i++) {
        let item = this.exerciseList[i];
        this.answerSheet.push({
          id: item.id,
          answer: null,
          isTrue: false,
        });
      }
    },
    testAgain() {
      this.initData();
      this.result = false;
      this.componentKey++;
    },
    nextLesson() {
      this.$router.push(`/lesson/${this.$store.state.lesson.curLesson}`);
    },
  },
  computed: {
    answerCount() {
      let answerList = this.answerSheet.filter((ans) => ans.answer != null);
      return answerList.length;
    },
  },
};
</script>

<style lang="scss">
#test {
  .block-content {
    margin-top: 50px;
    .wrapper-question {
      max-height: 680px;
      overflow-y: scroll;
      .item {
        overflow: hidden;
        border-radius: 30px;
        border: 5px solid #ff6c29;
        margin-bottom: 30px;

        .block-img {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 5px;
          img {
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
          }
        }
        .title {
          background-color: #ff6c29;
          align-items: center;
          display: flex;
          justify-content: center;
          border: 0;
          outline: none;
          margin-left: -1px;
          font-size: 25px;
          font-family: "iCielCadena";
          color: #fff;
        }
        .wrapper {
          padding: 10px;
          .question {
            font-family: "r0c0i bold";
            font-size: 20px;
          }
          .answer {
            margin-top: 20px;
            label {
              display: flex !important;
              align-items: center;
              margin-bottom: 20px;
              .ant-radio-inner {
                border: 3px solid #ff6c29;
                width: 28px;
                height: 28px;
                &:after {
                  top: 3px;
                  left: 3px;
                  display: block;
                  width: 16px;
                  height: 16px;
                  background-color: #ff6c29;
                }
              }
              span {
                &:last-child {
                  font-size: 18px;
                  font-family: "r0c0i Regular";
                  color: #5d5d5d;
                }
              }
            }
          }
        }
        &.correct {
          border: 5px solid #00d847;
          .title {
            background-color: #00d847;
          }
          .ant-radio-inner {
            border: 3px solid #d70000 !important;
          }
          .ant-radio-checked {
            .ant-radio-inner {
              border: 3px solid #00d847 !important;
              &:after {
                background-color: #00d847 !important;
              }
            }
          }
        }
        &.false {
          border: 5px solid #d70000;
          .title {
            background-color: #d70000;
          }
          .ant-radio-inner {
            border: 3px solid #00d847 !important;
          }
          .ant-radio-checked {
            .ant-radio-inner {
              border: 3px solid #d70000 !important;
              &:after {
                background-color: #d70000 !important;
              }
            }
          }
        }
      }
    }
  }
  .total {
    font-size: 25px;
    font-family: "r0c0i bold";
    p {
      color: #ff6c29;
    }
    span {
      color: #00d847;
    }
    button {
      background-color: #ff6c29;
      min-width: 200px;
      border-radius: 30px;
      padding: 10px 0;
      border: 4px solid #fff;
      color: #fff;
      margin-top: 15px;
      font-family: "iCielCadena";
      text-transform: uppercase;
    }
  }
  .result-block {
    .result-text {
      display: flex;
      align-items: center;
      justify-content: center;
      .item {
        color: #ff6c29;
        font-family: "iCielCadena";
        padding: 10px;
        text-align: center;
        font-size: 25px;
        span {
          font-family: "iCielCadena";
          display: block;
          margin-top: -25px;
        }
        &:first-child span {
          font-size: 100px;
          color: #6fa63a;
        }
        &:last-child span {
          font-size: 100px;
          color: #d70000;
        }
      }
    }
    .result-text-p {
      text-align: center;
      font-size: 25px;
      color: #ff6c29;
      font-family: "iCielCadena";
    }
    .result-button {
      margin-top: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
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
        &:last-child {
          background-color: #00d847;
          text-shadow: 3px 3px 3px #087800;
        }
      }
    }
  }
}
</style>