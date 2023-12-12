import ironhacklogo from '../images/ironhacklogo.png';

function Navbar() {
    return (
        <div className='navBar'>
            <h1>Ironhack Market</h1>
            <img src={ironhacklogo} alt='Ironhack Logo' />
        </div>
    );
}

export default Navbar;
