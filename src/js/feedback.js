const formRef = document.querySelector('.js-feedback-form');
const textareaRef = document.querySelector('.js-feedback-form textarea');

formRef.addEventListener('submit', handleFormssubmit);
textareaRef.addEventListener('input', handleTextareaInput);

function handleFormssubmit(event) {
    event.preventDefault()
}

function handleTextareaInput(event) {
    
}