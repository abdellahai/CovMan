import { useRef, useState, useEffect } from "react";
import '../styles/form.css'
const Register = () => {
    const userRef = useRef();
    const errRef = useRef();
    
    const [email, setEmail] = useState('');
    const [lname, setLname] = useState('');
    const [fname, setFname] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    },[])

   

    return (
        <section className="SigningForm">
            <p ref={errRef} className={errMsg ? 'errmsg': 'offscreen'} aria-live='assertive'>{errMsg}</p>
            <strong>S'inscrire'</strong>
            <form>
            <div>
                <label htmlFor="fname">Prenom</label>
                <input type='text' id='fname' ref={userRef}
                onChange={(e) => setFname(e.target.value)}
                value={fname}
                required
                />
                <label htmlFor="lname">Nom</label>
                <input type='text' id='lname' ref={userRef}
                onChange={(e) => setLname(e.target.value)}
                value={lname}
                required
                />
                </div>
                <div>
                <label htmlFor="email">Email</label>
                <input type='email' id='email' ref={userRef}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                />
                <label htmlFor="password">Password</label>
                <input type='password' id='password' ref={userRef}
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                />
                </div>
            <button>S'inscrire</button>
            </form>
        </section>
    );
};

export default Register;
