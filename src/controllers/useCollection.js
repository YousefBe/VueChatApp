import { projectFirestore } from "../firebase/config";
import { ref } from "vue";

const useCollection = (collection) => {
  const error = ref(null);
  const addDoc = async (doc) => {
    error.value = null;

    try {
      await projectFirestore.collection(collection).add(doc);
    } catch (error) {
      console.log(error.message);
      error.value = "message is not sent"
    }
  };

  return {error , addDoc}
};
export default useCollection 