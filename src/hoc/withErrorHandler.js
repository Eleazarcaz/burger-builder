import React from 'react';
import Auxiliar from './auxiliar';
import Modal from '../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends React.Component {
    state = {
      error: null,
    };

    componentWillMount() {
      axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      axios.interceptors.response.use(
        (res) => res,
        (error) => this.setState({ error }),
      );
    }

    errorConfirmHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Auxiliar>
          <Modal show={this.state.error} modalClosed={this.errorConfirmHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Auxiliar>
      );
    }
  };
};

export default withErrorHandler;
