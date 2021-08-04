<template>
  <div>
    <h1>Button示例</h1>
    <Demo :component="Button1Demo"/>
    <Demo :component="Button2Demo"/>
    <Demo :component="Button3Demo"/>
    <Demo :component="Button4Demo"/>
    <Demo :component="Button5Demo"/>
    <Attr :data="data" :tabHeader="tabHeader"/>
  </div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Button1Demo from "./Button1.demo.vue";
import Button2Demo from "./Button2.demo.vue";
import Button3Demo from "./Button3.demo.vue";
import Button4Demo from "./Button4.demo.vue";
import Button5Demo from "./Button5.demo.vue";
import {ref} from "vue";
import tabHeader from "./tabHeader.ts"
import Attr from "./Attr.vue"

export default {
  components: {Demo,Attr},
  setup() {
    const data = ref([
      {
        params: 'theme',
        desc: '按钮类型',
        type: 'string',
        select: 'button / link / text',
        default: 'button',
      },
      {
        params: 'size',
        desc: '字体大小',
        type: 'string',
        select: 'big / normal / small',
        default: 'normal',
      },
      {
        params: 'level',
        desc: '按钮类型',
        type: 'string',
        select: 'main / normal / danger',
        default: 'normal',
      },
      {
        params: 'disabled',
        desc: '是否禁用',
        type: 'boolean',
        select: '/',
        default: 'true',
      },
      {
        params: 'loading',
        desc: '加载状态',
        type: 'boolean',
        select: '/',
        default: 'true',
      }
    ])
    return {
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo,
      data,
      tabHeader,
    }
  }
};
</script>