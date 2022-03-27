// so I need to write a function that will increment the likes of 3 different buttons separately whenever one is clicked (i.e. make sure that clicking one doesn't increment the likes of all 3. The initial values of the buttons are 9, 12, and 9. //
// my example function
/* function increaseNumber(){
    var element = document.getElementById('likesNumber');
    var value = element.innerHTML;

    ++value

    console.log(value);
    document.getElementById('likesNumber').innerHTML=value;
} */

function increaseLikes1(){
    var element = document.getElementById('buttonOne')
    var value = element.innerHTML;

    ++value
    
    console.log(value)
    document.getElementById('buttonOne').innerHTML=value; 
}

function increaseLikes2(){
    var element = document.getElementById('buttonTwo')
    var value = element.innerHTML;

    ++value
    
    console.log(value)
    document.getElementById('buttonTwo').innerHTML=value; 
}

function increaseLikes3(){
    var element = document.getElementById('buttonThree')
    var value = element.innerHTML;

    ++value
    
    console.log(value)
    document.getElementById('buttonThree').innerHTML=value; 
}

{/* <p id="buttonThree">9</p>
<button class="likeButton" onclick="increaselikes3()">Like</button> */}