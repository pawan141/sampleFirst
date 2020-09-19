function check(form) {

    if (form.email.value == "abc" && form.psw.value == "xyz") {
        alert("success");
        window.open('C:/Users/Lenovo/Desktop/Sidebar/sidebar.html')
    }
    else {
        alert("Error Password or Username")
    }
}
