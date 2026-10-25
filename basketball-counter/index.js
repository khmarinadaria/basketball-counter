let countHome = document.getElementById("count-home")
let countGuest = document.getElementById("count-guest")

let count1 = 0

function one() {
    count1 += 1
    countHome.textContent = count1
    leader()
}

function two() {
    count1 += 2
    countHome.textContent = count1 
    leader()
}

function three() {
    count1 += 3
    countHome.textContent = count1
    leader()
}

let count2 = 0

function plusone() {
    count2 += 1
    countGuest.textContent = count2
    leader()
}

function plustwo() {
    count2 += 2
    countGuest.textContent = count2 
    leader()
}

function plusthree() {
    count2 += 3
    countGuest.textContent = count2
    leader()
}

function leader() {
    countHome.classList.remove("leader");
    countGuest.classList.remove("leader");
    
    if (count1 > count2) {
        countHome.classList.add("leader");
    }
    else if (count2 > count1) {
        countGuest.classList.add("leader");
    }
}