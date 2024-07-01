import React from 'react';
import Navbar from '../assets/ts/navbar.tsx';
import '../assets/scss/homepage.scss';

const HomePage: React.FC = (): React.JSX.Element => {
    return (
        <section id="home">
            <Navbar />
            <div>
                <h1>Homepage</h1>
            </div>
            <p>nomnom content nyehehehe</p>
        </section>
    )
}

export default HomePage;