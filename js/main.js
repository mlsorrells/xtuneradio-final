function userMenuToggle()
{
        
    if(document.getElementById("user-menu").style.display == "block") {
        document.getElementById("user-menu").style.display = "none";
    } else {
        document.getElementById("user-menu").style.display = "block";
    }
    
}

function validateDJForm()
{
    let dj = document.forms["assign-dj"]["dj"].value;
    if (dj.length < 5 || dj.length > 20) {
        alert("Name length must be between 5 and 20.");
        return false;
    }
}
