import PropTypes from 'prop-types'


function Header({text}) {
  
    return (
    <header>
    <div className="container">
        
        <h1 style={{color:"#ff6a95"}}>{text}</h1>
       
    
    </div>
    </header>
   
  )
}
Header.defaultProps={
    text:'Feedback UI',

}
Header.propTypes={
    text:PropTypes.string,
}

export default Header
