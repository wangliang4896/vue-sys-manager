<template>
  <div class="step-container">
    <el-steps :active="active" simple>
      <el-step
        :title="item.title"
        :icon="item.icon"
        @click.native="stepClick(item.index)"
        v-for="item in stepData"
        :key="item.index"
      ></el-step>

      <!-- <el-step title="步骤 1" icon="el-icon-edit" @click="stepClick(1)"></el-step>
      <el-step title="步骤 2" icon="el-icon-upload" @click="stepClick(2)"></el-step>
      <el-step title="步骤 3" icon="el-icon-picture" @click.native="stepClick(3)"></el-step>-->
    </el-steps>

    <div class="step-content-container">
      <el-row class="active0" v-show="active === 0">
        <div>{{active}}</div>
      </el-row>
      <el-row class="active1" v-show="active === 1">
        <div>
          <div>{{active}}</div>
        </div>
      </el-row>

      <el-row class="active2" v-show="active === 2">
        <div>
          <div>{{active}}</div>
        </div>​​​​​​​
      </el-row>
    </div>
    <el-button type="primary" plain size="medium" @click="nextClick()">{{nextTile}}</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nextTile: "next",
      active: 0,
      stepData: [
        { index: 0, title: "步骤1", icon: "el-icon-edit" },
        { index: 1, title: "步骤2", icon: "el-icon-upload" },
        { index: 2, title: "步骤3", icon: "el-icon-picture" }
      ]
    };
  },
  methods: {
    stepClick(val) {
      var _that = this;
      _that.active = val;
      this.content = val;
    },
    nextClick() {
      var _that = this;
      console.log(_that.active);
      this.content = _that.active;
      if (_that.active < 3) {
        _that.active++;
        console.log(_that.active);
      } else {
        _that.active = 0;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.step-container {
  margin: 30px;

  .step-content-container {
    margin: 30px;
  }
}
</style>
