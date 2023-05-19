export default function Input() {
    return (
        <div id="carcass-box" className="form-control">
            <label htmlFor="carcass-input">Carcaça total</label>
            <input type="number" step="0.1" min="0" id="carcass-input" placeholder="Informe a metragem" />
            <i className="fas fa-exclamation-circle"></i>
            <i className="fas fa-check-circle"></i>
            <small>Metragem obrigatória</small>
        </div>
    )
}