var user = window.localStorage.getItem('user');
var password = window.localStorage.getItem('password');
var validUsers = ["Hrithvik", "Aarav", "Aarav"]; // array of valid users
var validPasswords = ["Vuppala", "Mehta", "Mann"]; // array of valid passwords
if (user && validUsers.includes(user) && password && validPasswords.includes(password)) {
    document.body.style.display = 'block';
} else {
    var inputUser = prompt('Enter your User:');
    var inputPassword = prompt('Enter your Password:');
    if (validUsers.includes(inputUser) && validPasswords.includes(inputPassword)) {
        window.localStorage.setItem('user', inputUser);
        window.localStorage.setItem('password', inputPassword);
        document.body.style.display = 'block';
    } else {
        alert('Invalid user or password.');
        window.location.href = 'https://launchpad.classlink.com/rrisd';
    }
} else {
        alert('Invalid user.');
        window.location.href = 'https://launchpad.classlink.com/rrisd';
    }

if (document.body.style.display !== 'block') {
    document.body.style.display = 'none';
}
