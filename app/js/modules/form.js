import { mfpPopup } from './mfpPopup'

// E-mail Ajax Send
export const formInit = () => {
  $('form').submit(function (e) {
    e.preventDefault()

    let form = $(this)
    let formData = {}
    formData.data = {}

    // Serialize
    form.find('input, textarea').each(function () {
      let name = $(this).attr('name')
      let title = $(this).attr('data-name')
      let value = $(this).val()

      formData.data[name] = {
        title: title,
        value: value,
      }

      if (name === 'subject') {
        formData.subject = {
          value: value,
        }
        delete formData.data.subject
      }
    })

    $.ajax({
      type: 'POST',
      url: 'mail/mail.php',
      dataType: 'json',
      data: formData,
    }).done(function (data) {
      if (data.status === 'success') {
        if (form.closest('.mfp-wrap').hasClass('mfp-ready')) {
          form.find('.form-result').addClass('form-result--success')
        } else {
          mfpPopup('#success')
        }

        setTimeout(function () {
          if (form.closest('.mfp-wrap').hasClass('mfp-ready')) {
            form.find('.form-result').removeClass('form-result--success')
          }
          $.magnificPopup.close()
          form.trigger('reset')
        }, 3000)
      } else {
        alert('Ajax result: ' + data.status)
      }
    })
    return false
  })
}
