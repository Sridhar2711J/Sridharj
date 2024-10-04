var Menu=document.getElementById("menu-icon")
var Mimize=document.querySelector(".min")


function minibar(){
    Mimize.style.right="10px"
    Menu.style.display="none"
}

function minfun(event){   
    Menu.style.display="block"
    Mimize.style.right="-200px"
}


// for navlink color change 

const navlinks=document.querySelectorAll('.navlink');

navlinks.forEach((navlink)=>{
    navlink.addEventListener('click',()=>{
        navlinks.forEach((nav)=>{
            nav.classList.remove('active');
        });

        navlink.classList.add('active');
    })
})


function sendMail() {

    console.log("sridhar")
    var params = {
      name: document.getElementById("name").value,
      mobile: document.getElementById("mobile").value,
      email_id: document.getElementById("email_id").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_0oud2ks";
    const templateID = "template_bq7eb27";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("mobile").value = "";
          document.getElementById("email_id").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }
  