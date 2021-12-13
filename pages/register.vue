<template>
  <div class="login-bg" id="register-page">
    <div class="container">
      <h4 class="register-title">Register</h4>
      <div class="text-center" style="margin-bottom: 20px">
        <span class="login-sub-title">
          Fill in the following form and click "Sign Up"
        </span>
      </div>
      <a-form
        :form="form"
        :label-col="{ span: 10 }"
        :wrapper-col="{ span: 8 }"
        @submit="handleSubmitRegister"
      >
        <a-form-item label="Full name:" class="login-input-item">
          <a-input
            placeholder="Full name"
            v-decorator="[
              'name',
              {
                rules: [
                  { required: true, message: 'Please fill in your full name' },
                ],
              },
            ]"
            class="login-input-field"
          ></a-input>
        </a-form-item>
        <a-form-item label="Phone number:" class="login-input-item">
          <a-input
            placeholder="Phone number"
            class="login-input-field"
            v-decorator="[
              'phone',
              {
                rules: [
                  {
                    required: true,
                    message: 'Please fill in your full phone number',
                  },
                ],
              },
            ]"
          ></a-input>
        </a-form-item>
        <a-form-item label="Date of birth:" class="login-input-item">
          <a-date-picker
            style="width: 100%"
            v-decorator="['birth']"
            class="login-input-field date-picker"
          />
        </a-form-item>
        <a-form-item label="Address:" class="login-input-item">
          <a-input
            placeholder="Address"
            class="login-input-field"
            v-decorator="['address']"
          ></a-input>
        </a-form-item>
        <a-form-item
          label="What grade is your child in?:"
          class="login-input-item"
        >
          <a-select
            v-decorator="[
              'class',
              {
                rules: [{ required: true, message: 'Pleas choose the grade' }],
              },
            ]"
            placeholder="What grade is your child in?"
          >
            <a-select-option value="1"> 1st Grade </a-select-option>
            <a-select-option value="2"> 2nd Grade</a-select-option>
            <a-select-option value="3"> 3nd Grade </a-select-option>
            <a-select-option value="4"> 4th Grade </a-select-option>
            <a-select-option value="5"> 5th Grade </a-select-option>
            <a-select-option value="6"> 6th Grade </a-select-option>
            <a-select-option value="7"> 7th Grade </a-select-option>
            <a-select-option value="8"> 8th Grade </a-select-option>
            <a-select-option value="9"> 9th Grade </a-select-option>
            <a-select-option value="10"> 10th Grade </a-select-option>
            <a-select-option value="11"> 11th Grade</a-select-option>
            <a-select-option value="12"> 12th Grade </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
          label="Anything can we help you?:"
          class="login-input-item"
        >
          <a-textarea
            class="login-input-field textarea"
            v-decorator="['supportDesc']"
            placeholder="Anything can we help you?"
            :rows="6"
          ></a-textarea>
        </a-form-item>
        <a-form-item
          :wrapper-col="{ span: 14, offset: 5 }"
          class="responsive-button"
        >
          <a-button
            type="primary"
            html-type="submit"
            class="btn-df btn-register"
            :loading="loading"
          >
            Sign up
          </a-button>
        </a-form-item>

        <span class="login-sub-title">Do you have any sign in account?</span>

        <a-form-item
          :wrapper-col="{ span: 14, offset: 5 }"
          class="responsive-button"
        >
          <a-button type="primary" class="btn-login btn-df btn-login-routing"
            ><NuxtLink to="/login">Sign In</NuxtLink></a-button
          >
        </a-form-item>
      </a-form>
    </div>
    <a-modal v-model="modalSuccess" :footer="null">
      <div class="modal-confirm-body">
        <div class="modal-confirm-content">
          <p>
            <a-icon
              type="check-circle"
              theme="twoTone"
              two-tone-color="#52c41a"
            />
            Thank you for resgistering our services, our customer service will
            contact you as soon as possible. Best regard!
          </p>
        </div>
        <a-button type="primary" @click="modalSuccess = false">OK</a-button>
      </div>
    </a-modal>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      loading: false,
      modalSuccess: false,
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "registerForm" }),
      config: {
        rules: [{ type: "object" }],
      },
    };
  },
  head() {
    return {
      title: "Future Academy - Register",
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
    handleSubmitRegister(e) {
      this.modalSuccess = true;
      e.preventDefault();
      this.form.validateFields(async (err, values) => {
        this.loading = true;
        if (!err) {
          let formData = {
            name: values.name,
            phone: values.phone.replace("+84", "0"),
            birth: moment(values.birth).format("DD-MM-YYYY"),
            address: values.address,
            class: values.class,
            supportDesc: values.supportDesc,
          };
          this.$axios
            .$post("/auth/request-user", formData)
            .then((res) => {
              this.loading = false;
              this.modalSuccess = true;
            })
            .catch((err) => {
              this.openNotificationWithIcon("error");
            });
        }
      });
    },
    openNotificationWithIcon(type) {
      if (type == "success") {
        this.$notification["success"]({
          message: "Đăng ký thành công",
        });
      }
      if (type == "error") {
        this.$notification["error"]({
          message: "Đăng ký thất bại",
        });
      }
    },
  },
};
</script>

<style lang="scss">
@import "~/static/scss/login.scss";
.btn-login-routing {
  width: 200px;
  height: 50px !important;
  font-size: 25px !important;
  font-weight: 900 !important;
}
.modal-confirm-body {
  background-color: #fff !important;
  padding: 25px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  .modal-confirm-content {
    margin-bottom: 10px;
    text-align: justify;
  }

  button {
    align-self: end;
    width: fit-content;
  }
}
@media only screen and (max-width: 576px) {
  .responsive-button {
    .ant-form-item-control-wrapper {
      text-align: center;
      margin-left: 0;
    }
  }
  #register-page .login-sub-title {
    font-size: 18px !important;
  }
}
</style>