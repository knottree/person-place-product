const vidIds = ["ykQlXirszbo","w4vU3tzVM70","tZafawk3arc","x4cmO-r_B6U","pIbAhBxwcxo","DHD1-2P94DI","O6Y3WDY1tUo","9VsDP584zyQ","F6PhNnlb-14","y1r9toPQNkM","vc1E5CfRfos","nEQQle9-0NA","eIq5CB9JfKE","8jyhJ6TiUPA","89e518dl4I8","8lQzkwqhKTk","vthMCtgVtFw","EB8Iom51fdA","RjexvOAsVtI"];
const shuffledVids = vidIds.sort(() => 0.5 - Math.random());
let selectedVids = shuffledVids.slice(0, 3); // get three videos
let vid1HTML = `<iframe width="420" height="315" src="https://www.youtube.com/embed/${selectedVids[0]}"></iframe>`;
let vid2HTML = `<iframe width="420" height="315" src="https://www.youtube.com/embed/${selectedVids[1]}"></iframe>`;
let vid3HTML = `<iframe width="420" height="315" src="https://www.youtube.com/embed/${selectedVids[2]}"></iframe>`;
document.getElementById("randomVid1").innerHTML = vid1HTML;
document.getElementById("randomVid2").innerHTML = vid2HTML;
document.getElementById("randomVid3").innerHTML = vid3HTML;