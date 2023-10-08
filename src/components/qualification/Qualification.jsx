import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
    const [toggle, setToggle] = useState(1);
    const toggleTab = (index) => {
        setToggle(index);
    };

    return (
        <section className='qualification section'>
            <h2 className='section__title'>Qualification</h2>
            <span className='section__subtitle'>My Journey</span>

            <div className='qualification__container container'>
                <div className='qualification__tabs'>
                    <div
                        className={
                            toggle === 1
                                ? "qualification__button qualification-active button--flex"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(1)}
                    >
                        <i className='uil uil-graduation-cap qualification__icon'></i>{" "}
                        Education
                    </div>
                    <div
                        className={
                            toggle === 2
                                ? "qualification__button qualification-active button--flex"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(2)}
                    >
                        <i className='uil uil-briefcase-alt qualification__icon'></i>
                        Experience
                    </div>
                </div>

                <div className='qualification__sections'>
                    <div
                        className={
                            toggle === 1
                                ? "qualification__content qualification__content-active"
                                : "qualification__content"
                        }
                    >
                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>LCMD</h3>
                                <span className='qualification__subtitle'>
                                    Mexico - ITESM
                                </span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calendar-alt'></i>{" "}
                                    2018 - 2023
                                </div>
                            </div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div></div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                            <div>
                                <h3 className='qualification__title'>
                                    Web Development
                                </h3>
                                <span className='qualification__subtitle'>
                                    Mexico - ITESM
                                </span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calendar-alt'></i> Feb
                                    2023 - Aug 2023
                                </div>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>
                                    Web Development
                                </h3>
                                <span className='qualification__subtitle'>
                                    Oracle Next Education
                                </span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calendar-alt'></i> Feb
                                    2023 - Oct 2023
                                </div>
                            </div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div></div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                            <div>
                                <h3 className='qualification__title'>
                                    Three.js Course
                                </h3>
                                <span className='qualification__subtitle'>
                                    by Bruno Simon
                                </span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calendar-alt'></i> Aug
                                    2023 - Present
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={
                            toggle === 2
                                ? "qualification__content qualification__content-active"
                                : "qualification__content"
                        }
                    >
                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>
                                    Web Development
                                </h3>
                                <span className='qualification__subtitle'>
                                    Personal Portfolio
                                </span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calendar-alt'></i>{" "}
                                    2022 - Present
                                </div>
                            </div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div></div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                            <div>
                                <h3 className='qualification__title'>
                                    Web Design
                                </h3>
                                <span className='qualification__subtitle'>
                                    Advantgard
                                </span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calendar-alt'></i> Mar
                                    2023 - Present
                                </div>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>
                                    Web Development
                                </h3>
                                <span className='qualification__subtitle'>
                                    Oregon
                                </span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calendar-alt'></i>{" "}
                                    2023
                                </div>
                            </div>
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;
