import './styles.css';

function StepsHeader() {
    return (
        <header className="orders-steps-container">
            <div className="orders-steps-content">
                <h1 className="steps-title">
                    Siga <br /> as etapas
                </h1>
                <ul className="steps-items">
                    <li>
                        <span className="steps-number">1 
                            Selecione os produtos e localização.
                        </span>
                    </li>
                    <li>
                        <span className="steps-number"> 2 
                            Depois clique em <strong>"ENVIAR PEDIDO"</strong>
                        </span>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default StepsHeader;