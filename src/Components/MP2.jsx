import LittleWizards from "./Images/MP2.png"

function MP2() {
    return (
        <>
        <section className="mp2">
            <h1 className="mt-4 mb-4">Little Wizards</h1>
            <div className="p-0 p-sm-3 d-flex flex-column flex-lg-row">
                <div className="mp2Img mb-3">
                    <a href="https://little-wizards.netlify.app/index.html" target={"blank"}>
                        <img src={LittleWizards} alt="" />
                    </a>
                </div>
                <div className="mp2Text ps-3 pe-3 pt-2 ps-lg-5">
                    <p>Little Wizards was built using HTML, CSS, Bootstrap and JavaScript. This is a group project for our KodeGo Mini Project 2. Our goal is to create an eLearning website using HTML, CSS, Bootstrap and JavaScript.</p>
                </div>
            </div>
        </section>
        </>
    )
}

export default MP2;