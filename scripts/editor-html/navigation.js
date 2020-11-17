/**
 * It opens the navigation side bar.
 */
function openSideBar() {
    document.getElementById("side-nav").style.width = "270px";
    // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    // let box = document.getElementsByClassName("box");
    
    
    //document.getElementById("open-menu-icon").style = 'display: none'
}

/**
 * It closes the navigation side bar.
 */
function closeSideBar() {
    document.getElementById("side-nav").style.width = "30px";
    // document.getElementById("open-menu-icon").style = ''
    // document.body.style.backgroundColor = "white"; 

}

/**
 * It hides the homepage when other page is opened.
 */
function hideHome() {
    document.getElementById('layout').style = 'display: none'
}