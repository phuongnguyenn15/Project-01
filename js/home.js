// =================== tạo function thêm vào giỏ hàng ===================================
// b1 bắt sự kiện

// b2 lấy thông tin sự kiện

// ================= render sản phẩm ================================
// function renderProduct() {
//   for (let i = 0; i < productList.length; i++) {
//     let liElement = document.createElement("li"); //tao element li
//     liElement.setAttribute("class", "product"); //tao class cho li
//     liElement.dataset.id = i; //cu phap tao the data-set
//     liElement.innerHTML = `
//  <div class="product-item">
//       <div class="product-top">
//         <a href="" class="product-thumb">
//           <img
//             src=${productList[i].img}
//             alt=""
//           />
//         </a>
//         <a href="" class="buy-now">mua ngay</a>
//       </div>

//       <div class="product-infor">
//         <a href="" class="product-cat">G-Shock</a>
//         <a href="" class="product-name"
//           >${productList[i].productName}</a
//         >
//         <div class="product-price">${productList[i].price}</div>
//       </div>
//     </div>
// `;
//     ulElement.appendChild(liElement);
//   }
// }

let productListLMT = [
  {
    id: 01,
    img: "https://www.dangquangwatch.vn/upload/product/1595129105_dong-ho-cao-cap9.jpg",
    productName: "Đồng hồ Stuhrling Original Tourbillon 213T.333X2",
  },
  {
    id: 02,
    img: "https://www.dangquangwatch.vn/upload/product/1223213615_dong-ho-cap-cao30.jpg",
    productName: "Đồng hồ Tourbillon Automatic Memorigin 15556",
  },
  {
    id: 03,
    img: "https://www.dangquangwatch.vn/upload/img_big/2044378406_donghothuysyvangkhoi1.jpg",
    productName: "Đồng hồ Atlantic Swiss AT-95743.65.21",
  },
];

//  =====================   render product ===========================

//tao product co san
let productList = [
  {
    id: 0,
    img: "https://www.dangquangwatch.vn/upload/product/dong-ho-thuy-sy-cao-cap2-1299444541.jpg",
    productName: "Đồng Hồ EPOS SWISS E-3500.169.24.25.25 Limited",
    price: "2500",
  },
  {
    id: 1,
    img: "https://www.dangquangwatch.vn/upload/img_big/879216088_dong-ho-thuy-sy124.jpg",
    productName: "Đồng hồ Epos Swiss E-3429.195.20.58.25 Limited",
    price: "3000",
  },
  {
    id: 2,
    img: "https://www.dangquangwatch.vn/upload/product/dong-ho-thuy-sy-phien-ban-gioi-han2-693932112.jpg",
    productName: "Đồng hồ Atlantic Swiss AT-52851.41.55G Limited",
    price: "6000",
  },
  {
    id: 3,
    img: "https://www.dangquangwatch.vn/upload/product/dong-ho-thuy-sy-phien-ban-gioi-han-AT-528514425-1121260901.jpg",
    productName: "Đồng hồ Atlantic Swiss AT-52851.44.25 Limited",
    price: "7000",
  },
  {
    id: 4,
    img: "https://www.dangquangwatch.vn/upload/product/337575005_525681240_dong-ho-thuy-sy2.jpg",
    productName: "Đồng hồ Epos Swiss E-3435.313.20.26.25 Limited",
    price: "3000",
  },
  {
    id: 5,
    img: "https://www.dangquangwatch.vn/upload/product/1400785371_dong-ho-thuy-sy22.jpg",
    productName: "Đồng hồ Epos Swiss E-3393.238.32.15.25",
    price: "4500",
  },
  {
    id: 6,
    img: "https://www.dangquangwatch.vn/upload/product/758851923_dong-ho-thuy-sy53.jpg",
    productName: "Đồng hồ Epos Swiss E-3391.832.20.16.30",
    price: "4000",
  },
  {
    id: 7,
    img: "https://www.dangquangwatch.vn/upload/product/dong-ho-nu-thuy-sy23-2020377102.jpg",
    productName: "Đồng hồ Epos Swiss E-4390.156.22.20.32",
    price: "5000",
  },
];

// tạo function render produt

