var user = window.localStorage.getItem('user');
var password = window.localStorage.getItem('password');
var validUsers = ["Hrithvik", "user2", "user3"]; // array of valid users
var validPasswords = ["Vuppala", "password2", "password3"]; // array of valid passwords

if (validUsers.includes(user)) {
    var inputUser = prompt('Enter your Username:');
    var inputPassword = prompt('Enter your Password:');
  
    if (validPasswords.includes(inputPassword) && validUsers.includes(inputUser)) {
        window.localStorage.setItem('user', inputUser);
        window.localStorage.setItem('password', inputPassword);
        document.body.style.display = 'block';
    } else {
        alert('Invalid username or password.');
        window.location.href = 'https://launchpad.classlink.com/rrisd';
        document.body.style.display = 'none';
    }
} else {
    var inputUser = prompt('Enter your Username:');
    var inputPassword = prompt('Enter your Password:');
  
    if (validPasswords.includes(inputPassword) && validUsers.includes(inputUser)) {
        window.localStorage.setItem('user', inputUser);
        window.localStorage.setItem('password', inputPassword);
        document.body.style.display = 'block';
    } else {
        alert('Invalid username or password.');
        window.location.href = 'https://launchpad.classlink.com/rrisd';
        document.body.style.display = 'none';
    }
}

if (document.body.style.display !== 'block') {
    document.body.style.display = 'none';
}
