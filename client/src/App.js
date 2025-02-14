import logo from './logo.svg';
import './App.css'
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Booking from './screens/Booking';

import Esha from './screens/Esha';

import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Homescreen1 from './screens/Homescreen1';
import Kodai from './screens/Kodai';
import Ooty from './screens/Ooty';
import Kutralam from './screens/Kutralam';



const App = () => {
	return (
		<div className='App'>
			
			
<BrowserRouter>
<Routes>	
	
<Route path="/" element ={<Registerscreen/>}/>
<Route path="/login" element={<Loginscreen/>}/>
<Route path="/home"element={<Homescreen1/>}/>
<Route path ="/esha" element={<Esha/>}/>
<Route path ="/booking" element={<Booking/>}/>
<Route path="/kodai" element={<Kodai/>}/>
<Route path="/ooty" element={<Ooty/>}/>
<Route path="/kutralam" element={<Kutralam/>}/>
</Routes>
</BrowserRouter>

		</div>
	);
}

export default App;