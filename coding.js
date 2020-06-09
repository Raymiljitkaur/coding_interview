var emp = document.getElementById('employee');
// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();
// opening  a new connection, using the GET request on the URL endpoint
request.open('GET', 'http://sandbox.bittsdevelopment.com/code1/fetchemployees.php', true);
request.onload = function()
{
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
  data.forEach(employee =>
    {
         // Here i am trying to create an element where the data from the array will be stored in the form of div.
         //The textContent is then modified and then the class attribute is modified using setAttribute.
        const detail = document.createElement('div');
        detail.setAttribute('class', 'detail');
        emp.appendChild(detail);
        // here we are trying to get the name of the employee
        const h1 = document.createElement('h1');
        h1.textContent = (employee.employeefname + " " + employee.employeelname);
        detail.appendChild(h1);

       // here we are tryng to get the employees bio
        const p = document.createElement('p');
        p.textContent = (employee.employeebio);
        detail.appendChild(p);

         // here we are trying to get the image.
        const img = document.createElement('img')
        img.src = "http://sandbox.bittsdevelopment.com/code1/employeepics/id.jpg";
        img.setAttribute('src',img);
        details.appendChild(img);


    })
  }else{
     const errorMessage = document.createElement('marquee')
   errorMessage.textContent = `Gah, it's not working!`
   app.appendChild(errorMessage)
    }

}

//Sending request
request.send();
