const greeting = document.getElementById("greeting")
const checking = document.getElementById("checking")


checking.addEventListener("change", function(){
    if(checking.checked){
        greeting.innerText = "🎅Merry Christmas!"
        document.body.style.fontFamily = 'Mountains of Christmas'
        document.body.style.backgroundColor = "#EEEEEE"
    }else{
        greeting.innerText = "☃️Happy Holidays!🎁"
        document.body.style.fontFamily = 'Snowburst One'
        document.body.style.backgroundColor = "#39A2DB"

        
    }
})