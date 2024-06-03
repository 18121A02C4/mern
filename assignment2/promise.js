console.log('Start');
const res=window.fetch("https://dummyjson.com/products");
res.then((data)=>{
    // console.log('Got the response\n',data);
    // console.log(data);-->body is in readble stream. To convert the respnse that we got from server from readable stream into json we did as below
    const obj=data.json();
    obj.then((o)=>{
        // console.log(o);
        renderUI(o);
    })
    .catch((err)=>{
        console.log('cannot parse json');
    })
    // console.log(obj);
})
.catch((err)=>{
    console.log("Error Occurred:",err);
})
console.log('End...');
function renderUI(data){
    // console.log(typeof data);
    // console.log("data: ",data);
    const products=data.products;
    // console.log(products);
    const firstTitle=products[0].title;
    const firstThumbNail=products[0].thumbnail;
    const cost=products[0].price;
    const reviewRating=products[0].rating;
    const policy=products[0].returnPolicy;
    // console.log(firstTitle,firstThumbNail);
    document.getElementById('form-container').style.display='none';
    const parent=document.getElementById('card-data');
    parent.style.display='block';
    const title=document.createElement('h4');
    title.innerText='Title: '+firstTitle;
    parent.appendChild(title);
    const image=document.createElement('img');
    image.src=firstThumbNail;
    parent.appendChild(image);
    const price=document.createElement('h4');
    price.innerText='price: '+cost;
    parent.append(price);
    const rating=document.createElement('h4');
    rating.innerText='rating: '+reviewRating;
    parent.append(rating);
    const returnPolicy=document.createElement('h4');
    returnPolicy.innerText='Return Policy: '+policy;
    parent.append(returnPolicy);
    

}
