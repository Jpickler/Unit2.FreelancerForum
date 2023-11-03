console.log(`this is working`);
const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];


const myH1=document.createElement("h1");
myH1.textContent="Freelancer Forum";
myH1.setAttribute("style", "text-align: center");
document.body.append(myH1);

const myH3=document.createElement("h3");
myH3.textContent="The average starting price is $";
myH3.setAttribute("style", "text-align: center");
document.body.append(myH3);

const myH2=document.createElement("h2");
myH2.textContent="Available Freelancers";
myH2.setAttribute("style", "text-align: center");
document.body.append(myH2);

const box1=document.createElement("div");
box1.setAttribute("style", "border-style: solid; border-width: 3px; border-color: black;Display: flex; justify-content: space-between");
box1.setAttribute("id","box1");
document.body.append(box1);

const column1=document.createElement("div");
column1.setAttribute("id","column1");
column1.setAttribute("style", "margin-left: 10px");
box1.appendChild(column1);
    const col1Heading=document.createElement("h4");
    col1Heading.textContent="Name";
    column1.append(col1Heading);
const column2=document.createElement("div");
column2.setAttribute("id","column2");
box1.appendChild(column2);
    const col2Heading=document.createElement("h4");
    col2Heading.textContent="Price";
    column2.append(col2Heading);
const column3=document.createElement("div");
column3.setAttribute("id","column3");
column3.setAttribute("style", "margin-right: 10px");
box1.appendChild(column3);
    const col3Heading=document.createElement("h4");
    col3Heading.textContent="Occupation";
    column3.append(col3Heading);

  let averagePriceSubtotal=0;
  for(i=0;i<freelancers.length;i++){
    console.log(freelancers[i].name);

    averagePriceSubtotal=averagePriceSubtotal+freelancers[i].price;

    //create p inside columns
    const p1=document.createElement("p");
    p1.textContent=freelancers[i].name;
    column1.append(p1);

    const p2=document.createElement("p");
    p2.textContent=freelancers[i].price;
    column2.append(p2);

    const p3=document.createElement("p");
    p3.textContent=freelancers[i].occupation;
    column3.append(p3);

  };

  // had to update the myH3 message here, AFTER average price was determined.
let averagePrice=(averagePriceSubtotal/freelancers.length);
myH3.textContent="The average starting price is $" + averagePrice;


