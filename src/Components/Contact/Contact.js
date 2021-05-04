import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_7wgu6zm', 'template_5wdr13y', e.target, 'user_zNt4BDPQIxJaFxee4D10f')
            .then((result) => {

            }, (error) => {
            });

        e.target.reset();
        alert('Email sent successfully');
    }


    return (
        <div id="page">

            <div id="main" className="site-main">

                <section id="contact" style={{textAlign: 'center'}}>
                    <div className="section-container">

                        <div className="page-heading">
                            <h2 style={{marginTop: "55px", textAlign: "center"}}>Contact with Me</h2>
                        </div>

                        <div className="row mb-70">
                            <div className="col-lg-8  offset-lg-2">
                                <div className="subheading">
                                    <h4 style={{marginTop: "20px"}}>Let's Talk</h4>
                                </div>

                                <form style={{marginTop: "20px"}} onSubmit={sendEmail}>
                                    <div className="row">


                                        <div className="col-md-6 mb-50">
                                            <span className="input">
                                                <label style={{marginRight:'20px'}} htmlFor="cf-name">Name</label>
                                                <input required className="input__field cf-validate" type="text" id="cf-name" name="name" />
                                            </span>
                                        </div><br/>

                                        <div className="col-md-6 mb-50">
                                            <span className="input">
                                                <label style={{marginRight:'20px'}} htmlFor="cf-email">Email</label>
                                                <input required className="input__field cf-validate" type="email" id="cf-email" name="email" />
                                            </span>
                                        </div><br/>

                                        <div className="col-md-12 mb-50">
                                            <span className="input">
                                                <label style={{marginRight:'8px'}} htmlFor="cf-subject">Subject</label>
                                                <input required className="input__field" type="text" id="cf-subject" name="subject" />
                                            </span>
                                        </div><br/>

                                        <div className="col-md-12 mb-30">
                                            <span className="input">
                                                <label style={{marginRight:'20px'}} htmlFor="cf-message" name="message">Write Message:</label>
                                                <textarea required className="input__field" id="cf-message" name="message" rows="5" ></textarea>
                                            </span>
                                        </div><br/><br/>

                                        <div className="alert-container col-md-12"></div>

                                        <div className="col-md-12 text-center">
                                            <button className="btn-main">Send Message</button>
                                        </div>

                                    </div>
                                </form>

                            </div>
                        </div>

                        <div style={{display:'flex', marginTop: '8%', marginBottom: '20%'}}>

                            <div style={{marginLeft:'25%'}}>
                                <span className="icon"><i className="fas fa-paper-plane"></i></span>
                                <h5><a href="mailto:sunjida.promy@gmail.com">sunjida.promy@gmail.com</a></h5>
                            </div>

                            <div style={{marginLeft:'10%'}}>
                                <span className="icon"><i className="fas fa-map-marker-alt"></i></span>
                                <h5>Dhaka, Bangladesh</h5>
                            </div>


                            <div style={{marginLeft:'10%'}}>
                                <span className="icon"><i className="fas fa-phone"></i></span>
                                <h5>(+88) 01516706237</h5>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </div >
    );
};

export default Contact;