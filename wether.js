const key="rrjZQGaU2V7AooAH27qBOajIUMltsgCl";

// get Wether function 

 const getWether = async(id) =>{

 const base = "http://dataservice.accuweather.com/currentconditions/v1/";
 const query =  `${id}?&apikey=${key}`;

 const response = await fetch(base + query);
 const data = await response.json();

  return data[0];

 }
//get city function  

 const getcity = async(city) => {
    
    const query ="http://dataservice.accuweather.com/locations/v1/cities/search";
    const base =`?apikey=${key}&q=${city}`;

    const response = await fetch(query + base) ;
    const data = await response.json();

    return data[0];
}

/* getcity("london").then(data =>{
  return getWether(data.Key);
}).then(data =>{
    console.log(data);
})
.catch(err =>{  throw new Error("We got an error") }); */