<template>
  <div>
    <div class="flex items-center justify-between mb-5 flex-wrap gap-[10px]">
      <h5 class="text-2xl font-semibold mb-0">Contact Us</h5>
    </div>
    <div>
      <el-table
        :data="contactUs"
        style="width: 100%">
        <el-table-column
          prop="first_name"
          label="First Name"
          width="120">
        </el-table-column>
        <el-table-column
          prop="last_name"
          label="Last Name"
          width="120">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="Phone"
          width="120">
        </el-table-column>
        <el-table-column
          prop="subject"
          label="Subject"
          width="120">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.subject === 'inquiry'" type="success">inquiry</el-tag>
            <el-tag v-if="scope.row.subject === 'suggesion'">suggesion</el-tag>
            <el-tag v-if="scope.row.subject === 'complaint'" type="danger">complaint</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="message"
          label="Message"
          >
        </el-table-column>
        <el-table-column
          label="View"
          width="70"
        >
          <template slot-scope="scope">
            <div class="flex gap-[10px] items-center">
              <button @click="openContactUs(scope.row)"> <i class="el-icon-view"></i></button>
              <button @click="openDeletePopup(scope.row)" class="text-red"> <i class="el-icon-delete"></i> </button>
            </div>
          </template>
        </el-table-column>
      </el-table>


      <el-dialog
        title="View Contact Us Message"
        :visible.sync="contactUsPopup"
        width="30%">

        <div>
          <h6> <span class="font-semibold">First Name:- </span> {{currItem.first_name}} </h6>
          <h6> <span class="font-semibold">Last Name:- </span> {{currItem.last_name}} </h6>
          <h6> <span class="font-semibold">Phone:- </span> {{currItem.phone}} </h6>
          <p class="text-center mt-2">
            {{currItem.message}}
          </p>
        </div>

        <span slot="footer" class="dialog-footer flex gap-[5px]">
          <button class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-1 px-2 rounded-md" @click="contactUsPopup = false">Cancel</button>
        </span>
      </el-dialog>



      <el-dialog
        title="Are you sure to Delete this Message ? "
        :visible.sync="deletePopup"
        width="30%">

        <div>
          <h6> <span class="font-semibold">First Name:- </span> {{currItem.first_name}} </h6>
          <h6> <span class="font-semibold">Last Name:- </span> {{currItem.last_name}} </h6>
          <h6> <span class="font-semibold">Phone:- </span> {{currItem.phone}} </h6>
          <p class="text-center mt-2">
            {{currItem.message}}
          </p>
        </div>

        <span slot="footer" class="dialog-footer flex gap-[5px]">
          <button class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-1 px-2 rounded-md" @click="deletePopup = false">Cancel</button>
          <button class="bg-[#d63031] hover:bg-[#ff7675] focus:outline-none text-white p-1 px-2 rounded-md" @click="deleteTheMessage">Delete</button>
        </span>
      </el-dialog>

    </div>
  </div>
</template>

<script>
import {Loading, Notification} from "element-ui";

export default {
  layout: 'dashboard',
  mounted() {
    this.getContactUs();
  },
  data() {
    return {
      contactUs: [],
      currItem: {},
      contactUsPopup: false,
      deletePopup: false,
    }
  },
  methods: {
    openDeletePopup(item) {
      this.deletePopup = true;
      this.currItem = {...item};
    },
    openContactUs(item) {
      this.contactUsPopup = true;
      this.currItem = {...item};
    },
    async deleteTheMessage() {
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        await this.$axios.delete(`/cform/${this.currItem._id}`);
        Notification.success({
          title: 'Success',
          message: 'The message deleted successfully',
        });
        this.deletePopup = false;
        this.getContactUs();
      } catch(err) {
        console.log(err)
      }finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    },
    async getContactUs() {
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        const res = await this.$axios.get(`/cform`);
        this.contactUs = res.data;
      } catch(err) {
        console.log(err)
      }finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    },
  }
}
</script>
