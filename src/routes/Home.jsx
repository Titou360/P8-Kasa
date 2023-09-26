import PropertyCard from "../components/PropertyCard/"
import propertyData from "../data/logements.json"
import Banner from "../components/Banner"
import BannerHome from "../../src/assets/image/bkg/falaise.jpeg"




export default function Home() {
    return (
         <>
  <main>
  <section className="banner banner-home">
  <Banner
  className="image-banner"
  image={ BannerHome }
  alt="photo de falaise"
  title1="Chez vous,"
  title2="partout et ailleurs"
  />
  </section>

<section className="properties-section" >
<div className="property-section">
<ul className="property-listing">
{propertyData.map(( property, index) => (
<PropertyCard key={index} property={property} />
))}
</ul>
</div>
</section>
</main>
</>     
    )
            }