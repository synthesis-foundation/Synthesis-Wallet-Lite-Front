import { Balance } from "../components/Balance"
import { Header } from "../components/Header"
import '../assets/css/pages/transactions.css'
import arrowTop from '../assets/imgs/arrow_top.svg'
import arrowBottom from '../assets/imgs/arrow_bottom.svg'

export const Transactions = () => {
    return (
        <div className="transactions">
            <Header/>
            <Balance balance={0}/>
            <div className="home__buttons">
                <button className="home__button">Buy</button>
                <button className="home__button">Receive Synt</button>
            </div>
            <div className="home__white-block">
                <div className="transaction">
                    <div className="transaction__main-block">
                        <img src={arrowTop} className="transaction__arrow" alt="arrow"/>
                        <div className="transaction__text-block">
                            <p className="transaction__type">Sent</p>
                            <span className="transaction__adress">tanhiowyatt.synt</span>
                        </div>
                    </div>
                    <div className="transaction__amount-block">
                        <span className="transaction__amount">2 SYNT</span>
                    </div>
                </div>
                <div className="transaction">
                    <div className="transaction__main-block">
                        <img src={arrowTop} className="transaction__arrow" alt="arrow"/>
                        <div className="transaction__text-block">
                            <p className="transaction__type">Received</p>
                            <span className="transaction__adress">tanhiowyatt.synt</span>
                        </div>
                    </div>
                    <div className="transaction__amount-block">
                        <span className="transaction__amount">4 SYNT</span>
                    </div>
                </div>
            </div>
        </div>
    )
}