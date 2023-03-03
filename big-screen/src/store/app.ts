//store/app.js
 
import {defineStore} from "pinia"
 
const  useAppStore = defineStore("app",{
    state:()=>{
      return{
        count:1,
        name:1
      }
    },
    getters:{
      getAddAge: (state:any) => {
        return state.number + 100;
      },
      getNameAndAge():any {
        return this.count + this.getAddAge; // 调用其它getter
      },
    },
    actions:{
      add(num:number){
          this.count=num
      }
    }
})
 
export default useAppStore
 

 
