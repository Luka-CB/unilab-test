import { useNavigate } from "react-router-dom";
import fbIcon from "../../assets/icons/authFb.svg";
import appleIcon from "../../assets/icons/authApple.svg";
import googleIcon from "../../assets/icons/authGoogle.svg";
import gmailIcon from "../../assets/icons/authGmail.svg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/features/auth";
import Modal from "../../components/Modal";
import Head from "../../components/Head";

const Signin = () => {
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  const {
    handleSignin,
    emailError,
    passwordError,
    signinSuccess,
    setSigninSuccess,
    setEmailError,
    setPasswordError,
  } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignin({
      email,
      password,
    });
  };

  useEffect(() => {
    if (signinSuccess) {
      navigate("/services/flights");
      setSigninSuccess(false);
      setPasswordError("");
      setEmailError("");
    }
  }, [signinSuccess]);

  useEffect(() => {
    if (isTermsModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isTermsModalOpen]);

  return (
    <main className="auth-container">
      <Head title="Signin" />
      <div className="auth">
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError ? <p className="error">{emailError}</p> : null}
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your Password"
              required
              value={[password]}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError ? <p className="error">{passwordError}</p> : null}
          </div>
          <button className="btn form-btn">Continue</button>
        </form>
        <div className="divider">
          <div className="line"></div>
          <span>Or continue with</span>
        </div>
        <div className="social">
          <img src={fbIcon} alt="Facebook" className="icon" />
          <img src={appleIcon} alt="Apple" className="icon" />
          <img src={googleIcon} alt="Google" className="icon" />
          <img src={gmailIcon} alt="Gmail" className="icon" />
        </div>
        <hr />
        <div className="terms">
          <p>
            By signing in or creating an account, you agree with our{" "}
            <span id="link" onClick={() => setIsTermsModalOpen(true)}>
              Terms & conditions
            </span>{" "}
            and <span>Privacy policy</span>
          </p>
        </div>
      </div>

      {isTermsModalOpen ? (
        <Modal close={() => setIsTermsModalOpen(false)}>
          <div className="wrapper">
            <div className="row1">
              <h1>Terms and conditions</h1>
              <p>
                Before you use our website or services, please carefully read
                the following Terms and Conditions. By accessing or using our
                platform, you agree to comply with and be bound by these terms.
                If you do not agree with any part of these terms, please do not
                use our services. Your privacy is important to us. Please review
                our Privacy Policy to understand how we collect, use, and
                disclose information about you. By using our services, you
                consent to our privacy practices.
              </p>
            </div>
            <div className="row2">
              <h1>Privacy policy</h1>
              <p>
                We may collect personal information, such as your name, email
                address, and other details, when you register an account, make a
                purchase, or interact with our services. We also automatically
                collect certain information, such as IP addresses, browser type,
                and usage patterns, through cookies and similar technologies.
                Our website may contain links to third-party websites or
                services.
              </p>
            </div>
            <button
              className="btn agree-btn"
              onClick={() => setIsTermsModalOpen(false)}
            >
              I agree
            </button>
          </div>
        </Modal>
      ) : null}
    </main>
  );
};

export default Signin;
