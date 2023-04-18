import { Link } from "react-router-dom";
export default function Navbar() {
    return (<>
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link active" to="/about" >About </Link>
                    <Link className="nav-item nav-link active" to="/contact" >Contact </Link>
                    <Link className="nav-item nav-link active" to="/admin" >Admin</Link>
                </div>
            </div>
        </nav>
    </>);
}