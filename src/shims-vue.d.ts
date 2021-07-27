//用来给ts解析vue文件的
declare module '*.vue' {
  import { ComponentOptions} from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}