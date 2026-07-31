const cars = [
  {
    brand: "Ferrari",
    model: "SF90",
    title: "Ferrari\nSF90",
    titleColor: "#8f1828",
    strokeColor: "#ad3444",
    image: "ferrari-sf90.png",

    position: {
      left: "50%",
      top: "58%",
      width: "78vw"
    },

    hotspots: [
      {
        x: 29.6,
        y: 44.0,
        label: "Ferrari top",
        title: "Ferrari Top",
        image: "ferrari-top.png",
        heroFocus: "ferrari-focus-top.jpg",

        focus: "58% center",

        text:
          "Tôi cũng rất thích SF90 khi nhìn từ trên xuống. Từ góc này có thể thấy rõ thân xe rất thấp và rộng, trong khi các đường nét chạy từ đầu xe đến phía sau rất mượt mà"+
"phần cabin nằm ở trung tâm tạo cảm giác giống như một chiếc cockpit, còn phần thân xe bao quanh được thiết kế rất gọn và khí động học. Đây là điều khiến tôi cảm thấy SF90 không chỉ giống một chiếc siêu xe thông thường mà còn có một chút cảm giác của một chiếc xe đua hoặc thậm chí là một chiếc spaceship."
      },

      {
        x: 60.7,
        y: 35.6,
        label: "Interior",
        title: "Ferrari Interior",
        image: "ferrari-interior.png",
        heroFocus: "ferrari-focus-interior.jpg",

        /* Big left image focuses on the cabin / middle */
        focus: "50% center",

        text:
          "Cuối cùng, nội thất có lẽ là phần tôi thích nhất trên SF90. Khi nhìn vào bên trong, tôi có cảm giác đây không chỉ là một chiếc xe mà giống như một buồng lái được thiết kế dành riêng cho người lái"+
"tôi đặc biệt thích màn hình kỹ thuật số lớn phía trước, vô-lăng Ferrari với rất nhiều chức năng và cách mọi chi tiết đều hướng về vị trí người lái. Nội thất không có quá nhiều chi tiết thừa nhưng vẫn tạo được cảm giác sang trọng, thể thao và rất hiện đại."
      },

      {
        x: 85.9,
        y: 43.0,
        label: "Tail lights",
        title: "Tails lights",
        image: "ferrari-tail.png",
        heroFocus: "ferrari-focus-tail.jpg",

        /* Big left image focuses on the rear of the car */
        focus: "100% center",

        text:
          "Một trong những chi tiết đầu tiên khiến tôi thích SF90 chính là đèn hậu. Tôi rất thích cách Ferrari thiết kế phần đuôi xe rộng, thấp và mạnh mẽ, kết hợp với cụm đèn hậu có hình dáng rất đặc biệt. Khi đèn được bật lên, SF90 trông cực kỳ hiện đại và có thể dễ dàng nhận ra ngay cả khi nhìn từ xa"+
"tôi cũng thích cách đèn hậu kết hợp với các khe gió, cánh gió và phần diffuser phía dưới. Tất cả tạo cho phần đuôi SF90 cảm giác giống một chiếc xe đua thực thụ. Đối với tôi, đây là một trong những góc đẹp nhất của chiếc xe, đặc biệt là khi nhìn vào ban đêm."
      }
    ]
  },

  {
    brand: "Tesla",
    model: "Model 3",
    title: "Tesla\nModel 3",
    titleColor: "#929292",
    strokeColor: "#b9b9b9",
    image: "tesla-model3.png",

    position: {
      left: "50%",
      top: "58%",
      width: "78vw"
    },

    hotspots: [
      {
        x: 28.8,
        y: 44.0,
        label: "Interior",
        title: "Tesla Interior",
        image: "tesla-interior.png",
        heroFocus: "tesla-focus-interior.jpg",

        /* Focus on the cabin / center */
        focus: "50% center",

        text:
          "Interior là phần khiến tôi thích Tesla nhất. Nội thất Tesla hoàn toàn khác với phong cách của những chiếc xe truyền thống vì hầu hết các nút bấm vật lý đều được loại bỏ và nhiều chức năng được đưa vào màn hình cảm ứng lớn ở trung tâm"+
"tôi đặc biệt thích cách Tesla thiết kế dashboard rất sạch và tối giản. Khi bước vào bên trong, không gian tạo cho tôi cảm giác rộng rãi, hiện đại và giống như đang sử dụng một sản phẩm công nghệ hơn là một chiếc xe thông thường."
      },

      {
        x: 90.0,
        y: 43.0,
        label: "Tail lights",
        title: "Tesla Tail Lights",
        image: "tesla-tail.png",
        heroFocus: "tesla-focus-tail.jpg",

        /* Focus on the rear */
        focus: "100% center",

        text:
          "Điều tôi thích ở phần đuôi Tesla là thiết kế đơn giản nhưng rất hiện đại. Đèn hậu có những đường LED sắc nét, kết hợp với thân xe khá sạch và ít chi tiết, tạo nên một tổng thể gọn gàng"+
"khi nhìn Tesla từ phía sau, đặc biệt là vào ban đêm, tôi cảm thấy thiết kế đèn rất dễ nhận diện nhưng không quá phức tạp. Tôi thích phong cách này vì nó không cần quá nhiều chi tiết để nổi bật, mà vẫn tạo được cảm giác cao cấp và mang nét đặc trưng của một chiếc xe điện hiện đại."
      }
    ]
  },

  {
    brand: "Audi",
    model: "R8",
    title: "Audi\nR8",
    titleColor: "#60646a",
    strokeColor: "#8d9298",
    image: "audi-r8.png",

    position: {
      left: "50%",
      top: "58%",
      width: "78vw"
    },

    hotspots: [
      {
        x: 10.8,
        y: 52.0,
        label: "Head lights",
        title: "Audi R8 Head Lights",
        image: "audi-headlight.png",
        heroFocus: "audi-focus-headlight.jpg",

        /* Focus on the front of the R8 */
        focus: "0% center",

        text:
          "Tiếp theo là đèn pha, một chi tiết làm tôi nhận ra Audi R8 ngay từ phía trước. Tôi rất thích thiết kế đèn sắc nét và góc cạnh, khiến chiếc xe có một vẻ ngoài mạnh mẽ và aggressive hơn"+
"khi kết hợp với phần đầu xe thấp và rộng, cụm đèn làm R8 trông giống một chiếc supercar thực thụ. Đặc biệt vào ban đêm, ánh sáng LED tạo cho chiếc xe một diện mạo rất hiện đại và nổi bật."
      },

      {
        x: 36.0,
        y: 36.8,
        label: "Interior",
        title: "Audi R8 Interior",
        image: "audi-interior.png",
        heroFocus: "audi-focus-interior.jpg",

        focus: "50% center",

        text:
          "Nội thất là một trong những phần tôi thích nhất trên Audi R8. Ngay khi nhìn vào bên trong, tôi cảm thấy khoang lái được thiết kế giống như một cockpit của xe đua, với mọi thứ đều tập trung vào người lái"+
"tôi đặc biệt thích vô-lăng thể thao, màn hình kỹ thuật số ngay phía trước và cách các nút điều khiển được bố trí rất gọn gàng. Nội thất không có quá nhiều chi tiết phức tạp nhưng vẫn tạo được cảm giác cao cấp và hiện đại. Khi ngồi vào R8, tôi cảm thấy chiếc xe được thiết kế không chỉ để đẹp mà còn để người lái thực sự tận hưởng cảm giác lái."
      }
    ]
  }
];

