import React, {Component} from 'react';
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Form,
	FormGroup,
	Label,
	Input
} from 'reactstrap';
import {connect} from 'react-redux';
import {addItem} from '../actions/itemActions';

class ItemModal extends Component {
	state = {
		modal: false,
		name: ''
	};


	toggle = () => {
		this.setState({
			modal: !this.state.modal
		});
		//document.getElementById('item').focus();
	};

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	};

	onSubmit = (e) => {
		e.preventDefault();
		const newItem = {
			name: this.state.name
		};

		// Add item via addItem action
		this.props.addItem(newItem);

		// Cleanup
		this.toggle();
		this.setState({
			name: '',
		})
	}

	render() {
		return (
			<div>
				<Button
					className='d-block mx-auto'
					color='dark'
					style={{marginBottom: '2rem'}}
					onClick={this.toggle}
				>
					Add item
				</Button>

				<Modal
					isOpen={this.state.modal}
					toggle={this.toggle}
					autoFocus={false}
				>
					<ModalHeader toggle={this.toggle}>
						Add To Shopping List
					</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.onSubmit}>
							<FormGroup>
								<Label for='item'>Item</Label>
								<Input
									autoFocus
									type='text'
									name='name'
									id='item'
									placeholder='Add item to shopping list'
									onChange={this.onChange}
									value={this.state.name}
								/>
								<Button
									color='dark'
									className='mt-2'
									block
								>Add item</Button>
							</FormGroup>
						</Form>
					</ModalBody>

				</Modal>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	item: state.item
})

export default connect(mapStateToProps, {addItem})(ItemModal)