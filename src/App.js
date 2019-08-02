import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "./actions";
import { Timers, Modal } from "./layouts";
import { Background } from "./elements";
import { GlobalStyle } from "./global";

const App = ({ displayModal, modal }) => {
  const timers = [{}, {}];
  console.log(displayModal, modal);
  return (
    <div className="App">
      <Background backgroundColor="greenyellow">
        <Timers timers={timers} />
        {displayModal && <Modal modal={modal} />}
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
