import config from '../config.js';
import remove from "del";

let deletePath = `${config.app}/**`;
let clean = () => remove.sync(deletePath);

export default { 
    default: clean 
};