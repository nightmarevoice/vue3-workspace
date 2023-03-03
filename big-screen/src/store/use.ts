//store/user.js
 
import {defineStore} from "pinia"
const useUserStore=defineStore("user",()=>{
 
        state:()=>{
            return{
                usename:"sena",
 
        }
    },
    actions:{
        changeName(name){
            this.usename=name
        }
    }
   
})
export default useUserStore