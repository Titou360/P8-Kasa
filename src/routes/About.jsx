import Discoverer from "../components/Discoverer"
import AboutData from "../../src/data/about.json";
import Banner from "../components/Banner";
import BannerAbout from "../components/Banner/mountain.jpeg";

export default function About() {
  const aboutData = AboutData;
 
  return (
    <div>
      <section className="image-banner banner-about">
           <Banner
            className="image-banner"
            image={ BannerAbout  }
            alt="photo de montagne"
            title1=""
            title2=""
          />
      </section>

        <section className="about-section">
          <div className="discoverer-section">
          {aboutData.map((item) => (
            <Discoverer
             key={item.id}
             title={item.title}
             content={item.content}
            />
        ))}
        </div>
        </section>
    </div>
  );
}