import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import './Main.css';

const Main = () => {
    return (
        <div className='background-img pb-[9.8%]'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;