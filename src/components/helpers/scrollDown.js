// scrolls the selected (by id) element into view 
export const scrollDown = (selector) => {
    if(selector && typeof selector == 'string') {
        let element = document.getElementById(selector);
        element.scrollIntoView({ behavior: 'smooth' });
    }
    else {
        console.warn("Incorrect selector.");
    }
}