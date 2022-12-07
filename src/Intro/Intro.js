import "./Intro.css"
import Me from './Images/me.jpg'

const Intro = () => {
    return (
    <>
    <div className="i">
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hello, My name is</h2>
                <h1 className="i-name">Gabriel F</h1>
            </div>
        </div>
        <div className="i-title">
            <div className="i-title-wrapper">
                <div className="i-title-item">Web Developer</div>
                <div className="i-title-item">UI/UX Designer</div>
                <div className="i-title-item">Cryptocurrency Trader</div>
                <div className="i-title-item">Financial Advisor</div>
            </div>
        </div>
        <div className="i-right">
            <div className="i-bg"><img src={Me} alt="" className="i-img" /></div>
        </div>

    </div>
    <p className="i-desc">I design and develop services for customersof all sizes,specializing in creating stylish, modernwebsites, web services andonline stores.</p>
    </>
    )};

export default Intro;