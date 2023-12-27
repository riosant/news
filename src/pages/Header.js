import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from "next/link";
import {useRouter} from "next/router";

const Header = () => {

    const router = useRouter();
    const category = router?.query?.category || "general";

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Rio News</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        <Link className={`navLink ${category === "business" && "active"}`}
                              href="/category/business">Business</Link>
                        <Link className={`navLink ${category === "entertainment" && "active"}`}
                              href="/category/entertainment">Entertainment</Link>
                        <Link className={`navLink ${category === "general" && "active"}`}
                              href="/category/general">General</Link>
                        <Link className={`navLink ${category === "health" && "active"}`}
                              href="/category/health">Health</Link>
                        <Link className={`navLink ${category === "science" && "active"}`}
                              href="/category/science">Science</Link>
                        <Link className={`navLink ${category === "sports" && "active"}`}
                              href="/category/sports">Sports</Link>
                        <Link className={`navLink ${category === "technology" && "active"}`}
                              href="/category/technology">Technology</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
