<template>
  <div class="container">
    <p style="text-align:left;">{{data.toString()}}</p>
    <p> {{xh}}行</p>
    <p class="tl" v-for="(row,i) in xh" :key="i">
      <span v-for="(cell,index) in data" :key="index">
        <span class="span" v-if="index >= (num * i) && index < (i*num)+num">{{cell}}</span>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      num: 15,//自定义显示列数
      data:[]
    };
  },
  methods: {},
  computed: {
    xh() {
      return Math.ceil(this.data.length / this.num);
    }
  },
  mounted(){
    let arr = [];
    for (let i = 0; i < 100; i++) {
      arr[i] = i+1;
    }
     this.data = arr;
  }
};
</script>

<style scoped>
.tl {
  text-align: left;
}
.span {
  padding: 5px 10px;
  background: #ccc;
  border-radius: 5px;
  margin: 10px;
  width: 38px;
  text-align: center;
  display: inline-block;
}
</style>
