import React from "react"
import { UndrawNewsletter } from "react-undraw-illustrations";


const Contact = () => {
    return (
        // <div className="flex mb-10 border-b border-grey-light">
        //         <div className="w-1/6 -mr-2 p-3">
        //         <UndrawNewsletter primaryColor='#20504f' skinColor="#f3d3cd" hairColor="#b29a5e" height='70px'/>
        //         </div>
            
        //         <div className="w-5/6 p-4">
        //         <h1 className="content-h1">Contact me</h1>
        //         <p className="content-text">Soon I will add a contact form here.</p>
        //         <p className="content-text">Stay tuned!</p></div>
        // </div>

        <div>
            <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
            <p className="hidden">
            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
            </p>
            <p>
            <label>Email: <input className="email-input focus" type="text" name="email" /></label>
            </p>
            <p>
            <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
            <button type="submit">Send</button>
            </p>
            </form>
        </div>
    )
}

export default Contact