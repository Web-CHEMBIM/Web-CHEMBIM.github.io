document.writeln(`
<nav>
      <div class="nav-content">
        <ul class="navbar-list">
          <li class="nav-item">
            <a class="navigation-link active" href="../html/index.html">HOME</a>
          </li>
          <li class="nav-item">
            <a class="navigation-link" href="../html/lessonPage.html"
              >LESSONS</a
            >
          </li>
          <li class="nav-item">
            <a class="navigation-link" href="../html/8-Quizzes.html">QUIZ</a>
          </li>
          <a href="../html/index.html"
            ><img class="nav-logo" src="../assets/svg/Logo.svg" href=""
          /></a>
          <li class="nav-item">
            <a class="navigation-link" id="exercise-btn"
              >EXERCISE <span id="dropdown-icon">▼</span></a
            >
            <div class="exercise-dropdown" id="exercise-dropdown">
              <ul>
                <li>
                  <a href="../html/1-Basic.html#ite-01" class="scrollto"
                    >Exercise 5.1</a
                  >
                </li>
                <li>
                  <a href="../html/2-IonicBond.html#ite-02" class="scrollto"
                    >Exercise 5.2</a
                  >
                </li>
                <li>
                  <a href="../html/3-CovalentBond.html#ite-03" class="scrollto"
                    >Exercise 5.3</a
                  >
                </li>
                <li>
                  <a href="../html/4-HydrogenBond.html#ite-04" class="scrollto"
                    >Exercise 5.4</a
                  >
                </li>
                <li>
                  <a href="../html/5-DativeBond.html#ite-05" class="scrollto"
                    >Exercise 5.5</a
                  >
                </li>
                <li>
                  <a href="../html/6-MetallicBond.html#ite-06" class="scrollto"
                    >Exercise 5.6</a
                  >
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="navigation-link" href="../html/9-Usermanual.html">USER MANUAL</a>
          </li>
          <li class="nav-item">
            <a class="navigation-link" href="../html/index.html#about-me" class="scrollto">ABOUT ME</a>
          </li>
        </ul>
      </div>
    </nav>
`);

let exerciseBtn = document.querySelector("#exercise-btn");
let exerciseDropdown = document.querySelector("#exercise-dropdown");
let dropdownArrow = document.querySelector("#dropdown-icon");
exerciseBtn.addEventListener("click", function () {
  exerciseDropdown.classList.toggle("active");
  dropdownArrow.classList.toggle("active");
  console.log("exercise");
});
