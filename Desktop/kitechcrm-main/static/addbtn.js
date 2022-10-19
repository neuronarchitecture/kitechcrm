 // Ripple Effect JavaScript Code
//   let buttons = document.querySelectorAll(".buttonreportdwld");

//   for (var i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", (e)=>{
//       e.preventDefault(); // preventing form submitting

//       let overlay = document.createElement('span'); //creating a tag(span)
//       overlay.classList.add("overlay"); //adding a class inside the span
//       e.target.appendChild(overlay); //adding overlay tag inside the anchor tag at in HTML

//       let xValue = e.clientX - e.target.offsetLeft; //by this we get perfect value where we will click
//       let yValue = e.clientY - e.target.offsetTop; //by this we get perfect value where we will click

//        overlay.style.left = xValue + "px"; //changing the position of the overlay according to our clicks on the button
//        overlay.style.top = yValue + "px"; //changing the position of the overlay according to our clicks on the button
//   });
//   }
// document.querySelectorAll('.buttony').forEach(buttony => {

//     let duration = 3000,
//         svg = buttony.querySelector('svg'),
//         svgPath = new Proxy({
//             y: null,
//             smoothing: null
//         }, {
//             set(target, key, value) {
//                 target[key] = value;
//                 if(target.y !== null && target.smoothing !== null) {
//                     svg.innerHTML = getPath(target.y, target.smoothing, null);
//                 }
//                 return true;
//             },
//             get(target, key) {
//                 return target[key];
//             }
//         });

//     buttony.style.setProperty('--duration', duration);

//     svgPath.y = 20;
//     svgPath.smoothing = 0;

//     buttony.addEventListener('click', e => {
        
//         e.preventDefault();

//         if(!buttony.classList.contains('loading')) {

//             buttony.classList.add('loading');

//             gsap.to(svgPath, {
//                 smoothing: .3,
//                 duration: duration * .065 / 1000
//             });

//             gsap.to(svgPath, {
//                 y: 12,
//                 duration: duration * .265 / 1000,
//                 delay: duration * .065 / 1000,
//                 ease: Elastic.easeOut.config(1.12, .4)
//             });

//             setTimeout(() => {
//                 svg.innerHTML = getPath(0, 0, [
//                     [3, 14],
//                     [8, 19],
//                     [21, 6]
//                 ]);
//             }, duration / 2);

//         }
   

//     });
// });

// function getPoint(point, i, a, smoothing) {
//     let cp = (current, previous, next, reverse) => {
//             let p = previous || current,
//                 n = next || current,
//                 o = {
//                     length: Math.sqrt(Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)),
//                     angle: Math.atan2(n[1] - p[1], n[0] - p[0])
//                 },
//                 angle = o.angle + (reverse ? Math.PI : 0),
//                 length = o.length * smoothing;
//             return [current[0] + Math.cos(angle) * length, current[1] + Math.sin(angle) * length];
//         },
//         cps = cp(a[i - 1], a[i - 2], point, false),
//         cpe = cp(point, a[i - 1], a[i + 1], true);
//     return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
// }

// function getPath(update, smoothing, pointsNew) {
//     let points = pointsNew ? pointsNew : [
//             [4, 12],
//             [12, update],
//             [20, 12]
//         ],
//         d = points.reduce((acc, point, i, a) => i === 0 ? `M ${point[0]},${point[1]}` : `${acc} ${getPoint(point, i, a, smoothing)}`, '');
//     return `<path d="${d}" />`;
    
// }
