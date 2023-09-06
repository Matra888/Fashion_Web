// OLD VERSION OF BODY TYPE DESCRIPTION PAGE

import React from "react";
import "./YourBodyTypeResultPrevious.scss";
import bodyTypeExamplePic from "../../assets/body-type-hourglass.jpg";
import recommendedItem1 from "../../assets/hourglass-item-1.webp";
import recommendedItem2 from "../../assets/hourglass-item-2.webp";
import recommendedItem3 from "../../assets/hourglass-item-3.webp";
import recommendedItem4 from "../../assets/hourglass-item-4.webp";
import recommendedItem5 from "../../assets/hourglass-item-5.webp";
import SubscribeForm from "../../components/SubscribeForm/SubscribeForm";

const YourBodyTypeResultPrevious = () => {
  return (
    <main>
      <div className="container-fluid min-vh-100 bg-dark p-5 d-flex flex-column align-items-center justify-content-center">
        <h2 className="text-light mb-4 pt-2">
          Your body type is <span className="accent">Hourglass</span>
        </h2>
        <div className="container d-flex flex-wrap p-5 my-5">
          <img src={bodyTypeExamplePic} className="example-image col" alt="" />

          <p id="do" className="text-light col-12 col-md-5 m-4 mt-0">
            <h3 className="accent mb-3">Styles that will look great on you:</h3>
            <span className="accent">1. Wrap dresses: </span>Embrace the divine
            allure of wrap dresses. With their ability to cinch at the waist and
            highlight your curves, they accentuate your figure with an alluring
            elegance, enhancing your silhouette and celebrating your feminine
            grace.
            <br />
            <span className="accent">2. Belted tops and dresses: </span>Indulge
            in the allure of belted tops and dresses, their ability to define
            your waist and showcase your hourglass shape. Revel in the way they
            emphasize your curves, creating a captivating hourglass silhouette
            and highlighting your unique radiance.
            <br />
            <span className="accent">3. High-waisted bottoms: </span>Envelop
            yourself in the sophistication of high-waisted skirts, pants, and
            jeans. By hugging your waist and accentuating your hourglass
            proportions, they create a seamless transition from your waist to
            your hips, showcasing your curves with grace and style.
            <br />
            <span className="accent">4. Bodycon dresses: </span>Embrace the
            sartorial elegance of bodycon dresses. With their figure-hugging
            silhouette, they accentuate your curves and celebrate your hourglass
            shape, creating a confident and seductive look that showcases your
            natural beauty.
            <br />
            <span className="accent">5. Peplum tops and dresses: </span>Elevate
            your style with peplum tops and dresses. Their flared detail at the
            waist adds volume and enhances your curves, creating a feminine and
            stylish silhouette that accentuates your figure with grace.
          </p>
        </div>
        <h3 className="accent mb-5">
          TOPS that will complement your body type
        </h3>

        <div className="container d-flex justify-content-center flex-wrap">
          <a
            className="col-12 col-md-2 m-3 text-decoration-none"
            href="https://www.graecove.com/products/louisa-100-linen-v-neck-belted-wrap-top?currency=USD&variant=40751220752432"
            target="_blank"
          >
            <img src={recommendedItem1} alt="" className="img-thumbnail" />
            <button className="btn btn-outline-success w-100 mt-2 accent d-flex justify-content-center">
              Shop item
            </button>
          </a>
          <a
            className="col-12 col-md-2 m-3 text-decoration-none"
            href="https://www.forever21.com/us/2000470558.html"
            target="_blank"
          >
            <img src={recommendedItem2} alt="" className="img-thumbnail" />
            <button className="btn btn-outline-success w-100 mt-2 accent d-flex justify-content-center">
              Shop item
            </button>
          </a>

          <a
            className="col-12 col-md-2 m-3 text-decoration-none"
            href="https://www.amazon.com/fuinloth-Womens-Shoulder-Shirts-Sleeves/dp/B07PJWNZ99/ref=sr_1_9?keywords=Off+The+Shoulder+Tops&qid=1688198137&sr=8-9"
            target="_blank"
          >
            <img src={recommendedItem3} alt="" className="img-thumbnail" />
            <button className="btn btn-outline-success w-100 mt-2 accent d-flex justify-content-center">
              Shop item
            </button>
          </a>

          <a
            className="col-12 col-md-2 m-3 text-decoration-none"
            href="https://www.lovebonito.com/us/marga-sweetheart-knit-top.html"
            target="_blank"
          >
            <img src={recommendedItem4} alt="" className="img-thumbnail" />
            <button className="btn btn-outline-success w-100 mt-2 accent d-flex justify-content-center">
              Shop item
            </button>
          </a>

          <a
            className="col-12 col-md-2 m-3 text-decoration-none"
            href="https://www.amazon.com/Micoson-Sweetheart-Sleeve-Lightweight-Shirts/dp/B0BQBKFFBB?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=ALWDN7JZJZIDH"
            target="_blank"
          >
            <img src={recommendedItem5} alt="" className="img-thumbnail" />
            <button className="btn btn-outline-success w-100 mt-2 accent d-flex justify-content-center">
              Shop item
            </button>
          </a>
        </div>
        <h3 className="accent mt-5">Discover even more</h3>

        <div className="container d-flex justify-content-center">
          <SubscribeForm />
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores amet
          tenetur error officiis nisi reprehenderit temporibus magni ut placeat
          dicta.
        </div>
      </div>
    </main>
  );
};

export default YourBodyTypeResultPrevious;
