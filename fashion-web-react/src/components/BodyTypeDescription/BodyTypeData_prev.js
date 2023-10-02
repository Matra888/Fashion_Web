import hourglassImage from "../../assets/body-type-hourglass.jpg";
import triangleImage from "../../assets/body-type-triangle.jpg";
import invertedImage from "../../assets/body-type-inverted-triangle.jpg";
import appleImage from "../../assets/body-type-apple.jpg";
import rectangleImage from "../../assets/body-type-rectangle.jpg";

const BodyTypeData = {
  Hourglass: {
    bodyType: "Hourglass",
    bodyTypePicture: hourglassImage,
    styleRecommendations: [
      "1. Embrace the divine allure of wrap dresses. With their ability to cinch at the waist and highlight your curves, they accentuate your figure with an alluring elegance, enhancing your silhouette and celebrating your feminine grace.",
      "2. Indulge in the allure of belted tops and dresses, their ability to define your waist and showcase your hourglass shape. Revel in the way they emphasize your curves, creating a captivating hourglass silhouette and highlighting your unique radiance.",
      "3. Envelop yourself in the sophistication of high-waisted skirts, pants, and jeans. By hugging your waist and accentuating your hourglass proportions, they create a seamless transition from your waist to your hips, showcasing your curves with grace and style.",
      "4. Embrace the sartorial elegance of bodycon dresses. With their figure-hugging silhouette, they accentuate your curves and celebrate your hourglass shape, creating a confident and seductive look that showcases your natural beauty.",
      "5. Elevate your style with peplum tops and dresses. Their flared detail at the waist adds volume and enhances your curves, creating a feminine and stylish silhouette that accentuates your figure with grace.",
    ],
  },
  Triangle: {
    bodyType: "Triangle",
    bodyTypePicture: triangleImage,
    styleRecommendations: [
      "1. Embrace the divine elegance of A-line dresses. With their cinched waist and gentle flare, they gracefully skim over your hips and thighs, enhancing your silhouette with a touch of magic.",
      "2. Indulge in the allure of wrap tops, their timeless charm drawing attention to your shoulders and creating a sense of balance. Revel in the way they accentuate your upper body, highlighting your unique radiance.",
      "3. Envelop yourself in the sophistication of tailored jackets. These structured wonders add definition to your waist, harmoniously blending your upper body with your captivating curves.",
      "4. Embrace the sartorial elegance of bootcut or wide-leg pants. With a slight flare at the bottom, they create balance by distributing volume evenly between your upper and lower body, accentuating your curves with grace.",
      "5. Elevate your style with high-waisted skirts or pants. They elongate your legs and create a seamless transition from your waist to your hips, leaving you feeling elegant and confident.",
    ],
  },
  Inverted_triangle: {
    bodyType: "Inverted Triangle",
    bodyTypePicture: invertedImage,
    styleRecommendations: [
      "1. Opt for tops that draw attention away from the shoulders. V-necklines and scoop necks are flattering as they create a vertical line and elongate the torso. Avoid high-neck tops, boat necks, or any styles that emphasize the shoulders.",
      "2. Choose bottoms that add volume to the hips and create a curvier silhouette. A-line skirts, flared pants, and wide-leg trousers can help achieve this. Patterns and details on the lower body can also help draw attention downward.",
      "3. Experiment with layering to create visual interest and balance. Wearing a jacket or cardigan that falls below the hips can help add volume to the lower body and create a more proportionate look.",
      "4. Cinch the waist with a belt to create definition and enhance an hourglass shape. This will help balance the broad shoulders and draw attention to the waistline.",
      "5. Use color strategically to create balance. Darker shades on the upper body can help minimize the broadness, while lighter or brighter colors on the lower body can draw attention downward. Avoid bold patterns or details on the shoulders.",
    ],
  },
  Apple: {
    bodyType: "Oval",
    bodyTypePicture: appleImage,
    styleRecommendations: [
      "1. Embrace the divine sophistication of empire waist dresses. With their fitted bodice and flowing skirt, they gracefully skim over your midsection and highlight your bust, enhancing your silhouette with a touch of magic.",
      "2. Indulge in the allure of V-neck tops, their timeless charm drawing attention upwards and creating a sense of balance. Revel in the way they elongate your neck and highlight your décolletage, showcasing your unique radiance.",
      "3. Envelop yourself in the sophistication of structured blazers. These tailored wonders add definition to your shoulders and create a streamlined look, harmoniously blending your upper body with your captivating curves.",
      "4. Embrace the sartorial elegance of straight-leg or wide-leg pants. With their relaxed fit, they create a balanced silhouette by skimming over your midsection and hips, accentuating your curves with grace.",
      "5. Elevate your style with A-line skirts. They effortlessly flatter your figure by skimming over your midsection and hips, creating a seamless transition from your waist to your legs, leaving you feeling elegant and confident.",
    ],
  },
  Rectangle: {
    bodyType: "Rectangle",
    bodyTypePicture: rectangleImage,
    styleRecommendations: [
      "1. Embrace the timeless charm of wrap dresses. With their ability to cinch at the waist and create gentle curves, they add a touch of feminine allure to your silhouette, enhancing your natural grace and creating a captivating harmony.",
      "2. Indulge in the allure of peplum tops, their flattering shape adding volume and creating the illusion of curves. Revel in the way they enhance your waistline, creating dimension and a sense of feminine charm, highlighting your unique radiance.",
      "3. Envelop yourself in the versatility of belts. Whether worn over dresses, tops, or jackets, they add definition and draw attention to your waist, creating a captivating focal point and accentuating your figure with subtle sophistication.",
      "4. Embrace the sartorial elegance of flared skirts. With their gentle flare, they add movement and shape to your silhouette, creating the illusion of curves and enhancing your feminine grace.",
      "5. Elevate your style with layered outfits. Experiment with different lengths and textures, as layering adds depth and dimension to your silhouette, creating visual interest and showcasing your unique sense of style.",
    ],
  },
};

export default BodyTypeData;
