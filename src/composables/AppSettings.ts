import { ref } from 'vue'

export function useAppSettings(){ 
    const darkMode = ref<boolean | null>(null);
    const hideSidebar = ref<boolean>(false);

    function toggleDarkMode(){ 
        darkMode.value = !darkMode.value;
        localStorage.setItem('DarkMode', JSON.stringify(darkMode.value));
    }

    function toggleSidebar() { 
        
        hideSidebar.value = !hideSidebar.value;
        console.log('toggling sidebar', hideSidebar.value);
    }
    
    return { 
        darkMode, hideSidebar, toggleSidebar, toggleDarkMode
    }
}