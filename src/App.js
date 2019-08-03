import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "./actions";
import { Timers, Modal } from "./layouts";
import { Background } from "./elements";
import { GlobalStyle } from "./global";

const App = props => {
  const { displayModal, modal } = props;
  const { timers } = props;
  return (
    <div className="App">
      <Background backgroundColor="white">
        <Timers timers={timers} />
        <Modal modal={modal} />
      </Background>
      <GlobalStyle />
    </div>
  );
};

const mapStateToProps = state => ({
  displayModal: state.UIHandler.displayModal,
  modal: state.UIHandler.modal
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
