function validation() {
    const firstName = document.getElementById('first_name').value
    const lastName = document.getElementById('last_name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const telephone = document.getElementById('telephone').value
    const yourBio = document.getElementById('your_bio').value

    const firstNameCheck = /^[A-Za-z. ]{3,16}$/
    const lastNameCheck = /^[A-Za-z. ]{3,16}$/
    const emailCheck = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/
    //const passwordCheck =
    const telephoneCheck = /^[0-9]{11}$/

    if (firstNameCheck.test(firstName)) {
        document.getElementById('first_name_error').innerHTML = ""

    } else {
        document.getElementById('first_name_error').innerHTML = "First name must be alphanumeric and contain 3-16 character"
        return false
    }

    if (lastNameCheck.test(lastName)) {
        document.getElementById('last_name_error').innerHTML = ""

    } else {
        document.getElementById('last_name_error').innerHTML = "last name must be alphanumeric and contain 3-16 character"
        return false
    }

    if (emailCheck.test(email)) {
        document.getElementById('email_error').innerHTML = ""
    }
    else {
        document.getElementById('email_error').innerHTML = "Email must be a vaid address, e.g.example@example.com"
        return false
    }





}
