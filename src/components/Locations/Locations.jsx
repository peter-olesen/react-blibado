import ls from './Locations.module.scss';

import Data from '../../LocationsData.json';

export const Locations = () => {
    return (
        <section className={ls.Locations}>
            {Data.map((loc, index) => {
                return (
                    <div>
                        <img src={loc.img} alt={loc.name} />
                        <h4>{loc.name}</h4>
                        <h5>Antal Sovepladser:</h5>
                        <p>Voksne: {loc.adults}</p>
                        <p>Børn: {loc.children}</p>
                        <h5>Faciliteter:</h5>
                        <p>{loc.facilities ? "Ja" : "Nej"}</p>
                        <h5>Pris / Døgn:</h5>
                        <p>Kr.: {loc.price},-</p>
                        <h5>Beskrivelse:</h5>
                        <p>{loc.description}</p>
                    </div>
                )
            })}
        </section>
    )
}