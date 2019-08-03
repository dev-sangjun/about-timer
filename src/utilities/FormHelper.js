export const clearErrorMessages = errorMessages => {
  while (errorMessages.hasChildNodes()) {
    errorMessages.removeChild(errorMessages.firstChild);
  }
};

export const validateForm = form => {
  const title = form.title.value;
  const minutes = parseInt(form.originalMinutes.value);
  const seconds = parseInt(form.originalSeconds.value);
  const errorMessages = form.querySelector(".error-messages");
  clearErrorMessages(errorMessages);
  const appendErrorMessage = message => {
    const li = document.createElement("li");
    li.innerText = message;
    errorMessages.appendChild(li);
  };
  if (title.trim() === "") {
    appendErrorMessage("Title cannot be empty");
  }
  if (isNaN(minutes) || minutes < 0 || minutes > 59) {
    appendErrorMessage("Minutes must be an integer from 0 to 59");
  }
  if (isNaN(seconds) || seconds < 0 || seconds > 59) {
    appendErrorMessage("Seconds must be an integer from 0 and 59");
  }
  if (!(isNaN(minutes) || isNaN(seconds)) && minutes + seconds === 0) {
    appendErrorMessage("Cannot create a timer of duration 0");
  }
  return !errorMessages.hasChildNodes();
};
