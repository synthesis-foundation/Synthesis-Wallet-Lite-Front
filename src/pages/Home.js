import '../assets/css/home.css'
import { Balance } from '../components/Balance'
import { Header } from '../components/Header'

export const Home = () => {
    return (
        <div className="home">
            <Header/>
            <Balance balance={0}/>
            <div className="home__buttons">
                <button className="home__button">Buy</button>
                <button className="home__button">Receive Synt</button>
            </div>
            <div className="home__white-block">
                <h2 className="home__heading">Wallet Created</h2>
                <p className="home__description">Your wallet address</p>
                <p className="home__address">qwertyuiopqwertyuiopqwerty</p>
            </div>
        </div>
    )
}