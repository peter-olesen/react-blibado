import hs from './Header.module.scss';

export const Header = () => {
    return (
        <header className={hs.Header}>
            <h1><span>bli</span><span>ba</span><span>do</span><sup>&copy;</sup></h1>
            <h2>Vi ved hvor du bor!</h2>
        </header>
    )
}