import { useState } from "react";

export const useCustomState = (initialValue,validateField) => {

  //validator
  const validator = (inputType,val) =>{
    switch(inputType){
      case 'email': 
      const reg = new RegExp('^(.+)@(.+)\\.[a-zA-Z]+$');
      const resultEmail = reg.test(val); 
      if(!resultEmail){
        return 'Invalid Email';
      }
  
      else{
        return '';
      };
  
      case 'password': 
      
        const passwordRef = val.trim();
        const passwordLength = passwordRef.length;
       if(passwordLength < 6){
        return 'Min 6 Characters Req';
       }
  
       else{
          return '';
       }
    }
  }

  const [value, setValue] = useState(initialValue);
  var [validateResult, setValidateResult] = useState('');

  return {
    value,
    setValue,
    validateResult,
    reset: () => setValue(initialValue),
    bind: {
      value,
      onChange: (event) => {
        setValue(event.target.value);
        console.log(event.target.value);
        validateResult = validator(validateField,event.target.value);
        setValidateResult(validateResult);
      }
    }
  };
};

