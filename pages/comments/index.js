import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/style.css'

function HomePage({ data }) {
    if (!data) {
        return <div>Loading...</div>
    }

    function handleCreateComment() {
        <div
            className="modal fade"
            id="createModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            New message
                        </h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="recipient-name" className="col-form-label">
                                    Recipient:
                                </label>
                                <input type="text" className="form-control" id="recipient-name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message-text" className="col-form-label">
                                    Message:
                                </label>
                                <textarea
                                    className="form-control"
                                    id="message-text"
                                    defaultValue={""}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                        >
                            Close
                        </button>
                        <button type="button" className="btn btn-primary">
                            Send message
                        </button>
                    </div>
                </div>
            </div>
        </div>
        return
    }
    function handleEditComment() { }
    function handleDeleteComment() { }

    const handleSubmit = async (event) => {
        setShowC(false);
        console.log("Golaa")
        console.log(event)
        if (event && event.target) {
            const data = {
                first: event.target.first.value,
                last: event.target.Comment.value,
            }
            console.log(data)
            const JSONdata = JSON.stringify(data)
            const endpoint = 'http://localhost:8080/comments/'

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSONdata,
            }
            try {
                const response = await fetch(endpoint, options)
                const result = await response.json()
                alert(`This is the username: ${result.data}`)
            } catch (error) {
                console.error('Error: ', error);
                alert('Error in request')
            }
        } else {
            console.error('Error: event or event.target is undefined');
            alert('Error in request')
        }
    }

    return (
        <>
            <title>GeeksforGeeks</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="blog-title">
                            <p title="GeeksforGeeks">GeeksforGeeks</p>
                        </h1>
                    </div>
                </div>
                <nav className="navbar navbar-light bg-light justify-content-between">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link active" href="">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Courses</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Q&amp;A</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Jobs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Contests</a>
                        </li>
                    </ul>
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
                </nav>

                <nav className="navbar navbar-light justify-content-between">
                    <ul className="nav navbar-pills">
                        <li className="nav-item">
                            <a className="nav-link" href="">Arrays</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Data Structures</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Interview Preparation</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Data Science</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">C</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Python</a>
                        </li>
                    </ul>

                </nav>
                <div className="row">
                    <div id="content" className="col-lg-8">
                        <div id="post" className="post">
                            <div className="post-main">
                                <div className="post-info">
                                    <div className="post-title-info">
                                        <h2>
                                            <a href="">Adapt HTML code responsively with Bootstrap</a>
                                        </h2>
                                        <a href="">Leave a comment</a>
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
                                            <a href="">Detect Cycle in a Graph</a>
                                        </h2>
                                        <a href="">Leave a comment</a>
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
                                            <a href="">Add data to your website with Ajax</a>
                                        </h2>
                                        <a href="">Leave a comment</a>
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
                                            <a href="">Et harum quidem rerum facilis</a>
                                        </h2>
                                        <a href="">Leave a comment</a>
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
                    </div>
                    <div className="col-lg-4">
                        <h2>Our Forum (Latest posts)</h2>
                        <ul className="list-unstyled">
                            {data.map((post) => (
                                <li key={post.id} className="media-body">
                                    <div className="media-body">
                                        <h5 className="mt-0 mb-2 font-weight-bold">
                                            Username: {post.user}
                                        </h5>
                                        <div>
                                            Comment: {post.description}
<<<<<<< Updated upstream
                                        </div>
                                        <div>
                                            Date: {post.currentDate}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="grid gap-0 row-gap-3">
                            <div className="p-1 g-col-6">
                                <button type="button" className="btn btn-success btn-rounded" data-toggle="modal" data-target="#createModal" onClick={handleCreateComment}>
                                    Crear comentario
                                </button>
                            </div>
                            <div className="p-1 g-col-6">
                                <button type="button" className="btn btn-warning btn-rounded" onClick={handleEditComment}>
                                    Editar comentario
                                </button>
                            </div>
                            <div className="p-1 g-col-6">
                                <button type="button" className="btn btn-danger btn-rounded" onClick={handleDeleteComment}>
                                    Eliminar comentario
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <footer className="container">
                <div id="footer" className="col-lg-12">
                    <div>
                        <div>
                            Rights reserved for <a href="">Guillermo Esquivel </a>
                        </div>
                    </div>
                </div>
            </footer>
=======
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
                                <form action="/comments" method="post">
                                    <label htmlFor="first">First Name</label>
                                    <input type="text" id="user" name="user" required />

                                    <label htmlFor="last">Last Name</label>
                                    <input type="text" id="comment" name="comment" required />

                                    <button type="submit">Submit</button>
                                </form>


                            </Modal.Body>
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
                                    <Form.Group className="mb-3" id="exampleForm.ControlInput1">
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
>>>>>>> Stashed changes
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
