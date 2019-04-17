import React from "react"
import { UndrawNewsletter } from "react-undraw-illustrations";


const Contact = () => {
    return (
    <div className="content-wrapper">
            <div className="content-header">
                <div className="image-header-wrapper">
                <UndrawNewsletter primaryColor='#20504f' skinColor="#f3d3cd" hairColor="#b29a5e" height='100px'/>
                </div>
            
                <div className="header-wrapper">
                <h1 className="content-h1">Contact me</h1>
                <p className="content-text">If you want to contact me, please send a message to me below - and please fill in your email so I can respond!</p>
            </div>
        </div>

        <div className="w-1/2">
            <form name="contact" method="POST">
                    <input type="hidden" name="form-name" value="contact" />
                <p className="hidden"> <label>Don’t fill this out if you're human: <input name="bot-field" /></label></p>
                
                <p>
                <label>Your Name: <input className="email-input focus" type="text" name="name" /></label>
                </p>
                
                <p className="pt-3">
                <label className="text-semibold">Email: <input className="email-input focus" type="text" name="email" /></label>
                </p>
                
                <p className="pt-3">
                <label>Message: <textarea className="message-input focus" name="message"></textarea></label>
                </p>

                <p className="pt-5">
                <button className="email-button hover" type="submit">Send</button>
                </p>

            </form>
        </div>
    </div>
    )
}

export default Contact