import {Locations} from '../Locations/Locations'
import {Gallery} from '../Gallery/Gallery'
import ms from './Main.module.scss'

export const Main = () => {
    return (
        <main className={ms.Main}>
            <h3 id="aboutus">Om os</h3>
            <section className={ms.About}>
                <video src="src/assets/video/pexels-taryn-elliott-9583751 (720p).mp4" muted="" autoPlay="" loop="" alt="Interior video"></video>
                <div>
                    <h4>Begyndelsen</h4>
                    <p>BliBaDO begyndte i 2018 da to udviklere var værter for tre rejsende, der ledte efter et sted at bo. Nu har millioner af værter og gæster oprettet en gratis BliBaDo-konto.</p>
                    <p>Uanset om det er en forretningsrejse, weekendtur, familieferie, eller et længere ophold, er der millioner af fantastiske steder at besøge.</p>
                    <p>Vi arbejder med: Bekræftede personlige profiler samt en pålidelig platform til at opkræve og overføre betalinger.</p>
                    <a href="#">Læs mere:</a>
                </div>
            </section>
            <Locations />
            <Gallery />
        </main>
    )
}