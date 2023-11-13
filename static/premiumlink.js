 var password = window.localStorage.getItem('password');
        var validPassword = "1234";
        if (password && password === validPassword) {
            document.body.style.display = 'block';
        } else {
            var input = prompt('This Premium Link Is Password Protected. Enter The Password:');
            if (input === validPassword) {
                window.localStorage.setItem('password', input);
                document.body.style.display = 'block';
            } else {
                alert('Invalid password you little nigga.');
                window.location.href = 'https://skydiver-web.1.us-1.fl0.io';
            }
        }
        if (document.body.style.display !== 'block') {
            document.body.style.display = 'none';
        } 
