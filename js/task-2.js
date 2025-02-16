const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];


//для создания заголовка использованы createElement и innerHTML
//insertAdjacentHTML - использовался везде, где запихивался)

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML("beforebegin", '<div></div>');
const tinyContainer = document.querySelector('div');

const title = document.createElement('h2');
tinyContainer.append(title);

title.innerHTML = 'This title created by createElement() and innerHTML';



function galleryElemTemplate(image) {
	return `<li><img src='${image.url}' alt='${image.alt}'></li>`;
}

function galleryAllTemplate(images) {
	return images.map(galleryElemTemplate).join('');
}

gallery.insertAdjacentHTML("beforeend", galleryAllTemplate(images));

