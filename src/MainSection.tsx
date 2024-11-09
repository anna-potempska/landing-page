function MainSection() {
    return (
    <>
        {/* Hero Section */}
      <section className="hero" id="hero">
        <h2 className="hero-title">Welcome to Our Landing Page</h2>
        <p className="hero-subtitle">This is a catchy tagline or brief description.</p>
        <a href="#contact" className="cta-button">Get in Touch</a>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <h2 className="section-title">Our Features</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3 className="feature-title">Feature 1</h3>
            <p className="feature-description">Brief description of Feature 1.</p>
          </div>
          <div className="feature-item">
            <h3 className="feature-title">Feature 2</h3>
            <p className="feature-description">Brief description of Feature 2.</p>
          </div>
          <div className="feature-item">
            <h3 className="feature-title">Feature 3</h3>
            <p className="feature-description">Brief description of Feature 3.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <h2 className="section-title">About Us</h2>
        <p className="about-text">Here is a short story about our company and our mission.</p>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <h2 className="section-title">Our Services</h2>
        <div className="service-list">
          <div className="service-item">
            <h3 className="service-title">Service 1</h3>
            <p className="service-description">Description of the first service.</p>
          </div>
          <div className="service-item">
            <h3 className="service-title">Service 2</h3>
            <p className="service-description">Description of the second service.</p>
          </div>
          <div className="service-item">
            <h3 className="service-title">Service 3</h3>
            <p className="service-description">Description of the third service.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" id="testimonials">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonial-list">
          <div className="testimonial-item">
            <p className="testimonial-text">"The best product I've ever used!"</p>
            <h4 className="testimonial-author">- John Doe</h4>
          </div>
          <div className="testimonial-item">
            <p className="testimonial-text">"Amazing support and fantastic results!"</p>
            <h4 className="testimonial-author">- Jane Smith</h4>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2 className="section-title">Contact Us</h2>
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit" className="submit-button">Send</button>
        </form>
      </section>
    </>
    )
    
}

export default MainSection