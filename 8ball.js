function in1() {
    var str = document.getElementById("sr").value
    let u = Math.floor(Math.random() * 3);
    let ui = Math.floor(Math.random() * 2);
    switch(u) {
        case 0:
            document.getElementById("oo").innerText = "Yes"
            break
        case 1:
        document.getElementById("oo").innerText = "No"
            break
        case 2:
        document.getElementById("oo").innerText = "Hmmmm, please try again"
            break
    }
    document.getElementById("o").innerText = str
}