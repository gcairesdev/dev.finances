import { header } from './styles.module.css';

const Header = () => {
    return (
        <header className={header}>
            <img src='/assets/logo.svg' alt='Logo Dev Fincances' />
        </header>
    );
}

export default Header;