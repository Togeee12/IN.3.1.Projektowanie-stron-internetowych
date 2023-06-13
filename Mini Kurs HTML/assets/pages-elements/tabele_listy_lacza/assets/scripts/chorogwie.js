const progressBarContainer = document.querySelector(".progress-bar-container");
  const progressBar = document.querySelector(".progress-bar");
  let totalHeight = document.body.scrollHeight;

  document.addEventListener("scroll", function() {
    const scrollPosition = document.documentElement.scrollTop + document.documentElement.clientHeight;
    let progress = (scrollPosition / totalHeight) * 100;
    
    if(progress > 100) {
      progress = 100;
    }
    progressBar.style.width = `${progress}%`;
  });
  let isInitial = true;
document.addEventListener("scroll", function() {
    if(isInitial){
        progressBar.style.width = '0%';
        isInitial = false;
    }
});
