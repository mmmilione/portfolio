import { reactive } from 'vue';

const state = reactive({
    theme: 'dark',
    getThemeFromStorage(){
        const theme = localStorage.getItem('theme');
        if(theme == null) {
            return 'dark';
        }else{
            return theme;
        }
    },
    setTheme(theme){
        this.theme = theme;
        localStorage.setItem('theme', theme);
        const body = document.querySelector('body');
        if(this.theme == 'light'){
            body.classList.add('light');
        }else{
            body.classList.remove('light');
        }
    }
});

export default { state }; 