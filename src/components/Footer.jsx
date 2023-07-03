import React, { useState } from "react";

export default function Footer() {
    const [year] = useState(new Date().getFullYear());
    
    return (
        <footer
            className="footer--container xl:max-w-[80rem] 2xl:max-w-[100rem] lg:mx-auto"
            id="footer">

            <div className=" lg:flex lg:flex-row-reverse lg:justify-between lg:items-center">
                <div className="flex justify-center gap-4 mt-5">
                    <a
                        href="https://github.com/Miguelaeb"
                        target="_blank"
                        rel="noreferrer">
                        <i className="fa-brands fa-github text-xl hover:text-primary-blue"></i>
                    </a>
                    <a
                        href="https://twitter.com/Miguel_Studded"
                        target="_blank"
                        rel="noreferrer">
                        <i className="fa-brands fa-twitter text-xl hover:text-primary-blue"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/miguel-evangelista-8458b9150/"
                        target="_blank"
                        rel="noreferrer">
                        <i className="fa-brands fa-linkedin-in text-xl hover:text-primary-blue"></i>
                    </a>
                    <a
                        href="https://instagram.com/miguel_aeb?igshid=NTc4MTIwNjQ2YQ=="
                        target="_blank"
                        rel="noreferrer">
                        <i className="fa-brands fa-instagram text-xl hover:text-primary-blue"></i>
                    </a>
                </div>

                <p className=" font-Raleway text-center text-lg my-5">
                    © <span> {year} </span>
                    <a
                        href="https://github.com/Miguelaeb"
                        target="_blank"
                        rel="noreferrer"
                        className=" text-primary-blue hover:text-black">
                        Miguel Evangelista™{" "}
                    </a>
                    All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}
