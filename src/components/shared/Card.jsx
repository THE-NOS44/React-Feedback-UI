import PropTypes from 'prop-types'


function Card({children, reverse}) {

     //conditional styling using whole class
 // return (<div className={`card ${reverse && 'reverse'}`}>{children}</div>)

    // conditional styling using conditions on props
 return <div className="card" 
        style={{
            backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
            color: reverse ? '#fff' : '#000',
    }}>{children}</div>

}

Card.defaultProps = {
    reverse: false,
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}

export default Card
