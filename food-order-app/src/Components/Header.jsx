import foodLogo from '../assets/logo.jpg'

function Header(){
    return(
        <header id="main-header">
            <div id="title">
                <img src={foodLogo} alt="logo" />
                <h1>ByteFood</h1>
            </div>
            <nav>
                <button>Cart(0)</button>
            </nav>
        </header>
    )
}
export default Header;