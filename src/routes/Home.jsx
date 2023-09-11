import PropertyCard from "../components/PropertyCard/";
import propertyData from "../logements.json";
import Banner from "../components/Banner";
import BannerHome from "../components/Banner/falaise.jpeg";



export default function Home() {
    return (
        <div>
        <section className="image-banner banner-home">
          <Banner
            className="image-banner"
            image={ BannerHome }
            alt="photo de falaise"
            title1="Chez vous,"
            title2="partout et ailleurs"
          />
        </section>

        <section className="property-section">
        <ul className="property-listing">
            {propertyData.map(( property, index) => (
            <PropertyCard key={index} property={property} />
            ))}
        </ul>
        </section>
          
        </div>
    );
}