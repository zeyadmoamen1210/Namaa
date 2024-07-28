<template>
  <div>

    <div class="flex items-center justify-between mb-5 flex-wrap gap-[10px]">
      <h5 class="text-2xl font-semibold mb-0">Chat Common Questions</h5>
      <div class="flex gap-3 items-center">
        <div class="flex gap-x-[5px] items-center">
          <img src="@/assets/imgs/langs.svg" alt="">
          <button @click="$i18n.setLocale('en')" v-if="$i18n.locale === 'ar'">EN</button>
          <button @click="$i18n.setLocale('ar')" v-if="$i18n.locale === 'en'">AR</button>
        </div>
        <nuxt-link tag="button" class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl" @click.native="openAddQuestionPopup = true" to="#" >Add Questions</nuxt-link>
      </div>
    </div>

    <div v-if="questions.length > 0">
      <el-table
        :data="questions"
        style="width: 100%">
        <el-table-column
          prop="question_tile"
          label="Title"
          width="300"
          >
        </el-table-column>
        <el-table-column
          prop="answer"
          label="Answer">
        </el-table-column>

        <el-table-column
          label="Actions"
          width="80"
        >
          <template slot-scope="scope">
            <div class="flex gap-[10px] items-center">
              <button @click="openUpdatePopup(scope.row)"> <i class="el-icon-edit"></i></button>
              <button @click="openDeletePopup(scope.row)" class="text-red"> <i class="el-icon-delete"></i> </button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <NoData v-else />

    <el-dialog
      title="Add Chat Common Question"
      :visible.sync="openAddQuestionPopup"
      width="30%">
      <el-form :model="addChatQuestion" ref="addChatQuestionRef">
        <div>
          <el-form-item prop="question_tile" :rules="[{required: true, message: 'This field is required'}]">
            <label for="question_tile">Question Title</label>
            <el-input type="text" v-model="addChatQuestion.question_tile"></el-input>
          </el-form-item>
        </div>
        <div>
          <el-form-item prop="answer" :rules="[{required: true, message: 'This field is required'}]">
            <label for="answer">Question Answer</label>
            <el-input type="textarea" v-model="addChatQuestion.answer"></el-input>
          </el-form-item>
        </div>
      </el-form>
      <span slot="footer" class="dialog-footer flex gap-[5px]">
        <button class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-1 px-2 rounded-md" @click="saveAddQuestion()">Add</button>
        <button class="bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-md" @click="openAddQuestionPopup = false">Cancel</button>
      </span>
    </el-dialog>






    <el-dialog
      title="Update Chat Common Question"
      :visible.sync="openUpdateQuestionPopup"
      width="30%">
      <el-form :model="updateChatQuestion" ref="updateChatQuestionRef">
        <div>
          <el-form-item prop="question_tile" :rules="[{required: true, message: 'This field is required'}]">
            <label for="question_tile">Question Title</label>
            <el-input type="text" v-model="updateChatQuestion.question_tile"></el-input>
          </el-form-item>
        </div>
        <div>
          <el-form-item prop="answer" :rules="[{required: true, message: 'This field is required'}]">
            <label for="answer">Question Answer</label>
            <el-input type="textarea" v-model="updateChatQuestion.answer"></el-input>
          </el-form-item>
        </div>
      </el-form>
      <span slot="footer" class="dialog-footer flex gap-[5px]">
        <button class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-1 px-2 rounded-md" @click="saveUpdateQuestion()">Update</button>
        <button class="bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-md" @click="openUpdateQuestionPopup = false">Cancel</button>
      </span>
    </el-dialog>



    <el-dialog
      title="Delete Question"
      :visible.sync="deleteQuestionPopup"
      width="30%">

      <h5 class="text-md"><i class="text-xl text-[red] el-icon-delete"></i> Are you sure you want to delete this question ?</h5>

      <span slot="footer" class="dialog-footer flex gap-[5px]">
        <button class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-1 px-2 rounded-md" @click="deleteQuestionPopup = false">Cancel</button>
        <button class="bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-md" @click="saveDeleteQuestion()">Delete</button>
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
    this.getQuestions();
  },
  data() {
    return {
      questions: [],
      openAddQuestionPopup: false,
      openUpdateQuestionPopup: false,
      deleteQuestionPopup: false,
      addChatQuestion: {},
      updateChatQuestion: {},
    }
  },
  methods: {
    async saveDeleteQuestion() {
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        await this.$axios.delete(`/questions-chat/${this.updateChatQuestion._id}`);
        Notification.success({
          title: 'Success',
          message: 'The Question deleted successfully',
        });
        this.$router.push('/dashboard/chat/questions');
        this.deleteQuestionPopup = false;
        this.updateChatQuestion = {};
        window.scrollTo({top: 0, behavior: 'smooth'});
        this.getQuestions();
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
    saveUpdateQuestion() {
      this.$refs.updateChatQuestionRef.validate(async (valid) => {
        if(valid) {
          let loading = null;
          try {
            loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
            await this.$axios.put(`/questions-chat/${this.updateChatQuestion._id}`, {...this.updateChatQuestion});
            Notification.success({
              title: 'Success',
              message: 'The Question updated successfully',
            });
            this.$router.push('/dashboard/chat/questions');
            this.openUpdateQuestionPopup = false;
            this.updateChatQuestion = {};
            window.scrollTo({top: 0, behavior: 'smooth'});
            this.getQuestions();
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
    saveAddQuestion() {
      this.$refs.addChatQuestionRef.validate(async (valid) => {
        if(valid) {
          let loading = null;
          try {
            loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
            await this.$axios.post('/questions-chat', {...this.addChatQuestion});
            Notification.success({
              title: 'Success',
              message: 'The Question added successfully',
            });
            this.$router.push('/dashboard/chat/questions');
            this.openAddQuestionPopup = false;
            this.addChatQuestion = {};
            window.scrollTo({top: 0, behavior: 'smooth'});
            this.getQuestions();
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
    openDeletePopup(question) {
      this.deleteQuestionPopup = true;
      this.updateChatQuestion = {...question};
    },
    openUpdatePopup(question) {
      this.updateChatQuestion = {...question};
      this.openUpdateQuestionPopup = true;
    },
    async getQuestions() {
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        const questions = await this.$axios.get('/questions-chat');
        this.questions = questions.data;
      } finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    }
  }
}
</script>
