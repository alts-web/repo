var user = window.localStorage.getItem('user');
var password = window.localStorage.getItem('password');
var validUsers = ["Hrithvik", "user2", "user3"]; // array of valid users
var validPasswords = ["Vuppala", "password2", "password3"]; // array of valid passwords

if (validUsers.includes(user)) {
    var inputUserPassword = prompt('Enter your Username and Password (separated by a space):');
    var [inputUser, inputPassword] = inputUserPassword.split(' ');
  
    if (validPasswords.includes(inputPassword)) {
        window.localStorage.setItem('user', inputUser);
        window.localStorage.setItem('password', inputPassword);
        document.body.style.display = 'block';
    } else {
        alert('Invalid password.');
        window.location.href = 'https://launchpad.classlink.com/rrisd';
        document.body.style.display = 'none';
    }
} else {
  var inputUserPassword = prompt('Enter your Username and Password (separated by a space):');
  var [inputUser, inputPassword] = inputUserPassword.split(' ');
  
  if (validUsers.includes(inputUser)) {
    if (validPasswords.includes(inputPassword)) {
        window.localStorage.setItem('user', inputUser);
        window.localStorage.setItem('password', inputPassword);
        document.body.style.display = 'block';
    } else {
        alert('Invalid password.');
        window.location.href = 'https://launchpad.classlink.com/rrisd';
        document.body.style.display = 'none';
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
