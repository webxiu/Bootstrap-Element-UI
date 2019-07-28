<template>
  <div class="container">
    <div class="content">
      <div class="slide" ref="menuScroll">
        <ul>
          <li class="uli" v-for="(item,index) in arr" :key="index">{{item}}</li>
          <li class="uli">最后一个</li>
        </ul>
      </div>
    </div>

    <!-- 子组件 -->
    <child :msg="msg" @send="send">
      ****我是插槽内容****
      <template v-slot:test>
        <test />
      </template>
      <template v-slot:test2>
        <test2 />
      </template>
      <template slot-scope="data">
        <h1>888 -- {{data.info}}</h1>
      </template>
    </child>
  </div>
</template>

<script>
import axios from "axios";
import BScroll from "better-scroll";
import child from "./child";
import test from "./test";
import test2 from "./test2";
export default {
  name: "Todo",
  components: { child, test, test2 },
  data() {
    return {
      menuScroll: {},
      msg: "我是父组件数据",
      // data:{info:'999999999999'},
      arr: [
        "1111",
        "1111",
        "333",
        "1111",
        "555",
        "1111",
        "555",
        "1111",
        "888",
        "1111",
        "1111",
        "333",
        "1111",
        "555",
        "1111",
        "555",
        "1111",
        "888",
        "1111",
        "333",
        "1111",
        "555",
        "1111",
        "555",
        "1111",
        "888",
        "1111",
        "1111",
        "333",
        "1111",
        "555",
        "1111",
        "555",
        "1111",
        "888"
      ]
    };
  },
  methods: {
    
    send(data) {
      console.log(data);
    },
    initScroll() {
      new BScroll(this.$refs.menuScroll);
    }
  },
  created() {
    this.$nextTick(() => {
      this.initScroll();
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  width: 100%;
  height: 100%;
  background: #ccc;
}
.slide {
  overflow: hidden;
  width: 100px;
  height: 300px;
}
.uli {
  display: block;
  height: 30px;
  background: #f60;
  border: 1px solid #000;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
