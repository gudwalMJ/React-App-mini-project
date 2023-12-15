import { Link } from 'react-router-dom';
import Carina from '../images/CarinaFrança.jpeg';
import Josip from '../images/Josip.png';

const AboutPage = () => {
    return (
        <div className='about-page'>
            {' '}
            <h1 className='welcome-text'> Welcome to IronHack Market </h1>
            <h3>Information about the team members:</h3>
            <ul className='team-members'>
                <li>
                    <img
                        src={Carina}
                        alt='photo-carina'
                        className='photo-carina'
                    />
                    <br />
                    <p>
                        <strong>Carina França</strong> I&apos;m Brazilian living
                        in Portugal, I&apos;m 28 years old, with a background in
                        pharmacy, I&apos;m changing careers to IT and really
                        enjoying the process.{' '}
                        <p>
                            You can check my GitHub profile{' '}
                            <Link to='https://github.com/settings/profile'>
                                here{' '}
                            </Link>
                            and my Linkedin profile
                            <Link to='#'> here</Link>
                        </p>
                    </p>
                </li>
                <li>
                    {' '}
                    <img
                        src={Josip}
                        alt='Photo Josip'
                        className='Photo-Josip'
                    />
                    <strong>Josip Lastname</strong> <p>{/* some text */}</p> You
                    can check my GitHub profile
                    <Link to='https://github.com/gudwalMJ'>here </Link>and my
                    Linkedin profile
                    <Link to='#'> here</Link>
                </li>
            </ul>
        </div>
    );
};

export default AboutPage;
