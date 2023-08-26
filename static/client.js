var user = window.localStorage.getItem('user');
var password = window.localStorage.getItem('password');
var validUsers = ["Hrithvik", "user2", "user3"]; // array of valid users
var validPasswords = ["Vuppala", "password2", "password3"]; // array of valid passwords
var isValidLogin = validUsers.includes(user) && validPasswords.includes(password);

if (user && password && isValidLogin) {
    document.body.style.display = 'block';
} else {
    var inputUser = prompt('Enter your User:');
    var inputPassword = prompt('Enter your Password:');
    var isValidInput = validUsers.includes(inputUser) && validPasswords.includes(inputPassword);

    if (isValidInput) {
        window.localStorage.setItem('user', inputUser);
        window.localStorage.setItem('password', inputPassword);
        document.body.style.display = 'block';
    } else {
        alert('Invalid user or password.');
        window.location.href = 'https://launchpad.classlink.com/rrisd';
    }
}

if (document.body.style.display !== 'block') {
    document.body.style.display = 'none';
}
