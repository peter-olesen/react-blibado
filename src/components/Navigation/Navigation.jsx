import ns from './Navigation.module.scss';

const NavItems = [
    {
        "name": "Om os",
        "url": "#aboutus"
    },
    {
        "name": "Locations",
        "url": "#locations"
    },
    {
        "name": "Aktuelt",
        "url": "#actual"
    },
    {
        "name": "SignUp",
        "url": "#"
    },
]

export const Navigation = () => {
    return (
        <nav className={ns.Navigation}>
            <ul>
                {NavItems.map((navItem, index) => {
                    return (
                        <li key={index}><a href={navItem.url}>{navItem.name}</a></li>
                    )
                })}
            </ul>
        </nav>
    )
}