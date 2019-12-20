class Controller {
  constructor(model, view){
    this.model = model;
    this.view = view;

    this.model.bindShowNewWeather(this.onSearchNewData);

    this.view.bindSearchNewData(this.handleSearchNewData);
  }

  onSearchNewData = data => {
    this.view.createWeather(data);
  }

  handleSearchNewData = location => {
    this.model.getData(location);
  }

}

export default Controller;
