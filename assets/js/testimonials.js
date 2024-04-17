class Testimonial {
  image = "";
  message = "";
  author = "";

  constructor(image, message, author) {
    this.image = image;
    this.message = message;
    this.author = author;
  }

  html() {
    return `<div class="testimonial">
        <img src="${this.image}" alt="picture" /> 
        <p class="message">${this.message}</p>
        <p class="author"><b>${this.author}</b></p>
    </div>`;
  }
}

const testimoni1 = new Testimonial(
  "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, nostrum.",
  "Rey Mysterio"
);
const testimoni2 = new Testimonial(
  "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, veritatis obcaecati.",
  "Brie Bella"
);
const testimoni3 = new Testimonial(
  "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum?",
  "Randy Orton"
);

const testimonials = [testimoni1, testimoni2, testimoni3]; // array of object

let testimonialHTML = ``;

for (let i = 0; i < testimonials.length; i++) {
  testimonialHTML += testimonials[i].html();
}

document.getElementById("row").innerHTML = testimonialHTML;
