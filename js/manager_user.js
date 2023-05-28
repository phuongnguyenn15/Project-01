const listUser = [
  { id: 1, name: " Nguyễn Ngọc Ngạn" },
  { id: 2, name: "Nguyễn Vũ Thiên" },
  { id: 3, name: "Nguyễn Quang Hải" },
  { id: 4, name: "Quế Ngọc Hải" },
  { id: 5, name: "Nguyễn Minh Tuấn" },
  { id: 6, name: "Hoàng Huy" },
  { id: 7, name: "Trần Quý" },
];

const listProduct = [
  { name: " G-Shock GA-110-1BDR", id: 1 },
  { name: " Apple Watch", id: 2 },
  { name: " Casio 5", id: 3 },
  { name: " Rolex 123", id: 4 },
];

// function chuyển đổi trang quản lý
function handleteam(value) {
  if (value === "userteam") {
    renderTable(listUser);
  } else {
    renderTable(listProduct);
  }
}

// function add người dùng
function handleAddUser() {
  // Lấy chỉ số phần tử cuối cùng
  const indexUserLastest = listUser.length - 1;

  //   Lấy được phần tử cuối cùng
  const userLastest = listUser[indexUserLastest];

  //   Lấy được id phần tử cuối và tăng lên 1

  const id = userLastest.id + 1;
  const newUser = { id: id, name: "No name" };
  //   Thêm user vào allUser
  listUser.push(newUser);

  //   Render lại dữ liệu
  renderTable(listUser);
}


// ============note
// b1 bỏ thẻ li fit cứng trong html
// b2 thêm thẻ li trong file js
// truy vấn ra thẻ ul
// tạo một mảng chứa các data của sp
// [{img;}, {}]
// b3 lặp qua nó (for)

// =============================function render sản phẩm================================
function renderTable(data) {
  const tbodyElement = document.querySelector("tbody");
  let contentTbody = "";
  data.forEach((item, index) => {
    contentTbody += `
  <tr>
    <td>${index + 1}</td>
    <td>${item.name}</td>
    <td><button onclick="handleEdit('${item.id}', '${
      item.name
    }')">Edit</button> <button onclick="handleDelete('${
      item.id
    }')">Delete</button></td>
  </tr>
    `;
  });

  tbodyElement.innerHTML = contentTbody;
}

// ======>    tìm kiếm sản phầm <=======
function handleOnInputProduct(value) {
  // Value là kết quả mà input truyền khi gọi
  console.log(111, value);
  //   B2. Tìm user.name == value trong listProduct

  //   B3. Tạo một mảng rỗng để chứa các phần tử thỏa điều kiện(được push vào khi thỏa)
  const resultFiler = [];

  //   B4. Chạy for để tìm phần tử thỏa đk và push() vào
  for (let index = 0; index < listProduct.length; index++) {
    const user = listProduct[index];

    // B5. dùng includes() để kí tự chứa trong user.name và dùng toUpperCase() để đồng bộ về kiểu in thường
    if (user.name.toUpperCase().includes(value.toUpperCase())) {
      // B5.1 push() user vào khi đk đúng
      resultFiler.push(user);
    }
  }

  const resultFiler2 = listProduct.filter((user) => {
    if (user.name.toUpperCase().includes(value.toUpperCase())) {
      return true;
    }
  });

  //   Cách viết ngắn gọn của arrow function khi return về 1 kết quả mà không cần thực hiệ logic code
  //   const resultFiler3 = listProduct.filter((user) => user.name.toUpperCase().includes(value.toUpperCase()));

  console.log(111, resultFiler2);

  //   B6. Gọi function để render dữ liệu mảng mới
  renderTable(resultFiler2);
}

// =============== tìm kiếm người dùng =======================
function handleOnInputUser(value) {
  // Value là kết quả mà input truyền khi gọi
  console.log(111, value);
  //   B2. Tìm user.name == value trong listUser

  //   B3. Tạo một mảng rỗng để chứa các phần tử thỏa điều kiện(được push vào khi thỏa)
  const resultFiler = [];

  //   B4. Chạy for để tìm phần tử thỏa đk và push() vào
  for (let index = 0; index < listUser.length; index++) {
    const user = listUser[index];

    // B5. dùng includes() để kí tự chứa trong user.name và dùng toUpperCase() để đồng bộ về kiểu in thường
    if (user.name.toUpperCase().includes(value.toUpperCase())) {
      // B5.1 push() user vào khi đk đúng
      resultFiler.push(user);
    }
  }

  const resultFiler2 = listUser.filter((user) => {
    if (user.name.toUpperCase().includes(value.toUpperCase())) {
      return true;
    }
  });

  //   Cách viết ngắn gọn của arrow function khi return về 1 kết quả mà không cần thực hiệ logic code
  //   const resultFiler3 = listUser.filter((user) => user.name.toUpperCase().includes(value.toUpperCase()));

  console.log(111, resultFiler2);

  //   B6. Gọi function để render dữ liệu mảng mới
  renderTable(resultFiler);
}
// =============== function mở element form =====================
function handleEdit(userId, name) {
  console.log(111);
  // show form
  // lay element form
  const edit = document.querySelector(".updatedata");
  // thay doi thuoc tinh style display thành block
  edit.style.display = "block";
  // lấy dữ liệu và edit
  const userinput = document.querySelector("#userinput");
  userinput.name = userId;
  userinput.value = name;
}
//  ============ function lấy dữ liệu và thay đổi ==============
function handleUpdate() {
  // hiển emlement Input Group
  const elementInputGr = document.querySelector(".updatedata");

  const elementInput = document.querySelector("#userinput");

  const idUser = elementInput.name;

  for (let index = 0; index < listUser.length; index++) {
    const user = listUser[index];
    if (user.id == idUser) {
      user.name = elementInput.value;
      break;
    }
  }
  // set lại giá trị ban đầu
  elementInput.name = "";
  elementInput.value = "";
  elementInputGr.style.display = "none";
  renderTable(listUser);
}
// ========================= delete ===============================

function handleDelete(id) {
  const isDelete = confirm("Bạn chắc chắn muốn xóa");

  console.log("delete", isDelete);

  // Nếu người dùng từ chối xóa thì sẽ kết thúc function
  if (!isDelete) {
    return;
  }
  console.log(111111, id);

  // Tìm phần tử có id trùng với id đã dược truyền vào từ button Delete
  for (let index = 0; index < listUser.length; index++) {
    const user = listUser[index];
    if (user.id == id) {
      console.log(user);
      listUser.splice(index, 1);
      break;
    }
  }
  renderTable(listUser);
}
