<template>
  <div class="container">
    <el-form
      :model="ruleForm"
      ref="ruleForm"
      :rules="rules"
      label-width="100px"
      class="demo-dynamic"
    >
      <el-form-item prop="email" label="邮箱">
        <el-input v-model="ruleForm.email" name="email"></el-input>
      </el-form-item>

      <el-form-item prop="name" label="支付渠道">
        <div class="pay-box">
          <div
            class="pay-way"
            v-for="(item,index) in pay_bank"
            :key="index"
            :id="item.bank_id"
            :class="{active:clickIndex==index?true:false}"
            @click="selectPay(item.bank_id)"
          >
            <img :src="item.bank_url" class="pay-icon" alt />
            <span class="pay-name">{{item.name}}</span>
          </div>
        </div>
        <div class="bank-detail" v-if="pay_bank[clickIndex]">
          <div
            class="bank-item"
            v-for="(item,index) in pay_bank[clickIndex].bank_list"
            :class="{active:selectIndex==index?true:false}"
            @click="selectChannel(index)"
            :key="index"
          >
            <img :src="pay_bank[clickIndex].bank_url" class="pay-icon" alt />
            <span class="pay-name">通道{{index}} - {{item.title}}</span>
            <el-input v-model="ruleForm.name" style="display:none;"></el-input>
          </div>

          <!-- <div class="bank-item" v-if="pay_bank.length > 0">
            <img :src="pay_bank[clickIndex].bank_url" class="pay-icon" alt />
            <span class="pay-name">{{pay_bank[clickIndex].name}}</span>
          </div>-->
        </div>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm()">提交</el-button>
        <el-button @click="resetForm()">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      activeName: "first",

      clickIndex: 0,
      selectIndex: 0,
      pay_bank: [],

      ruleForm: {
        name: 0,
        email: "1200xxx@qq.com"
      },
      rules: {
        email: { required: true, trigger: "blur", message: "邮箱必填" },
        name: { required: true, trigger: "blur", message: "用户必选" }
      }
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab.name);
    },
    selectPay(id) {
      this.clickIndex = id;
      this.selectIndex = 0;
      this.getData();
    },
    selectChannel(id) {
      this.selectIndex = id;
      this.getData();
    },
    getData() {
      this.ruleForm.name = this.pay_bank[this.clickIndex].bank_list[
        this.selectIndex
      ].code_id;
    },
    submitForm() {
      console.log(this.ruleForm);
      alert(JSON.stringify(this.ruleForm));
    },
    resetForm() {
      this.clickIndex = 0;
      this.selectIndex = 0;
      this.ruleForm.email = "";
    }
  },
  mounted() {
    axios("/static/wallet.json").then(res => {
      this.pay_bank = res.data.pay_bank;
      this.getData();
      console.log(res.data);
    });
  }
};
</script>
<style scoped>
.pay-box {
  display: flex;
}
.pay-way {
  display: flex;
  width: 130px;
  height: 40px;
  margin-right: 20px;
  justify-content: left;
  align-items: center;
  border: 1px solid #ccc;
  cursor: pointer;
  border-radius: 3px;
  overflow: hidden;
  padding-left: 20px;
  /* forbidden select */
  user-select: none;
  -webkit-user-select: none;
}
/* .pay-way:hover {
  border-color: #f00;
  background: rgba(250, 229, 228, 1);
} */

.pay-icon {
  margin-right: 10px;
  width: 29px;
  height: 29px;
}
.pay-name {
  vertical-align: middle;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 700;
  color: rgba(51, 51, 51, 1);
}

.bank-detail {
  margin-top: 20px;
  width: 100%;
  height: 100%;
  max-height: 160px;
  overflow-y: auto;
}
/* 重置浏览器 */
.bank-detail::-webkit-scrollbar {
  width: 2px;
  height: 1px;
}
.bank-detail::-webkit-scrollbar-thumb {
  border-radius: 10px;
  /* box-shadow: inset 0 0 1px #00b47f; */
  background: #fae5e4;
}
.bank-item {
  text-align: left;
  border: 1px solid #ccc;
  width: 90%;
  margin-top: 10px;
  padding-left: 20px;
  cursor: pointer;
  /* forbidden select */
  user-select: none;
  -webkit-user-select: none;
}
/* .bank-item:hover {
  border-color: #f00;
  background: rgba(250, 229, 228, 1);
} */
/* 放最后 */
.active {
  border-color: #f00;
  background: rgba(250, 229, 228, 1);
}
</style>
