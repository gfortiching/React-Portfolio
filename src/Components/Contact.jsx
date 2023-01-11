import "./CSS/Contact.css";

export default function Contact() {

    function Header(props) {
        return (
          <header data-aos="fade-right">
            <h1 className='primary text-center text-sm-start mt-5 mb-5'>{props.header}</h1>
          </header>
        )
      }

    return (
    <>
    <section className="main">
        <Header header="Contact" />
        <h2 className="primary text-center" data-aos="fade-up">Get In Touch!</h2>
        <div className="contactContainer primary">
            <span>
                <div className="child" data-aos="fade-up">
                    <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Gmail" />
                    <p className="mt-3">gabrielfabilena@gmail.com</p>
                </div>
                <div className="child" data-aos="fade-up">
                    <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" alt="Gmail" />
                    <p className="mt-3">+639753756481</p>
                </div>
                <div className="child" data-aos="fade-up">
                    <img src="https://cdn-icons-png.flaticon.com/512/9062/9062564.png" alt="Gmail" />
                    <p className="mt-3">Magatas, Sibulan, Negros Oriental</p>
                </div>
            </span>
        </div>
    </section>
    </>
)
}