// Lấy ra phần tử form

let formElement = document.getElementById("form");
// sử dụng debugger để check lỗi
// lấy value từ input

const emailValue = document.querySelector("#email");
const passValue = document.querySelector("#pass");
const passRepeatValue = document.querySelector("#pass2");

// Lấy dữ liệu từ local về
const getlocalStorage = JSON.parse(localStorage.getItem("users")) ?? [];

/**
 * Hàm kiểm tra các dữ liệu nhập vào không được để trống
 * @param {*} field
 * @returns True nếu validate thành công và False nếu validate thất bại
 */
const checkIsEmpty = (field) => {
  if (field === undefined || field === null || field === "") {
    return true;
  } else {
    return false;
  }
};

// Chúng ta nên tách riêng một hàm thực hiện chức năng validate dữ liệu nha
const validateData = () => {
  const error = [];

  console.log("EROR", error);

  if (checkIsEmpty(emailValue.value)) {
    error.push("Email không được phép để trống");
    alert("Email không được phép để trống");
  } else if (checkIsEmpty(passValue.value)) {
    error.push("Mật khẩu không được phép để trống");
    alert("Mật khẩu không được phép để trống");
    return;
  } else if (checkIsEmpty(passRepeatValue.value)) {
    error.push("Mật khẩu không được phép để trống");
    alert("Mật khẩu không được phép để trống");
    return;
  }

  // Kiểm tra email đã tồn tại chưa?
  for (let i = 0; i < getlocalStorage.length; i++) {
    if (getlocalStorage[i].email == emailValue.value) {
      error.push("Email đã tồn tại");
      alert("email không được phép trùng");
      return;
    }
    if (passValue.value !== passRepeatValue.value) {
      error.push("mật khẩu không trùng khớp");
      alert("mật khẩu không trùng khớp");
      return;
    }
  }

  if (error.length > 0) {
    return false;
  } else {
    return true;
  }
};

formElement.addEventListener("submit", (e) => {
  // Ngặn chặn sự kiện load lại trang
  e.preventDefault();

  // Đối tượng gồm các giá trị nhập vào từ ô input
  const userInput = {
    email: emailValue.value,
    password: passValue.value,
  };

  let valid = validateData();
  if (valid) {
    getlocalStorage.push(userInput);
    // Lưu mảng dữ liệu vào LocalStorage
    localStorage.setItem("users", JSON.stringify(getlocalStorage));
    window.location.href = "index.html";
  }
});

//
