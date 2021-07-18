import {projectAuth}  from "../firebase/config"

import {ref} from 'vue'

const error = ref(null)
const signUp = async (email , Password ,userName)=>{
    error.value = null;
    try {
      const res =  await projectAuth.createUserWithEmailAndPassword(email ,Password);
      if (!res) {
          throw new Error("couldn't complete  the registration process");
      }
      await res.user.updateProfile({
          displayName: userName
        });
          console.log(res.user);
      error.value = null;
      return res;
    } catch (err) {
        error.value = err.message;
        console.log(error);
    }
}

const useSignUp = ()=>{

    return {error , signUp}
}

export default useSignUp