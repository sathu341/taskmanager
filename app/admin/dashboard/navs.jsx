'use client'
import Nav from 'react-bootstrap/Nav';

function Navs() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/admin">Home</Nav.Link>
      <Nav.Link eventKey="" href="/admin/product">Product</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav>
  );
}

export default Navs;