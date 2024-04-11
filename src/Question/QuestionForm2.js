import React from 'react'
import ImageCompo from '../ImageCompo'
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const QuestionForm2 = () => {
    return (
        <div>
            <div className='image-main'>

                <ImageCompo />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12  form2col">
                        <div className='form2uppper'>
                            <div className='num'>1</div><span className='hrtext'>Goal</span><hr className='hline' />
                            <div className='num'>2</div> <span className='hrtext'>Feature List</span><hr className='hrlinee' />
                            <div className='num'>3</div><span className='hrtext'>Contact Range</span>
                        </div>
                        <div className='form2down'>

                            <h1 style={{ fontSize: "30px", fontWeight: '600' }}>What are the most important features
                                do you need for your business?</h1>
                            <p className='form1pa'>We will use your answers to guide you once you're in the app. Select all that apply.</p>

                            <br />


                            <Form>
                                <div key={'vertical-radio'} className="mb-3 leftcheckbox">
                                    <div >
                                        <div className='formcheckbtn'>
                                            <Form.Check
                                                type="checkbox"
                                                label="Email Templates"
                                                id="checkbox-1"
                                                style={{ fontSize: "18px" }}
                                            />
                                        </div>
                                        {/* <br /> */}
                                        <div className='formcheckbtn'>
                                            <Form.Check
                                                type="checkbox"
                                                label="SMS Marketing"
                                                id="checkbox-1"
                                                style={{ fontSize: "18px" }}

                                            />
                                        </div>
                                        {/* <br /> */}
                                        <div className='formcheckbtn'>
                                            <Form.Check
                                                type="checkbox"
                                                label="Forms & Landing Pages"
                                                id="checkbox-1"
                                                style={{ fontSize: "18px" }}

                                            />
                                        </div>
                                        <div className='formcheckbtn'>
                                            <Form.Check
                                                type="checkbox"
                                                label="CRM"
                                                id="checkbox-1"
                                                style={{ fontSize: "18px" }}

                                            />
                                        </div>

                                    </div>
                                    <div className='rightcheckbox'>
                                        <div className='formcheckbtn'>
                                            <Form.Check
                                                type="checkbox"
                                                label="CRM"
                                                id="checkbox-1"
                                                style={{ fontSize: "18px" }}

                                            />
                                        </div>

                                        <div className='formcheckbtn'>
                                            <Form.Check
                                                type="checkbox"
                                                label="CRM"
                                                id="checkbox-1"
                                                style={{ fontSize: "18px" }}

                                            />
                                        </div>
                                    </div>

                                </div>
                                <Link to='#' className='form2skipbtn'>Skip <div className='form2skipbottomline'></div> </Link>

                                <Button variant="primary" className='form1nextbtn btn-md' type="submit">
                                    Next
                                </Button>
                            </Form>



                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionForm2
