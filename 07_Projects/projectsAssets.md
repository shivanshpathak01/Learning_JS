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

```