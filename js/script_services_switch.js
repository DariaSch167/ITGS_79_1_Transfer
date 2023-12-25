function switchPoints() {
    const departureSelect = document.getElementById("departurePoint");
    const arrivalSelect = document.getElementById("arrivalPoint");
    const tempDepartureValue = departureSelect.value;
    const tempArrivalValue = arrivalSelect.value;

    departureSelect.value = tempArrivalValue;
    arrivalSelect.value = tempDepartureValue;
}


