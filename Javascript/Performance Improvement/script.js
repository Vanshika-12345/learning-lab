//Code 1 
let t1 = performance.now();
for(let i=1;i<=100;i++)
{
    let para = document.createElement('p');
    para.textContent = "This is a para" + i;
    document.body.appendChild(para);
}
let t2 = performance.now();
console.log(`Total time taken by code 1 ${t2-t1} milliseconds`);
//Code 2
let t3 = performance.now();
let mydiv = document.createElement('div');
for(let i=1;i<=100;i++)
{
    let para = document.createElement('p');
    para.textContent = "This is Para" + i;
    mydiv.appendChild(para);
}
document.body.appendChild(mydiv);
let t4 = performance.now();
console.log(`Total time taken by code 2 ${t4-t3} milliseconds`);

let fragment = document.createDocumentFragment();
for(let i=1;i<=100;i++)
{
    let para = document.createElement('p');
    para.textContent = "This is para " +i;
    fragment.appendChild(para);
}
document.appendChild(fragment); 