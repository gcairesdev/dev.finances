import {
    transactions,
    table,
    income,
    expense,
    date,
    newTransaction,
} from './styles.module.css';

function Transactions({
    setModalActive
}) {
  return (
    <section className={transactions}>
        <h2 className='screenReaderOnly'>Transações</h2>

        <a
            href='#nova-transacao'
            className={newTransaction}
            onClick={() => setModalActive(true)}
        >
            + Nova transação
        </a>

        <table className={table}>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Valor</th>
                    <th>Data</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Smartphone</td>
                    <td className={expense}>- R$ 1.200,00</td>
                    <td className={date}>24/01/2021</td>
                    <td><img src='/assets/minus.svg' alt='Icone remover transação' /></td>
                </tr>
                <tr>
                    <td>Salário</td>
                    <td className={income}>+ R$ 5.000,00</td>
                    <td className={date}>20/01/2021</td>
                    <td><img src='/assets/minus.svg' alt='Icone remover transação' /></td>
                </tr>
                <tr>
                    <td>Cadeira gamer</td>
                    <td className={expense}>- R$ 800,00</td>
                    <td className={date}>18/01/2021</td>
                    <td><img src='/assets/minus.svg' alt='Icone remover transação' /></td>
                </tr>
            </tbody>
        </table>
    </section>
  );
}

export default Transactions;