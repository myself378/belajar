const updatetime = (rotate) => {
    let date = new date(), sectodeg = (date.getseconds() / 60) * 360, mintodeg = (date.getminutes() / 60) * 360, hrtodeg = (date.gethours() /12) *360;

    secondhand.style.transform = "rotate (${sectodeg}deg)";
    minutedhand.style.transform = 'rotate (${mintodeg}deg)';
    hourhand.style.transform = 'rotate (${hrtodeg}deg)';
}

setInterval(updatetime,100);

updatetime();