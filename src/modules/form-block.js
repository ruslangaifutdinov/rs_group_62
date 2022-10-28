export default class SubmitForm {
  #container

  constructor() {
    this.#container = document.createElement('div')
    this.#container.className = 'bloc 1-bloc'
    this.#container.id = 'bloc 9'
  }

  render() {
    const formBlockContainer = document.createElement('div')
    formBlockContainer.className = 'container bloc-lg'

    // Title
    const titleRow = document.createElement('div')
    titleRow.className = 'row'

    const titleCol = document.createElement('div')
    titleCol.className = 'col'

    const title = document.createElement('h3')
    title.className = 'mg-md mx-auto d-block text-lg-center h3-order-style'
    title.textContent = 'Get Order in Telegram'

    titleCol.append(title)
    titleRow.append(titleCol)


    const formBg = document.createElement('div')
    formBg.className = 'row bgc-white'

    const formContainer = document.createElement('div')
    formContainer.className = 'col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3'

    const form = document.createElement('form')
    form.id = 'form_18761'
    form.dataset.formType = 'blocs-form'
    form.noValidate = ''
    form.dataset.successMsg = 'Your message has been sent.'
    form.dataset.failMsg = 'Sorry it seems that our mail server is not responding, Sorry for the inconvenience!'

    formContainer.append(form)
    formBg.append(formContainer)

    // Name
    const formNameContainer = document.createElement('div')
    formNameContainer.className = 'form-group mb-3'

    const nameLabel = document.createElement('label')
    nameLabel.className = 'label-style form-label'
    nameLabel.textContent = 'Name'

    const nameInput = document.createElement('input')
    nameInput.name = 'name'
    nameInput.id = 'name_18761'
    nameInput.className = 'form-control'
    nameInput.required = true

    formNameContainer.append(nameLabel, nameInput)


    // Email
    const formEmailContainer = document.createElement('div')
    formEmailContainer.className = 'form-group mb-3'

    const emailLabel = document.createElement('label')
    emailLabel.className = 'label-email-style form-label'
    emailLabel.textContent = 'Email'

    const emailInput = document.createElement('input')
    emailInput.name = 'email'
    emailInput.id = 'email_18761'
    emailInput.className = 'form-control'
    emailInput.type = 'email'
    emailInput.dataset.errorValidationMsg = 'Not a valid email address'
    emailInput.required = true

    formEmailContainer.append(emailLabel, emailInput)


    // Message
    const formMessageContainer = document.createElement('div')
    formMessageContainer.className = 'form-group mb-3'

    const messageLabel = document.createElement('label')
    messageLabel.className = 'label-message-style form-label'
    messageLabel.textContent = 'Message'

    const messageTextarea = document.createElement('textarea')
    messageTextarea.name = 'message'
    messageTextarea.id = 'message_18761'
    messageTextarea.className = 'form-control'
    messageTextarea.rows = '4'
    messageTextarea.cols = '50'
    messageTextarea.required = true

    formMessageContainer.append(messageLabel, messageTextarea)


    // Checkbox
    const formCheckboxContainer = document.createElement('div')
    formCheckboxContainer.className = 'form-check'

    const checkboxLabel = document.createElement('label')
    checkboxLabel.className = 'form-check-label'
    checkboxLabel.textContent
      = 'We can send you product updates and offers via email. It is possible to opt-out at any time.'

    const checkboxInput = document.createElement('input')
    checkboxInput.className = 'form-check-input'
    checkboxInput.type = 'checkbox'
    checkboxInput.id = 'optin_18761'
    checkboxInput.dataset.validationMincheckedMessage
      = 'You must agree to this before we can take your information.'
    checkboxInput.dataset.validationMincheckedMinchecked = '1'
    checkboxInput.name = 'optin_18761'

    formCheckboxContainer.append(checkboxInput, checkboxLabel)


    // Submit Button
    const submitButton = document.createElement('button')
    submitButton.className = 'bloc-button btn btn-d btn-lg w-100'
    submitButton.type = 'submit'
    submitButton.textContent = 'Submit'

    form.append(
      formNameContainer,
      formEmailContainer,
      formMessageContainer,
      formCheckboxContainer,
      submitButton
    )

    // addEventListener
    form.addEventListener('submit', this.#submitHandler)

    formBlockContainer.append(titleRow, formContainer)
    this.#container.append(formBlockContainer)

    return this.#container
  }

  #submitHandler(event) {
    event.preventDefault()
    const { target } = event

    // Нажат ли checbox
    const isChecked = target.optin_18761.checked
    if (isChecked) {
      const { name, email, message } = target

      const request = {
        name: name.value,
        email: email.value,
        message: message.value
      }
      // Отправляемые данные
      const jsonRequest = JSON.stringify(request)

      name.value = ''
      email.value = ''
      message.value = ''
    }
  }
}
