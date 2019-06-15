var a = 10 ;
var b =20 ;
var c = a ;//c=a  这时 a是空的了。所以下面a=b b又空了。让b=c
 a = b ;
 b = c;
console.log(a,b)
let e =10;
let f =20
e =e+f;
f =e-f;
e=e-f
console.log(e,f)
let g = 10 ;
let h =20 ;
[g,h] = [h,g];
console.log(g,h)