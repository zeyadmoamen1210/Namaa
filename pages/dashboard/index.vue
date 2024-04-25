<template>
  <div>
    <div class="flex items-center justify-between mb-5 flex-wrap gap-[10px]">
      <h5 class="text-2xl font-semibold mb-0">Admins</h5>
      <div class="flex gap-3 items-center">
        <button class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl" @click="openAddPopup">Add Admin</button>
      </div>
    </div>
    <div v-if="admins.length > 0">
      <el-table
        :data="admins"
        style="width: 100%">
        <el-table-column
          prop="name"
          label="Name"
          width="280">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="Phone"
          width="180">
        </el-table-column>
        <el-table-column
          prop="type"
          label="Type"
          width="180">
        </el-table-column>
        <el-table-column
          label="Actions">
          <template slot-scope="scope">
            <button class="p-2 bg-[#e74c3c] text-[#fff] rounded-md" @click="openDelete(scope.row)"><i class="el-icon-delete"></i></button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <NoData v-else />

    <el-dialog
      title="Delete Service"
      :visible.sync="deletePopup"
      width="30%">

      <h5 class="text-md"><i class="text-xl text-[red] el-icon-delete"></i> Are you sure you want to delete this service ?</h5>

      <span slot="footer" class="dialog-footer flex gap-[5px]">
        <button class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-1 px-2 rounded-md" @click="deletePopup = false">Cancel</button>
        <button class="bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-md" @click="deleteAdmin()">Delete</button>
      </span>
    </el-dialog>



    <el-dialog
      title="Add Admin"
      :visible.sync="addAdminPopup"
      width="50%">

      <el-form :model="addAdmin" ref="addAdminRef" :rules="addAdminRules">

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[10px] ">
          <div>
            <el-form-item prop="name">
              <h6>Name</h6>
              <el-input name="name" v-model="addAdmin.name"></el-input>
            </el-form-item>
          </div>
          <div>
            <el-form-item prop="phone">
              <h6>Phone</h6>
              <el-input name="phone" v-model="addAdmin.phone"></el-input>
            </el-form-item>
          </div>
          <div>
            <el-form-item prop="password" >
              <h6>Password</h6>
              <el-input type="password" v-model="addAdmin.password"></el-input>
            </el-form-item>
          </div>
          <div>
            <el-form-item prop="passwordConfirm" >
              <h6>Confirm Password</h6>
              <el-input type="password" v-model="addAdmin.passwordConfirm"></el-input>
            </el-form-item>
          </div>
        </div>
      </el-form>

      <span slot="footer" class="dialog-footer flex gap-[5px]">
        <button class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-1 px-2 rounded-md" @click="addAdminPopup = false">Cancel</button>
        <button class="bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-md" @click="submitAddAdmin()">Delete</button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import NoData from "~/components/layouts/NoData.vue";
import {Loading, Notification} from "element-ui";

export default {
  components: {NoData},
  layout: 'dashboard',
  data() {

    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password'));
      } else {
        if (this.addAdmin.passwordConfirm !== '') {
          this.$refs.addAdminRef.validateField('passwordConfirm');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password again'));
      } else if (value !== this.addAdmin.password) {
        callback(new Error('Two inputs don\'t match!'));
      } else {
        callback();
      }
    };

    return {
      addAdminRules: {
        name: [{required: true, message: 'this field is required'}],
        phone: [{required: true, message: 'this field is required'}],
        password: [{required: true, message: 'this field is required'},{ validator: validatePass, trigger: 'blur' }],
        passwordConfirm: [{required: true, message: 'this field is required'},{ validator: validatePass2, trigger: 'blur' }],
      },
      admins: [],
      loading: false,
      deletePopup: false,
      currItem: null,
      addAdminPopup: false,
      addAdmin: {}
    }
  },
  methods: {
    submitAddAdmin() {
      this.$refs.addAdminRef.validate((valid) => {
        if(valid) {
          this.addAdminRequest();
        }
      })
    },
    async addAdminRequest() {
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        await this.$axios.post(`/signup`, this.addAdmin);
        this.addAdminPopup = false;
        Notification.success({
          title: 'Success',
          message: 'The admin added successfully',
        });
        this.getAdmins();
      } catch(err) {
        console.log(err)
        Notification.error({
          title: 'Error',
          message: 'There is something wrong'
        });
      }finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    },
    openAddPopup() {
      this.addAdminPopup = true
    },
    openDelete(item) {
      this.deletePopup = true;
      this.currItem = {...item}
    },
    async deleteAdmin() {
      this.deletePopup = false;
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        await this.$axios.delete(`/admins/${this.currItem._id}`);
        Notification.success({
          title: 'Success',
          message: 'The admin deleted successfully',
        });
        this.getAdmins();
      } catch(err) {
        console.log(err)
        Notification.error({
          title: 'Error',
          message: 'There is something wrong'
        });
      }finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    },
    async getAdmins() {
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        const admins = await this.$axios.get('/admins');
        this.admins = admins.data;
      } finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    }
  },
  mounted() {
    this.getAdmins();
  }
}
</script>
