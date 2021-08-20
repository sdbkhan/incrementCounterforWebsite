const counters= document.querySelectorAll(".counter")

counters.forEach((counter)=>{
    // console.log(counter)
    counter.innerHTML = 0;
     const updateCounter=()=>{
         const targetCount = +counter.getAttribute("data-target")
        //  console.log(typeof targetCount)
        const startingCount = Number(counter.innerHTML);
        const increment = targetCount/100;
        if(startingCount<targetCount){
            counter.innerHTML = `${Math.round(startingCount + increment)}`;
            setTimeout(updateCounter,30)
        }else{
            counter.innerHTML = targetCount;
        }
     }
    updateCounter();
})