function validateInput(input) {
    console.log(input);

    if (input.value == "") {
        input.classList.add("is-invalid");
    } else {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
    }
}