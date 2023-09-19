import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Form, FormControl, Button } from 'react-bootstrap';


const SearchForm = ({ handleSearchChange, handleSubmit }) => {

    return (
        <div className='d-flex justify-content-center'>
            <div className='gap-3 mx-auto my-5 d-flex  flex-column  w-50'>
                <Form className='w-100' style={{ forcedColorAdjust: '#007bff' }}>
                    <FormControl
                        type="text"
                        placeholder="Type Beer Name Here"
                        name='search'
                        className="mr-sm-2 fw-semibold"
                        style={{
                            height: '50px',
                            borderColor: '#198754',
                            borderWidth: '1px',
                            forcedColorAdjust: '#007bff',
                            backgroundColor: '#f2f2f2'
                        }}
                        onChange={handleSearchChange}
                    />
                </Form>
                <Button
                    onClick={handleSubmit}
                    type="submit"
                    className='mx-auto fw-semibold'
                    style={{
                        width: "100px",
                        height: "100px",
                        padding: "13px 18px",
                        borderRadius: "60px",
                        borderWidth: '2px',
                        fontSize: "15px",
                        textAlign: "center"
                    }}
                    variant="outline-success"
                >
                    Pick Random one
                </Button>
            </div>
        </div>
    );
};

export default SearchForm;
