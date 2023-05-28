// lấy các phần tử từ iput

let formElement = document.getElementById("loginform");
let emailValue = document.querySelector("#user");
let passValue = document.querySelector("#login-pass");
// lấy dữ liệu từ localstorage
let getlocalStorage = JSON.parse(localStorage.getItem("users")) ?? [];

console.log("getlocalStorage", getlocalStorage);
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
    for (let i = 0; i < getlocalStorage.length; i++) {
      if (
        getlocalStorage[i].email === emailValue.value &&
        getlocalStorage[i].password === passValue.value
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
      window.location.href = "index.html";
    } else {
      alert("Đăng nhập thất bại");
      window.location.href = "login.html";
    }
  }
});
