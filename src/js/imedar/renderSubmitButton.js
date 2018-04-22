const renderSubmitButton = state => {
  state.markup.submitButtonEl.disabled = state.isProcessing;
};

export default renderSubmitButton;
