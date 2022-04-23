// Maak hier oefening 1


function validateForm() {
  let alerttxt = "";

       
    checkFields("myform","FirstName","First name is required");
    checkFields("myform","Name","Name is required");
    checkFields("myform","Email","Email is required");
    checkFields("myform","Address","Address is required");
    checkFields("myform","Country","Country is required");
    checkFields("myform","Provintie","Province is required");
    checkFields("myform","Postcode","Postcode is required");


    const element = document.getElementById('melding');
    const container = document.getElementById('meldingcontainer');
    const h4 = document.getElementById('meldingheader')
    if(alerttxt != "") {
    
     
     container.classList.add("alert","alert-danger","col-md-3",);
     element.innerText = alerttxt;
     h4.innerText = "You messed up...";

    }
    else{
      checkEmail()
      checkPostcode()
      
      if(alerttxt != "") {

        container.classList.add("alert","alert-danger","col-md-3");
        element.innerText = alerttxt;
        h4.innerText = "You messed up...";
        
        }
        else{
          container.classList.remove("alert","alert-danger","col-md-3");
          container.classList.add("alert","alert-success","col-md-3");
          element.innerText = "You successfully subscribed";
          h4.innerText = "Goodshit";
        }
    }


    function checkEmail()  {
      const x = document.forms["myform"]["Email"].value;
      let at = String(x).indexOf("@")
      let dot = String(x).lastIndexOf(".")
      if(at < 3 || dot-3 <= at)
      {
        alerttxt += "\nEmail is not valid"
      }
    }

    function checkPostcode(){
    let x = document.forms["myform"]["Postcode"].value;
      if(x < 0 || x >9999|| String(x).length != 4)
      {
        alerttxt += "\nPostcode is not valid"
      }
    }
      function checkFields(form,field,melding){
          
      x = document.forms[form][field].value;
      if (field == "Country")
      {
      if (x == "Choose a country") {
          alerttxt += "\n"+melding;
          return false;
          }
        }
      else if( field == "Provintie")
      {
        if (x == "Choose a province") {
          alerttxt += "\n"+melding;
          return false;
        }
      }
      else{
        if (x == "") {
        alerttxt += "\n"+melding;
        return false;
        }
      return false
      }
    }
}