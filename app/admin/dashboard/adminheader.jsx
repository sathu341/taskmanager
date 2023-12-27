'use client'
import { Container,Navbar, Row,Col } from "react-bootstrap"
export default function Adminheader(){
    return(
        <>
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        </Container>
      </Navbar>
      
        
        </>
    )
}