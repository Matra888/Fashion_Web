import React from "react";
import "./Blog.scss";
import { readProducts } from "../../helpers/helpers";
//Update end of filepath (/image-name.png) to match the name of the image in the assets folder.
import Image1 from "../../assets/logo.png";
import Image2 from "../../assets/logo.png";
import Image3 from "../../assets/logo.png";
import Image4 from "../../assets/logo.png";
import Image5 from "../../assets/logo.png";
import Image6 from "../../assets/logo.png";
import RedCoatWomanImage from "../../assets/Red_Coat_Woman.png"; // Import the first image
import SheepCoatWomanImage from "../../assets/Sheep_Coat_Woman.png"; // Import the second image

const getProducts = () => {
  readProducts((products) => {
    var productsDiv = document.getElementById("products-container");

    for (let i = 0; i < products.length; ++i) {
      let productDiv = document.createElement("div");
      productDiv.classList.add("product-card");

      let productTitle = document.createElement("div");
      productTitle.innerText = products[i].title;

      productDiv.appendChild(productTitle);

      let productImage = document.createElement("img");
      productImage.alt = products[i].title;
      productImage.src = "http://localhost:5246/Image/" + products[i].image;
      productImage.maxWidth = "100%";

      productDiv.appendChild(productImage);

      let productTags = document.createElement("div");
      productTags.innerText = products[i].tags.join(" ");
      productTags.classList.add("product-tags");

      productDiv.appendChild(productTags);

      productsDiv.appendChild(productDiv);
    }
  }, () => { });
}

const Blog = () => {
  return (
    <main className="blog-page bg-dark text-light h-100">
      {/* Start of is BLOG POST sample */}
      <div className="blog-post">
        <h2>Selecting the Perfect Outerwear to Complement Your Uniqueness</h2>
        <p>
          Winter is coming, and with it comes the need for warm and stylish
          outerwear. But with so many options out there, how do you choose the
          right one that will not only keep you cozy but also flatter your
          figure? Here are some tips to keep in mind when shopping for
          flattering outerwear. Firstly, consider your body shape. If you have
          an hourglass figure, a belted coat or jacket will accentuate your
          waistline and highlight your curves. On the other hand, if you have a
          rectangular shape, opt for a coat with a cinched waist or a peplum
          detail to create the illusion of curves. Peplum detail can be
          wonderfully created by pockets, consider that too. Secondly, pay
          attention to the length of the coat. If you’re petite, a knee-length
          coat or jacket will elongate your legs and make you appear taller. If
          you’re tall, a longer coat or jacket will balance out your proportions
          and give you a more polished look. Here are examples:
        </p>
        <p>
          Lastly, don’t be afraid to play with color and texture. A bold, bright
          coat can add a pop of color to your winter wardrobe and make you stand
          out in a sea of black and grey.{" "}
        </p>
        <img src={RedCoatWomanImage} alt="Red Coat Woman" />
        <p>
          To stand out from the crowd, one must first have the courage to step
          forward and be seen. This means taking action, whether it be starting
          a new venture, pursuing a passion, or simply dressing a bit more
          flashy than others. It also means being willing to put oneself out
          there, to be vulnerable and open to criticism. A coat with interesting
          textures, such as faux fur or shearling, can help you to add a
          uniqueness to your look. It also will add depth and dimension to your
          outfit.
        </p>
        <h3>Standing Out with Confidence: The Power of Action and Style</h3>
        <p>
          To distinguish yourself from the rest, one must first have the courage
          to be seen. This involves taking action, whether it's embarking on a
          new venture, pursuing a passion, or even daring to dress differently.
          It also means being open to vulnerability and criticism.
        </p>
        <p>
          Richard Branson, founder of Virgin Group, once said, "In order to
          stand out from the crowd, you must first be willing to be seen, and
          then be prepared to be different."
        </p>
        <p>
          Consider adding a coat with interesting textures like faux fur or
          shearling to your wardrobe to add a unique touch to your look. Not
          only will it make you stand out, but it will also add dimension and
          depth to your outfit.
        </p>
        <img src={SheepCoatWomanImage} alt="Sheep Coat Woman" />
        <p>
          In conclusion, when shopping for flattering outerwear, consider your
          body shape, coat length, and color and texture. With these tips in
          mind, you’re sure to find a coat or jacket that not only keeps you
          warm but also makes you look and feel fabulous.
        </p>
      </div>
      <div id="products-container" className="products">
        {getProducts()}
      </div>
    </main>
  );
};

export default Blog;
