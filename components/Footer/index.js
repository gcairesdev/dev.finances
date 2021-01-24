import { footer } from './styles.module.css';

const Footer = () => {
    return (
        <footer className={footer}>
            <p>© 2021 - dev.finance$</p>
            <p>
                Made with <span>&hearts;</span> by
                <a href='https://github.com/gcairesdev' target='_blank'>Guilherme Caires</a>
            </p>
        </footer>
    );
}

export default Footer;