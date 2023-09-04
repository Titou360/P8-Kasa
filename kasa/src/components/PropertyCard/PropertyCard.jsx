// This components represents an individual card for each property.
// This compoents takes data property & displays informations

export default function PropertyCard (property) {
    
    console.log(property)
    return (
        <li className="card">
            <article key={property.id}>
              <img src={property.property.cover} alt={property.property.title} />
                <h3>
                    {property.property.title}
                </h3>
                    <p>
                    {property.property.location}
                    </p>
            </article>
        </li>
    )
}