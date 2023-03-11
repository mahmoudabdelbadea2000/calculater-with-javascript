let tdcal = "";
let useinp = document.querySelector(".useinp"),
    compout = document.querySelector(".compout");

function calcad(value) {
    tdcal += value;
    useinp.value = tdcal;
}
function removech() {
    tdcal = tdcal.substring(0, tdcal.length - 1);
    useinp.value = tdcal;
}
function execm() {
    if (tdcal.length == 0 || tdcal == "") {
        alert("Need insert input");
        return;
    }
    try {
        ans = eval(tdcal);
        compout.value = ans;
    }
    catch (err) {
        alert("invalid input");
    }
}
function reset() {
    useinp.value = "";
    compout.value = "";
    tdcal = "";
}