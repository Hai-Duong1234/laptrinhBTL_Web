let currentIndex = 0; // Chỉ số của hình ảnh hiện tại
const images = document.querySelectorAll('.banner-image'); // Tất cả các hình ảnh
const totalImages = images.length;

function showNextImage() {
    currentIndex = (currentIndex + 1) % totalImages; // Chuyển đến chỉ số tiếp theo
    const offset = -currentIndex * 100; // Tính toán độ dịch chuyển
    document.querySelector('.banner-images').style.transform = `translateX(${offset}%)`;
}

// Chuyển đổi hình ảnh sau mỗi 3 giây
setInterval(showNextImage, 3000);
// Hiện modal khi nhấn vào liên kết "Đăng nhập/Đăng ký"
var modal = document.getElementById("modal-dang-nhap");
var linkDangNhap = document.getElementById("link-dang-nhap");
var closeModal = document.getElementById("close-modal");

linkDangNhap.onclick = function (event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định
    modal.style.display = "block"; // Hiện modal
}

// Đóng modal khi nhấn vào nút đóng
closeModal.onclick = function () {
    modal.style.display = "none"; // Đóng modal
}

// Đóng modal khi nhấn ra ngoài modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none"; // Đóng modal
    }
}

// Xử lý đăng nhập
document.getElementById("form-dang-nhap").onsubmit = function (event) {
    event.preventDefault(); // Ngăn chặn reload trang
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Thực hiện kiểm tra thông tin đăng nhập ở đây
    // Ví dụ: Giả sử đăng nhập thành công
    if (username && password) {
        alert("Chào mừng, " + username); // Hiển thị thông báo chào mừng
        modal.style.display = "none"; // Ẩn modal chỉ khi đăng nhập thành công
    } else {
        alert("Thông tin đăng nhập không chính xác."); // Thông báo nếu đăng nhập thất bại
    }
}
// Giả sử bạn đã có một form đăng nhập với id 'form-dang-nhap'

// Hàm để xử lý đăng nhập
document.getElementById('form-dang-nhap').addEventListener('submit', function (event) {
    event.preventDefault(); // Ngăn chặn hành động mặc định của form

    // Lấy tên người dùng từ form
    var username = document.getElementById('username').value;

    // Cập nhật tên người dùng vào nút
    var loginButton = document.getElementById('link-dang-nhap');
    loginButton.innerText = username; // Thay đổi nội dung nút thành tên người dùng
    loginButton.setAttribute('data-username', username); // Lưu tên người dùng vào thuộc tính data

    // Đóng modal đăng nhập
    var modal = document.getElementById('modal-dang-nhap');
    modal.style.display = 'none';

    // Bạn có thể lưu tên người dùng vào sessionStorage nếu cần
    sessionStorage.setItem('username', username);
});

// Nếu cần hiển thị tên người dùng từ sessionStorage khi tải lại trang
window.onload = function () {
    var storedUsername = sessionStorage.getItem('username');
    if (storedUsername) {
        var loginButton = document.getElementById('link-dang-nhap');
        loginButton.innerText = storedUsername; // Hiển thị tên người dùng
        loginButton.setAttribute('data-username', storedUsername); // Cập nhật thuộc tính
    }
};
