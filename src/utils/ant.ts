/*
 * @Author: your name
 * @Date: 2021-03-01 09:45:15
 * @LastEditTime: 2021-03-01 09:45:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-vue-app\src\utils\ant.ts
 */

import { Button } from 'vant'
const ant = {
  install(Vue: { component: (arg0: string, arg1: any) => void }) {
    Vue.component(Button.name, Button)
  },
}
export default ant
