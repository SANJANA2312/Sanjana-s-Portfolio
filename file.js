
const footer = document.getElementById ("footer");
footer.innerHTML = `&copy; ${new Date ().getFullYear ()} Sanjana`;


const date=new Date ()
console.log ("Today's date",date );

const hour=date.getHours()
const greeting = document.getElementById ("portfolio-title")
if (hour < 12) {
    greeting.innerText = "Good Morning!, Welcome to my portfolio."
    greeting.className = "morning"
}
else if (hour < 17) {
    greeting.innerText = "Good Afternoon!, Welcome to my portfolio."
    greeting.className = "afternoon"
}                                                                   
else {
     greeting.innerText = "Good Evening!, Welcome to my portfolio."
    greeting.className = "evening"
}


const btn = document.getElementById ("btn-alert")
btn.innerText = "Click Here"
btn.onmouseover = function() {
    btn.innerText = "Smile Please"
}

btn.onmouseout = function() {
    btn.innerText = "Click Here"
}
btn.onclick = function() {
    alert("Always trust the Almighty! and stay hydrated.")
}

const orderedlist = document.getElementById ("numbers")
for (let i = 1; i <= 12 ; i++) { // bonus: more efficient syntax for incrementing the counter variable in loop
    const listitem = document.createElement("li")
    if (i% 2 == 0) {
        listitem.innerText = "even"
    } 
     //double equal to added to check if remainder is qual to zero or not, if remainder 0, number is even
     else {
        listitem.innerText = "odd"
     }
     orderedlist.appendChild (listitem)
}
