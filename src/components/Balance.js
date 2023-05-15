import gem from '../assets/imgs/gem.png';
import '../assets/css/components/balance.css';

export const Balance = ({ balance }) => {
    return (
        <div className="balance">
            <div className="balance__gem-text-wrapper">
                <img src={gem} className="balance__gem" alt="gem"/>
                <span className="balance__num">{balance}</span>
            </div>
            <span className="balance__text">Your balance</span>
        </div>
    )
}