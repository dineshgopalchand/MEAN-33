console.log("we are in contact page");
function validateForm() {
  //   return false;
  console.log("form submited");
  const formValue = document.getElementById("contactForm");
  const inputFields = formValue.getElementsByTagName("input");
  console.log(inputFields[0].value);
  console.log(inputFields[1].value);
  console.log(inputFields[2].value);

  // here we can add validation
  // if validation fail.
  return false;
}
