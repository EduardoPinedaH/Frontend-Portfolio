import React, { useState } from "react";
import "./services.css";

const Services = () => {
    const [toggle, setToggle] = useState(0);
    const toggleTab = (index) => {
        setToggle(index);
    };
    return (
        <section className='services section' id='services'>
            <h2 className='section__title'>Services</h2>
            <span className='section__subtitle'>What I offer</span>
            <div className='services__container container grid'>
                <div className='services__content'>
                    <div>
                        <i className='uil uil-cube services__icon'></i>
                        <h3 className='services__title'>
                            3D <br /> Designer
                        </h3>
                    </div>

                    <span
                        className='services__button'
                        onClick={() => toggleTab(1)}
                    >
                        View More
                        <i className='uil uil-arrow-right services__button-icon'></i>
                    </span>

                    <div
                        className={
                            toggle === 1
                                ? "services__modal active-modal"
                                : "services__modal"
                        }
                    >
                        <div className='services__modal-content'>
                            <i
                                className='uil uil-times services__modal-close'
                                onClick={() => toggleTab(0)}
                            ></i>
                            <h3 className='services__modal-title'>
                                3D Designer
                            </h3>
                            <p className='services__modal-description'>
                                Creating creative design that matches your
                                needs. Providing quality work to clients and
                                companies..
                            </p>

                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        I develop the user interface.
                                    </p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Web page development.
                                    </p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        I create ux element interactions.
                                    </p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        3D Web designs and graphic elements.
                                    </p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Creative design that matches your needs.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='services__content'>
                    <div>
                        <i className='uil uil-arrow services__icon'></i>
                        <h3 className='services__title'>
                            UI/UX <br /> Designer
                        </h3>
                    </div>

                    <span
                        className='services__button'
                        onClick={() => toggleTab(2)}
                    >
                        View More
                        <i className='uil uil-arrow-right services__button-icon'></i>
                    </span>

                    <div
                        className={
                            toggle === 2
                                ? "services__modal active-modal"
                                : "services__modal"
                        }
                    >
                        <div className='services__modal-content'>
                            <i
                                className='uil uil-times services__modal-close'
                                onClick={() => toggleTab(0)}
                            ></i>
                            <h3 className='services__modal-title'>
                                UI/UX Designer
                            </h3>
                            <p className='services__modal-description'>
                                Creating creative design that matches your
                                needs. Providing quality work to clients and
                                companies..
                            </p>

                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        I develop the user interface.
                                    </p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Web page development.
                                    </p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        I create ux element interactions.
                                    </p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        3D Web designs and graphic elements.
                                    </p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Creative design that matches your needs.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='services__content'>
                    <div>
                        <i className='uil uil-edit services__icon'></i>
                        <h3 className='services__title'>
                            Visual <br /> Designer
                        </h3>
                    </div>

                    <span
                        className='services__button'
                        onClick={() => toggleTab(3)}
                    >
                        View More
                        <i className='uil uil-arrow-right services__button-icon'></i>
                    </span>

                    <div
                        className={
                            toggle === 3
                                ? "services__modal active-modal"
                                : "services__modal"
                        }
                    >
                        <div className='services__modal-content'>
                            <i
                                className='uil uil-times services__modal-close'
                                onClick={() => toggleTab(0)}
                            ></i>
                            <h3 className='services__modal-title'>
                                Visual Designer
                            </h3>
                            <p className='services__modal-description'>
                                Creating creative design that matches your
                                needs. Providing quality work to clients and
                                companies..
                            </p>

                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        I develop the user interface.
                                    </p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Web page development.
                                    </p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        I create ux element interactions.
                                    </p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        3D Web designs and graphic elements.
                                    </p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>
                                        Creative design that matches your needs.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
