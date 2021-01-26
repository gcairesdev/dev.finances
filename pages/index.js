import { useState } from 'react';

import Head from 'next/head';
import Header from '../components/Header';
import Balance from '../components/Balance';
import Transactions from '../components/Transactions';
import TransactionFormModal from '../components/TransactionFormModal';
import Footer from '../components/Footer';

const homePage = () => {
    const [modalActive, setModalActive] = useState(false);

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/assets/favicon.png" type="image/x-icon" />
                <link rel="shortcut icon" href="/assets/favicon.ico" />
                <title>Dev.Finance$</title>
            </Head>
            
            <Header />

            <main className='container'>
                <Balance 
                    data={{
                        income: 'R$ 5.000,00',
                        expense: 'R$ 2.000,00',
                        total: 'R$ 3.000,00',
                    }}
                />
                <Transactions setModalActive={setModalActive} />
            </main>
            
            <TransactionFormModal isActive={modalActive} setModalActive={setModalActive} />

            <Footer />
        </>
    );
}

export default homePage;