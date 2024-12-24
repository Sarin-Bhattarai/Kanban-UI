import { useState } from "react";
import Spinner from "../../../components/Spinner";
import { useRegisterUser } from "../hooks/useRegister";

const testimonials = [
  {
    quote:
      "Search and find your urgent task is now easier than ever. Just browse and see all sorts of tasks.",
    userInfo: "Matheus Nunes, UI Designer at Google",
    img: "testimonial-boy-1.jpg",
  },
  {
    quote:
      "This platform has streamlined our workflow immensely. It's a game changer for productivity.",
    userInfo: "Sophia Lee, Product Manager at Amazon",
    img: "testimonial-girl.jpg",
  },
  {
    quote:
      "Finding the right tasks and managing them has never been so simple and intuitive. I love it.",
    userInfo: "Michael Tan, Software Engineer at Microsoft",
    img: "testimonial-boy-2.jpg",
  },
];

function Register() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { registerUser, isRegistering } = useRegisterUser();

  if (isRegistering) return <Spinner />;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(formData);
  };

  return (
    <div className="register-container">
      <div className="register-left">
        <h1 className="logoText">
          Ka<span style={{ color: "#4CAF50" }}>n</span>ban
        </h1>
        <h2>Please Enter your Account Details</h2>

        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="johndoe@gmail.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />

          <button type="submit" className="register-button">
            Register
          </button>
        </form>
      </div>

      <div className="register-right">
        <h2>What our Clients Said.</h2>
        <p className="quote">“{testimonials[currentIndex].quote}”</p>
        <img
          className="register-img"
          src={testimonials[currentIndex].img}
          alt={`Img of ${testimonials[currentIndex].userInfo}`}
        />
        <p className="user-info">{testimonials[currentIndex].userInfo}</p>
        <div className="register-testimonial">
          <button className="arrow-button" onClick={handlePrev}>
            ←
          </button>
          <button className="arrow-button" onClick={handleNext}>
            →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
