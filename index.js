const toggleNav = () => {
    const nav = document.querySelector('.left-nav')
    nav?.classList?.toggle("collapse");
}

const active = () => {
    const panel = document.querySelector('.pane')
    panel?.classList?.toggle("active");
}

const dropDown = () => {
    const visible = document.querySelector('.panel');
    visible?.classList?.toggle("seen")
}

const dropDownList  = () => {
    const dD = document.querySelector('.dropDownlist');
    dD?.classList?.toggle("visible")
}