import './App.css';

const Button = ({ type, children, ...buttonProps }) => {
  const className = type === "Primary" ? "PrimaryButton" : "SecondaryButton";

  return (
    <button className={`Button ${className}`} {...buttonProps}>
      {children}
    </button>
  )
}

const LoginButton = ({ type, children, ...buttonProps }) => {
  return (
    <Button
      type="secondary"
      {...buttonProps}
      onClick={() => {
        alert("Logging in!")
      }}
    >
      {children}
    </Button>
  )
}
function App() {
  return (
    <div className="App">
      <header className='Header'>Star Gold Shine Restaurant</header>
      <Button type="primary" onClick={() => alert("Signing up")}>
        Sign Up
      </Button>
      <br />
      <LoginButton type="secondary" onClick={() => alert("Signing up!")}>
        Login
      </LoginButton>
    </div>
  );
}

export default App;
