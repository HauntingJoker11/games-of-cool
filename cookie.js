let r55wsjc = 0
let rdr = 1
let xj7lc
function a1() {
    alert("You have "+r55wsjc+" cookies")
}
function a2() {
    alert("You have "+rdr+" cookies per click")
}
function sh1() {
    if (r55wsjc >= 100) {
        rdr = rdr + 1
        r55wsjc = r55wsjc - 100
        alert("Bought")
    }else{
        alert("Not enough")
    }
}
function sh2() {
    if (r55wsjc >= 500) {
        rdr = rdr + 5
        r55wsjc = r55wsjc - 500
        alert("Bought")
    }else{
        alert("Not enough")
    }
}
function sh3() {
    if (r55wsjc >= 1000) {
        rdr = rdr + 20
        r55wsjc = r55wsjc - 1000
        alert("Bought")
    }else{
        alert("Not enough")
    }
}
function sh4() {
    if (r55wsjc >= 5000) {
        rdr = rdr + 50
        r55wsjc = r55wsjc - 5000
        alert("Bought")
    }else{
        alert("Not enough")
    }
}
function sh5() {
    if (r55wsjc >= 10000) {
        rdr = rdr + 100
        r55wsjc = r55wsjc - 10000
        alert("Bought")
    }else{
        alert("Not enough")
    }
}
function sh6() {
    if (r55wsjc >= 30000) {
        rdr = rdr + 200
        r55wsjc = r55wsjc - 30000
        alert("Bought")
    }else{
        alert("Not enough")
    }
}
function sh7() {
    if (r55wsjc >= 100000) {
        rdr = rdr + 500
        r55wsjc = r55wsjc - 100000
        alert("Bought")
    }else{
        alert("Not enough")
    }
}
function sh8() {
    if (r55wsjc >= 150000) {
        rdr = rdr + 700
        r55wsjc = r55wsjc - 150000
        alert("Bought")
    }else{
        alert("Not enough")
    }
}
function fin() {
    if (r55wsjc >= 50000000) {
        if (xj7lc == 1 && r55wsjc >= 50000000) {
            r55wsjc = 0
            alert("I give up")
            alert("Just kiding")
            alert("Try to beat my game now")
        }else if (r55wsjc >= 50000000) {
            rdr = 1
            xj7lc = 1
            r55wsjc = 0
            alert("Hmm")
            alert("I see you\'ve beat my game")
            alert("Now it's time for a final boss battle")
            alert("Your challenge is to:")
            alert("Beat my game a second time")
        }else{
            alert("Not enough")
        }
    }
}
