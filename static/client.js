   var user = window.localStorage.getItem('user');
   var password = window.localStorage.getItem('password');
        var validUser = "Hrithvik";
        var validPassword = "Vuppala";
        if (password && password === validPassword) {
            document.body.style.display = 'block';
        } else {
            var input = prompt('Enter your User:');
            if (input === validUser) {
            var input = prompt('Enter your Password:');
                if (input === validPassword) {
                window.localStorage.setItem('user', input);
                window.localStorage.setItem('password', input);
                document.body.style.display = 'block';
            } 
            }
                else {
                alert('Invalid password or user.');
                window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            }
           
            
        }
      
        if (document.body.style.display !== 'block') {
            document.body.style.display = 'none';
        } 
