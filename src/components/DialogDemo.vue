<template>
  <h1>Dialog 示例</h1>
  <Demo :component="Dialog1Demo" />
  <Demo :component="Dialog2Demo" />
  <Attr :data="data" :tabHeader="tabHeader"/>
</template>
<script lang="ts">
import Demo from './Demo.vue';
import Dialog1Demo from './Dialog1.demo.vue';
import Dialog2Demo from './Dialog2.demo.vue';
import {ref} from "vue";
import tabHeader from "./tabHeader.ts"
import Attr from "./Attr.vue"
export default {
  components: {Demo,Attr},
  setup() {
    const data = ref([
      {
        params: 'visible',
        desc: '是否展示',
        type: 'boolean',
        select: 'false / true',
        default: 'false',
      },
      {
        params: 'closeOnClickOverlay',
        desc: '点击遮罩层关闭',
        type: 'boolean',
        select: 'false / true',
        default: 'true',
      },
      {
        params: 'ok',
        desc: '点击确认触发函数',
        type: 'function',
        select: 'function',
        default: '/',
      },
      {
        params: 'cancel',
        desc: '点击取消触发函数',
        type: 'function',
        select: 'function',
        default: '/',
      }
    ])
    return { Dialog1Demo,Dialog2Demo,tabHeader,data };
  },
};
</script>