function renderProduct(data) {
  const tbodyElement = document.querySelector(".products");
  let contentProduct = "";
  data.forEach((item, index) => {
    contentProduct += `
    <li>
    <div class="product-item">
      <div class="product-top">
        <a href="" class="product-thumb">
          <img
            src="${item.img}"
            alt=""
          />
        </a>
        <a href="" class="buy-now">mua ngay</a>
      </div>

      <div class="product-infor">
        <a href="" class="product-cat">DANANG WATCH</a>
        <a href="" class="product-name"
          >${index + 1}. ${item.productName}</a
        >
        <div class="product-price">${item.price}$</div>
      </div>
    </div>
  </li> `;
  });

  tbodyElement.innerHTML = contentProduct;
}
renderProduct(productList);

// ==============renderadmin product===================
function renderProduct(data) {
  const tbodyElement = document.querySelector("tbody");
  let contentProduct = "";
  data.forEach((item, index) => {
    contentProduct += `
    <tr>
    <td>${index + 1}</td>
    
    <td>${item.productName}</td>
    <td>${item.price}</td>
    <td><button onclick="handleEdit('${item.id}', '${
      item.productName
    }')">Edit</button> <button onclick="handleDelete('${
      item.id
    }')">Delete</button></td>
  </tr> `;
  });

  tbodyElement.innerHTML = contentProduct;
}
renderProduct(productList);

// ======>    tìm kiếm sản phầm <=======
function handleOnInputProduct(value) {
  // Value là kết quả mà input truyền khi gọi
  console.log(111, value);
  //   B2. Tìm user.name == value trong listUser

  //   B3. Tạo một mảng rỗng để chứa các phần tử thỏa điều kiện(được push vào khi thỏa)
  const resultFiler = [];

  //   B4. Chạy for để tìm phần tử thỏa đk và push() vào
  for (let index = 0; index < productList.length; index++) {
    const user = productList[index];

    // B5. dùng includes() để kí tự chứa trong user.name và dùng toUpperCase() để đồng bộ về kiểu in thường
    if (user.productName.toUpperCase().includes(value.toUpperCase())) {
      // B5.1 push() user vào khi đk đúng
      resultFiler.push(user);
    }
  }

  const resultFiler2 = productList.filter((user) => {
    if (user.productName.toUpperCase().includes(value.toUpperCase())) {
      return true;
    }
  });

  //   Cách viết ngắn gọn của arrow function khi return về 1 kết quả mà không cần thực hiệ logic code
  //   const resultFiler3 = listUser.filter((user) => user.name.toUpperCase().includes(value.toUpperCase()));

  console.log(111, resultFiler2);

  //   B6. Gọi function để render dữ liệu mảng mới
  renderProduct(resultFiler);
}

// ================ render limited ================
function renderProductLmt(data) {
  const tbodyElement = document.querySelector(".productsLmt");
  let contentProductLmt = "";
  data.forEach((item, index) => {
    contentProductLmt += `
    <li>
    <div class="product-item">
      <div class="product-top">
        <a href="" class="product-thumb">
          <img
            src="${item.img}"
            alt=""
          />
        </a>
        <a href="" class="buy-now">mua ngay</a>
      </div>

      <div class="product-infor">
        <a href="" class="product-cat">LIMITED</a>
        <a href="" class="product-name"
          >${index + 1}. ${item.productName}</a
        >
        
      </div>
    </div>
  </li> `;
  });

  tbodyElement.innerHTML = contentProductLmt;
}
renderProductLmt(productListLMT);

// =================addproduct admin=============================
function handleAddProduct() {
  // Lấy chỉ số phần tử cuối cùng
  const indexUserLastest = productList.length - 1;

  //   Lấy được phần tử cuối cùng
  const userLastest = productList[indexUserLastest];

  //   Lấy được id phần tử cuối và tăng lên 1

  const id = userLastest.id + 1;
  const newUser = { id: id, productName: "No name", price: 00 };
  //   Thêm user vào allUser
  productList.push(newUser);

  //   Render lại dữ liệu
  renderProduct(productList);
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
  for (let index = 0; index < listProduct.length; index++) {
    const user = listProduct[index];
    if (user.id == id) {
      console.log(user);
      listProduct.splice(index, 1);
      break;
    }
  }
  renderProduct(listProduct);
}
