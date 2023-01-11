import "./CSS/Links.css";

function Links() {

    function Header(props) {
        return (
          <header data-aos="fade-right">
            <h1 className='primary text-center text-sm-start mt-5 mb-3'>{props.header}</h1>
          </header>
        )
      }

    return (
        <section className="main">
            <Header header="Links" />
            <div className="socialsContainer primary">
            <h2 className="primary text-center" data-aos="fade-up">Let's Connect!</h2>
                <span>
                    <div className="socials" data-aos="fade-up">
                        <a href="www.linkedin.com/in/gfortiching"><img src="https://cdn-icons-png.flaticon.com/512/2626/2626269.png" alt="Facebook" /></a>
                    </div>
                    <div className="socials" data-aos="fade-up">
                        <a href="www.linkedin.com/in/gfortiching"><img src="https://cdn-icons-png.flaticon.com/512/1409/1409946.png" alt="Instagram" /></a>
                    </div>
                    <div className="socials" data-aos="fade-up">
                        <a href="www.linkedin.com/in/gfortiching"><img src="https://cdn-icons-png.flaticon.com/512/3670/3670129.png" alt="LinkedIn" /></a>
                    </div>
                    <div className="socials" data-aos="fade-up">
                        <a href="www.linkedin.com/in/gfortiching"><img src="https://cdn-icons-png.flaticon.com/512/1051/1051275.png" alt="Github" /></a>
                    </div>
                    <div className="socials" data-aos="fade-up">
                        <a href="www.linkedin.com/in/gfortiching"><img src="https://img.stackshare.io/stack/12741/bcc87e47eb053f5947fa6dbe45beba33a3d1dc56.png" alt="FreeCodeCamp" /></a>
                    </div>
                </span>
            </div>
    </section>
    )
}

export default Links;