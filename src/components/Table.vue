<template>
  <div class="container">
    <table style="border:1px solid #333;">
      <tr>
        <td colspan="3">6666</td>
      </tr>
      <tr v-for="(childArr,index) in tableData" :key="index">
        <td v-for="(item,i) in childArr" :key="i">
          <span>{{item.partner_name}}</span>
          <i class="el-icon-loading" v-show="!item.bet_amount"></i>
          <span>{{item.bet_amount}} </span>
          <el-button class="el-icon-refresh cursor" @click="refresh(index*3+i,item.partner_id)">{{item.partner_id}}</el-button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bet:[],
      tableData: [],
      oneIndex : 0,
      secondIndex : 0,
    };
  },
  methods: {
    dataFomate(data,n) {
      let len = data.length;
      let lineNum = len % n === 0 ? len / n : Math.floor(len / n + 1);
      let res = [];
      for (let i = 0; i < lineNum; i++) {
        let temp = data.slice(i * n, i * n + n);
        res.push(JSON.parse(JSON.stringify(temp)));
      }
      return res;
    },
    refresh(index,id){
      this.show = true;
      this.bet[index].bet_amount = '';
      this.tableData = this.dataFomate(this.bet,3);
      this.$message({
        type:'success',
        message:'刷新成功,正在获取最新数据...'
      })
      setTimeout(()=>{
        //发送单个请求
        this.bet[index].bet_amount = '0.99';
        this.tableData = this.dataFomate(this.bet,3);
        console.log('单个请求结果:',this.tableData);
        this.show = false;
      },3000)
      

    }
  },
  mounted() {
    let data = JSON.parse(localStorage.getItem("data"));
    this.bet = data.bettingMoney;
    if (this.bet) {
      console.log("表格", this.bet);
      this.tableData = this.dataFomate(this.bet,3);
      console.log("表格", this.tableData);
    }
  }
};
</script>

<style scoped>
table {
  width: 100%;
}
tr,
td {
  padding: 5px;
  border: 1px solid #ccc;
}
</style>
