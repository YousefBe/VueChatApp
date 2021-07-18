import {projectAuth}  from "../firebase/config"
import {ref} from 'vue'

const user = ref(projectAuth.currentUser);

projectAuth.onAuthStateChanged(currentUser=>{
    user.value = currentUser
    console.log(currentUser);
});

const getUser = ()=>{
    return { user }
}

export default  getUser