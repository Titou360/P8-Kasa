import PropertyCard from "../components/PropertyCard/PropertyCard";
import propertyData from "../logements.json";
import Banner from "../components/Banner";
import BannerImage from "../components/Banner/falaise.jpeg";



export default function Home() {
    return (
        <div>

        <section className="image-banner banner-home">
          <Banner
            className="image-banner"
            image={ BannerImage }
            alt="photo de montagne"
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