let studentsArray = []

function clickHandler(event){
    if (event.target.tagName === "BUTTON"){
        // if the button is change bg
        if (event.target.id === "bgButton"){

        }
        // else if it is submit
        else if (event.target.textContent === "Submit"){
            let firstNameInput = document.querySelector("#firstname");
            let lastNameInput = document.querySelector("#lastname");
            let progNameInput = document.querySelector("#progname");
            let student = {
                firstName: firstNameInput.value,
                lastName: lastNameInput.value,
                progName: progNameInput.value
            }
            studentsArray.push(student)
            addStudentToList(student)
            firstNameInput.value = "";
            lastNameInput.value = "";
            progNameInput.value = "";
        }
    }
}
document.body.addEventListener("click", clickHandler)

function addStudentToList(newStudent){
    // newStudent is an object with firstName, lastName, progName
    // create new li
    const newLi = document.createElement("li")
    // find the correct ul based on the progName of newStudent
    if (newStudent.progName === "CIT"){
        const citList = document.querySelector("#CIT")
        // append the new li to the CIT ul
        citList.appendChild(newLi)
    }else if (newStudent.progName === "CST"){
        const cstList = document.querySelector("#CST")
        // append the new li to the CST ul
        cstList.appendChild(newLi)
    }
    // update the textContent of new li
    newLi.textContent = `${newStudent.firstName} ${newStudent.lastName}`;
}