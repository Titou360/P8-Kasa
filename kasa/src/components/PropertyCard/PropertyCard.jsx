// This components represents an individual card for each property.
// This compoents takes data property & displays informations

export default function PropertyCard ( {property} ) {
    
    console.log(property.id)
    return (
        <li className="card">
            <article key={property.id}>
              <img src={property.cover} alt={property.title} />
                <h3>
                    {property.title}
                </h3>
                    <p>
                    {property.location}
                    </p>
            </article>
        </li>
    )
}