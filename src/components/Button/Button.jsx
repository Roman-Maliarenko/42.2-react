import './style.css'

function Button ({buttonName = 'Login'}){    
    return (
    <button className="main-button" type='button'>{buttonName}</button>
)};

export default Button;