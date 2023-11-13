 var password = window.localStorage.getItem('password');
        var validPassword = "geforcenowaccount";
        if (password && password === validPassword) {
            document.body.style.display = 'block';
        } else {
            var input = prompt('Enter the password:');
            if (input === validPassword) {
                window.localStorage.setItem('password', input);
                document.body.style.display = 'block';
            } else {
                alert('Invalid password.');
                window.location.href = 'https://www.google.com';
            }
        }
        if (document.body.style.display !== 'block') {
            document.body.style.display = 'none';
        } 
