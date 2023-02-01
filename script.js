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
    const passwordCheck = /^ (?=.*[0-9])(?=.*[!@#$%^&*._-])[A-Za-z0-9!@#$%^&*._-]6,19{}$/
    const telephoneCheck = /^[0-9]{11}$/
    const bioCheck = /^[]/

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

    if (passwordCheck.test(password)) {
        document.getElementById('password_error').innerHTML = ""
    }
    else {
        document.getElementById('password_error').innerHTML = "Password must be alphanumeric(@._and -are also allowed)and between 6-20 character "
        return false
    }

    if (telephoneCheck.test(telephone)) {
        document.getElementById('telephone_error').innerHTML = ""
    }
    else {
        document.getElementById('telephone_error').innerHTML = "Password must be alphanumeric(@._and -are also allowed)and between 6-20 character "
        return false
    }

    if (bioCheck.test(yourBio)) {
        document.getElementById('bio_error').innerHTML = ""
    }
    else {
        document.getElementById('bio_error').innerHTML = "Password must be alphanumeric(@._and -are also allowed)and between 6-20 character "
        return false
    }





}
