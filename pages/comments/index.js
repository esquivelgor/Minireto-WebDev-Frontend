import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/style.css'

function HomePage({ data }) {
    if (!data) {
        return <div>Loading...</div>
    }
    //{ JSON.stringify(data) }

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
                <nav>
                    <div className="nav navbar-nav navbar-right">
                        <p title="Register">Register</p>
                        <a href="" title="Login">
                            Login
                        </a>
                    </div>
                    <div className="container-fluid">
                        <ul className="nav navbar-nav">
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">Courses</a>
                            </li>
                            <li>
                                <a href="">Q&amp;A</a>
                            </li>
                            <li>
                                <a href="">Jobs</a>
                            </li>
                            <li>
                                <a href="">Contests</a>
                            </li>
                        </ul>
                    </div>
                    <form className="navbar-form navbar-right" action="/action_page.php">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search" />
                            <div className="input-group-btn">
                                <button className="btn btn-default" type="submit">
                                    <i className="glyphicon glyphicon-search"></i>
                                </button>
                                <i className="glyphicon glyphicon-search"></i>
                            </div>
                            <i className="glyphicon glyphicon-search"></i>
                        </div>
                        <i className="glyphicon glyphicon-search"></i>
                    </form>
                </nav>
                <i className="glyphicon glyphicon-search">
                    <nav>
                        <div className="container-fluid">
                            <ul className="nav navbar-nav">
                                <li>
                                    <a href="">Arrays</a>
                                </li>
                                <li>
                                    <a href="">Data Structures</a>
                                </li>
                                <li>
                                    <a href="">Interview Preparation</a>
                                </li>
                                <li>
                                    <a href="">Data Science</a>
                                </li>
                                <li>
                                    <a href="">C</a>
                                </li>
                                <li>
                                    <a href="">Python</a>
                                </li>
                            </ul>
                        </div>
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
                                <li className="media">
                                    <div className="media-body">
                                        <h5 className="mt-0 mb-2 font-weight-bold">User: Anna Smith</h5>
                                        <div>
                                            Comment: Cras sit amet nibh libero, in gravida nulla. Nulla
                                            vel metus scelerisque ante sollicitudin. Cras purus odio,
                                            vestibulum in vulputate at, tempus viverra turpis. Fusce
                                            condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                                            congue felis in faucibus.
                                        </div>
                                        <div>Date: </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="grid gap-0 row-gap-3">
                                <div className="p-1 g-col-6">
                                    <button type="button" className="btn btn-success btn-rounded">
                                        Crear comentario
                                    </button>
                                </div>
                                <div className="p-1 g-col-6">
                                    <button type="button" className="btn btn-warning btn-rounded">
                                        Editar comentario
                                    </button>
                                </div>
                                <div className="p-1 g-col-6">
                                    <button type="button" className="btn btn-danger btn-rounded">
                                        Eliminar comentario
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </i>
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
        </>
    )
}

// This function gets called at build time
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:8080/comments`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}



export default HomePage
