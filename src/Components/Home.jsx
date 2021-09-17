import { Link } from "react-router-dom";
import {Card, CardBody, Table} from 'reactstrap'

const Home = (props) => {

  const handleProductsClick = (e) =>{
    if (!localStorage.getItem('user_name') ){
        e.preventDefault()
        alert("Please login to see the products...!!");
    }
  }

  return (
    <>
        <Card className = 'mx-auto my-auto shadow'>
            <CardBody className = 'mx-auto my-auto shadow card-width-height'>
                <Table hover responsive>
                    <tHead>
                        <h3>Select options</h3>
                    </tHead>
                    <tBody>
                        <tr>
                            <td><Link className="LinkToText" to="/products" onClick = {handleProductsClick} >Buy Products</Link></td>
                        </tr>
                        <tr>
                            <td><Link className="LinkToText" to="/login">Login</Link></td>
                        </tr>
                        <tr>
                            <td><Link className="LinkToText" to="/sign_up">Sign-up</Link></td>
                        </tr>
                    </tBody>
                </Table>
            </CardBody>
        </Card>
    </>
  );
}

export default Home;