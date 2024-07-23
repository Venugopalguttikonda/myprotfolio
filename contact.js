
document.addEventListener('DOMContentLoaded', () => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwa-m1A6b-qQ7wF3ViuWPxZyPhGhXKTVSCvE-o26QCs1KfY8oTzU7I4sS41N-5UWl9q/exec'
    const form = document.forms['contact-form']
    const feedbackElement = document.getElementById('form-feedback')
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      feedbackElement.style.display = 'none'  // Hide feedback element initially
      
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          if (response.ok) {
            feedbackElement.textContent = 'Your message has been sent successfully!'
            feedbackElement.style.color = 'green'
            form.reset()  // Reset the form fields
          } else {
            feedbackElement.textContent = 'There was an issue with sending your message. Please try again.'
            feedbackElement.style.color = 'red'
          }
          feedbackElement.style.display = 'block'  // Show feedback element
        })
        .catch(error => {
          feedbackElement.textContent = 'Error! ' + error.message
          feedbackElement.style.color = 'red'
          feedbackElement.style.display = 'block'  // Show feedback element
        })
    })
  })
  