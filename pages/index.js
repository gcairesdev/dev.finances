import Head from 'next/head';
import Header from '../components/Header';
import Balance from '../components/Balance';
import Transactions from '../components/Transactions';
import Footer from '../components/Footer';

const homePage = () => {
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
                <Transactions />
            </main>

            <Footer />
        </>
    );
}

export default homePage;