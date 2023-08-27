        function checkFeatures() {
            if (!window.open || !window.location.assign) {
                document.body.style.display = "none";
            } else {
                document.body.style.display = "block";
            }
        }

        function showAlert() {
            if (!window.open || !window.location.assign) {
                alert("Please enable popups and redirects to continue.");
            }
        }
