import { useRef, useState, useEffect } from "react";
import '../styles/form.css'
const Login = () => {
    const userRef = useRef();
    const errRef = useRef();
    
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    },[])

    useEffect(() => {
        setErrMsg('');
    }, [user,pwd])

    return (
        <section className="SigningForm">
            <p ref={errRef} className={errMsg ? 'errmsg': 'offscreen'} aria-live='assertive'>{errMsg}</p>
            <strong>Se connecter</strong>
            <form>
                <label htmlFor="email">Email</label>
                <input type='email' id='email' ref={userRef}
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
                />
                <label htmlFor="password">Password</label>
                <input type='password' id='password' ref={userRef}
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                />
            <button>Se connecter</button>
            </form>
        </section>
    );
};

export default Login;
