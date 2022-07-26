let opening;
let closing;

export const animateOpen = () => {
    const el = document.querySelector('#menuMob');
    el.style.display = 'block';
    opening = setInterval(() => {
        const height = el.style.height;
        const width = el.style.width;
        if(height == '100vh'){
            return clearInterval(opening);
        }else{
            const progressH = Number(height.replace('vh', ''));
            const progressW = Number(width.replace('%', ''));
            const newValueH = progressH+1;
            const newValueW = progressW+1;
            el.style.height = `${newValueH}vh`;
            el.style.width = `${newValueW}%`;
        }
    }, 5);
};

export const animateClose = () => {
    const el = document.querySelector('#menuMob');
    closing = setInterval(() => {
        const height = el.style.height;
        const width = el.style.width;
        if(height == '0vh'){
            clearInterval(closing);
            return el.style.display = 'none';
        }else{
            const progressH = Number(height.replace('vh', ''));
            const progressW = Number(width.replace('%', ''));
            const newValueH = progressH-1;
            const newValueW = progressW-1;
            el.style.height = `${newValueH}vh`;
            el.style.width = `${newValueW}%`;
        }
    }, 5);
}



