//create database count
//we're not trying to find the right answer, we're trying to find the right question!
if (localStorage.getItem('count') == null) {
  localStorage.setItem('count', 0);
}

function update() {
  document.getElementById('count').innerHTML = Number(localStorage.getItem('count'));
}

update();


//add one to count



//melissa said "can you add one to the total? sure give me an hour"
//ben, mark, and jennifer laughed

function plusOne(){
  localStorage.setItem('count', (Number(localStorage.getItem('count')) + 1) );
  update();
}

function reset(){
  if(confirm('are you sure you want to reset?')){
    localStorage.setItem('count', 0);
    update();
  }

}