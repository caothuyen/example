import { library } from "@fortawesome/fontawesome-svg-core";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faQrcode } from "@fortawesome/free-solid-svg-icons/faQrcode";
import { faMessage } from "@fortawesome/free-solid-svg-icons/faMessage";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons/faLayerGroup";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faKey } from "@fortawesome/free-solid-svg-icons/faKey";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons/faEyeSlash";
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons/faCircleExclamation";

function FontAwesomeLibrary() {
  return library.add(
    faHouse,
    faQrcode,
    faMessage,
    faLayerGroup,
    faHeart,
    faChevronLeft,
    faUser,
    faKey,
    faEyeSlash,
    faEye,
    faCircleExclamation
  );
}

export default FontAwesomeLibrary;
