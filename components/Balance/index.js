import Card from '../Card';
import styles from './styles.module.css';

const Balance = ({
    data
}) => {
    return (
        <section className={styles.balance}>
            <h2 className='screenReaderOnly'>Balanço</h2>

            <Card
                title='Entradas'
                value={data.income}
                icon={{name: 'income', alt: 'Icone de entrada'}}
            />
            <Card
                title='Saídas'
                value={data.expense}
                icon={{name: 'expense', alt: 'Icone de saída'}}
            />
            <Card
                title='Total'
                value={data.total}
                icon={{name: 'dollar-sign', alt: 'Icone de cifrão'}}
                isCardTotal
            />
        </section>
    );
}

export default Balance;