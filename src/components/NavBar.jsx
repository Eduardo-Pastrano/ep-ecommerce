import CartWidget from './CartWidget';
import { Tabs, TabList, Tab } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import '../App.css';

const NavBar = () => {
    return (
        <nav>
            <Tabs size='md'>
                <TabList>
                    <Link to="/">
                        <Tab>
                            <img src="/img/react-icon.png" alt="Logo" className='logo' />
                        </Tab>
                    </Link>
                    <div className='menu'>
                        <Link to="/categories/cpus">
                            <Tab>CPUs</Tab>
                        </Link>
                        <Link to="/categories/gpus">
                            <Tab>GPUs</Tab>
                        </Link>
                        <Link to="/categories/storage">
                            <Tab>Storage</Tab>
                        </Link>
                        <Link to="/categories/ram">
                            <Tab>RAM</Tab>
                        </Link>
                        <Link to="/categories/cases">
                            <Tab>Cases</Tab>
                        </Link>
                        <Link to="/categories/cooling">
                            <Tab>Cooling</Tab>
                        </Link>
                    </div>
                    <Link to="#">
                        <Tab className='cart'><CartWidget /></Tab>
                    </Link>
                </TabList>
            </Tabs>
        </nav>
    )
}

export default NavBar;