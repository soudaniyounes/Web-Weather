// the same Application but we use OOP Method
class WeatherApp{

  constructor(){
    this.key = "rrjZQGaU2V7AooAH27qBOajIUMltsgCl";
    this.WeatherBase = "http://dataservice.accuweather.com/currentconditions/v1/";
    this.cityBase = "http://dataservice.accuweather.com/locations/v1/cities/search";
  }
  async UpdateCity(city){

    const cityDetes = await this.getcity(city);
    const weather = await this.getWeather(cityDetes.Key);
    
   return {
       cityDetes, // cityDetes : cityDetes,
       weather // weather : weather
    }
  }
   async getWeather(id){
    const query =  `${id}?&apikey=${this.key}`;

    const response = await fetch(this.WeatherBase + query);
    const data = await response.json();
   
     return data[0];
   }
   async getcity(city){
    const query =`?apikey=${this.key}&q=${city}`;

    const response = await fetch( this.cityBase + query) ;
    const data = await response.json();

    return data[0];
   }
}






// const key="rrjZQGaU2V7AooAH27qBOajIUMltsgCl";

// // get Wether function 

//  const getWether = async(id) =>{

//  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
//  const query =  `${id}?&apikey=${key}`;

//  const response = await fetch(base + query);
//  const data = await response.json();

//   return data[0];

//  }
// //get city function  

//  const getcity = async(city) => {
    
//     const query ="http://dataservice.accuweather.com/locations/v1/cities/search";
//     const base =`?apikey=${key}&q=${city}`;

//     const response = await fetch(query + base) ;
//     const data = await response.json();

//     return data[0];
// }

/* getcity("london").then(data =>{
  return getWether(data.Key);
}).then(data =>{
    console.log(data);
})
.catch(err =>{  throw new Error("We got an error") }); */