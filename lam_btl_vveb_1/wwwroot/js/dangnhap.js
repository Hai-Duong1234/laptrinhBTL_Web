// auth.js

function handleLogin(event) {
    event.preventDefault(); // Ngăn chặn gửi form
    var username = document.getElementById("username").value;
    // Giả định đăng nhập thành công
    localStorage.setItem("username", username);
    window.location.href = "index.html"; // Chuyển về trang chính
}

function handleRegister(event) {
    event.preventDefault(); // Ngăn chặn gửi form
    var newUsername = document.getElementById("newUsername").value;
    var email = document.getElementById("email").value;
    var newPassword = document.getElementById("newPassword").value;
    // Thực hiện logic đăng ký tại đây (ví dụ: gửi tới server)
    alert("Đăng ký thành công cho " + newUsername);
}

function toggleLoginForm() {
    var loginForm = document.getElementById("loginForm");
    loginForm.style.display = loginForm.style.display === "none" ? "block" : "none";
}
