export default function CompressionPage() {
    return (
        <>
            <form id="form" className="form">
                <div className="check">
                    <label for="check-box">Carcaça em sentido crescente:</label>
                    <input id="check-box" type="checkbox" />
                </div>
                <div id="carcass-box" className="form-control">
                    <label for="carcass-input">Carcaça total</label>
                    <input type="number" step="0.1" min="0" id="carcass-input" placeholder="Informe a metragem" />
                    <i className="fas fa-exclamation-circle"></i>
                    <i className="fas fa-check-circle"></i>
                    <small>Metragem obrigatória</small>
                </div>
                <div className="form-control">
                    <label for="ref-carcass-input">Carcaça parcial</label
                    ><input type="number" step="0.1" min="0" id="ref-carcass-input" placeholder="Informe a metragem" />
                    <i className="fas fa-exclamation-circle"></i>
                    <i className="fas fa-check-circle"></i>
                    <small>Metragem obrigatória</small>
                </div>
                <div className="form-control">
                    <label for="ref-extrusion-input">Extrusão parcial</label
                    ><input type="number" step="0.1" min="0" id="ref-extrusion-input" placeholder="Informe a metragem" />
                    <i className="fas fa-exclamation-circle"></i>
                    <i className="fas fa-check-circle"></i>
                    <small>Metragem obrigatória</small>
                </div>
                <div className="form-control">
                    <label for="invalid-extrusion-input">Extrusão inválido</label>
                    <input type="number" step="0.1" min="0" id="invalid-extrusion-input" placeholder="Informe a metragem" />
                    <i className="fas fa-exclamation-circle"></i>
                    <i className="fas fa-check-circle"></i>
                    <small>Metragem obrigatória</small>
                </div>
                <button id="button-form" type="submit">Calcular</button>
            </form>
        </>
    )
}