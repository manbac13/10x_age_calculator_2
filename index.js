
let date = document.getElementById("date-ip")
let month = document.getElementById("month-ip")
let year = document.getElementById("year-ip")
document.getElementsByClassName("show-age")[0].style.display = "none"


function getDate() {
    let dob = ""
    let dateValue;
    let monthValue;
    let yearValue;

    dateValue = date.value
    monthValue = month.value
    yearValue = year.value

    if (!dateValue || !monthValue || !yearValue) {
        return alert("Enter all the fields")
    }

    if (dateValue <= 0 || dateValue > 31) {
        return alert("Enter valid date")
    }

    if (monthValue <= 0 || monthValue > 12) {
        return alert("Enter valid month")
    }

    if (yearValue.length !== 4) {
        return alert("Enter valid year")
    }


    dob = monthValue + "/" + dateValue + "/" + yearValue

    let birthDate = new Date(dob)

    let today = new Date()

    console.log(birthDate)
    console.log(today)
    let age = today - birthDate
    let realAge = (age / (1000 * 60 * 60 * 24 * 365))
    let myAgeinYears = parseInt(realAge)
    daysPassed = parseInt(realAge * 365 - parseInt(realAge) * 365)
    document.getElementsByClassName("show-age")[0].innerHTML = `Your age in ${myAgeinYears} years and ${daysPassed} days`
    document.getElementsByClassName("show-age")[0].style.display = "block"
}













