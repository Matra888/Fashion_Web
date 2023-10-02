import hourglassImage from "../../assets/body-type-hourglass.jpg";
import triangleImage from "../../assets/body-type-triangle.jpg";
import invertedImage from "../../assets/body-type-inverted-triangle.jpg";
import appleImage from "../../assets/body-type-apple.jpg";
import rectangleImage from "../../assets/body-type-rectangle.jpg";

const BodyTypeData = {
  Hourglass_Tall: {
    bodyType: "Hourglass",
    bodyTypePicture: hourglassImage,
    styleRecommendations: [
      "Tops: Longer fitted tops that emphasize the waist",
      "Bottoms: High-waisted pants or skirts. Bootcut or straight-leg styles",
      "Dresses: Midi to maxi lengths",
    ],
  },
  Hourglass_Petite: {
    bodyType: "Hourglass",
    bodyTypePicture: hourglassImage,
    styleRecommendations: [
      "Tops: Fitted tops that aren't too long. V-necks can elongate the torso",
      "Bottoms: High-waisted styles to elongate the legs. Pencil skirts or cropped pants",
      "Dresses: Knee-length styles or slightly shorter",
    ],
  },
  Hourglass_Medium: {
    bodyType: "Hourglass",
    bodyTypePicture: hourglassImage,
    styleRecommendations: [
      "Tops: Fitted styles that highlight the waist",
      "Bottoms: Straight or slightly flared pants. Midi skirts",
      "Dresses: Knee to midi lengths",
    ],
  },
  Triangle_Tall: {
    bodyType: "Triangle",
    bodyTypePicture: triangleImage,
    styleRecommendations: [
      "Tops: Longer tops or tunics. Wide necklines can balance out the hips",
      "Bottoms: Bootcut or wide-leg pants. Maxi skirts",
      "Dresses: A-line dresses that are midi to maxi length",
    ],
  },
  Triangle_Petite: {
    bodyType: "Triangle",
    bodyTypePicture: triangleImage,
    styleRecommendations: [
      "Tops: Waist-length tops with details or patterns to draw attention upwards",
      "Bottoms: A-line skirts that are knee-length. Straight-leg pants",
      "Dresses: Knee-length A-line styles.",
    ],
  },
  Triangle_Medium: {
    bodyType: "Triangle",
    bodyTypePicture: triangleImage,
    styleRecommendations: [
      "Tops: Medium-length tops with wide necklines",
      "Bottoms: Straight or slightly flared pants. Midi skirts",
      "Dresses: Knee to midi lengths",
    ],
  },
  Inverted_triangle_Tall: {
    bodyType: "Inverted Triangle",
    bodyTypePicture: invertedImage,
    styleRecommendations: [
      "Tops: Long, flowy tunics or shirts. V-necks to elongate the torso",
      "Bottoms: Flared or wide-leg pants. Long A-line skirts",
      "Dresses: Empire waist dresses in midi to maxi lengths",
    ],
  },
  Inverted_triangle_Petite: {
    bodyType: "Inverted Triangle",
    bodyTypePicture: invertedImage,
    styleRecommendations: [
      "Tops: Shorter, flowy tops. V-necks or scoop necks",
      "Bottoms: Straight-leg pants or knee-length A-line skirts",
      "Dresses: Empire waist or A-line dresses that are knee-length",
    ],
  },
  Inverted_triangle_Medium: {
    bodyType: "Inverted Triangle",
    bodyTypePicture: invertedImage,
    styleRecommendations: [
      "Tops: Medium-length flowy tops. V-necks or U-necks",
      "Bottoms: Bootcut or straight-leg pants. Midi A-line skirts",
      "Dresses: Knee to midi lengths",
    ],
  },
  Apple_Tall: {
    bodyType: "Oval",
    bodyTypePicture: appleImage,
    styleRecommendations: [
      "Tops: Long tunics or flowy tops. V-necks to elongate the torso",
      "Bottoms: Straight-leg pants or maxi skirts",
      "Dresses: Empire waist or A-line dresses in longer lengths",
    ],
  },
  Apple_Petite: {
    bodyType: "Oval",
    bodyTypePicture: appleImage,
    styleRecommendations: [
      "Tops: Waist-length flowy tops. V-necks to elongate the torso",
      "Bottoms: Straight-leg pants or skirts that sit just above the waist",
      "Dresses: Empire waist or A-line dresses that are knee-length",
    ],
  },
  Apple_Medium: {
    bodyType: "Oval",
    bodyTypePicture: appleImage,
    styleRecommendations: [
      "Tops: Medium-length flowy tops. V-necks or scoop necks",
      "Bottoms: Straight or slightly flared pants. Midi skirts",
      "Dresses: Knee to midi lengths",
    ],
  },
  Rectangle_Tall: {
    bodyType: "Rectangle",
    bodyTypePicture: rectangleImage,
    styleRecommendations: [
      "Tops: Long tunics or oversized shirts can look great. Use belts to define the waist",
      "Bottoms: Wide-leg pants or flared jeans. Maxi skirts can also be flattering",
      "Dresses: Maxi dresses or long column dresses",
    ],
  },
  Rectangle_Petite: {
    bodyType: "Rectangle",
    bodyTypePicture: rectangleImage,
    styleRecommendations: [
      "Tops: Avoid overly long tops. Opt for waist-length or cropped styles",
      "Bottoms: High-waisted pants or skirts can elongate the legs. Avoid overly flared styles",
      "Dresses: Knee-length or slightly above-the-knee dresses",
    ],
  },
  Rectangle_Medium: {
    bodyType: "Rectangle",
    bodyTypePicture: rectangleImage,
    styleRecommendations: [
      "Tops: Medium-length tops, possibly belted at the waist",
      "Bottoms: Straight-leg pants or A-line skirts",
      "Dresses: Any length from knee to maxi, depending on preference",
    ],
  },
};

export default BodyTypeData;
