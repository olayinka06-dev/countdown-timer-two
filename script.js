const countDownDate = new Date("mar 27, 2029 14:00:25").getTime();

const x = setInterval(() => {
    const now  = new Date().getTime();

    const distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 3600 * 24));

    let hours = Math.floor((distance % (1000 * 3600 * 24)) / (1000 * 3600));

    let minutes = Math.floor((distance % (1000 * 3600)) / (1000 * 60));

    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("one").innerHTML = days;
    document.getElementById("two").innerHTML = hours;
    document.getElementById("three").innerHTML = minutes;
    document.getElementById("four").innerHTML = seconds;

    if (distance < 0) {
        
        clearInterval(x)

        document.getElementById("one").innerHTML = "expired";
        document.getElementById("two").innerHTML = "expired";
        document.getElementById("three").innerHTML = "expired";
        document.getElementById("four").innerHTML = "expired";

    }

}, 1000)