  function validateForm() {
            // Clear previous errors
            document.getElementById('usernameError').innerText = '';
            document.getElementById('passwordError').innerText = '';

            let isValid = true;
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Validate username
            if (username.length < 3) {
                document.getElementById('usernameError').innerText = 'Username must be at least 3 characters long';
                isValid = false;
            }

            // Validate password
            if (password.length < 6) {
                document.getElementById('passwordError').innerText = 'Password must be at least 6 characters long';
                isValid = false;
            }

            return isValid;
        }