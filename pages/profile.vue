<template>
  <div class="login-bg" id="profile-page">
    <div class="container">
      <a-row type="flex" justify="center" align="middle">
        <a-col :span="24" :xs="24" :md="24" :lg="18" :xl="16">
          <div>
            <span class="register-title">Profile</span>
            <a-form-model
              :model="form"
              :label-col="labelCol"
              :wrapper-col="wrapperCol"
            >
              <a-form-model-item label="Username:" class="login-input-item">
                <span>{{ $auth.user.phone }}</span>
              </a-form-model-item>
              <a-form-model-item label="Full Name:" class="login-input-item">
                <a-input
                  v-model="form.name"
                  class="login-input-field"
                  placeholder="Full Name"
                ></a-input>
              </a-form-model-item>
              <a-form-model-item label="Phone Number:" class="login-input-item">
                <span>{{ form.phone }}</span>
              </a-form-model-item>
              <a-form-model-item label="Email:" class="login-input-item">
                <a-input
                  v-model="form.email"
                  class="login-input-field"
                ></a-input>
              </a-form-model-item>

              <a-form-model-item
                label="Date of Birth:"
                class="login-input-item"
              >
                <a-date-picker
                  style="width: 100%"
                  v-model="form.birth"
                  class="login-input-field date-picker"
                  format="DD/MM/YYYY"
                  placeholder="Date of birth"
                />
              </a-form-model-item>
              <a-form-model-item label="Gender:" class="login-input-item">
                <a-select
                  v-model="form.gender"
                  placeholder="Please select a gender"
                >
                  <a-select-option value="MALE"> Male </a-select-option>
                  <a-select-option value="FEMALE"> Female </a-select-option>
                </a-select>
              </a-form-model-item>
              <a-form-model-item
                label="City/Province:"
                class="login-input-item"
              >
                <a-input
                  v-model="form.province"
                  class="login-input-field"
                ></a-input>
              </a-form-model-item>
              <a-form-model-item label="District:" class="login-input-item">
                <a-input
                  v-model="form.district"
                  class="login-input-field"
                ></a-input>
              </a-form-model-item>
              <a-form-model-item label="Commune:" class="login-input-item">
                <a-input
                  v-model="form.commune"
                  class="login-input-field"
                ></a-input>
              </a-form-model-item>
              <a-form-model-item label="Address:" class="login-input-item">
                <a-input
                  v-model="form.address"
                  class="login-input-field"
                ></a-input>
              </a-form-model-item>
              <a-form-model-item :wrapper-col="{ span: 14, offset: 5 }">
                <a-button
                  type="primary"
                  @click="onSubmit"
                  class="btn-login btn-df btn-save-info"
                >
                  Save
                </a-button>
              </a-form-model-item>
            </a-form-model>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  middleware: "auth",
  async fetch() {
    await this.fetchInfo();
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
      labelCol: { span: 12 },
      wrapperCol: { span: 12 },
      form: {},
    };
  },
  methods: {
    async onSubmit() {
      this.form.birth = moment(this.form.birth).format("DD-MM-YYYY");
      this.$axios
        .$patch(`/users/info/${this.$auth.user.id}`, this.form, {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {
          this.form.birth = moment(this.form.birth);
          this.openNotificationWithIcon("success");
        })
        .catch((error) => {
          this.openNotificationWithIcon("error");
        });
    },
    openNotificationWithIcon(type) {
      if (type == "success") {
        this.$notification["success"]({
          message: "Update successfully",
        });
      }
      if (type == "error") {
        this.$notification["error"]({
          message: "Update failed",
        });
      }
    },
    async fetchInfo() {
      let id = this.$auth.user.id;
      let rs = await this.$axios.$get(`/users/info/${id}`);
      this.form = {
        name: rs.name,
        email: rs.email,
        birth: moment("2021-07-11"),
        gender: rs.gender,
        province: rs.province,
        district: rs.district,
        commune: rs.commune,
        address: rs.address,
      };
    },
  },
};
</script>

<style lang="scss">
@import "~/static/scss/login.scss";
#profile-page {
  .ant-form-item-label {
    text-align: left;
  }
  .btn-save-info {
    border: none !important;
  }
}
@media only screen and (max-width: 768px) {
  #profile-page {
    padding: 0 30px;
  }
}
</style>