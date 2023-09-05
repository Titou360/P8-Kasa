import PropertyCard from "../PropertyCard/PropertyCard";
import propertyData from "../../logements.json";
import backgroundHome from "../../assets/image/background/falaise-min.webp"

export default function Home() {
    return (
        <div>
            <div className="home-background">
            <img src={backgroundHome} alt="Photo d'une falaise" className="home-background--image"></img>
            <h1 className="home-background--title">
              Chez vous, partout et ailleurs
            </h1>
            </div>


            <ul className="card-container">
                {propertyData.map(( property, index) => (
                <PropertyCard key={index} property={property} />
                ))}
          </ul>
          
        </div>
    );
}