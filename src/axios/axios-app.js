import axios from "axios";
import { keys } from "../keys";

export default axios.create({
   baseURL: keys.baseFirebaseURL,
});
