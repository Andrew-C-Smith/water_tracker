import UserContext from "../context/UserContext";


const Header = () => {

    return (
        <>
            <UserContext.Consumer>      
                {({name}) => {return <h1>{name}🖖</h1>}}                   
            </UserContext.Consumer>  
        </>
    )
}

export default Header;
