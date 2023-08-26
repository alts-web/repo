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
    var inputUser = prompt('Enter your User:');
  
    if (validUsers.includes(inputUser)) {
        var inputPassword = prompt('Enter your Password:');
      
        if (validPasswords.includes(inputPassword)) {
            window.localStorage.setItem('user', inputUser);
            window.localStorage.setItem('password', inputPassword);
            document.body.style.display = 'block';
        } else {
            alert('Invalid password.');
        }
    } else {
        alert('Invalid user.');
        window.location.href = 'https://launchpad.classlink.com/rrisd';
        document.body.style.display = 'none';
    }
}

if (document.body.style.display !== 'block') {
    document.body.style.display = 'none';
}
