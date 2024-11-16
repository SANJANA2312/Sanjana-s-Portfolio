// document.getElementById("unique_identifier").innerHTML = content
const footer = document.getElementById ("footer");
footer.innerHTML = `&copy; ${new Date ().getFullYear ()} Sanjana`;


const date=new Date ()
console.log ("Today's date",date );

const hour=date.getFullYear()
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
