import '../styles/BotonClear.css'


export const BotonClear = (props) => (
    <div className="boton-clear" onClick={props.clear}>
        {props.children}
    </div>
)