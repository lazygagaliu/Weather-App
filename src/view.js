class View {
  constructor(){
    this.search = this.getElement("input");
    this.btn = this.getElement("button");
    this.weathers = this.getElement(".weathers");

    this.newestWeather;
  }

  getElement(el){
    return document.querySelector(el);
  }

  createWeather(data){
    const el = document.createElement("div");
    this.setAttributes(el, {className: "weather-wrapper"});

    const childCity = this.createWeatherChild(data.location);
    const childTemp = this.createWeatherChild(data.temp);
    const childDesc = this.createWeatherChild(data.desc);
    const childIcon = this.createWeatherChildIcon(data.icon);

    el.append(childCity, childTemp, childDesc, childIcon);

    if(this.newestWeather){
      this.weathers.insertBefore(el, this.newestWeather);
      this.newestWeather = el;
    }else {
      this.weathers.appendChild(el);
      this.newestWeather = el;
    }
  }

  createElement(element, attributes){
    const el = document.createElement(element);
    if(attributes){
      this.setAttributes(el, attributes);
    }
    return el;
  }

  createWeatherChild(data){
    const child = this.createElement("div", {textContent: data});
    return child;
  }

  createWeatherChildIcon(data){
    const child = this.createElement("div", {style: `background-image: url(${data})`, className: "icon"});
    return child;
  }

  setAttributes(el, attributes){
    for(let key in attributes){
      el[key] = attributes[key];
    }
  }


  bindSearchNewData(handleSearchNewData){
    this.btn.addEventListener("click", e => {
      const value = this.search.value;
      console.log(value);
      handleSearchNewData(value);
      this.search.value = "";
    });
  }
}

export default View;
