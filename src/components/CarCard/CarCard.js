import React,{useEffect,useState} from "react";
import "./CarCard.style.css";
import Fuel from "./fuel";
import Direksiyon from "./direksiyon";
import Ondenaraba from "./ondenaraba";
import Vites from "./vites";

function CarCard({ name, driverAge, licenceYear, price, image }) {


  const [enable,set_enable]=useState(false)

  const [level,set_level]=useState(0)
  
  
    let scrollEl = React.createRef();
   const  handleScroll = e => {
  
      let element = scrollEl.current
     if(!enable&&element){
      if (window.pageYOffset>element.scrollHeight ) {
        // do something at end of scroll
        console.log(" 1 kez")
        setTimeout(() => {
          set_enable(true)
        }, 1000);
       
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
    else set_level(0)
  }, 1000);
  
  }
  
  
  
    useEffect(() => {
  if(enable){
  
  set_level(1)
  increaseLevel(2)
  
  
  
  }
     
  
    },[enable]);
  



  return (
    <div className="col-lg-3 col-md-4 col-xs-12 margin-top-1 margin-bottom-1" >
      <div className="car-card shadow box">
        <img src={image} />
        <div className="car-card-details">
          <h2>{name}</h2>
          <div className="car-card-driver">
            <p>
              <strong>Min. Sürücü Yaşı: </strong>
              <small>{driverAge}</small>
            </p>
            <p className="car-card-driver-age">
              <strong>Min. Ehliyet Yılı: </strong>
              <small>{licenceYear}</small>
            </p>
          </div>

          <div className="car-card-options  " ref={scrollEl}>
            <div className={`${level==1?"back-lacivert car-card-option":"car-card-option"}`} >
              <div className={`${level==1?"hover":"popup-modal"}`}>
                Dizel
           </div>
              <Fuel enable={level==1}></Fuel>
            </div>
            <div className={`${level==2?"back-lacivert car-card-option":"car-card-option"}`}>
              <div className={`${level==2?"hover":"popup-modal"}`}>
                Dizel
           </div>
              <Vites  enable={level==2}>
              </Vites>
            </div>
            <div className={`${level==3?"back-lacivert car-card-option":"car-card-option"}`}>
              <div className={`${level==3?"hover":"popup-modal"}`}>
                Dizel
           </div>
              <Ondenaraba  enable={level==3}/>
            </div>
            <div className={`${level==4?"back-lacivert car-card-option":"car-card-option"}`}>
              <div className={`${level==4?"hover":"popup-modal"}`}>
                Dizel
           </div>

            <Direksiyon  enable={level==4}/>
            </div>
          </div>

          <div className="car-card-price">
            <div className="price">
              <p>Günlük Fiyat</p>
              <strong>{price}₺</strong>
            </div>
            <button className="background-white"  >Hemen Kirala</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
