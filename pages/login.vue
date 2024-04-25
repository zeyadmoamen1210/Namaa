<template>
  <div class="container mx-auto p-10 py-24">
    <div class="max-w-[500px] mx-auto">
      <h3 class="uppercase pb-3 mb-3 border-b border-[#dcdcdc] text-primary text-center font-semibold">{{$t('Login.LOGIN TO THE DASHBOARD')}} </h3>
      <el-form :model="loginForm" ref="loginFormRef">
        <el-form-item prop="phone" :rules="[{required: true, message: $t('Login.This field is required')}]">
          <label for="phone" class="text-primary">{{$t('Login.Phone')}}</label>
          <el-input id="email" v-model="loginForm.phone"></el-input>
        </el-form-item>
        <el-form-item prop="password" :rules="[{required: true, message: $t('Login.This field is required')}]">
          <label for="email" class="text-primary">{{$t('Login.Password')}}</label>
          <el-input id="password" type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <button @click.prevent="submitLogin" class="p-[9px_25px] bg-primary rounded-full text-white w-full mt-3">{{$t('Login.Login')}}</button>
      </el-form>
    </div>
  </div>
</template>

<script>
import {Loading} from "element-ui";

export default {
  mounted() {
    if (localStorage.getItem('user')) {
      this.$router.push('/dashboard')
    }
  },
  methods: {
    submitLogin() {
      this.$refs.loginFormRef.validate(async (valid) => {
        if(valid) {
          let loading = null;
          try {
            loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
            const req = await this.$axios.post('/login', this.loginForm);
            this.user = req.data;
            localStorage.setItem('user', JSON.stringify(this.user));
            this.$router.push('/dashboard')
          } finally {
            this.$nextTick(() => {
              loading.close();
            });
          }
        }
      })
    }
  },
  data() {
    return {
      loginForm: {
        phone: '',
        password: ''
      }
    }
  }
}
</script>
