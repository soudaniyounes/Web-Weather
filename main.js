const form = document.querySelector("form");
const card =  document.querySelector(".card");
const details =  document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");

const UpdateUI =(data) =>{

// const cityDetes =  data.cityDetes;
// const wether =  data.wether;
const {cityDetes , wether} = data ;//only if the variable got the same name
// console.log(data);
details.innerHTML=`
<h5 class="my-3">${cityDetes.EnglishName}</h5>
<div class="my-3">${wether.WeatherText}</div>
<div class="display-4 my-3">
    <span>${wether.Temperature.Metric.Value}</span>
    <span>&deg;</span>
</div>
`;

if(card.classList.contains("d-none")){
  card.classList.remove("d-none")
}
 
icon.src = `img/icons/${wether.WeatherIcon}.svg`

if(wether.IsDayTime) {
  time.src = "img/day.svg";
}else{
  time.src = "img/night.svg";
}

}


const UpdateCity = async(city) =>{

const cityDetes = await getcity(city);
const wether = await getWether(cityDetes.Key);

return {
   cityDetes, // cityDetes : cityDetes,
   wether // wether : wether
}
};


form.addEventListener("submit",e => {

  e.preventDefault();

  const cityName = form.city.value.trim();
 
  form.reset();

  UpdateCity(cityName).then(data=>{UpdateUI(data)})
  .catch(err =>{  throw new Error("We got an error") })
  ;
});