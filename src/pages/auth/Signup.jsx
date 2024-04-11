import { useNavigate } from "react-router-dom";
import fbIcon from "../../assets/icons/authFb.svg";
import appleIcon from "../../assets/icons/authApple.svg";
import googleIcon from "../../assets/icons/authGoogle.svg";
import gmailIcon from "../../assets/icons/authGmail.svg";
import Photo from "../../components/Photo";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/features/auth";
import Modal from "../../components/Modal";
import Head from "../../components/Head";

const Signup = () => {
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  const { handleSignup, signupSuccess, setSignupSuccess, image } =
    useContext(AuthContext);

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [imageError, setImageError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (signupSuccess) {
      navigate("/signin");
      setSignupSuccess(false);
    }
  }, [signupSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setPasswordError("Password should be at least 6 characters long!");
      return;
    }

    if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords don't match!");
      return;
    }

    if (!image) {
      setImageError("Picture must be provided!");
    }

    handleSignup({
      firstName: fName,
      lastName: lName,
      email,
      password,
      image,
    });
  };

  useEffect(() => {
    if (isTermsModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isTermsModalOpen]);

  return (
    <main className="auth-container signup">
      <Head title="Signup" />
      <div className="auth">
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="firstName">First Name</label>
            <input
              type="firstName"
              name="firstName"
              id="firstName"
              placeholder="Enter your first name"
              required
              value={fName}
              onChange={(e) => setFName(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="lastName"
              name="lastName"
              id="lastName"
              placeholder="Enter your Last Name"
              required
              value={lName}
              onChange={(e) => setLName(e.target.value)}
            />
          </div>
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
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError ? <p className="error">{passwordError}</p> : null}
          </div>
          <div className="input-wrapper">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Re-enter your password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {confirmPasswordError ? (
              <p className="error">{confirmPasswordError}</p>
            ) : null}
          </div>
          <Photo />
          {imageError ? <p className="error">{imageError}</p> : null}
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

export default Signup;
