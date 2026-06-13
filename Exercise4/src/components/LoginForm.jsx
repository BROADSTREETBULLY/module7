import { useState, useEffect } from "react";


function LoginForm() {

const [userEmail, setUserEmail] = useState('');
const [userPassword, setUserPassword] = useState('');

return (
 
<div className="LoginForm componentBox">
   <h1>LOGIN</h1>
<div className="formRow">
<label>Email Address:{" "}

<input type="email" value={userEmail} name="userEmail"
onChange={(e) => setUserEmail(e.target.value)} />
</label>
</div>
<div className="formRow">
<label>Password:{" "}
<input type="password" value={userPassword} name="password"
onChange={(e) => setUserPassword(e.target.value)} />
</label>
</div>
<button>Login</button>
</div>
)
}

export default LoginForm