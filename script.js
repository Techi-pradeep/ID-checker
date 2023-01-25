function fetchdata() {
    let input = document.querySelector("#input").value;

    let name = document.querySelector(".name ")
    let email = document.querySelector(".email")
    let address = document.querySelector(".address")
    let mobile = document.querySelector(".mobile")
    let zip = document.querySelector(".zip")
    let city = document.querySelector(".city")
    let website = document.querySelector(".website")
    let company = document.querySelector(".company")

     fetch(`https://jsonplaceholder.typicode.com/users/${input}`).then(respo => respo.json()).then(data =>{
         console.log(data);
  

   name.innerHTML=`Username : ${data.name} `;
   address.innerHTML=`Address: ${data.address.street}  `;
   mobile.innerHTML=`Mobile: ${data.phone}  `;
   zip .innerHTML=`Email: ${data.email} `;
   city.innerHTML=`Pincode: ${data.address.zipcode} `;
   city.innerHTML=`City: ${data.address.city} `;
   website .innerHTML=`Website: ${data.website}`;
   company.innerHTML=`Company: ${data.company.name}  `;
  }  )
}
// fetchdata();