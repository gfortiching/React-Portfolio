import RootsAndTools from "./Images/MP1.PNG"

function MP1() {
    return (
        <>
        <section className="mp1">
            <h1 className="mt-4 mb-4">Roots and Tools Essentials</h1>
            <div className="p-0 p-sm-3 d-flex flex-column flex-lg-row">
                <div className="mp1Img mb-3">
                    <a href="https://rootsandtools.netlify.app/index.html" target={"blank"}>
                        <img src={RootsAndTools} alt="" />
                    </a>
                </div>
                <div className="mp1Text ps-3 pe-3 pt-2 ps-lg-5">
                    <p>Roots and Tools Essentials was built using HTML, CSS and Bootstrap. My inspiration for this KodeGo eCommerce website is my passion for plants and succulents.</p>
                </div>
            </div>
        </section>
        </>
    )
}

export default MP1;