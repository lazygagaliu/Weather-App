class Model {
  constructor(){
    this.data = {};

  }

  getData(location){
    fetch(`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=bd45fc9db8849cb46d00a451483ccd44`)
    .then( res => res.json())
    .then( data => {
      if(data.cod === "404"){
        alert(data.message);
        return;
      }
      this.data = this.saveData(data);
      this.showNewWeather(this.data);
    })
  }

  saveData(newData){
    const data = {};
    data.location = newData.name;
    data.temp = newData.main.temp;
    data.desc = newData.weather[0].main;
    data.icon = `http://openweathermap.org/img/wn/${newData.weather[0].icon}@2x.png`;
    return data;
  }


  bindShowNewWeather(callback){
    this.showNewWeather = callback;
  }

}

export default Model;
