// Create Variables

const category = document.querySelectorAll(".link");
const lines = document.querySelectorAll(".line");
const message = document.getElementById("msg");
const msg_overlay = document.getElementById("msg_overlay");
const search = document.getElementById("search");
const searchOverlay = document.getElementById("search_overlay");
const search_component = document.getElementById("search_component");
const cart = document.getElementById("cart");
const cartOverlay = document.getElementById("cart_overlay");
const cart_component = document.getElementById("cart_component");
const close_search = document.getElementById("close_search");
const close_cart = document.getElementById("close_cart");
const menu = document.getElementById("menu");
const menuData = document.getElementById("menu_data");
const close_menu = document.getElementById("close_menu");

// handle events
message.addEventListener("click", handleShowMsg);
msg_overlay.addEventListener("click", handleHideMsg);
search.addEventListener("click", handleShowSearch);
searchOverlay.addEventListener("click", handleHideSearch);
cart.addEventListener("click", handleShowCart);
cartOverlay.addEventListener("click", handleHideCart);

close_search.addEventListener("click", handleHideSearch);
close_cart.addEventListener("click", handleHideCart);
menu.addEventListener("click", handleShowMenu);
close_menu.addEventListener("click", handleCloseMenu);
document.body.style.overflowX = "hidden";
// handle functions

category.forEach((e, id) => {
  e.addEventListener("mouseover", () => {
    const dropdown = document.querySelectorAll(".dropdown");

    if (dropdown) {
      dropdown[id].classList.remove("h-0");
      dropdown[id].classList.add("h-[420px]");
      lines[id].classList.remove("w-0");
      lines[id].classList.add("w-full");
    }
  });
});
category.forEach((e, id) => {
  e.addEventListener("mouseleave", () => {
    const dropdown = document.querySelectorAll(".dropdown");

    if (dropdown) {
      dropdown[id].classList.remove("h-[420px]");
      dropdown[id].classList.add("h-0");
      lines[id].classList.remove("w-full");
      lines[id].classList.add("w-0");
    }
  });
});

function handleShowMsg() {
  msg_overlay.classList.remove("hidden");
  msg_overlay.classList.add("flex");
  document.body.style.overflow = "hidden";
  document.getElementById("child_msg").classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("child_msg").classList.add("opacity-100");
  }, 500);
}

function handleHideMsg() {
  document.getElementById("child_msg").classList.remove("opacity-100");
  document.getElementById("child_msg").classList.add("opacity-0");
  document.getElementById("child_msg").classList.add("hidden");

  document.body.style.overflow = "auto";

  setTimeout(() => {
    msg_overlay.classList.toggle("flex");
    msg_overlay.classList.add("hidden");
  }, 500);
}

function handleShowSearch() {
  searchOverlay.classList.remove("hidden");
  searchOverlay.classList.add("flex");
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    search_component.classList.remove("right-[-8000px]");
    search_component.classList.add("right-0");
  }, 200);
}

function handleHideSearch() {
  search_component.classList.remove("right-0");
  search_component.classList.add("right-[-8000px]");
  document.body.style.overflow = "auto";

  setTimeout(() => {
    searchOverlay.classList.remove("flex");
    searchOverlay.classList.add("hidden");
  }, 200);
}

function handleShowCart() {
  cartOverlay.classList.remove("hidden");
  cartOverlay.classList.add("flex");
  document.body.style.overflow = "hidden";

  setTimeout(() => {
    cart_component.classList.remove("right-[-8000px]");
    cart_component.classList.add("right-0");
  }, 200);
}

function handleHideCart() {
  cart_component.classList.remove("right-0");
  cart_component.classList.add("right-[-8000px]");
  document.body.style.overflow = "auto";

  setTimeout(() => {
    cartOverlay.classList.remove("flex");
    cartOverlay.classList.add("hidden");
  }, 200);
}

function handleShowMenu() {
  menuData.classList.remove("left-[-8000px]");
  menuData.classList.add("left-0");
  document.body.style.overflow = "hidden";
}

function handleCloseMenu() {
  menuData.classList.remove("left-0");
  menuData.classList.add("left-[-8000px]");
  document.body.style.overflow = "auto";
}

// handle data

let default_id = null;

const menu_data = document.getElementById("shop_data");

const data = ["iPhone Cases", "AirPods Cases", "Sleeves", "Accessories"];

menu_data.innerHTML = `
${data
  .map(
    (e) =>
      `<li class="cursor-pointer duration-500 h-0 overflow-hidden lin">${e}</li>`
  )
  .join("")}
`;

document.querySelector(".Shop").addEventListener("click", () => {
  document.getElementById("Shop_data").classList.toggle("hidden");
});

document.querySelector(".project_carry").addEventListener("click", () => {
  document.querySelectorAll(".lin").forEach((e) => {
    e.classList.toggle("h-0");
  });
  document.getElementById("shop_data").classList.toggle("h-0");
});

// Create Slides

const slides = [
  {
    title: "data1",
    des: "Lorem ipsum dolor sit amet consectetur.",
    img: "/assist/banner1.webp",
  },
  {
    title: "data2",
    des: "Lorem ipsum dolor sit amet consectetur.",
    img: "/assist/banner2.webp",
  },
  {
    title: "data3",
    des: "Lorem ipsum dolor sit amet consectetur.",
    img: "/assist/banner3.webp",
  },
];

let default_num = 0;
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const banner = document.getElementById("banner");

next.addEventListener("click", () => {
  default_num++;
  if (default_num >= slides.length) {
    default_num = 0;
  }
  updateSlide();
});

prev.addEventListener("click", () => {
  default_num--;
  if (default_num < 0) {
    default_num = slides.length - 1;
  }
  updateSlide();
});

function updateSlide() {
  banner.innerHTML = `
    <img src="${slides[default_num].img}" alt="" class="w-full h-screen"/>
    <div class="banner_text absolute top-1/2 left-1/2 sm:left-1/4 -translate-x-1/2 -translate-y-1/2 z-[99] text-white">
      <span class="text-sm duration-500 relative">${slides[default_num].title}</span>
      <p class="des text-xl md:w-60 w-full leading-7 mt-4">
        ${slides[default_num].des}
      </p>
      <button class="mt-5 px-5 py-1 duration-300 bg-orange-600 text-white rounded-md">
        more
      </button>
    </div>
  `;
}

// تأكد من عرض الشريحة الأولى عند تحميل الصفحة
updateSlide();
