const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const clicked=() =>
{
    modal.classList.add("active");
    overlay.classList.add("activeoverlay");
}

const closeMod=() =>
{
    modal.classList.remove("active");
    overlay.classList.remove("activeoverlay");
}