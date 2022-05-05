 const runAnimation = () => {
     let animationObjs = document.querySelectorAll('.dashboard');
     let staticObj = document.querySelector('.static');
     for( let animationObj of animationObjs ) {
         if(staticObj !== animationObj){
             let addActive = () => {
                 animationObj.classList.add('active');
                 setTimeout(removeActive, 9200);
             }
             let removeActive = () => {
                 animationObj.classList.remove('active');
             }
             addActive();
             setInterval(addActive, 9300);
         }
     }
 }
runAnimation();










