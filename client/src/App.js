import { useEffect, useState, useContext } from 'react';
import { ReactReduxContext } from 'react-redux';
import { AddHotdogRedux } from './Components/addPopup';
import Item from './Components/itemCard';
import { getHotdogs, addHotdog } from './Api';

import './App.css';

import logo from './Components/image/logo.png';
import logo2 from './Components/image/logo2.jpg';

function App() {
	const [loading, setLoading] = useState(true);
	const [isNameExist, setNameExist] = useState(false);
	const [isPopupOpened, openPopup] = useState(false);
	const { store } = useContext(ReactReduxContext);

	useEffect(() => getHotdogs(store.dispatch, setLoading), [store]);

	const submitAddHotdog = (formData) => {
		let canAdd = true;
		for (let i = 0; i < store.getState().items.hotdogs.length; i++) {
			let item = store.getState().items.hotdogs[i];
			if (item.name === formData.name) {
				canAdd = false;
				setNameExist(true);
				console.log(isNameExist);
				break;
			} else {
				setNameExist(false);
			}
		}

		if (canAdd) addHotdog(formData.name, formData.price, formData.description, formData.imageurl);
	};

	return (
		<div className="App">
			{isPopupOpened ? (
				<AddHotdogRedux
					isNameExist={isNameExist}
					onSubmit={submitAddHotdog}
					openPopup={openPopup}
				></AddHotdogRedux>
			) : (
				false
			)}
			<header className="header">
				<div className="logo">
					<img alt="Logo" src={logo} height="90px" />
					<img alt="Logo" src={logo2} height="60px" style={{ borderRadius: '5px', marginLeft: '30px' }} />
				</div>
				<div className="addButton" onClick={() => openPopup(!isPopupOpened)}>
					+ Add hotdog
				</div>
			</header>
			<div className="itemContainer">
				<h2>All hot-dogs</h2>
				<div className="listItem">
					{loading
						? null
						: store
								.getState()
								.items.hotdogs.map((item) => (
									<Item
										key={item.id}
										price={item.price}
										name={item.name}
										description={item.description}
										imageurl={item.imageurl}
										id={item.id}
									></Item>
								))}
				</div>
			</div>
		</div>
	);
}

export default App;
