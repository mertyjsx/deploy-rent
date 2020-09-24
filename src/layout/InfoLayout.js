import InfoCard from "../components/Info/InfoCard";
import React,{useEffect,ReactDOM,useState} from "react"


import Car from "../components/Info/car";
import Image from "../components/Info/image";
import Card from "../components/Info/payment";
import Key from "../components/Info/key";
import Search from "../components/Info/search";

import "../components/Info/InfoCard.style.css";
import Title from "../components/titleComponent"
import Wave from "../components/Info/wave"
function Info(props) {

const [enable,set_enable]=useState(false)

const [level,set_level]=useState(0)


  let scrollEl = React.createRef();
 const  handleScroll = e => {

    let element = scrollEl.current
   if(!enable&&element){
    if (window.pageYOffset>element.scrollHeight ) {
      // do something at end of scroll
      console.log(" 1 kez")
      set_enable(true)
    }

   }
  
  }

  useEffect(() => {

   

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

const increaseLevel=(l)=>{

setTimeout(() => {
  set_level(l)
  if(l<5)
  increaseLevel(l+1)
}, 1000);

}



  useEffect(() => {
if(enable){

set_level(1)
increaseLevel(2)



}
   

  },[enable]);


  return (
    <div className="containerCenter  margin-top-4 "   ref={scrollEl}>

        <Title title="4 Aşamada Araba Kirala" p="  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua"></Title>
        
    <div className="container row around-xs continer-60 margin-top-4">

    <InfoCard title="Arama Yap" p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
    Svg={<Search  color={level==1}></Search >} color={level==1}
    />
    <Wave color={level==1}></Wave>

    <InfoCard title="En uygununu Bul" p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
    Svg={<Image  color={level==2}></Image >} color={level==2}
    />
    <Wave color={level==2}></Wave>
    
    <InfoCard title="Arabanı Seç" p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
  Svg={<Car  color={level==3}></Car >} color={level==3}
    />
   <Wave color={level==3}></Wave>
 
    <InfoCard title="Ödemeni Yap" p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
    Svg={<Card  color={level==4}></Card >}  color={level==4}
    />
 <Wave color={level==4}></Wave>
 
 <InfoCard title="Araban Sende !" p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
 Svg={<Key  color={level==5}></Key >} color={level==5}
 />
    </div>
 
    </div>
  );
}

export default Info;