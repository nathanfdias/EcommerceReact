import './style.css'

export const LayoutLogin = (props) => {
    return (
        <div className="container">
            <div className="container-login">
                <div className="wrap-login">
                    {props.children}
                </div>
            </div>
        </div>
    )
}