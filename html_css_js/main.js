
function clock(){ 
    var time = new Date()

    // Double Digit Time

    let seconds = (time.getSeconds() <10?"0":"") + time.getSeconds()
    let minutes = (time.getMinutes() <10?"0":"") + time.getMinutes()
    let hours = (time.getHours() <10?"0":"") + time.getHours()
    
    let days = (time.getDate() <10?"0":"") + time.getDate()
    let months = (time.getMonth() <10?"0":"") + time.getMonth()
    let year = (time.getFullYear() <10?"0":"") + time.getFullYear()
    
    // Displaying Time 
    
    document.getElementById('date').innerText =  year+ "/" + months + "/" + days 
    document.getElementById("clock").innerText =  hours+ ":" + minutes + ":" +seconds 

    setTimeout(clock,1000)
}
clock()

