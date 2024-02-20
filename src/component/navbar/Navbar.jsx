import style from  './Navbar.module.css';

function Navbar({count,age , children}){
    return ( 
        <>
        <div className={style.container}>
        <h2>REACT</h2>
        <nav className={style.flexNav}>
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Content</a>
        </nav>
        </div>
        </>
        )
    
    
}

export default Navbar