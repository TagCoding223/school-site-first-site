function check(form) /*function to check userid & password*/
{
  /*the following code checkes whether the entered userid and password are matching*/
  if (form.userid.value == "Vishal" && form.pswrd.value == "loveaajkal")
  {
    window.open('/my.html') /*opens the target page while Id & password matches*/
  }
  else
  {
    alert("Wrong Username & Password") /*displays error message*/
  }
}
