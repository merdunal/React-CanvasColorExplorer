import colorNames from 'colornames'

const Input = ({ colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="input">Input</label>
            <input
                id="input"
                type="text"
                placeholder="color name"
                autoFocus
                required
                value={colorValue}
                onChange={(e) => {
                    setColorValue(e.target.value)
                    setHexValue(colorNames(e.target.value))
                }}
            ></input>
            <button
                type='button'
                onClick={() => setIsDarkText(!isDarkText)}
            >Toggle Text Color</button>
        </form>
    )
}

export default Input