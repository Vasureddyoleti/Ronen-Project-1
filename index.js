function changePlan() {
    var isChecked = document.getElementById("check").checked;
    if (isChecked) {
        document.getElementById("month").classList.toggle("cycle-false");
        document.getElementById("year").classList.toggle("cycle-false");
        document.getElementById("price1").textContent = "48";
        document.getElementById("permonth").textContent = "Per year";
        document.getElementById("price2").textContent = "115";
        document.getElementById("peryear").textContent = "Per year";
        document.getElementById("changeicon").classList.toggle("d-none");
        document.getElementById("checkedicon").classList.toggle('d-none');
        document.getElementById("ruletext").classList.toggle("xmark-text");
    } else {
        document.getElementById("month").classList.toggle("cycle-false");
        document.getElementById("year").classList.toggle("cycle-false");
        document.getElementById("price1").textContent = "5";
        document.getElementById("permonth").textContent = "Per Month";
        document.getElementById("price2").textContent = "12";
        document.getElementById("peryear").textContent = "Per Month";
        document.getElementById("changeicon").classList.toggle("d-none");
        document.getElementById("checkedicon").classList.toggle('d-none');
        document.getElementById("ruletext").classList.toggle("xmark-text");
    }

}