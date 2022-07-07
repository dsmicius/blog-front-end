import { useTranslation } from 'react-i18next';


const HomePage = () => {

    const { t } = useTranslation();

    return (
        <>
            <h1>Sveiki, tai yra mano Blogas</h1>
            <h2>{t('hello')}</h2>
        </>
    );
};

export default HomePage;