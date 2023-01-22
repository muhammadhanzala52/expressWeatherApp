

const data = async() => {
    let city = document.getElementById('city');
    city = city.value;

    let api = await  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=222e1a79c060b98ee7179c1917e7660c`);
    api = await api.json(); 
    api = await [api];

    let temp = document.getElementById('temp');
    temp.innerHTML = `${Math.round((api[0].main.temp - 273.15 )* 100)/100}°`;
}