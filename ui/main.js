console.log('Loaded!');
//create a request object
var request = new XMLHttpRequest();


//capture the response and store it in a variable
request.onreadystatechange = function(){
    if(request.readyState === XMLHttpRequest.DONE){
        //Take some action
      if(request.status === 200){
         var counter = request.responseText;
         var span = document.getElementById('count');
         span.innerHTML = counter.toString();

      }

    }

       //Not done
};

//make request
request.open('GET', 'http://manu777.imad.hasura-app.io/counter',true);
request.send(null);
};//capture the response and store it in a variable
request.onreadystatechange = function(){
    if(request.readyState === XMLHttpRequest.DONE){
        //Take some action
      if(request.status === 200){
        //capture a list of names and render it on a list
var names = request.responseText;
names = JSON.parse(names);
var list = '';
for(var i=0; i<names.length; i++){
list += '<li>' + names[i] + '</li>';

}
var ul = document.getElementById('namelist');
ul.innerHTML = list;
      }

    }

       //Not done
};

//make request
var nameInput = document.getElementById('name');
var name      = nameInput.value;
request.open('GET', 'http://jaqw.imad.hasura-app.io/submit-name?name=' + name,true);
request.send(null);
};
