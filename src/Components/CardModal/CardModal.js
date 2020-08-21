import React, { Component } from 'react'
import Modal from 'react-modal'


Modal.setAppElement()
class CardModal extends React.Component {

    state = {
        modalIsOpen: false
    }

    renderModal = (id) => {
        return (
            <div>
                <button onClick={() => this.setState({ modalIsOpen: true })}>Open modal</button>
                <Modal isOpen={this.state.modalIsOpen} onRequestClose={() => this.setState({ modalIsOpen: false })}>
                    <h2>Modal Title</h2>
                    <p>Modal Body</p>
                    <button onClick={() => this.setState({ modalIsOpen: false })}>Close modal</button>
                </Modal>
            </div>
        )
    }

    render() {

        return (
            <div>
                {this.renderModal()}
            </div>
        )
    }


}

export default CardModal