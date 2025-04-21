import { useState } from "react";
import SuccessModal from "./SuccessModal";


const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('/', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: encode({'form-name': 'contact', name, email, phone, message}),
        })
        .then(() => setShowModal(true) )
        .then(() => setName(''), setEmail(''), setPhone(''), setMessage('') )
        .catch((error) => alert(error))
    };

    const encode = (data) => {
        return Object.keys(data)
          .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
          .join('&');
      };

    return (
        <>

            <SuccessModal
                show={showModal}
                onClose={() => setShowModal(false)}
                title="GhostStack Designs"
            >
                <p>Thanks for reaching out to GhostStack Designs! We got your message and we’ll get back to you within 24 hours. Talk soon!</p>
            </SuccessModal>
        
            <form onSubmit={handleSubmit} data-netlify-recapchta='true' id="contact-form" name="contact">
                <input type="hidden" name="form-name" value="contact" />
                    <div class='form-group'>
                        <label for='name'>Name: </label>
                        <input type='text' id='name' name='name' value={name} onChange={(e) => setName(e.target.value)} reqired/><br/><br/>
                    </div>
                    <div class='form-group'>
                        <label for='email'>Email:</label><br/>
                        <input type='email' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required/><br/><br/>
                    </div>
                    <div class='form-group'>
                        <label for='phone'>Phone:</label><br/>
                        <input type='tel' id='phone' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} required/><br/><br/>
                    </div>
                    <div class='form-group'>
                        <label for='message'>Message:</label><br/>
                        <textarea id='message' name='message' rows='5' value={message}  onChange={(e) => setMessage(e.target.value)} required/><br/>
                    </div>

                    <div data-netlify-recaptcha='true'></div>
                    
                    <button class='form-button' type="submit" >Submit</button>
            </form>
        </>
    )
}

export default ContactForm

