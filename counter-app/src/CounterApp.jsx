import PropTypes from 'prop-types'

export const CounterApp = ({ value }) => {
    
    const handleAdd = () => {
        console.log('+1')
    }
    
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ value }</h2>

            <button onClick={ handleAdd }>
                +1
            </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}