import { useParams, Navigate } from "react-router-dom";

import propertyData from "../logements.json";


const PropertyDetail = () => {
    
  const { id } = useParams();
  const property = propertyData.find((item) => item.id ===id)

    // Chargez les détails de la propriété en fonction de l'ID ici
  // (peut-être à partir de votre source de données)

  return (
    <div>
        <h3>TEST 😆</h3>
      {!property && (<Navigate to='Page404' replace={true} />)}
      {property && (
        <div>
          <div className="container-general">

          </div>
        </div>
      )} 
    </div>
  );
};
export default PropertyDetail;
