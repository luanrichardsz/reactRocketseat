import styles from './Header.module.css'
import igniteLogo from '/src/assets/ingnite-logo.svg'

export function Header() {
    return (
    <header className={styles.header}>
        <img src={igniteLogo} alt="Logotipo do Ignite"/>
    </header>
    );
}