import React, { useState } from 'react'
import { Container, Row, Col, Button, ButtonGroup, Form, Modal, Navbar, Nav, Alert, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

function HomePage({ data }) {
    if (!data) {
        return <div>Loading...</div>
    }

    const [showC, setShowC] = useState(false);
    const handleCreateClose = () => setShowC(false);
    const handleCreate = () => setShowC(true);

    const [showE, setShowE] = useState(false);
    const handleEditClose = () => setShowE(false);
    const handleEdit = () => setShowE(true);

    const [showD, setShowD] = useState(false);
    const handleDeleteClose = () => setShowD(false);
    const handleDelete = () => setShowD(true);

    return (
        <>
            <title>GeeksforGeeks</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <Container>
                <Row>
                    <Col className='p-3'>
                        <h1 className="blog-title">
                            <p title="Geeks4Geeks">Geeks4Geeks</p>
                        </h1>
                    </Col>
                </Row>
                <Navbar>
                    <Container>
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className='active'>Home</Nav.Link>
                            <Nav.Link href="#features">Courses</Nav.Link>
                            <Nav.Link href="#pricing">Q&amp;A</Nav.Link>
                            <Nav.Link href="#pricing">Jobs</Nav.Link>
                            <Nav.Link href="#pricing">Contests</Nav.Link>
                        </Nav >
                    </Container>
                    <form className="form-inline">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search" />
                            <div className="input-group-btn">
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                                    Search
                                </button>
                            </div>
                        </div>
                    </form>
                </Navbar>
                <Navbar>
                    <Container>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Arrays</Nav.Link>
                            <Nav.Link href="#features">Data Structures</Nav.Link>
                            <Nav.Link href="#pricing">Interview Preparation</Nav.Link>
                            <Nav.Link href="#pricing">Data Science</Nav.Link>
                            <Nav.Link href="#pricing">C</Nav.Link>
                            <Nav.Link href="#pricing">Python</Nav.Link>
                        </Nav >
                    </Container>
                </Navbar>
                <Row>
                    <Col sm={8}>
                        <div id="post" className="post">
                            <div className="post-main">
                                <div className="post-info">
                                    <div className="post-title-info">
                                        <h2>
                                            <Alert.Link style={{ color: 'green' }}>Adapt HTML code responsively with Bootstrap </Alert.Link>
                                        </h2>
                                        <Alert.Link style={{ color: 'green' }}>Leave a comment</Alert.Link>
                                    </div>
                                    <div className="post-date">February 25, 2003</div>
                                </div>
                                <div className="post-content">
                                    <div>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Dolore, quia ex labore commodi consectetur delectus voluptatem
                                        repellat quae aspernatur laborum rem beatae aperiam
                                        repellendus earum animi autem quibusdam. Saepe, itaque!
                                    </div>
                                </div>
                            </div>
                            <div className="post-main">
                                <div className="post-info">
                                    <div className="post-title-info">
                                        <h2>
                                            <Alert.Link style={{ color: 'green' }}>Detect Cycle in a Graph</Alert.Link>
                                        </h2>
                                        <Alert.Link style={{ color: 'green' }}>Leave a comment</Alert.Link>
                                    </div>
                                    <div className="post-date">February 25, 2003</div>
                                </div>
                                <div className="post-content">
                                    <div>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                        accusantium doloremque laudantium, totam rem aperiam, eaque
                                        ipsa quae ab illo inventore veritatis et quasi architecto
                                        beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                        quia voluptas sit aspernatur aut odit aut fugit
                                    </div>
                                </div>
                            </div>
                            <div className="post-main">
                                <div className="post-info">
                                    <div className="post-title-info">
                                        <h2>
                                            <Alert.Link style={{ color: 'green' }}>Add data to your website with Ajax</Alert.Link>
                                        </h2>
                                        <Alert.Link style={{ color: 'green' }}>Leave a comment</Alert.Link>
                                    </div>
                                    <div className="post-date">April 28, 2003</div>
                                </div>
                                <div className="post-content">
                                    <div>
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                        blanditiis praesentium voluptatum deleniti atque corrupti quos
                                        dolores et quas molestias excepturi sint occaecati cupiditate
                                        non provident, similique sunt in culpa qui officia deserunt
                                        mollitia animi, id est laborum et dolorum fuga
                                    </div>
                                </div>
                            </div>
                            <div className="post-main">
                                <div className="post-info">
                                    <div className="post-title-info">
                                        <h2>
                                            <Alert.Link style={{ color: 'green' }}>Et harum quidem rerum facilis</Alert.Link>

                                        </h2>
                                        <Alert.Link style={{ color: 'green' }}>Leave a comment</Alert.Link>
                                    </div>
                                    <div className="post-date">April 28, 2003</div>
                                </div>
                                <div className="post-content">
                                    <div>
                                        Nam libero tempore, cum soluta nobis est eligendi optio cumque
                                        nihil impedit quo minus id quod maxime placeat facere
                                        possimus, omnis voluptas assumenda est.
                                    </div>
                                </div>
                            </div>
                            <div className="post-main">
                                <div className="post-info">
                                    <div className="post-title-info">
                                        <h2>
                                            <Alert.Link style={{ color: 'green' }}>Adapt HTML code responsively with Bootstrap </Alert.Link>
                                        </h2>
                                        <Alert.Link style={{ color: 'green' }}>Leave a comment</Alert.Link>
                                    </div>
                                    <div className="post-date">February 25, 2003</div>
                                </div>
                                <div className="post-content">
                                    <div>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Dolore, quia ex labore commodi consectetur delectus voluptatem
                                        repellat quae aspernatur laborum rem beatae aperiam
                                        repellendus earum animi autem quibusdam. Saepe, itaque!
                                    </div>
                                </div>
                            </div>
                            <div className="post-main">
                                <div className="post-info">
                                    <div className="post-title-info">
                                        <h2>
                                            <Alert.Link style={{ color: 'green' }}>Detect Cycle in a Graph</Alert.Link>
                                        </h2>
                                        <Alert.Link style={{ color: 'green' }}>Leave a comment</Alert.Link>
                                    </div>
                                    <div className="post-date">February 25, 2003</div>
                                </div>
                                <div className="post-content">
                                    <div>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                        accusantium doloremque laudantium, totam rem aperiam, eaque
                                        ipsa quae ab illo inventore veritatis et quasi architecto
                                        beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                        quia voluptas sit aspernatur aut odit aut fugit
                                    </div>
                                </div>
                            </div>
                            <div className="post-main">
                                <div className="post-info">
                                    <div className="post-title-info">
                                        <h2>
                                            <Alert.Link style={{ color: 'green' }}>Add data to your website with Ajax</Alert.Link>
                                        </h2>
                                        <Alert.Link style={{ color: 'green' }}>Leave a comment</Alert.Link>
                                    </div>
                                    <div className="post-date">April 28, 2003</div>
                                </div>
                                <div className="post-content">
                                    <div>
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                        blanditiis praesentium voluptatum deleniti atque corrupti quos
                                        dolores et quas molestias excepturi sint occaecati cupiditate
                                        non provident, similique sunt in culpa qui officia deserunt
                                        mollitia animi, id est laborum et dolorum fuga
                                    </div>
                                </div>
                            </div>
                            <div className="post-main">
                                <div className="post-info">
                                    <div className="post-title-info">
                                        <h2>
                                            <Alert.Link style={{ color: 'green' }}>Et harum quidem rerum facilis</Alert.Link>

                                        </h2>
                                        <Alert.Link style={{ color: 'green' }}>Leave a comment</Alert.Link>
                                    </div>
                                    <div className="post-date">April 28, 2003</div>
                                </div>
                                <div className="post-content">
                                    <div>
                                        Nam libero tempore, cum soluta nobis est eligendi optio cumque
                                        nihil impedit quo minus id quod maxime placeat facere
                                        possimus, omnis voluptas assumenda est.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <h2>Our Forum (Latest posts)</h2>
                        <Card style={{ width: '23rem' }} className="p-2">
                            <Card.Body>
                                {data.map((post) => (
                                    <Card style={{ width: '20rem' }} key={post.id} className="p-3">
                                        <Card.Title>
                                            Username: {post.user}
                                        </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">
                                            Date: {post.currentDate}
                                        </Card.Subtitle>
                                        <Card.Subtitle className='text-muted'>
                                            Comment number: {post.id}
                                        </Card.Subtitle>
                                        <Card.Text>
                                            Comment: {post.description}
                                        </Card.Text>
                                    </Card>
                                ))}
                            </Card.Body>
                            <ButtonGroup className="p-2">
                                <Button variant="success" onClick={handleCreate}>Crear comentario</Button>
                                <Button variant="warning" onClick={handleEdit}>Editar comentario</Button>
                                <Button variant="danger" onClick={handleDelete}>Eliminar comentario</Button>
                            </ButtonGroup>
                        </Card>
                        <Modal show={showC} onHide={handleCreateClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>New comment</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control
                                            autoFocus
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlTextarea1"
                                    >
                                        <Form.Label>Comment</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="danger" onClick={handleCreateClose}>
                                    Close
                                </Button>
                                <Button variant="success" onClick={handleCreateClose}>
                                    Send
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <Modal show={showE} onHide={handleEditClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Edit comment</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control
                                            placeholder="velgor"
                                            autoFocus
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlTextarea1"
                                    >
                                        <Form.Label>Comment</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="danger" onClick={handleEditClose}>
                                    Close
                                </Button>
                                <Button variant="success" onClick={handleEditClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <Modal show={showD} onHide={handleDeleteClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Delete comment</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Number of your comment</Form.Label>
                                        <Form.Control autoFocus />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleDeleteClose}>
                                    Close
                                </Button>
                                <Button variant="danger" onClick={handleDeleteClose}>
                                    Delete
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Nav className="me-auto">
                    <Nav.Link>Rights reserved for:</Nav.Link>
                    <Nav.Link href="https://github.com/esquivelgor">Guillermo Esquivel Ortiz | A01625621</Nav.Link>
                    <Nav.Link href="#features">Moises Hiram | </Nav.Link>
                </Nav >
            </Container>
        </>
    )
}

// This function gets called at build time
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://tc2005b-sem2023-production.up.railway.app/comments`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}



export default HomePage
