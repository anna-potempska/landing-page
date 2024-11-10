function MainSection() {
    return (
    <>
    
        {/* Hero Section */}
      <section className="hero mb-4" id="hero">
        <h2 className="font-xl mb-1 text-white">Welcome to Our Landing Page</h2>
        <p className="font-l mb-2">This is a catchy tagline or brief description.</p>
        <a href="#contact" className="btn-tertiary text-primary">Get in Touch</a>
      </section>

      {/* Features Section */}
      <section className="mb-4 container" id="features">
        <h2 className="mb-1">Our Features</h2>
        <div className="container">
            <div className="row gap-2 jusify-center">
                <div className="col-12-xs col-4-md">
                    <div className="card">
                        <h3 className="feature-title">Feature 1</h3>
                        <p className="feature-description"><b>Brief description of Feature 1.</b>
                          <br />Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                </div>
                <div className="col-12-xs col-4-md">
                    <div className="card">
                        <h3 className="feature-title">Feature 2</h3>
                        <p className="feature-description"><b>Brief description of Feature 2. </b>
                          <br />Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="col-12-xs col-4-md">
                    <div className="card">
                        <h3 className="feature-title">Feature 3</h3>
                        <p className="feature-description"><b>Brief description of Feature 3.</b>
                        <br />Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>
                    </div>
                </div>
            </div>           
        </div>
      </section>

      {/* About Section */}
      <section className="bg-background mb-4  p-3" id="about">
        <div className="container">
        <h2 className="mb-1">About Us</h2>
        <p className="about-text">Here is a short story about our company and our mission.<br />
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
              </div>
              </section>

      {/* Services Section */}
      <section className="mb-4 container" id="services">
        <h2 className="mb-1">Our Services</h2>
        <div className="container">
        <div className="row gap-2 jusify-center">
        <div className="col-12-xs col-4-md">
          <div className="card">
            <h3 className="service-title">Service 1</h3>
            <p className="service-description"><b>Description of the first service.</b>
            <br />Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
          </div>
          <div className="col-12-xs col-4-md">
          <div className="card">
            <h3 className="service-title">Service 2</h3>
            <p className="service-description"><b>Description of the second service.</b>
            <br />Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
          </div>
          <div className="col-12-xs col-4-md">
          <div className="card">
            <h3 className="service-title">Service 3</h3>
            <p className="service-description"> <b>Description of the third service.</b>
            <br />Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
          </div>
        </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-background mb-4  p-3" id="testimonials">
      <div className="container">
        <h2 className="mb-1">What Our Clients Say</h2>
        <div className="display-f justify-space-between ml-3 mr-3">
          <div className="testimonial-item">
            <p className="testimonial-text">"The best product I've ever used!"</p>
            <h4 className="testimonial-author">- John Doe</h4>
          </div>
          <div className="testimonial-item">
            <p className="testimonial-text">"Amazing support and fantastic results!"</p>
            <h4 className="testimonial-author">- Jane Smith</h4>
          </div>
        </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mb-4 container" id="contact">
        <h2 className="mb-1">Contact Us</h2>
        <form className="display-f gap-1 justify-center">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          
        </form>
        <div className="display-f justify-center mt-2">
        <button type="submit" className="btn-primary text-white">Send</button>
        </div>
      </section>
    </>
    )
    
}

export default MainSection