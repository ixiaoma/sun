<template>
<div>
<el-button type="text" @click="dialogFormVisible = true">添加信息</el-button>
  <el-dialog title="房间信息" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="房间名称" :label-width="formLabelWidth">
      <el-input v-model="form.typeName" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="详情图片" :label-width="formLabelWidth">
      <el-input v-model="form.typeImgs" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="房间价格" :label-width="formLabelWidth">
      <el-input v-model="form.typePrice" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="房间介绍" :label-width="formLabelWidth">
      <el-input v-model="form.homeIntroduct" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="详情介绍" :label-width="formLabelWidth">
      <el-input v-model="form.detailIntroduct" auto-complete="off"></el-input>
    </el-form-item>
  </el-form>
  <el-upload
        action="http://10.9.151.112:3000/admin/uploadImg"
        list-type="picture-card"
        name="roompic"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        :on-success="uploadSuc"
        >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible" size="tiny">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
</div>
</template>
<script>
export default {
    name:"control",
    data() {
      return {
          dialogTableVisible: false,
          dialogFormVisible: false,
          dialogImageUrl: '',
          dialogVisible: false,
          form: {
            typeName: '',
            typeImg: '',
            typeImgs: '',
            typePrice: '',
            homeIntroduct: '',
            detailIntroduct: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
          },
          formLabelWidth: '120px'
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
  }
</script>
