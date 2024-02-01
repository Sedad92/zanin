// ava bo dark theme wanaya harwasas dame j page aki d chya eke de agar har dark theme bet de menet aw b reka ve 
document.addEventListener("DOMContentLoaded", function () {
    const themeToggleBtn = document.getElementById("themeToggleBtn");
    const themeIcon = document.getElementById("themeIcon");
    const checkbox = document.getElementById('check');
  
    // Check if the user has a theme preference stored in localStorage
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      document.body.classList.toggle("dark-theme", storedTheme === "dark");
      checkbox.checked = storedTheme === "dark";
    }
  
    themeToggleBtn.addEventListener("click", function () {
      document.body.classList.toggle("dark-theme");
      themeIcon.classList.toggle("fa-sun");
      themeIcon.classList.toggle("fa-moon");
  
      // Store the user's preference in localStorage
      const themePreference = document.body.classList.contains("dark-theme") ? "dark" : "light";
      localStorage.setItem("theme", themePreference);
    });
  });
  // ________________________________________________________________________________
  
  //  Your custom script to handle the "زێدەتر" click and update modal content 
    $(document).ready(function () {
      $("#read-more").click(function () {
        // Update modal content with additional text
        $(".modal-body .additional-text-modal").html($(".additional-text").html());
      });
    });
  // ________________________________________________________________________________
  
//   bo progress

let scrollPercentage = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round(pos * 100 / calcHeight);
    scrollProgress.style.background = `conic-gradient(#26648e ${scrollValue}%, #ecf0f3 ${scrollValue}%)`;
    progressValue.textContent = `${scrollValue}%`;
  }
  window.onscroll = scrollPercentage;
  window.onload = scrollPercentage;
