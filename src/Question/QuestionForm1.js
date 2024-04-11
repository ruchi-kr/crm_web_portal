import React, { useState, useEffect } from 'react'
import ImageCompo from '../Question/ImageCompo'
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const QuestionForm1 = () => {
    const [formdata1, setFormData1] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            const response = await axios.get('https://intileo-tech.info/api/admin/question/index');
            console.log(response.data.data.questions)
            setFormData1(response.data.data.questions);
            console.log(formdata1)
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    const submitform1 = async () => {

    }

    return (
        <div>
            <div className='image-main'>

                <ImageCompo />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12  form1col">
                        <Form onSubmit={submitform1}>

                            <div className='uppper'>
                                <div className='num'>1</div><span className='hrtext'>Goal</span><hr className='hline' />
                                <div className='num'>2</div> <span className='hrtext'>Feature List</span><hr className='hrlinee' />
                                <div className='num'>3</div><span className='hrtext'>Contact Range</span>
                            </div>
                            <div className='formdown'>

                                <h1 style={{ fontSize: "30px", fontWeight: '600' }}>What's your top goal with Portal Name?</h1>
                                <p className='form1pa'>We will help you getting started with personalised recommendations based on your focus.</p>

                                <br />


                                <div key={'vertical-radio'} className="mb-3">
                                    <div className='radiobtn'>
                                        <Form.Check
                                            inline
                                            label="Drive sales, revenue, or conversions"
                                            name="group1"
                                            type={'radio'}
                                            id={`inline-radio-1`}
                                        />
                                    </div>
                                    <br />
                                    <div className='radiobtn'>
                                        <Form.Check
                                            inline
                                            label="Send emails people find helpful or entertaining"
                                            name="group1"
                                            type={'radio'}
                                            id={`inline-radio-2`}
                                        />
                                    </div>
                                    <br />
                                    <div className='radiobtn'>
                                        <Form.Check
                                            inline
                                            label="Grow my list of email subscribers"
                                            name="group1"
                                            type={'radio'}
                                            id={`inline-radio-3`}
                                        />
                                    </div>
                                </div>
                                <Link to='#' className='form1skipbtn'>Skip <div className='form1skipbottomline'></div> </Link>

                                <Button variant="primary" className='form1nextbtn btn-md' type="submit">
                                    Next
                                </Button>
                            </div>
                        </Form>



                    </div>

                </div>
            </div>
        </div>

    )
}

export default QuestionForm1
