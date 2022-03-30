const data = [{
    id: 1,
    title: "Wind Energy About",
    inner: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores rem, accusamus eos tempora adipisci ex. Saepe quo reiciendis possimus illo accusantium sed recusandae atque quia, ullam, et molestias. Quo tempore quia voluptatibus alias. Quia quidem praesentium non dignissimos a assumenda voluptas aperiam inventore vel, quo sit, dolor cum architecto voluptate magni eaque quas, repellendus aspernatur ipsa. Magnam maxime a nostrum ipsam labore sed perferendis eius, ea saepe natus rem quas beatae ipsum dolores non, veniam sint tempora illo blanditiis quos incidunt eligendi illum! Ipsa enim illo nam? Nemo ipsam ex recusandae dignissimos deleniti, iste mollitia veritatis voluptas quod labore quas?",
    img: "./img/img1.jpg"
  },
  {
    id: 2,
    title: "Hydrogen Energy About",
    inner: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores rem, accusamus eos tempora adipisci ex. Saepe quo reiciendis possimus illo accusantium sed recusandae atque quia, ullam, et molestias. Quo tempore quia voluptatibus alias. Quia quidem praesentium non dignissimos a assumenda voluptas aperiam inventore vel, quo sit, dolor cum architecto voluptate magni eaque quas, repellendus aspernatur ipsa. Magnam maxime a nostrum ipsam labore sed perferendis eius, ea saepe natus rem quas beatae ipsum dolores non, veniam sint tempora illo blanditiis quos incidunt eligendi illum! Ipsa enim illo nam? Nemo ipsam ex recusandae dignissimos deleniti, iste mollitia veritatis voluptas quod labore quas?",
    img: "./img/img2.jpg"
  },
  {
    id: 3,
    title: "Nuclear Energy About",
    inner: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores rem, accusamus eos tempora adipisci ex. Saepe quo reiciendis possimus illo accusantium sed recusandae atque quia, ullam, et molestias. Quo tempore quia voluptatibus alias. Quia quidem praesentium non dignissimos a assumenda voluptas aperiam inventore vel, quo sit, dolor cum architecto voluptate magni eaque quas, repellendus aspernatur ipsa. Magnam maxime a nostrum ipsam labore sed perferendis eius, ea saepe natus rem quas beatae ipsum dolores non, veniam sint tempora illo blanditiis quos incidunt eligendi illum! Ipsa enim illo nam? Nemo ipsam ex recusandae dignissimos deleniti, iste mollitia veritatis voluptas quod labore quas?",
    img: "./img/img3.jpg"
  },
]

function preloader() {
  innerTitle.innerHTML = data[0].title;
  thumbImg.src = data[0].img;
  articleInner.innerHTML = data[0].inner;
}

var icon_item = document.querySelectorAll(".icon_item");
console.log('icon_item: ', icon_item);

for (let i = 0; i < icon_item.length; i++) {
  icon_item[i].addEventListener("click", function (e) {
    for (let i = 0; i < icon_item.length; i++) {
      icon_item[i].setAttribute("id", " ");
    }
    innerTitle.innerHTML = data[i].title;
    thumbImg.src = data[i].img;
    articleInner.innerHTML = data[i].inner;
    this.setAttribute("id", "active-button");
    innerDiv.className += " fade";
    setTimeout(()=>{
      innerDiv.className = "inner_div";
    },300)
  })
}


window.addEventListener("load", preloader);