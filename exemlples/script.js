document.addEventListener('DOMContentLoaded', () => {
  const validator = new RmValidate('#form');

  validator.addFiled('#email', {
    validClass: 'valid',
    errorClass: 'invalid',
    rules: {
      email: true,
      required: true,
    },
    errorMessage: {
      email: 'invalid email',
      required: 'invalid required'
    }
  })

  const validator2 = new RmValidate('#form1');

  validator2.addFiled('#minLength', {
    validClass: 'valid',
    errorClass: 'invalid',
    rules: {
      minLength: 3,
      required: true,
    },
    errorMessage: {
      minLength: 'min length 3',
      required: 'invalid required'
    }
  })
  validator2.addFiled('#maxLength', {
    validClass: 'valid',
    errorClass: 'invalid',
    rules: {
      minLength: 6,
      required: true,
    },
    errorMessage: {
      minLength: 'max length 6',
      required: 'invalid required'
    }
  })


  const validator3 = new RmValidate('#form3');

  validator3.addCustomRule('customName', (field, value) => {
    // функция обязательно должна возращать true или false, true - валидация прошла успешно, false - валидация не прошла
    if (field.value !== value) {
      return false;
    } 
    return true;
  })

  validator3.addFiled('#custom', {
    validClass: 'valid',
    errorClass: 'invalid',
    rules: {
      customName: 'hello'
    }, 
    errorMessage: {
      customName: 'Value must be hello'
    }
  })

  const validator4 = new RmValidate('#form4');


  validator4.addFiled('#numbers', {
    validClass: 'valid',
    errorClass: 'invalid',
    rules: {
      numbers: true
    }, 
    errorMessage: {
      numbers: 'value must be numbers'
    }
  })

})