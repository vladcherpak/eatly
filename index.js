let menuBtn = document.querySelector(".menu__btn");
let link = document.querySelector(".header__link");
let list = document.querySelector(".header__list");
let restaurantsList = document.querySelector(".restaurants__list");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  list.classList.toggle("active");
});

const isElementInViewport = (el)=> {
  const rect = el.getBoundingClientRect()
  return(
    rect.top >=0 &&
    rect.left >=0 &&
    rect.bottom <= (window.innerHeight ||document.documentElement.clientHeight ) &&
    rect.right <= (window.innerWidth ||document.documentElement.clientWidth) 
  )
}


const customersScroll = ()=> {
  const section = document.querySelector(".customers__list")
  if (isElementInViewport(section)) {
    section.classList.add("customers__animation")
    window.removeEventListener("scroll",customersScroll)
  }

}

window.addEventListener("scroll",customersScroll)
customersScroll()


const qualityScroll = ()=> {
  const section = document.querySelector(".quality__inner")
  if (isElementInViewport(section)) {
    section.classList.add("quality__animation")
    window.removeEventListener("scroll",qualityScroll)
  }

}

window.addEventListener("scroll",qualityScroll)
qualityScroll()


const restaurantsData =[
{
  id:1,
  imgageUrl:"./img/RestaurantImage3.jpg",
  title:"The Chicken King",
  deliveryTime:24,
  rating:4.8,
  status:"Healthy"
},
{
  id:2,
  imgageUrl:"./img/RestaurantImage2.jpg",
  title:"The Burger King",
  deliveryTime:24,
  rating:4.9,
  status:"Trending"
},
{
  id:3,
  imgageUrl:"./img/RestaurantImage1.jpg",
  title:"The Chicken King",
  deliveryTime:24,
  rating:4.8,
  status:"Healthy"
}
]

const createRestaurantsList = restaurantsData.map((restaurant)=>{
  return `
  <li class="restaurants__item">
  <img class="restaurants__img"  src="${restaurant.imgageUrl}" alt="image">
  <span class="restaurants__status">${restaurant.status}</span>
  <h3 class="restaurants__h3">${restaurant.title}</h3>
  <span class="restaurants__time">${restaurant.deliveryTime}</span>
  <span class="restaurants__reting">${restaurant.rating}</span>
</li>
`
})

.join("");
  restaurantsList.innerHTML =createRestaurantsList;



