<template>
  <div>
    <div class="flex items-center justify-between mb-5 flex-wrap gap-[10px]">
      <h5 class="text-2xl font-semibold mb-0">Chats Conversations</h5>
      <div class="flex gap-3 items-center">
        <div class="flex gap-x-[5px] items-center">
          <img src="@/assets/imgs/langs.svg" alt="">
          <button @click="$i18n.setLocale('en')" v-if="$i18n.locale === 'ar'">EN</button>
          <button @click="$i18n.setLocale('ar')" v-if="$i18n.locale === 'en'">AR</button>
        </div>
        <nuxt-link tag="button" class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl" to="/dashboard/chat/questions" >Common Questions</nuxt-link>
      </div>
    </div>
    <button class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl" @click="openAddConversationsPopup = true">
      Add Conversation
    </button>
    <div v-if="conversations.length > 0">
      <el-table
        :data="conversations"
        style="width: 100%">
        <el-table-column
          prop="name"
          label="Name"
          width="300"
          >
        </el-table-column>
        <el-table-column
          prop="sender"
          label="Sender">
        </el-table-column>

        <el-table-column
          prop="participant_one"
          label="Participant">
        </el-table-column>

        <el-table-column
          label="Actions"
          width="80"
        >
          <template slot-scope="scope">
            <div class="flex gap-[10px] items-center">
              <!-- <button @click="openUpdatePopup(scope.row)"> <i class="el-icon-edit"></i></button> -->
              <button @click="$router.push(`/dashboard/chat/${scope.row._id}`)"> <i class="el-icon-chat-line-round"></i></button>
              <button @click="openDeletePopup(scope.row)" class="text-red"> <i class="el-icon-delete"></i> </button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <NoData v-else />



    <el-dialog
      title="Add Chat Conversation"
      :visible.sync="openAddConversationsPopup"
      width="30%">
      <el-form :model="addChatConversations" ref="addChatConversationsRef">
        <div>
          <el-form-item prop="name" :rules="[{required: true, message: 'This field is required'}]">
            <label for="name">Conversation Name</label>
            <el-input type="text" v-model="addChatConversations.name"></el-input>
          </el-form-item>
        </div>
        <div>
          <el-form-item prop="sender" :rules="[{required: true, message: 'This field is required'}]">
            <label for="sender">Conversation Sender</label>
            <el-input type="textarea" v-model="addChatConversations.sender"></el-input>
          </el-form-item>
        </div>
      </el-form>
      <span slot="footer" class="dialog-footer flex gap-[5px]">
        <button class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-1 px-2 rounded-md" @click.prevent="saveAddConversation()">Add</button>
        <button class="bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-md" @click="openAddConversationPopup = false">Cancel</button>
      </span>
    </el-dialog>


    <el-dialog
      title="Delete Question"
      :visible.sync="deleteConversationPopup"
      width="30%">

      <h5 class="text-md"><i class="text-xl text-[red] el-icon-delete"></i> Are you sure you want to delete this conversation ?</h5>

      <span slot="footer" class="dialog-footer flex gap-[5px]">
        <button class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-1 px-2 rounded-md" @click="deleteConversationPopup = false">Cancel</button>
        <button class="bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-md" @click="saveDeleteConversation()">Delete</button>
      </span>
    </el-dialog>



    <el-dialog
      title="Update Chat Conversation"
      :visible.sync="openUpdateConversationPopup"
      width="30%">
      <el-form :model="updateChatConversations" ref="updateChatConversationsRef">
        <div>
          <el-form-item prop="name" :rules="[{required: true, message: 'This field is required'}]">
            <label for="name">Conversation Name</label>
            <el-input type="text" v-model="updateChatConversations.name"></el-input>
          </el-form-item>
        </div>
        <div>
          <el-form-item prop="sender" :rules="[{required: true, message: 'This field is required'}]">
            <label for="sender">Conversation Sender</label>
            <el-input type="textarea" v-model="updateChatConversations.sender"></el-input>
          </el-form-item>
        </div>
      </el-form>
      <span slot="footer" class="dialog-footer flex gap-[5px]">
        <button class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-1 px-2 rounded-md" @click="saveUpdateConversation()">Update</button>
        <button class="bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-md" @click="openUpdateConversationPopup = false">Cancel</button>
      </span>
    </el-dialog>


  </div>
</template>


<script>
import { Notification, Loading } from 'element-ui';
import NoData from "~/components/layouts/NoData.vue";

export default {
  layout: 'dashboard',
  components: {
    NoData
  },
  mounted() {
    this.getConversations();
  },
  data() {
    return {
      conversations: [],
      addChatConversations: {},
      updateChatConversations: {},
      openAddConversationsPopup: false,
      deleteConversationPopup: false,
      openUpdateConversationPopup: false,
    }
  },
  methods: {
    openDeletePopup(conversation) {
      this.deleteConversationPopup = true;
      this.updateChatConversations = {...conversation};
    },
    openUpdatePopup(conversation) {
      this.updateChatConversations = {...conversation};
      this.openUpdateConversationPopup = true;
      console.log('conversation', conversation)
    },
    async saveDeleteConversation() {
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        await this.$axios.delete(`/conversation-chat/${this.updateChatConversations._id}`);
        Notification.success({
          title: 'Success',
          message: 'The Conversation deleted successfully',
        });
        this.$router.push('/dashboard/chat');
        this.deleteConversationPopup = false;
        window.scrollTo({top: 0, behavior: 'smooth'});
        this.getConversations();
      } catch {
        Notification.error({
          title: 'Error',
          message: 'There is something wrong'
        });
      } finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    },
    saveUpdateConversation() {
      this.$refs.updateChatConversationsRef.validate(async (valid) => {
        if(valid) {
          let loading = null;
          try {
            loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
            await this.$axios.put(`/conversation-chat/${this.updateChatConversations._id}`);
            Notification.success({
              title: 'Success',
              message: 'The Conversations updated successfully',
            });
            this.$router.push('/dashboard/chat');
            this.openUpdateConversationPopup = false;
            window.scrollTo({top: 0, behavior: 'smooth'});
            this.getConversations();
          } catch {
            Notification.error({
              title: 'Error',
              message: 'There is something wrong'
            });
          } finally {
            this.$nextTick(() => {
              loading.close();
            });
          }
        }
      })
    },
    saveAddConversation() {
      this.$refs.addChatConversationsRef.validate(async (valid) => {
        if(valid) {
          let loading = null;
          try {
            loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
            await this.$axios.post(`/conversation-chat`, this.addChatConversations);
            Notification.success({
              title: 'Success',
              message: 'The Conversations added successfully',
            });
            this.$router.push('/dashboard/chat');
            this.openAddConversationsPopup = false;
            window.scrollTo({top: 0, behavior: 'smooth'});
            this.getConversations();
          } catch {
            Notification.error({
              title: 'Error',
              message: 'There is something wrong'
            });
          } finally {
            this.$nextTick(() => {
              loading.close();
            });
          }
        }
      })
    },
    async getConversations() {
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        const conversations = await this.$axios.get('/conversation-chat');
        this.conversations = conversations.data;
      } finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    },
  }
}
</script>
