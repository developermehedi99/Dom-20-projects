/**
 * Project Requirements:
 * - Change the background color by generating random rbg color by clicking a button
 */

// Steps

// Step 1 - create onload handler
window.onload=()=>{
main();
}
function main(){
    const root = document.getElementById('root');
    const bgBtn = document.getElementById('change-btn').addEventListener('click',function (){
        const bgColor = getRandomRGBColor();
        root.style.backgroundColor =bgColor;
    })
}
// step-2 generate rgb function
function getRandomRGBColor() {
    const r = Math.floor(Math.random() * 256); // Random value between 0-255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    return `rgb(${r}, ${g}, ${b})`;
}