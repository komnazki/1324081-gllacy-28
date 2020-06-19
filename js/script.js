var feedbackLink = document.querySelector(".feedback-link");
var feedbackOpen = document.querySelector(".feedback-open");
var feedbackClose = document.querySelector(".feedback-close");
var feedback = document.querySelector(".feedback");
var feedbackUsername = document.querySelector("[name=username]");
var feedbackEmail = document.querySelector("[name=email]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("username");
} catch (err) {
  isStorageSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackOpen.classList.add("feedback-show");
    if (storage) {
      feedbackUsername.value = storage;
      feedbackEmail.focus();
    } else {
      feedbackUsername.focus();
    }
  });

 feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackOpen.classList.remove("feedback-show");
    feedbackOpen.classList.remove("feedback-error");
  });

feedback.addEventListener("submit", function (evt) {
    if (!feedbackUsername.value || !feedbackEmail.value) {
      evt.preventDefault();
      feedbackOpen.classList.remove("feedback-error");
      feedbackOpen.offsetWidth = loginPopup.offsetWidth;
      feedbackOpen.classList.add("feedback-error");
      setTimeout(delClassError, 500);
    } else 
      if (isStorageSupport) {
      localStorage.setItem("username", feedbackUsername.value)
      }
  });

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackOpen.classList.contains("feedback-show")) {
      evt.preventDefault();
      feedbackOpen.classList.remove("feedback-show");
      feedbackOpen.classList.remove("feedback-error");
      }
    }
  });


