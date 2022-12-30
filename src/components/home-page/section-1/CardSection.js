import CardOffer from "./CardOffer";
import classes from './CardSection.module.css'
import img1 from '../../../assets/cardImg1.svg'
import img2 from '../../../assets/cardImg2.svg'
import img3 from '../../../assets/cardImg3.svg'

const CardSection = (props) => {
    return <section className={`${classes.sectionCard} ${props.className}`} > 
        <CardOffer title={"ŠIROKA PONUDA"} src={img1} alt={"Slika siroke ponude"}/>
        <CardOffer title={"BRZA DOSTAVA"} src={img2} alt={"Slika brze dostave"}/>
        <CardOffer title={"ZADOVOLJSTVO KORISNIKA"} src={img3} alt={"Slika zadovoljnog korisnika"}/>
    </section>
};

export default CardSection;
