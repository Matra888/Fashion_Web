// BodyTypeCalc.ts

enum BodyTypeCalcResult {
  Inverted_triangle = 'Inverted_triangle',
  Triangle = 'Triangle',
  Apple = 'Apple',
  Rectangle = 'Rectangle',
  Hourglass = 'Hourglass',
  Unclear = 'Unclear'
}

const BodyTypeCalc = (shoulder: number, bust: number, waist: number, hips: number): BodyTypeCalcResult => {
  // Initialize bodyShape variable to store the result
  let bodyShape = BodyTypeCalcResult.Unclear;

  // Your actual calculation logic here.
  if (shoulder > hips + 2 || bust > hips + 4) {
    bodyShape = BodyTypeCalcResult.Inverted_triangle;
  } else if (hips > shoulder + 2 || hips > bust + 4) {
    bodyShape = BodyTypeCalcResult.Triangle;
  } else if (waist > bust + 2 || waist > hips + 2) {
    bodyShape = BodyTypeCalcResult.Apple;
  } else if (Math.abs(shoulder - hips) < 8 && Math.abs(bust - hips) < 8 && Math.abs(waist - hips) < 8) {
    bodyShape = BodyTypeCalcResult.Rectangle;
  } else if (Math.abs(shoulder - hips) < 8 && Math.abs(bust - hips) < 8 && Math.abs(waist - hips) >= 8) {
    bodyShape = BodyTypeCalcResult.Hourglass;
  }

  return bodyShape;
};

export default BodyTypeCalc;