import {projectAuth}  from "../firebase/config"

import {ref} from 'vue'

const error = ref(null)

const logout = async ()=>{
    error.value = null
    try {
     await projectAuth.signOut();
    } catch (err) {
       console.log(err.message);
       error.value = err
    }
}
const useLogout= ()=>{
    return {error , logout}
}

export default useLogout