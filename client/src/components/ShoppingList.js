import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {connect} from 'react-redux';
import {getItems, deleteItem} from "../actions/itemActions";
import PropTypes from 'prop-types';
import loadingImage from '../images/loading.png';

class ShoppingList extends Component {

	handleDelete = (id) => {
		this.props.deleteItem(id);
	}

	componentDidMount() {
		this.props.getItems();
	}

	render() {
		const {items} = this.props.item;
		const loading = this.props.loading;
		return (
			<React.Fragment>
				<Container>
					{loading ? <div className="d-flex justify-content-center"><img className="loading" width='40px' height='40px' src={loadingImage} alt="loading"/></div> : ''}
					<ListGroup>
						<TransitionGroup className="shopping-list">
							{items.map(({_id, name}) => (
								<CSSTransition key={_id} timeout={500} classNames='fade'>
									<ListGroupItem className='d-flex justify-content-between align-items-center'>
										{name}
										<Button
											color='danger'
											size='small'
											onClick={this.handleDelete.bind(this, _id)}
										>
											X
										</Button>
									</ListGroupItem>
								</CSSTransition>
							))}
						</TransitionGroup>
					</ListGroup>
				</Container>
			</React.Fragment>
		)
	}
}

ShoppingList.propTypes = {
	getItems: PropTypes.func.isRequired,
	item: PropTypes.object.isRequired,
	loading: PropTypes.bool
};

const mapStateToProps = state => ({
	item: state.item,
	loading: state.item.loading
});

export default connect(mapStateToProps, {getItems, deleteItem})(ShoppingList);