import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container} from 'reactstrap';

import {Provider} from 'react-redux';
import store from './store';

// Components
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<React.Fragment>
					<AppNavbar/>

					<Container>
						<ItemModal/>
						<ShoppingList/>
					</Container>
				</React.Fragment>
			</Provider>
		);
	}
}

export default App;
