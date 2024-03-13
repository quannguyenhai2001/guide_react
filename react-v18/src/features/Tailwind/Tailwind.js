import React from 'react'
import './Tailwind.styles.css'
import Stew from "../../assets/imgs/tailwind/stew.jpg"
const Tailwind = () => {
    return (
        <div className='text-yellow-400 text-mamo'>
            <div>
                <nav>
                    <div>
                        <h1>
                            <a href="/">Food Ninja</a>
                        </h1>
                    </div>
                    <ul>
                        <li>
                            <a href="#">
                                <span>Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>About</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Contact</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <main>
                <div>
                    <a href="#">Log in</a>
                    <a href="#">Sign up</a>
                </div>

                <header>
                    <h2 className='card'>Recipes</h2>
                    <h3>For Ninjas</h3>
                </header>

                <div>
                    <h4>Latest Recipes</h4>

                    <div>

                        <div>
                            <img src={Stew} alt="stew" />
                            <div>
                                <span>5 Bean Chili Stew</span>
                                <span>Recipe by Mario</span>
                            </div>
                        </div>
                    </div>

                    <h4>Most Popular</h4>

                    <div>

                    </div>
                </div>

                <div>
                    <div>Load more</div>
                </div>
                <div className="bg-blue-500 inline-block ml-2 hover:bg-red-500 transition duration-300 ease-in-out p-4 rounded-lg">
                    Hover me
                </div>
            </main>
        </div >
    );
};

export default Tailwind; 