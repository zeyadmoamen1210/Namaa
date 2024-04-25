<template>
  <div>
    <h3 class="font-bold text-xl my-3"> <i class="el-icon-plus"></i> Update News</h3>
    <el-form :model="updateNews" ref="updateNewsRef">
      <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-[10px]">
        <el-form-item prop="news_title_EN" :rules="[{required: true, message: 'This field is required'}]">
          <label for="news_title_EN">Name In english</label>
          <el-input id="news_title_EN" v-model="updateNews.news_title_EN"></el-input>
        </el-form-item>
        <el-form-item prop="news_title_AR" :rules="[{required: true, message: 'This field is required'}]">
          <label for="news_title_AR">News In arabic</label>
          <el-input id="news_title_AR" v-model="updateNews.news_title_AR"></el-input>
        </el-form-item>

        <el-form-item prop="news_desc_EN" :rules="[{required: true, message: 'This field is required'}]">
          <label for="news_desc_EN">description in english</label>
          <el-input type="textarea" id="news_desc_EN" v-model="updateNews.news_desc_EN"></el-input>
        </el-form-item>

        <el-form-item prop="news_desc_AR" :rules="[{required: true, message: 'This field is required'}]">
          <label for="news_desc_AR">description in arabic</label>
          <el-input type="textarea" id="news_desc_AR" v-model="updateNews.news_desc_AR"></el-input>
        </el-form-item>




        <el-form-item prop="date" :rules="[{required: true, message: 'This field is required'}]">
          <label for="date">News Date</label>
          <el-date-picker
            v-model="updateNews.date"
            id="date"
            style="width: 100%"
            type="date"
            placeholder="Pick a day">
          </el-date-picker>
        </el-form-item>
      </div>


      <div class="flex items-center gap-[10px] justify-between">
        <h6 class="font-semibold text-xl">Tags</h6>
        <button @click.prevent="updateNews.tags.push({news_tags_EN: '', news_tags_AR: ''})" class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl"> <i class="el-icon-plus"></i> Add Tag </button>
      </div>
      <div class="border-b border-grey-light" v-for="(tag, index) in updateNews.tags" :key="index">
        <div class="flex gap-[10px] items-center justify-between pt-3">
          <h6 class="font-semibold">Tag#{{index+1}}</h6>
          <button v-if="index != 0" @click.prevent="updateNews.tags.splice(index, 1)" class="bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-2 rounded-xl"> <i class="el-icon-close"></i> </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-[10px] ">
          <el-form-item :prop="`tags[${index}].news_tags_EN`" :rules="[{required: true, message: 'This field is required'}]">
            <label :for="`tags[${index}].news_tags_EN`">Tag In english</label>
            <el-input :id="`tags[${index}].news_tags_EN`" v-model="updateNews.tags[index].news_tags_EN"></el-input>
          </el-form-item>

          <el-form-item :prop="`tags[${index}].news_tags_AR`" :rules="[{required: true, message: 'This field is required'}]">
            <label :for="`tags[${index}].news_tags_AR`">Tag In arabic</label>
            <el-input :id="`tags[${index}].news_tags_AR`" v-model="updateNews.tags[index].news_tags_AR"></el-input>
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
          list-type="picture"
          accept="image/*"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
          <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
        </el-upload>
      </div>
    </el-form>
    <div class="flex flex-row-reverse mt-3">
      <button class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-xl" @click="updateTheNews()">Update News</button>
    </div>
  </div>
</template>

<script>
import { Notification, Loading } from 'element-ui';
export default {
  data() {
    return {
      fileList: [],
      updateNews: {
        tags: [

        ]
      }
    }
  },
  mounted() {
    this.getNewsItem();
  },
  methods: {
    async getNewsItem() {
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        const newsItem = await this.$axios.get(`/news/${this.$route.params.id}`);
        this.updateNews = {...this.updateNews, ...newsItem.data};
        this.updateNews.news_tags_EN.forEach((tag, index) => {
          this.updateNews.tags.push({
              news_tags_AR: this.updateNews.news_tags_AR[index],
              news_tags_EN: tag
          })
        })
        if(this.updateNews.image) {
          this.fileList.push({
            name: 'News Image',
            url: this.updateNews.image
          })
        }
      } finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    },
    updateTheNews() {
      this.$refs.updateNewsRef.validate(async (valid) => {
        if(valid) {
          if(this.fileList.length === 0) {
            Notification.error({
              title: 'Error',
              message: 'You must add icon for that news'
            });
            return;
          }

          const formData = new FormData();
          formData.append('news_title_EN', this.updateNews.news_title_EN);
          formData.append('news_title_AR', this.updateNews.news_title_AR);
          formData.append('news_desc_EN', this.updateNews.news_desc_EN);
          formData.append('news_desc_AR', this.updateNews.news_desc_AR);

          let tagsEN = [];
          let tagsAR = [];
          this.updateNews.tags.forEach(tag => {
            tagsEN.push(tag.news_tags_EN);
            tagsAR.push(tag.news_tags_AR);
          })
          tagsEN.forEach(tag => {
            formData.append('news_tags_EN', tag);
          })
          tagsAR.forEach(tag => {
            formData.append('news_tags_AR', tag);
          })

          if(this.fileList?.[0]?.raw) {
            formData.append('image', this.fileList?.[0]?.raw);
          } else {
            formData.append('image', this.fileList?.[0]?.url);
          }

          formData.append('date', this.updateNews.date);

          let loading = null;

          try {
            loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
            await this.$axios.put(`/news/${this.$route.params.id}`, formData);
            Notification.success({
              title: 'Success',
              message: 'The news updated successfully',
            });
            this.$router.push(`/dashboard/news/${this.$route.params.id}`);
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
