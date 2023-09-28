import { useState, useEffect } from "react";
import Discoverer from "../components/Discoverer"
import AboutData from "../../src/data/about.json";
import Banner from "../components/Banner";
import BannerAbout from "../../src/assets/image/bkg/mountain.jpeg";
import LoaderComponents from "../components/LoaderComponents";

export default function About() {
  const aboutData = AboutData;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);


  return (
    <>
    <main>
      <section className="image-banner banner-about">
        {isLoading ? (
          <LoaderComponents/>
        ) : (        
           <Banner
            className="image-banner"
            image={ BannerAbout  }
            alt="photo de montagne"
            title1=""
            title2=""
          />
        )}
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
    </main>
    </>
  );
}