import "./CSS/Contact.css"

export default function Contact() {

    return (
    <>
    <section className="main">
        <h1 className="arvo text-center text-sm-start mb-5 mt-5" data-aos="fade-right">CONTACT</h1>
        <h2 className="arvo text-center">Get In Touch!</h2>
        <div className="contactContainer arvo">
            <span>
                <div className="child">
                    <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Gmail" />
                    <p className="mt-3">gabrielfabilena@gmail.com</p>
                </div>
                <div className="child">
                    <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" alt="Gmail" />
                    <p className="mt-3">+639753756481</p>
                </div>
                <div className="child">
                    <img src="https://cdn-icons-png.flaticon.com/512/9062/9062564.png" alt="Gmail" />
                    <p className="mt-3">Magatas, Sibulan, Negros Oriental</p>
                </div>
            </span>
        </div>
    </section>
    </>
)
}