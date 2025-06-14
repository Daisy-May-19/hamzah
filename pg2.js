function startConfetti() {
  const duration = 3*1000;
  const animationEnd=Date.now()+duration;
  const defaults ={
    startVelocity:35,
    spread:360,
    ticks:120,
    zIndex: 1000
    
  }
  const interval= setInterval (()=>{
    const timeLeft=animationEnd-Date.now();
    if (timeLeft<=0){
      return clearInterval(interval);
    }

    for (let i=0;i<5;i++){
     confetti(Object.assign({},defaults,{
      particleCount:25,
      origin:{
        x:Math.random(),
        y:Math.random()*0.2}
     }));
     }
    },150);
  

}
startConfetti();
document.innerHeight=screen.height;


 

 

 


