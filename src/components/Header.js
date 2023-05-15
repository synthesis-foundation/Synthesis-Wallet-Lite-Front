import '../assets/css/components/header.css';
import settings from '../assets/imgs/settings.png';

export const Header = () => {
    return (
        <div className="header">
            <img className="settings" src={settings} alt="settings"/>
        </div>
    )
}