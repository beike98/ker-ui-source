<template>
  <h1>Tabs 示例</h1>
  <Demo :component="Tabs1Demo" />
  <Attr :data="data" :tabHeader="tabHeader"/>
</template>

<script lang="ts">
import Demo from './Demo.vue'
import Tabs1Demo from './Tabs1.demo.vue'
import tabHeader from "./tabHeader.ts"
import Attr from "./Attr.vue"
import {ref} from "vue";

export default {
  components: {Demo,Attr},
  setup(){
    const data = ref([

    ])
    return{Tabs1Demo,tabHeader,data}
  }
};
</script>