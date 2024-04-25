<template>
  <div>
    <h3 class="font-bold text-xl my-3"> <i class="el-icon-plus"></i> Add New News</h3>
    <el-form :model="addNews" ref="addNewsRef">
      <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-[10px]">
        <el-form-item prop="news_title_EN" :rules="[{required: true, message: 'This field is required'}]">
          <label for="news_title_EN">Name In english</label>
          <el-input id="news_title_EN" v-model="addNews.news_title_EN"></el-input>
        </el-form-item>
        <el-form-item prop="news_title_AR" :rules="[{required: true, message: 'This field is required'}]">
          <label for="news_title_AR">News In arabic</label>
          <el-input id="news_title_AR" v-model="addNews.news_title_AR"></el-input>
        </el-form-item>

        <el-form-item prop="news_desc_EN" :rules="[{required: true, message: 'This field is required'}]">
          <label for="news_desc_EN">description in english</label>
          <el-input type="textarea" id="news_desc_EN" v-model="addNews.news_desc_EN"></el-input>
        </el-form-item>

        <el-form-item prop="news_desc_AR" :rules="[{required: true, message: 'This field is required'}]">
          <label for="news_desc_AR">description in arabic</label>
          <el-input type="textarea" id="news_desc_AR" v-model="addNews.news_desc_AR"></el-input>
        </el-form-item>




        <el-form-item prop="date" :rules="[{required: true, message: 'This field is required'}]">
          <label for="date">News Date</label>
          <el-date-picker
            v-model="addNews.date"
            id="date"
            style="width: 100%"
            type="date"
            placeholder="Pick a day">
          </el-date-picker>
        </el-form-item>
      </div>


      <div class="flex items-center gap-[10px] justify-between">
        <h6 class="font-semibold text-xl">Tags</h6>
        <button @click.prevent="addNews.tags.push({news_tags_EN: '', news_tags_AR: ''})" class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl"> <i class="el-icon-plus"></i> Add Tag </button>
      </div>
      <div class="border-b border-grey-light" v-for="(tag, index) in addNews.tags" :key="index">
        <div class="flex gap-[10px] items-center justify-between pt-3">
          <h6 class="font-semibold">Tag#{{index+1}}</h6>
          <button v-if="index != 0" @click.prevent="addNews.tags.splice(index, 1)" class="bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-2 rounded-xl"> <i class="el-icon-close"></i> </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-[10px] ">
          <el-form-item :prop="`tags[${index}].news_tags_EN`" :rules="[{required: true, message: 'This field is required'}]">
            <label :for="`tags[${index}].news_tags_EN`">Tag In english</label>
            <el-input :id="`tags[${index}].news_tags_EN`" v-model="addNews.tags[index].news_tags_EN"></el-input>
          </el-form-item>

          <el-form-item :prop="`tags[${index}].news_tags_AR`" :rules="[{required: true, message: 'This field is required'}]">
            <label :for="`tags[${index}].news_tags_AR`">Tag In arabic</label>
            <el-input :id="`tags[${index}].news_tags_AR`" v-model="addNews.tags[index].news_tags_AR"></el-input>
          </el-form-item>
        </div>
      </div>


      <div class="mb-4">
        <label class="mb-3 block text-sm">News Image</label>
        <el-upload
          class="upload-demo "
          drag
          action=""
          :auto-upload="false"
          :on-remove="handleRemove"
          :on-change="onChange"
          :file-list="fileList"
          accept="image/*"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
          <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
        </el-upload>
      </div>
    </el-form>
    <div class="flex flex-row-reverse mt-3">
      <button class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl" @click="addTheNews()">Add News</button>
    </div>
  </div>
</template>

<script>
import { Notification, Loading } from 'element-ui';
export default {
  data() {
    return {
      fileList: [],
      addNews: {
        tags: [
          {
            news_tags_AR: '',
            news_tags_EN: ''
          }
        ]
      }
    }
  },
  methods: {
    addTheNews() {
      this.$refs.addNewsRef.validate(async (valid) => {
        if(valid) {
          if(this.fileList.length === 0) {
            Notification.error({
              title: 'Error',
              message: 'You must add icon for that news'
            });
            return;
          }

          const formData = new FormData();
          formData.append('news_title_EN', this.addNews.news_title_EN);
          formData.append('news_title_AR', this.addNews.news_title_AR);
          formData.append('news_desc_EN', this.addNews.news_desc_EN);
          formData.append('news_desc_AR', this.addNews.news_desc_AR);

          let tagsEN = [];
          let tagsAR = [];
          this.addNews.tags.forEach(tag => {
            tagsEN.push(tag.news_tags_EN);
            tagsAR.push(tag.news_tags_AR);
          })
          tagsEN.forEach(tag => {
            formData.append('news_tags_EN', tag);
          })
          tagsAR.forEach(tag => {
            formData.append('news_tags_AR', tag);
          })

          formData.append('image', this.fileList?.[0]?.raw);
          formData.append('date', this.addNews.date);

          let loading = null;

          try {
            loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
            await this.$axios.post('/news', formData);
            Notification.success({
              title: 'Success',
              message: 'The news added successfully',
            });
            this.$router.push('/dashboard/news');
            window.scrollTo({top: 0, behavior: 'smooth'})
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
    handleRemove(file, fileList) {
      // Handle removal logic here
      this.fileList = fileList;
      console.log('Remove: ', file, this.fileList);
    },
    onChange(file, fileList) {
      // Handle change logic here
      this.fileList = fileList;
      console.log('Change: ', file, this.fileList);
    }
  }
}
</script>

<style lang="postcss">
.el-loading-mask .el-loading-spinner svg {
  margin: auto !important;
}
</style>
