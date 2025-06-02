import { useState } from 'react';

export function FormularioCodigoPromo() {
  const [codigo, setCodigo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const aplicarCodigo = (e) => {
    e.preventDefault();

    // Simula verificación del código
    if (codigo.trim().toLowerCase() === 'descuento10') {
      setMensaje('✅ Código aplicado: 10% de descuento.');
    } else {
      setMensaje('❌ Código no válido.');
    }
  };

  return (
    <form onSubmit={aplicarCodigo} className="mb-4">
      <div className="mb-2">
        <label htmlFor="codigo" className="form-label">
          ¿Tienes un código promocional?
        </label>
        <div className="input-group">
          <input
            type="text"
            id="codigo"
            className="form-control"
            placeholder="Ingresa tu código"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Aplicar
          </button>
        </div>
      </div>
      {mensaje && (
        <div className="form-text">
          {mensaje}
        </div>
      )}
    </form>
  );
}
