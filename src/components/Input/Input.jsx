import './style.css';

function Input ({inputEmail = 'Enter your email', inputPassword = 'Enter your password'}) {
    return (
        <div>
            
            <p>Email</p>
            <input type="email" placeholder={inputEmail} label=""/>
            <p>Password</p>
            <input type="password" placeholder={inputPassword} label=""/>
        </div>
    )
}

export default Input;