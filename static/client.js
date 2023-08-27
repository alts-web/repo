var user = window.localStorage.getItem('user');
var password = window.localStorage.getItem('password');
var validUsers = ["Hrithvik", "Aarav", "Vraj", "Anish", "User", "Abhay", "Rasshessh", "Anand", "Reese"]; // array of valid users
var validPasswords = ["Vuppala", "Mehta", "Mann", "Patel", "Sundar", "Password", "Tippimath", "Thakkar", "Daherkar", "Bradshaw"]; // array of valid passwords

if (!validUsers.includes(user)) {
    var inputUser = prompt('Enter your User or Request a Account at [coming soon!]:');
  
    if (validUsers.includes(inputUser)) {
        user = inputUser;
    } else {
        alert('Invalid User. Request a Account at [coming soon!]');
        window.location.href = 'https://launchpad.classlink.com/rrisd';
        document.body.style.display = 'none';
    }
}

var inputPassword = prompt('Enter your Password:');
if (validPasswords.includes(inputPassword)) {
    window.localStorage.setItem('user', user);
    window.localStorage.setItem('password', inputPassword);
    document.body.style.display = 'block';
} else {
    alert('Invalid Password.');
    window.location.href = 'https://launchpad.classlink.com/rrisd';
    document.body.style.display = 'none';
}

if (document.body.style.display !== 'block') {
    document.body.style.display = 'none';
}
