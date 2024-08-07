import './contact-form.css';

const ContactForm = () => {
  return (
    <div className="contact__form">
      <div className="contact__form--container">
        <div className="contact__form--social-icons">
          <div className="contact__form--social-button facebook" />
          <div className="contact__form--social-button twitter" />
          <div className="contact__form--social-button linkedin" />
        </div>
        <form>
          <div className="contact__form--main-container">
            <div className="contact__form--form-group">
              <label htmlFor="student-name">Student Name</label>
              <input type="text" id="student-name" placeholder="Enter Student Name" />
            </div>
            <div className="contact__form--form-group">
              <label htmlFor="parent-name">Parent Name</label>
              <input type="text" id="parent-name" placeholder="Enter Parent Name" />
            </div>
            <div className="contact__form--form-group">
              <label htmlFor="email-address">Email Address</label>
              <input
                type="email"
                id="email-address"
                placeholder="Enter Email Address"
              />
            </div>
            <div className="contact__form--form-group">
              <label htmlFor="phone-number">Phone Number</label>
              <input type="tel" id="phone-number" placeholder="Enter Phone Number" />
            </div>
            <div className="contact__form--form-group">
              <label htmlFor="student-age">Student Age</label>
              <input type="number" id="student-age" placeholder="Enter Student Age" />
            </div>
            <div className="contact__form--form-group">
              <label htmlFor="program-interest">Program of Interest</label>
              <select id="program-interest">
                <option value="" disabled="" selected="">
                  Select Program
                </option>
              </select>
            </div>
          </div>
          <div className="contact__form--bottom-cont">
            <div className="contact__form--form-group contact__form--msg">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Enter your Message"
                defaultValue={""}
              />
            </div>
            <div className="contact__form--btn">
              <button type="submit" className="contact__form--submit-button">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm;