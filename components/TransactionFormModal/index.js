import {
    modalOverlay,
    modal,
    form,
    inputGroup,
} from './styles.module.css';

const TransactionFormModal = () => {
    return (
        <div className={modalOverlay}>
            <div className={modal}>
                <div>
                    <h2>Nova Transação</h2>
                    <form className={form}>
                        <div className={inputGroup}>
                            <label htmlFor='description' className='screenReaderOnly'>
                                Descrição
                            </label>
                            <input
                                type='text'
                                id='description'
                                placeholder='Descrição'
                            />
                        </div>

                        <div className={inputGroup}>
                            <label htmlFor='amount' className='screenReaderOnly'>
                                Valor
                            </label>
                            <input
                                id='amount'
                                step='0.01'
                                type='number'
                                placeholder='0,00'
                            />
                            <small>
                                Use o sinal - (negativo) para despesas.
                            </small>
                        </div>

                        <div className={inputGroup}>
                            <label htmlFor='date' className='screenReaderOnly'>
                                Data
                            </label>
                            <input
                                id='date'
                                type='date'
                            />
                        </div>

                        <div className={inputGroup}>
                            <a href='#transacao-cancelada'>Cancelar</a>
                            <button type='submit'>Salvar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TransactionFormModal;