import React from "react"

const scrollToTop = () => {
let mainContent = document.getElementById("main-content")
mainContent.scrollTop = 0
document.documentElement.scrollTop = 0
}

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="px-10">
            </div>

            <div className="footer-content">
                Made with React
            </div>

            <div>
                <button className="scroll-button" onClick={scrollToTop}>
                Scroll to top
                </button>
            </div>
        </div>
    )
}

export default Footer