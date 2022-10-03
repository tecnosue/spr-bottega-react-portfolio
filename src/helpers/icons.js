import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faEraser,
  faSpinner,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(
    faTrash,
    faSignOutAlt,
    faEdit,
    faEraser,
    faSpinner,
    faPlusCircle
  );
};

export default Icons;
