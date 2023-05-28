const AdminManageList = [
  { email: "Admin@gmail.com", password: "123456" },
  { email: "Admin123@gmail.com", password: " " },
];

const AdminRecheck = localStorage.getItem("admins");

if (!AdminRecheck) {
  localStorage.setItem("admins", JSON.stringify(AdminManageList));
}

// ============================= kiểm tra login Admin ===========================================
let formElement = document.getElementById("loginFormAdmin");
let emailValue = document.querySelector("#userAdmin");
let passValue = document.querySelector("#passAdmin");
// lấy dữ liệu từ localstorage
let getlocalStorageAdmin = JSON.parse(localStorage.getItem("admins")) ?? [];

console.log("getlocalStorageAdmin", getlocalStorageAdmin);
// dùng checkempty để kiểm tra input
const checkIsEmpty = (field) => {
  if (field === undefined || field === null || field === "") {
    return true;
  } else {
    return false;
  }
};
const validateData = () => {
  const error = [];
  if (checkIsEmpty(emailValue.value)) {
    error.push("Email không được phép để trống");
    alert("Email không được phép để trống");
  } else if (checkIsEmpty(passValue.value)) {
    error.push("Mật khẩu không được phép để trống");
    alert("Mật khẩu không được phép để trống");
    return;
  }
  if (error.length > 0) {
    return false;
  } else {
    return true;
  }
};

formElement.addEventListener("submit", (e) => {
  e.preventDefault(); // Ngăn chặn gửi biểu mẫu tự động

  let valid = validateData(); // Hàm kiểm tra dữ liệu (chưa được định nghĩa trong mã của bạn)

  if (valid) {
    // Kiểm tra email đã tồn tại chưa?
    let isLoggedIn = false;
    for (let i = 0; i < getlocalStorageAdmin.length; i++) {
      if (
        getlocalStorageAdmin[i].email === emailValue.value &&
        getlocalStorageAdmin[i].password === passValue.value
      ) {
        isLoggedIn = true;
        break;
      }
    }

    if (isLoggedIn) {
      alert("Đăng nhập thành công");
      console.log(emailValue);
      console.log(passValue);
      // Chuyển hướng đến trang đăng nhập thành công
      window.location.href = "http://127.0.0.1:5501/html/usermanager.html";
    } else {
      alert("Đăng nhập thất bại");
      window.location.href = "loginAdmin.html";
    }
  }
});
