import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';


const HomePage = () => {

    const authUser = useSelector(state => state.user)

    const { t } = useTranslation();

    return (
        <>
            <h1>Sveiki, {authUser.fullname}, malonu kad domitės mano kuryba</h1>
            <h2>{t('hello', {name: (authUser.fullname) })}</h2>
        </>
    );
};

export default HomePage;