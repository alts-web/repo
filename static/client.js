
var user = window.localStorage.getItem('user');
var password = window.localStorage.getItem('password');
var validUsers = ["Hrithvik", "user2", "user3"]; // array of valid users
var validPasswords = ["Vuppala", "password2", "password3"]; // array of valid passwords

if (validUsers.includes(user)) {
    var inputPassword = prompt('Enter your Password:');
  
    if (validPasswords.includes(inputPassword)) {
        window.localStorage.setItem('password', inputPassword);
        document.body.style.display = 'block';
    } else {
        alert('Invalid password.');
    }
} else {
    alert('Not a valid user.');
    window.location.href = 'https://launchpad.classlink.com/rrisd';
}

if (document.body.style.display !== 'block') {
    document.body.style.display = 'none';
}
