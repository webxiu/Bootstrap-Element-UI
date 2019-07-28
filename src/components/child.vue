<template>
  <div class="container">
    <p>我是子组件,获取到的父组件数据为: {{msg}}</p>
    <p>
      <!-- 用来接收父组件的默认插槽 -->
      <slot></slot>
      <!-- 接收定义name的插槽 -->
      <slot name="test"></slot>
      <slot name="test2"></slot>
      <!-- 作用于插槽 -->
      <slot :info=info></slot>
    </p>
    <button @click="send">发送</button>
  </div>
</template>

<script>
// import test3 from './test3';
export default {
  name: "child",
  props:{
    msg:{
      type:String,
      default:'....我的一切',
      required:true
    }
  },
  // components:{test3},

  data() {
    return {
      info:"绑定的数据data",
      
    };
  },
  methods: {
    send(){
      this.$emit('send',{name:"张三",age:100})
      this.$message({
        type:'success',
        message:'子组件数据传父组件,请在控制台查看结果输出...'
      })
    }
    
  },
  mounted(){
    console.log('获取到父组件数据',this.msg);
    
  }
};
</script>

<style scoped>

</style>
