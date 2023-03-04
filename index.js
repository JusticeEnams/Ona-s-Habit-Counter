
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
     count += 1
     countEl.textContent = count
}

increment()
function save() {
    let countStream = count + " - "
    saveEl.textContent += countStream
    console.log(count)
    count = 0
    countEl.textContent = count
}


// function save() {
//     console.log(count)
// }
// var username = "per"
// var notMsg = "You have three new notifications"
// console.log(notMsg +", " + username)

// var message = notMsg +", " + username
// console.log(message)

// let myName = "Justice Enams"
// let greeting = "Welcome back "
// let myGreeting = greeting + myName
// let flash = document.getElementById("welcome-el")
// flash.innerText = myGreeting
// console.log(myGreeting)