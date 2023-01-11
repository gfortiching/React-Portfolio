import "./CSS/Extras.css";

function Extras() {

    return (
        <>
        <section className="main portfolio align-items-end justify-content-start">
          <article className='one'>
                <p className="secondary textStart" data-aos="fade-right">Are you still there?</p>
          </article>
        </section>
        <section className="main portfolio align-items-end justify-content-center">
          <article className='two' data-aos="fade-down">
              <p className="secondary textCenter">Hello!</p>
          </article>
        </section>
        <section className="main portfolio align-items-center justify-content-center">
          <article className='three' data-aos="fade-right">
              <p className="secondary textStart">I hope you liked my projects.</p>
          </article>
        </section>
        <section className="main portfolio align-items-center justify-content-center">
          <article className='four' data-aos="fade-left">
              <p className="secondary textEnd">You might be curious about me.</p>
          </article>
        </section>
        <section className="main portfolio align-items-start justify-content-center">
          <article className='five' data-aos="fade-right">
              <p className="secondary textStart">Well, I'm just a normal person...</p>
          </article>
        </section>
        <section className="main portfolio align-items-start justify-content-center">
          <article className='six' data-aos="fade-left">
              <p className="secondary textEnd">...learning to become a good web developer.</p>
          </article>
        </section>
        </>
    )
}

export default Extras;