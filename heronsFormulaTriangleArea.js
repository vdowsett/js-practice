// use Heron's formula to find a traingle when given 3 sides
// a = side 1, b = sice 2, c = side 3
// s = (a + b + c) / 2
// area = √s(s-a)(s-b)(s-c)

var a, b, c, s, area;

function triangleArea (a, b, c) {
  a = a;
  b = b;
  c = c;

  s = (a + b + c)/2;

  area =  Math.sqrt(s * (s-a) * (s-b) * (s-c) );

  console.log(area);

  return area;
}

triangleArea(5, 6, 7);