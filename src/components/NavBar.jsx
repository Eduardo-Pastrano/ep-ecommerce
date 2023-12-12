import CartWidget from './CartWidget';
import { Tabs, TabList, Tab } from '@chakra-ui/react';
import '../App.css';

const NavBar = () => {
    return (
        <nav>
            <Tabs size='md'>
                <TabList>
                    <Tab><img src="/img/react-icon.png" alt="Logo" className='logo' /></Tab>
                    <Tab>CPUs</Tab>
                    <Tab>GPUs</Tab>
                    <Tab>Storage</Tab>
                    <Tab>RAM</Tab>
                    <Tab>Cases</Tab>
                    <Tab>Cooling</Tab>
                    <Tab className='cart'><CartWidget /></Tab>
                </TabList>
            </Tabs>
        </nav>
    )
}

export default NavBar;