import "../styles/About.css";

function About() {
  return (
    <div className="page">
      <h1 className="page-title">About Us</h1>

      <div className="about-box">
        <p>
          Welcome to our library! We bring readers and books together, with
          stories for every age and every interest, from fiction and history
          to technology and children's books.
        </p>
        <p>
          Our goal is to make finding your next favorite book simple. Browse
          the catalog, search by title, author, or price, and add your picks
          to the cart.
        </p>

        <h2>Opening hours</h2>
        <ul>
          <li>Monday to Friday: 9:00 AM - 6:00 PM</li>
          <li>Saturday: 10:00 AM - 4:00 PM</li>
          <li>Sunday: Closed</li>
        </ul>

        <h2>Find us</h2>
        <p>123 Main Street, Your City</p>
        <p>Phone: +000 000 000</p>
        <p>Email: info@library.com</p>
      </div>
    </div>
  );
}

export default About;