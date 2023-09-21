import Card from 'react-bootstrap/Card';
import ModalDetail from './ModalDetail';
import { useState } from 'react';


const CardDetail = ({ detail }) => {

    const [show, setShow] = useState(false); //useState for modal close
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { image_url, name, tagline, first_brewed, id } = detail //data as props & destructure


    return (
        <div className="col-lg-3 col-md-4 w-auto m-3 d-flex justify-content-center ">
            <Card style={{ width: '19rem', boxShadow: "1px 1px 1px 0 rgba(0, 200, 0, 0.3)" }} >
                <Card.Img
                    variant="top"
                    className='p-3'
                    style={{ aspectRatio: 1 / 1, objectFit: 'contain' }}
                    src={image_url} />

                <Card.Body>
                    <Card.Title >{name.slice(0, 20)} <span style={{ color: "rgb(200, 0, 0)", fontSize: '18px' }}>id: {id}</span></Card.Title>
                    <Card.Text >
                        <><i>"{tagline.slice(0, 29)}"</i></>
                        <><small
                            className='d-block'
                            style={{ marginLeft: "10px" }}
                        ><span className='fw-semibold'>Est.</span>{first_brewed}
                        </small></>
                    </Card.Text>

                    {/* Component for Modal open  */}
                    <div className='d-flex justify-content-center'>
                        <ModalDetail
                            detail={detail}
                            show={show}
                            handleShow={handleShow}
                            handleClose={handleClose}
                        ></ModalDetail>
                    </div>
                </Card.Body>
            </Card>
        </div >
    );
};

export default CardDetail;