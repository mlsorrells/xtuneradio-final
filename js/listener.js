document.addEventListener("DOMContentLoaded", function() {

    const userMenu = document.querySelector("#user-menu");

    document.addEventListener("click", function(event) {
        if (event.target.closest("#user-menu") || event.target.closest("#user-icon")) {
            return;
        }
        userMenu.style.display = "none";
    });

});