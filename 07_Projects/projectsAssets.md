# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)
 
# Solutions

#### Solution 1  
``` Javascript
let buttons = document.querySelectorAll('.button');
let body = document.querySelector('body');
buttons.forEach(function(button){
  button.addEventListener('click',function(event){
    if(event.target.id === 'grey'){
      body.style.backgroundColor = event.target.id;
    }
    if(event.target.id === 'blue'){
      body.style.backgroundColor = event.target.id;
    }
    if(event.target.id === 'yellow'){
      body.style.backgroundColor = event.target.id;
    }
    if(event.target.id === 'white'){
      body.style.backgroundColor = event.target.id;
    }
  })
});
```

#### Solution 2  
``` Javascript
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault(); 
  // It stops the event to perform the defaultevent Happening 

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
```
#### Solution 3
``` Javascript
const clock = document.querySelector('#clock')
// we can also make this using the Below written method
// const clock = document.getElementById('clock')

setInterval(function (){
  let date = new Date()
  clock.innerHTML = date.toLocaleTimeString()
},1000)
```