import fs from './Footer.module.scss';

export const Footer = () => {
    return (
        <>
        <footer className={fs.Footer}>
            <div>
                <h3>Din Lokation:</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2170.4132777474156!2d9.91597887580197!3d57.04446599177259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464932f39fbd7b67%3A0xfd07725e3a9750b0!2skl%2C%20Boulevarden%2029%2C%209000%20Aalborg!5e0!3m2!1sda!2sdk!4v1704876188146!5m2!1sda!2sdk" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div>
                <h3>Informationer:</h3>
                <p>Boulevarden 29, 9000 Aalborg</p>
                <p><a href="tel:33445666">33445666</a></p>
                <p><a href="mailto:info@blibardo.dk">info@blibardo.dk</a></p>
                <p>CVR: 5533 66 77 88</p>
            </div>
        </footer>
        </>
    )
}