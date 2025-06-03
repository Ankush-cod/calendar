let currDate = new Date();
let dates = document.querySelectorAll(".calendar-dates div");
let events=JSON.parse(localStorage.getItem("events")) || {};
events
console.log("events");
function today(date){
    if(currDate.getDate() === date){
        return 1;
    }
    return 0;
}

for(let i=0;i<30;i++){
    if(events[Number(dates[i].innerText)]){
        dates[i].classList.add("event");
        
    }
}
dates.forEach((date)=>{
    if(today(Number(date.innerText))){
        date.classList.add("today");
    }
    date.addEventListener("click" ,()=>{
        if(!events[Number(date.innerText)]){
          
                let detail = prompt("Enter the detail of Event");
                if(detail.trim()!==""){
                date.classList.add("event");
                events[date.innerText] = detail;
                localStorage.setItem("events",JSON.stringify(events));
            }
            
            
        }else{
            try {
                let action = prompt("View (enter V ) Or Delete the event (enter D)")
                if(action.trim()==="V"){
                    alert(events[Number(date.innerText)]);
                } 
                else if(action.trim()==="D"){
                    let tempDate = date.innerText;
                    delete events[tempDate];
                    date.classList.remove("event");
                } else{
                    throw new Error("invalid Input");
                }
            } catch (error) {
                alert("invalid Input");
            }
           
        }
    });
   
});