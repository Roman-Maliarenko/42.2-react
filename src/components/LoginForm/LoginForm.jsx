import './style.css'

import Button from "../Button/Button";
import Input from "../Input/Input";


function LoginForm (){
    return <div className="login-form">
        <h2 className='login-container'>Login form</h2>
        <Input  />
        <Button />
        </div>
}

export default LoginForm;