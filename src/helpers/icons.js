import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faEraser,
  faSpinner,
  faPlusCircle,
  faMobileScreenButton,
  faPaperPlane,
  faMapLocationDot,
  faEnvelope,
  faLock
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(
    faTrash,
    faSignOutAlt,
    faEdit,
    faEraser,
    faSpinner,
    faPlusCircle,
    faMobileScreenButton,
    faPaperPlane,
    faMapLocationDot,
    faEnvelope,
    faLock

  );
};

export default Icons;
