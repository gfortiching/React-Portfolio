import RootsAndTools from "./Images/MP1.PNG"

function MP1() {
    return (
        <>
        <section className="mp1">
            <h1>Roots and Tools Essentials</h1>
            <div className="mp1Body">
                <div className="mp1Img">
                    <img src={RootsAndTools} alt="" />
                    <div className="mp1ImgView"><a href="https://rootsandtools.netlify.app/index.html" target={"blank"}>Visit Website</a></div>
                </div>
                <div className="mp1Text">
                    <p>Roots and Tools Essentials was built using HTML, CSS and Bootstrap. My inspiration for this KodeGo eCommerce website is my passion for plants and succulents.</p>
                </div>
            </div>
        </section>
        </>
    )
}

export default MP1;