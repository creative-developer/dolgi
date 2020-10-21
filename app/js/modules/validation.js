// Validate all form in site
export let validator

jQuery.validator.setDefaults({
  rules: {
    region: {
      required: true,
    },
    fullname: {
      required: true,
      fullname: true,
    },
    birthDate: {
      required: true,
      birthDate: true,
    },
    passportSeries: {
      required: true,
      passportSeries: true,
    },
    email: {
      required: true,
      email: true,
    },
    agreement: {
      required: true,
    },
    phone: {
      required: true,
      phone: true,
    },
    name: {
      required: true,
      minlength: 2,
      cyryllic: true,
    },
    middlename: {
      required: true,
      minlength: 2,
      cyryllic: true,
    },
    surname: {
      required: true,
      minlength: 2,
      cyryllic: true,
    },
    inn: {
      required: true,
      inn: true,
    },
    pay_method: {
      required: true,
    },
  },
  messages: {
    agreement: 'Обязательное поле',
    name: '',
    surname: '',
    phone: '',
    email: '',
  },
  errorPlacement: function (error, element) {},
  submitHandler: function (form) {
    // Write here your function Handler

    // form.submit();
    console.log('Submit')
  },
})

$.validator.addMethod('fullname', function (value, element) {
  return (
    this.optional(element) ||
    /^[А-Яа-я][а-я]{2,}(?:\s+[А-Яа-я][а-я]{2,})?(?:\s+[А-Яа-я][а-я]{2,})(?:\s+)*\r?$/.test(value)
  )
})

$.validator.addMethod('birthDate', function (value, element) {
  return this.optional(element) || /^[0-9\.]{10}?$/.test(value)
})

$.validator.addMethod('cyryllic', function (value, element) {
  return this.optional(element) || /^[а-я\s?-\s?А-Я]*\s?\s?$/.test(value)
})

$.validator.addMethod('passportSeries', function (value, element) {
  return this.optional(element) || /^[0-9\s]{11,12}?$/.test(value)
})

$.validator.addMethod('inn', function (value, element) {
  return this.optional(element) || /^[0-9]{12}?$/.test(value)
})

$.validator.addMethod('phone', function (value, element) {
  return (
    this.optional(element) || /^.. [(][0-9]{3}[)] [0-9]{3}[-][0-9]{2}[-][0-9]{2}\s?$/.test(value)
  )
})

export const validationInit = () => {
  $('form').each(function () {
    validator = $(this).validate()
  })
}
