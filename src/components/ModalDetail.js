import React from 'react';

// import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalDetail = ({ handleShow, detail, show, handleClose }) => {

    const { abv, contributed_by, name, description, ph, srm, food_pairing, ingredients, tagline, image_url } = detail
    const ingredient = ingredients.hops //hops data

    return (
        <>
            <Button variant="outline-success" className='fw-bold m-2' onClick={() => handleShow()}>
                click here for beer details
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='d-flex justify-content-center'>
                        <img variant="top" className='p-3' alt='beer' style={{ aspectRatio: 1 / 1, objectFit: 'contain', height: '180px' }} src={image_url} />
                    </div>
                    <h4>ABV:{abv}%</h4>
                    <div className='d-flex gap-4'>
                        <>Ph: {ph}</>
                        <>Srm: {srm}</>
                    </div>
                    <div>
                        <p>Contributed By: {contributed_by.slice(0, 10)}</p>
                        <p><span className='fw-bold fs-6'>Punk API Comment: </span>{description.slice(0, 200)}</p>
                    </div>
                    <hr />
                    <div>
                        Food Pair:
                        {
                            food_pairing.map((pair, idx) => <li key={idx}>{pair}</li>)
                        }
                    </div>
                    <div>
                        <hr />
                        <>
                            <p className='fw-bold m-0'>Hops:</p>
                            {
                                ingredient.map((list, idx) => <p
                                    className='m-0'
                                    key={idx}
                                ><span className='fw-semibold'>Name: </span>{list.name},
                                    <span className='fw-semibold'> Attribute: </span> {list.attribute},
                                    <span className='fw-semibold'> | {list.amount.value} </span>  {list.amount.unit}
                                </p>)
                            }
                        </>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <p className='fw-bold'>Tagline: {tagline}</p>
                </Modal.Footer>
            </Modal>
        </ >
    );
};

export default ModalDetail;