function rollDice(){  
     
    const today = new Date();
    const date = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const hour = today.getHours();
    const minute = today.getMinutes();
    const displayTime = date +"/"+ month +"/"+ year +" at "+ hour + ":" + minute;
    document.getElementById("day").innerHTML = displayTime;
    
    const randomNum1 = Math.floor(Math.random() * 6) + 1;
    const randomNum2 = Math.floor(Math.random() * 6) + 1;
    const sum = randomNum1 + randomNum2;
    
    const randomDice1 = "dice-"+randomNum1+".svg";
    const randomDice2 = "dice-"+randomNum2+".svg";
   
    const randomImgSrc1 = "/img/"+randomDice1;
    const randomImgSrc2 = "/img/"+randomDice2;

    const image1 = document.querySelectorAll("img") [0]; 
    image1.setAttribute("src", randomImgSrc1);

    const image2 = document.querySelectorAll("img") [1]; 
    image2.setAttribute("src", randomImgSrc2);    

    document.querySelectorAll("span")[0].innerHTML = sum;

    if(sum>=8){
        document.querySelector("h3").innerHTML = "You win: Try Again!"
    }
    else{
        document.querySelector("h3").innerHTML = "You didn't win: Try Again!"
    }  

}

