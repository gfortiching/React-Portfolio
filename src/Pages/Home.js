import Card from 'react-bootstrap/Card';

export default function Home() {
    return (
        <div>
            <section className="homePage">
                <h1>This is my first React JS Website.</h1>
                <h2>I'm Gabriel, and I am a Full-Stack Web Development Trainee.</h2>
            </section>
            <section className='homeCards'>
                <Card className="card text-white border-0 mt-5">
                    <Card.Title>This is a React Bootstrap Card.</Card.Title>
                    <Card.Subtitle className="mb-2">This is a Card Subtitle.</Card.Subtitle>
                    <Card.Body>
                        <Card.Text>This is some text within a Card Body.</Card.Text>
                    </Card.Body>
                    <Card.Link href="/portfolio" className='bg-white text-decoration-none text-primary p-2'> Card Link to Portfolio Page</Card.Link>
                </Card>
                <Card className="card text-white border-0 mt-5">
                    <Card.Title>This is a React Bootstrap Card.</Card.Title>
                    <Card.Subtitle className="mb-2">This is a Card Subtitle.</Card.Subtitle>
                    <Card.Body>
                        <Card.Text>This is some text within a Card Body.</Card.Text>
                    </Card.Body>
                    <Card.Link href="/about" className='bg-white text-decoration-none text-primary p-2'>Card Link to About Page</Card.Link>
                    </Card>
                <Card className="card text-white border-0 mt-5">
                    <Card.Title>This is a React Bootstrap Card.</Card.Title>
                    <Card.Subtitle className="mb-2">This is a Card Subtitle.</Card.Subtitle>
                    <Card.Body>
                        <Card.Text>This is some text within a Card Body.</Card.Text>
                    </Card.Body>
                    <Card.Link href="/contact" className='bg-white text-decoration-none text-primary p-2'>Card Link to Contact Page</Card.Link>
                </Card>
            </section>
        </div>
    )
}
