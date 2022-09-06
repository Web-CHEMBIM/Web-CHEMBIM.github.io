document.writeln(`
<img src="../assets/svg/Buttons/scrollTop.svg" class="scrollTop-btn" id="scollTop-btn" onclick="scrollToTheTop()">
<div class="tooltip-text" id="tooltips-scrolltop">Scroll Top</div>

<img src="../assets/svg/Buttons/sideBar.svg" class="side-bar-btn" id="menu-btn">
<div class="tooltips tooltip-text" id="tooltips-side-menu">Side Bar</div>

<img src="../assets/svg/Buttons/menu.svg" class="close-btn" id="close-btn">
<div class="tooltips tooltip-text" id="tooltips-btm-menu">Menu</div>

<img src="../assets/svg/Buttons/noteBtn.svg" class="note-btn" id="note-btn">
<div class="tooltips tooltip-text" id="tooltips-note-btn">Take Note</div>

<!-- Note Apps -->
    <div class="noteApps-container" id="noteApps-container">
        <div class="notes" id="app"></div>
        <h1 class="note-app-close-button" id="note-app-close-button">+</h1>
    </div>
    <script src="../js/Notemain.js" type="module"></script>
`)

    let closeBtn = document.querySelector("#close-btn");
    let scrollTopBtn = document.querySelector("#scollTop-btn")
    let sideMenuBtn = document.querySelector("#menu-btn")
    let notesBtn = document.querySelector("#note-btn")
    closeBtn.onclick = function(){
        scrollTopBtn.classList.toggle("active");
        sideMenuBtn.classList.toggle("active");
        closeBtn.classList.toggle("active");
        notesBtn.classList.toggle("active");
        console.log("clicked");
        }

    // ToolTips
    // 1
    document.getElementById("scollTop-btn").addEventListener("mouseover", mousehover01)
    document.getElementById("scollTop-btn").addEventListener("mouseleave", mouseleave01)
    function mousehover01(){
        document.getElementById("tooltips-scrolltop").classList.add('display');
    }
    function mouseleave01(){
        document.getElementById("tooltips-scrolltop").classList.remove('display');
    }
    // 2
    document.getElementById("menu-btn").addEventListener("mouseover", mousehover02)
    document.getElementById("menu-btn").addEventListener("mouseleave", mouseleave02)
    function mousehover02(){
        document.getElementById("tooltips-side-menu").classList.add('display');
    }
    function mouseleave02(){
        document.getElementById("tooltips-side-menu").classList.remove('display');
    }
    // 3
    document.getElementById("close-btn").addEventListener("mouseover", mousehover03)
    document.getElementById("close-btn").addEventListener("mouseleave", mouseleave03)
    document.getElementById("close-btn").addEventListener("click", changeText)
    function mousehover03(){
        document.getElementById("tooltips-btm-menu").classList.add('display');
    }
    function mouseleave03(){
        document.getElementById("tooltips-btm-menu").classList.remove('display');
    }
    let menu=true;
    function changeText(){
        menu=!menu;
        if(menu){
            document.getElementById("tooltips-btm-menu").innerHTML = "Menu";
        }
        else{
            document.getElementById("tooltips-btm-menu").innerHTML = "Close";
        }
    }
    // 2
    document.getElementById("note-btn").addEventListener("mouseover", mousehover04)
    document.getElementById("note-btn").addEventListener("mouseleave", mouseleave04)
    function mousehover04(){
        document.getElementById("tooltips-note-btn").classList.add('display');
    }
    function mouseleave04(){
        document.getElementById("tooltips-note-btn").classList.remove('display');
    }

    let noteBtn = document.querySelector("#note-btn");
        let noteApp = document.querySelector("#noteApps-container");
        let noteCloseBtn = document.querySelector("#note-app-close-button");

        noteBtn.addEventListener("click", () => {
            noteApp.classList.add("show");
        })

        noteCloseBtn.addEventListener("click", () => {
            noteApp.classList.remove("show");
        })