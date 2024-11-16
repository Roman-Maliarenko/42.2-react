import './style.css'


function Button ({buttonName = 'Login'}){    
    return (
    <button className="main-button" type='button'>{buttonName}</button>

// function Button (){
//     const isGetButton = true;
//     return (
//     <button className="main-button">{isGetButton ? 'Get' : 'Send'}</button>

)};

export default Button;