let current = 0;

const carImage = document.getElementById("carImage");
const bigModelName = document.getElementById("bigModelName");
const carBrand = document.getElementById("carBrand");
const carModel = document.getElementById("carModel");
const hotspots = document.getElementById("hotspots");

const overlay = document.getElementById("detailOverlay");
const detailTitle = document.getElementById("detailTitle");
const detailImage = document.getElementById("detailImage");
const detailHero = document.getElementById("detailHero");
const detailText = document.getElementById("detailText");


function renderCar() {
  const car = cars[current];

  carImage.classList.add("swap");

  setTimeout(() => {
    carImage.src = car.image;
    carImage.alt = `${car.brand} ${car.model}`;

    carImage.style.left = car.position.left;
    carImage.style.top = car.position.top;
    carImage.style.width = car.position.width;

    bigModelName.textContent = car.title;
    bigModelName.style.color = car.titleColor;
    bigModelName.style.webkitTextStrokeColor = car.strokeColor;

    carBrand.textContent = car.brand;
    carModel.textContent = car.model;

    hotspots.innerHTML = "";

    car.hotspots.forEach((hotspot) => {
      const button = document.createElement("button");

      button.className = "hotspot";
      button.dataset.label = hotspot.label;
      button.style.left = `${hotspot.x}%`;
      button.style.top = `${hotspot.y}%`;

      button.addEventListener("click", () => openDetail(hotspot));

      hotspots.appendChild(button);
    });

    carImage.classList.remove("swap");
  }, 170);
}


function openDetail(hotspot) {
  detailTitle.textContent = hotspot.title;

  detailImage.src = hotspot.image;

  detailHero.src = hotspot.heroFocus;
  detailHero.style.objectFit = "cover";
  detailHero.style.objectPosition = "center center";

  detailText.textContent = hotspot.text;

  overlay.classList.add("show");
  overlay.setAttribute("aria-hidden", "false");
}


function closeDetail() {
  overlay.classList.remove("show");
  overlay.setAttribute("aria-hidden", "true");
}


document.getElementById("nextCar").addEventListener("click", () => {
  current = (current + 1) % cars.length;
  renderCar();
});

document.getElementById("goBack").addEventListener("click", closeDetail);
document.getElementById("closeDetail").addEventListener("click", closeDetail);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDetail();
  }
});

renderCar();
