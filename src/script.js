// Welcome Message
window.onload = function () {
    console.log("Welcome to Talentvora");
};

// Login
function loginSuccess() {
    alert("Login Successful!");
    window.location.href = "dashboard.html";
}

// Register
function registerSuccess() {
    alert("Registration Successful!");
    window.location.href = "login.html";
}

// Logout
function logout() {
    alert("Logged Out Successfully!");
    window.location.href = "index.html";
}

// Feedback
function submitFeedback() {
    alert("Thank you for your feedback!");
}

// Join Challenge
function joinChallenge() {
    alert("You joined the challenge!");
}

// Upload Talent
function uploadTalent() {
    alert("Talent uploaded successfully!");
}

// Like Post
function likePost() {
    alert("❤️ Post Liked!");
}

// Follow User
function followUser() {
    alert("You are now following this user.");
}

// Send Message
function sendMessage() {

    let msg = document.getElementById("msg");

    if(msg && msg.value.trim() !== ""){

        alert("Message Sent!");

        msg.value = "";
    }
}

// Notifications
function markRead(){
    alert("All notifications marked as read.");
}

// Admin
function adminAction(action){
    alert(action + " selected.");
}