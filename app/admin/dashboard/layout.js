import 'bootstrap/dist/css/bootstrap.min.css';
import Adminheader from './adminheader';
import {Container,Row,Col} from 'react-bootstrap';
import adm from './admin.module.css'
import Footer from './footer'
import Navs from './navs';

export default function Layout({children}){
    return(
        <>
       <Adminheader/>
       <Container fluid>
        <Row>
            <Col lg={2} className={adm.aside}>
    <Navs/>
            
            </Col>
            <Col lg={9} className="ml-3">
            {children}
            </Col>
        </Row>
      </Container>
                 
      <Footer/>
        
        </>
    )
}