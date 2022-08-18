import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSun, faMoon, faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faPlus, faTableColumns } from '@fortawesome/free-solid-svg-icons';

export default function useFontAwesomeLibrary() {
    library.add(faSun);
    library.add(faMoon);
    library.add(faPlus);
    library.add(faEye);
    library.add(faEyeSlash);
    library.add(faTableColumns);
    library.add(faPlus);

    return FontAwesomeIcon;
}

