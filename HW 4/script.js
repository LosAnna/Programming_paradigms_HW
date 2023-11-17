// Ваша задача:
// Написать скрипт для расчета корреляции Пирсона между
// двумя случайными величинами (двумя массивами). Можете
// использовать любую парадигму, но рекомендую использовать
// функциональную, т.к. в этом примере она значительно
// упростит вам жизнь.

const pcorr = (x, y) => {
  let sumX = 0,
    sumY = 0,
    sumXY = 0,
    sumX2 = 0,
    sumY2 = 0;
  const minLength = (x.length = y.length = Math.min(x.length, y.length)),
    reduce = (xi, idx) => {
      const yi = y[idx];
      sumX += xi;
      sumY += yi;
      sumXY += xi * yi;
      sumX2 += xi * xi;
      sumY2 += yi * yi;
    };
  x.forEach(reduce);
  return (
    (minLength * sumXY - sumX * sumY) /
    Math.sqrt(
      (minLength * sumX2 - sumX * sumX) * (minLength * sumY2 - sumY * sumY)
    )
  );
};
let arrX = [14, 34, 34, 76, 32];
let arrY = [35, 15, 31, 48, 93];
let R = pcorr(arrX, arrY);
console.log("arrX", arrX, "arrY", arrY, "R", R);
