<template>
  <div>
    <div>
      <h4 class="font-semibold text-xl mb-2">Gallery</h4>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[30px] ">
      <div>
        <img :src="galleryItem.cover" class="max-w-[700px] w-full object-cover" alt="">
      </div>
      <div>
        <div class="mb-5 mt-5">
          <h3 class="font-semibold text-sm text-[#4f46e5]">English Name</h3>
          <p>
            {{galleryItem.nameEN}}
          </p>
        </div>

        <div class="mb-5 mt-5">
          <h3 class="font-semibold text-sm text-[#4f46e5]">Arabic Name</h3>
          <p>
            {{galleryItem.nameAR}}
          </p>
        </div>

        <div class="mb-5 mt-5">
          <h3 class="font-semibold text-sm text-[#4f46e5]">Tag</h3>
          <p>
            {{galleryItem.tag}}
          </p>
        </div>

        <div class="mb-5 mt-5">
          <h3 class="font-semibold text-sm text-[#4f46e5]">Gallery Date</h3>
          <p>
            {{ new Date(galleryItem.date).toLocaleDateString() }}
          </p>
        </div>
      </div>
    </div>
    <div class="pt-3 mt-3 border-t border-grey-light">
      <div class="flex flex-row-reverse mb-2">
        <button class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-2 rounded-lg" @click="openAddPopup">Add Image</button>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[10px]">
        <div v-for="(img, index) in galleryImgs" :key="index">
          <button class="bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-xl mb-1" @click.stop="openDelete(img)"><i class="el-icon-delete"></i></button>
          <img class="w-full h-[200px] object-cover border border-grey-light p-1" :src="img.image" alt="">
        </div>
      </div>
    </div>



    <el-dialog
      title="Add Image To Gallery"
      :visible.sync="addPopup"
      width="40%">

      <div class="mb-4">
        <label class="mb-3 block text-sm">Image</label>
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

      <span slot="footer" class="dialog-footer flex gap-[5px]">
        <button class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-1 px-2 rounded-md" @click="addPopup = false">Cancel</button>
        <button @click="addImageToGallery()" class="bg-[#2ecc71] hover:bg-[#27ae60] focus:outline-none text-white p-1 px-2 rounded-md">Add</button>
      </span>
    </el-dialog>


    <el-dialog
      title="Delete Gallery"
      :visible.sync="deletePopup"
      width="30%">

      <h5 class="text-md"><i class="text-xl text-[red] el-icon-delete"></i> Are you sure you want to delete this image ?</h5>

      <span slot="footer" class="dialog-footer flex gap-[5px]">
        <button class="bg-[#4f46e5] hover:bg-[#4f46e5ab] focus:outline-none text-white p-1 px-2 rounded-md" @click="deletePopup = false">Cancel</button>
        <button class="bg-[#fa4848] hover:bg-[#fa4848a3] focus:outline-none text-white p-1 px-2 rounded-md" @click="deleteGalleryImg()">Delete</button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import { Notification, Loading } from 'element-ui';

export default {
  layout: 'dashboard',
  mounted() {
    this.getGalleryItem();
  },
  methods: {
    openDelete(item) {
     this.deletePopup = true;
     this.currItem = {...item};
    },
    async deleteGalleryImg() {
      this.deletePopup = false;
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        await this.$axios.delete(`/galleryimages/${this.currItem._id}`);
        Notification.success({
          title: 'Success',
          message: 'The image deleted successfully',
        });
        this.deletePopup = false;
        this.getGalleryItem();
      } catch {
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
    async addImageToGallery() {
      if(this.fileList.length === 0) {
        Notification.error({
          title: 'Error',
          message: 'You must add image for that gallery'
        });
        return;
      }
      let loading = null;

      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });

        const formData = new FormData();
        formData.append('image', this.fileList?.[0]?.raw);
        formData.append('folder_ID', this.$route.params.id);

        await this.$axios.post('/galleryimages', formData);
        Notification.success({
          title: 'Success',
          message: 'The image added successfully',
        });
        this.addPopup = false;
        this.getGalleryItem();
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
    },
    openAddPopup() {
      this.fileList = [];
      this.addPopup = true;
    },
    async getGalleryItem() {
      let loading = null;
      try {
        loading = Loading.service({ fullscreen: true, background: '#ffffffe6' });
        const galleryItem = await this.$axios.get(`/gallery-folders/${this.$route.params.id}`);
        this.galleryItem = galleryItem.data?.folder;
        this.galleryImgs = galleryItem.data?.images;

      } finally {
        this.$nextTick(() => {
          loading.close();
        });
      }
    }
  },
  data() {
    return {
      addPopup: false,
      deletePopup: false,
      galleryItem: {},
      currItem: null,
      fileList: [],
      galleryImgs: []
    }
  },
}
</script>
