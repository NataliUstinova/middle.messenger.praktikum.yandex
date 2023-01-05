import errorPageTpl from "./error.hbs";
import {errors} from "../../utils/constants";

const errorPage = (id) => {
  return errorPageTpl(errors[id])
}

export { errorPage };
