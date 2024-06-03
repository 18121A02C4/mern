
function formSubmit(e){
    e.preventDefault();
    const values=e.target;
    console.dir(values);
    const photo=values[4].files[0];

    const userName=values[0].value;
    const email=values[1].value;
    const dob=values[2].value;
    const mobileno=values[3].value;
    // console.log(userName,email,password);
    const form=document.getElementById('form-container');
    form.style.display='none';
    const card=document.getElementById('card-data');
    card.style.display='block';
    // const img=document.createElement('img');
    const img=document.getElementById('imagePreview');
    img.src=URL.createObjectURL(photo);
    // card.append(img);
    const name=document.createElement('h4');
    name.innerText='Name: '+userName;
    card.append(name);
    const mail=document.createElement('h4');
    mail.innerText='Email: '+email;
    card.append(mail);
    const birth=document.createElement('h4');
    birth.innerText='DOB: '+dob;
    card.append(birth);
    const phno=document.createElement('h4');
    phno.innerText='MobileNo: '+mobileno;
    card.append(phno);
}

