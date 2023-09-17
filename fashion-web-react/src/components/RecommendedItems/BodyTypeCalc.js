// BodyTypeCalc.js

const BodyTypeCalc = (shoulder, bust, waist, hips) => {
  // Initialize bodyShape variable to store the result
  let bodyShape = "";

  // Your actual calculation logic here.
  if (shoulder > hips + 2 || bust > hips + 4) {
    bodyShape = "Inverted Triangle";
  } else if (hips > shoulder + 2 || hips > bust + 4) {
    bodyShape = "Triangle";
  } else if (waist > bust + 2 || waist > hips + 2) {
    bodyShape = "Circle";
  } else if (Math.abs(shoulder - hips) < 8 && Math.abs(bust - hips) < 8 && Math.abs(waist - hips) < 8) {
    bodyShape = "Rectangle";
  } else if (Math.abs(shoulder - hips) < 8 && Math.abs(bust - hips) < 8 && Math.abs(waist - hips) >= 8) {
    bodyShape = "Hourglass";
  } else {
    bodyShape = "Body shape is not clearly defined.";
  }

  // When ready, return the calculated body type as a string.
  return bodyShape;

  // Names of all body types are defined in the file RecommendedItemsData.js
};

export default BodyTypeCalc;

