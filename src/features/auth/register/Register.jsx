function Register() {
  return (
    <div className="register-container">
      <div className="register-left">
        <h1 className="logoText">
          Ka<span style={{ color: "#4CAF50" }}>n</span>ban
        </h1>
        <h2>Please Enter your Account Details</h2>
        <form className="register-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="John Doe" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="johndoe@gmail.com" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="••••••••" />

          <button type="submit" className="register-button">
            Register
          </button>
        </form>
      </div>

      <div className="register-right">
        <h2>What’s our Jobseekers Said.</h2>
        <p className="quote">
          “Search and find your dream job is now easier than ever. Just browse a
          job and apply if you need to.”
        </p>
        <p className="user-info">Mas Parjono, UI Designer at Google</p>
        <div className="register-testimonial">
          <button className="arrow-button">←</button>
          <button className="arrow-button">→</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
