//HAM ICON
function classToggle(){
    const navs = document.querySelectorAll('.hamToggle')
    navs.forEach(ham=> ham.classList.toggle('hamToggleShow'));
}
document.querySelector('.ham').addEventListener('click',classToggle);
