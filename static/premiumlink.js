 var password = window.localStorage.getItem('password');
        var validPassword = "vrajisgay";
        if (password && password === validPassword) {
            document.body.style.display = 'block';
        } else {
            var input = prompt('This Premium Link Is Password Protected. Enter The Password or Request One:');
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
