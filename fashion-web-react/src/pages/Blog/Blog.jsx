import React from "react";
import "./Blog.scss";
//Update end of filepath (/image-name.png) to match the name of the image in the assets folder.
import Image1 from "../../assets/logo.png";
import Image2 from "../../assets/logo.png";
import Image3 from "../../assets/logo.png";
import Image4 from "../../assets/logo.png";
import Image5 from "../../assets/logo.png";
import Image6 from "../../assets/logo.png";
import RedCoatWomanImage from "../../assets/Red_Coat_Woman.png"; // Import the first image
import SheepCoatWomanImage from "../../assets/Sheep_Coat_Woman.png"; // Import the second image

const Blog = () => {
  return (
    <main className="blog-page bg-dark text-light h-100">

<div className="blog-post p-5 bg-dark text-light h-100 d-flex flex-column">
        <h2>Selecting the Perfect Outerwear to Complement Your Uniqueness</h2>
        <p>Winter is coming, and with it comes the need for warm and stylish outerwear. But with so many options out there, how do you choose the right one that will not only keep you cozy but also flatter your figure? Here are some tips to keep in mind when shopping for flattering outerwear.
Firstly, consider your body shape. If you have an hourglass figure, a belted coat or jacket will accentuate your waistline and highlight your curves. On the other hand, if you have a rectangular shape, opt for a coat with a cinched waist or a peplum detail to create the illusion of curves. Peplum detail can be wonderfully created by pockets, consider that too. 
Secondly, pay attention to the length of the coat. If you’re petite, a knee-length coat or jacket will elongate your legs and make you appear taller. If you’re tall, a longer coat or jacket will balance out your proportions and give you a more polished look.
Here are examples:</p>
        <p>Lastly, don’t be afraid to play with color and texture. A bold, bright coat can add a pop of color to your winter wardrobe and make you stand out in a sea of black and grey.  </p>
        <p>para3 </p>
        <p>para4 </p>
        <p>para5 </p>

        {/* Add the first image after the last paragraph */}
        <img src={RedCoatWomanImage} alt="Red Coat Woman" />

        <p>To stand out from the crowd, one must first have the courage to step forward and be seen. This means taking action, whether it be starting a new venture, pursuing a passion, or simply dressing a bit more flashy than others. It also means being willing to put oneself out there, to be vulnerable and open to criticism. A coat with interesting textures, such as faux fur or shearling, can help you to add a uniqueness to your look. It also will add depth and dimension to your outfit.</p>
        <h3>Standing Out with Confidence: The Power of Action and Style</h3>
        <p>To distinguish yourself from the rest, one must first have the courage to be seen. This involves taking action, whether it's embarking on a new venture, pursuing a passion, or even daring to dress differently. It also means being open to vulnerability and criticism.</p>
        <p>Richard Branson, founder of Virgin Group, once said,
          "In order to stand out from the crowd, 
          you must first be willing to be seen, 
          and then be prepared to be different."</p>
        <p>Consider adding a coat with interesting textures like faux fur or shearling to your wardrobe to add a unique touch to your look. Not only will it make you stand out, but it will also add dimension and depth to your outfit.</p>

        {/* Add the second image after the last paragraph */}
        <img src={SheepCoatWomanImage} alt="Sheep Coat Woman" />

        <p>In conclusion, when shopping for flattering outerwear, consider your body shape, coat length, and color and texture. With these tips in mind, you’re sure to find a coat or jacket that not only keeps you warm but also makes you look and feel fabulous.</p>
      </div>

      {/* Start of is BLOG POST 1 */}
      <div className="blog-post">
        <h2 className="blog-post__title">Blog Post Title 1</h2>
        <img src={Image1} alt="" className="blog-post__image" />
        <p className="blog-post__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
          labore, inventore rerum quia vel assumenda alias voluptates dolorum
          voluptas sit possimus soluta quidem magnam reprehenderit unde
          explicabo culpa a. Quam molestiae autem magnam corporis quia,
          similique hic officiis architecto esse ad necessitatibus ex, eum id
          repellendus facilis aliquid nulla odit! Laboriosam aliquid adipisci
          aperiam voluptas sed? Repudiandae debitis distinctio sit, dignissimos
          a vel ad numquam expedita voluptates quam molestias, dolores ducimus
          facere quidem unde eum, impedit voluptatem voluptate consequatur!
          Dicta.
        </p>
        <p className="blog-post__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
          labore, inventore rerum quia vel assumenda alias voluptates dolorum
          voluptas sit possimus soluta quidem magnam reprehenderit unde
          explicabo culpa a. Quam molestiae autem magnam corporis quia,
          similique hic officiis architecto esse ad necessitatibus ex, eum id
          repellendus facilis aliquid nulla odit! Laboriosam aliquid adipisci
          aperiam voluptas sed? Repudiandae debitis distinctio sit, dignissimos
          a vel ad numquam expedita voluptates quam molestias, dolores ducimus
          facere quidem unde eum, impedit voluptatem voluptate consequatur!
          Dicta.
        </p>
        <img src={Image2} alt="" className="blog-post__image" />
        <p className="blog-post__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
          labore, inventore rerum quia vel assumenda alias voluptates dolorum
          voluptas sit possimus soluta quidem magnam reprehenderit unde
          explicabo culpa a. Quam molestiae autem magnam corporis quia,
          similique hic officiis architecto esse ad necessitatibus ex, eum id
          repellendus facilis aliquid nulla odit! Laboriosam aliquid adipisci
          aperiam voluptas sed? Repudiandae debitis distinctio sit, dignissimos
          a vel ad numquam expedita voluptates quam molestias, dolores ducimus
          facere quidem unde eum, impedit voluptatem voluptate consequatur!
          Dicta.
        </p>
        <img src={Image3} alt="" className="blog-post__image" />
        <p className="blog-post__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
          labore, inventore rerum quia vel assumenda alias voluptates dolorum
          voluptas sit possimus soluta quidem magnam reprehenderit unde
          explicabo culpa a. Quam molestiae autem magnam corporis quia,
          similique hic officiis architecto esse ad necessitatibus ex, eum id
          repellendus facilis aliquid nulla odit! Laboriosam aliquid adipisci
          aperiam voluptas sed? Repudiandae debitis distinctio sit, dignissimos
          a vel ad numquam expedita voluptates quam molestias, dolores ducimus
          facere quidem unde eum, impedit voluptatem voluptate consequatur!
          Dicta.
        </p>
        <p className="blog-post__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
          labore, inventore rerum quia vel assumenda alias voluptates dolorum
          voluptas sit possimus soluta quidem magnam reprehenderit unde
          explicabo culpa a. Quam molestiae autem magnam corporis quia,
          similique hic officiis architecto esse ad necessitatibus ex, eum id
          repellendus facilis aliquid nulla odit! Laboriosam aliquid adipisci
          aperiam voluptas sed? Repudiandae debitis distinctio sit, dignissimos
          a vel ad numquam expedita voluptates quam molestias, dolores ducimus
          facere quidem unde eum, impedit voluptatem voluptate consequatur!
          Dicta.
        </p>
      </div>
      {/* Start of is BLOG POST 2 */}
      <div className="blog-post">
        <h2 className="blog-post__title">Blog Post Title 2</h2>
        <img src={Image4} alt="" className="blog-post__image" />
        <p className="blog-post__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
          labore, inventore rerum quia vel assumenda alias voluptates dolorum
          voluptas sit possimus soluta quidem magnam reprehenderit unde
          explicabo culpa a. Quam molestiae autem magnam corporis quia,
          similique hic officiis architecto esse ad necessitatibus ex, eum id
          repellendus facilis aliquid nulla odit! Laboriosam aliquid adipisci
          aperiam voluptas sed? Repudiandae debitis distinctio sit, dignissimos
          a vel ad numquam expedita voluptates quam molestias, dolores ducimus
          facere quidem unde eum, impedit voluptatem voluptate consequatur!
          Dicta.
        </p>
        <p className="blog-post__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
          labore, inventore rerum quia vel assumenda alias voluptates dolorum
          voluptas sit possimus soluta quidem magnam reprehenderit unde
          explicabo culpa a. Quam molestiae autem magnam corporis quia,
          similique hic officiis architecto esse ad necessitatibus ex, eum id
          repellendus facilis aliquid nulla odit! Laboriosam aliquid adipisci
          aperiam voluptas sed? Repudiandae debitis distinctio sit, dignissimos
          a vel ad numquam expedita voluptates quam molestias, dolores ducimus
          facere quidem unde eum, impedit voluptatem voluptate consequatur!
          Dicta.
        </p>
        <img src={Image5} alt="" className="blog-post__image" />
        <p className="blog-post__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
          labore, inventore rerum quia vel assumenda alias voluptates dolorum
          voluptas sit possimus soluta quidem magnam reprehenderit unde
          explicabo culpa a. Quam molestiae autem magnam corporis quia,
          similique hic officiis architecto esse ad necessitatibus ex, eum id
          repellendus facilis aliquid nulla odit! Laboriosam aliquid adipisci
          aperiam voluptas sed? Repudiandae debitis distinctio sit, dignissimos
          a vel ad numquam expedita voluptates quam molestias, dolores ducimus
          facere quidem unde eum, impedit voluptatem voluptate consequatur!
          Dicta.
        </p>
        <img src={Image6} alt="" className="blog-post__image" />
        <p className="blog-post__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
          labore, inventore rerum quia vel assumenda alias voluptates dolorum
          voluptas sit possimus soluta quidem magnam reprehenderit unde
          explicabo culpa a. Quam molestiae autem magnam corporis quia,
          similique hic officiis architecto esse ad necessitatibus ex, eum id
          repellendus facilis aliquid nulla odit! Laboriosam aliquid adipisci
          aperiam voluptas sed? Repudiandae debitis distinctio sit, dignissimos
          a vel ad numquam expedita voluptates quam molestias, dolores ducimus
          facere quidem unde eum, impedit voluptatem voluptate consequatur!
          Dicta.
        </p>
        <p className="blog-post__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
          labore, inventore rerum quia vel assumenda alias voluptates dolorum
          voluptas sit possimus soluta quidem magnam reprehenderit unde
          explicabo culpa a. Quam molestiae autem magnam corporis quia,
          similique hic officiis architecto esse ad necessitatibus ex, eum id
          repellendus facilis aliquid nulla odit! Laboriosam aliquid adipisci
          aperiam voluptas sed? Repudiandae debitis distinctio sit, dignissimos
          a vel ad numquam expedita voluptates quam molestias, dolores ducimus
          facere quidem unde eum, impedit voluptatem voluptate consequatur!
          Dicta.
        </p>
      </div>
    </main>
  );
};

export default Blog;

