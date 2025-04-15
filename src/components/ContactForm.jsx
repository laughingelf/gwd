import { useState } from "react";


const ContactForm = () => {


    return (
        <form method="POST" data-netlify="true" id="contact-form" name="contact">
            <input type="hidden" name="form-name" value="contact" />
                <div class='form-group'>
                    <label for='name'>Name: </label>
                    <input type='text' id='name' name='name' reqired/><br/><br/>
                </div>
                <div class='form-group'>
                    <label for='email'>Email:</label><br/>
                    <input type='email' id='email' name='email' required/><br/><br/>
                </div>
                <div class='form-group'>
                    <label for='phone'>Phone:</label><br/>
                    <input type='tel' id='phone' name='phone' required/><br/><br/>
                </div>
                <div class='form-group'>
                    <label for='message'>Message:</label><br/>
                    <textarea id='message' name='message' rows='5' required/><br/>
                </div>


                <button class='form-button' type="submit" >Submit</button>
        </form>
    )
}

export default ContactForm