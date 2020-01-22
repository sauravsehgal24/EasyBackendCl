import { useState } from "react";

export const useCustomState = (initialValue,validateField) => {

  //validator
  const validator = (inputType,val) =>{

    if(val.trim()==='') return {validationMessage:'',isValid:false}

    switch(inputType){
      case 'email': 
      const reg = new RegExp('^(.+)@(.+)\\.[a-zA-Z]+$');
      const resultEmail = reg.test(val); 
      if(!resultEmail){
        return {validationMessage:'Invalid Email', isValid:false};
      }
      else{
        return {validationMessage:'',isValid:true};
      };
  
      case 'password': 
      
        const passwordRef = val.trim();
        const passwordLength = passwordRef.length;
       if(passwordLength < 6){
        return {validationMessage:'Min 6 Characters Req', isValid:false}; 
       }
  
       else{
          return {validationMessage:'', isValid:true}; 
       }
    }
  }

  const [value, setValue] = useState(initialValue);
  var [validateResult, setValidateResult] = useState({});

  return {
    value,
    setValue,
    validateResult,
    reset: () => setValue(initialValue),
    bind: {
      value,
      onChange: (event) => {
        setValue(event.target.value);
        
        validateResult = validator(validateField,event.target.value);
     
        setValidateResult(validateResult);
      }
    }
  };
};

