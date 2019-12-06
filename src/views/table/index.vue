<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-mode="queryList.title" placeholder="标题" style="width:160px" class="filter-item"/>
      <el-select v-mode="queryList.type" placeholder="类型" style="width：90px" class="filter-item">
        <el-option v-for="item in typeOptions" :key="item" :label="item" :value="item"/>
      </el-select>
      <el-button class="filte-item" icon="el-icon-search" type="primary" plain>搜索</el-button>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      queryList: {
        title: undefined,
        type: undefined
      },
      typeOptions:['option1', 'option2', 'option3']
    }
  }
}
</script>
