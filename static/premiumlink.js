 var password = window.localStorage.getItem('password');
        var validPassword = "Decker";
        if (password && password === validPassword) {
            document.body.style.display = 'block';
        } else {
            var input = prompt('This Premium Link Is Password Protected. Enter The Password:');
            if (input === validPassword) {
                window.localStorage.setItem('password', input);
                document.body.style.display = 'block';
                alert("Please do not leak the password.");
            } else {
                alert('Invalid Password. Please send an email to this address to get the password - contact@edficiency.school');
                window.location.href = 'index.html';
            }
        }
        if (document.body.style.display !== 'block') {
            document.body.style.display = 'none';
        } 
