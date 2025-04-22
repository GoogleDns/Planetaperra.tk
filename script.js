// Función para mostrar/ocultar formulario de transferencia
function mostrarFormularioTransferencia() {
  var formulario = document.getElementById('formulario-transferencia');
  formulario.style.display = (formulario.style.display == 'block') ? 'none' : 'block';
}
// Agregar evento click al botón de transferencia
document.getElementById('btn-transferir').addEventListener('click', mostrarFormularioTransferencia);
// Validar formulario de transferencia
function validarFormularioTransferencia() {
  var senderAddress = document.getElementById('sender_address').value;
  var receiverAddress = document.getElementById('receiver_address').value;
  var amount = document.getElementById('amount').value;
  if (senderAddress == '' || receiverAddress == '' || amount == '') {
    alert('Por favor, complete todos los campos.');
    return false;
  }
  return true;
}
// Agregar evento submit al formulario de transferencia
document.getElementById('formulario-transferencia').addEventListener('submit', function(event) {
  if (!validarFormularioTransferencia()) {
    event.preventDefault();
  }
});
// Mostrar mensaje de éxito al transferir bitcoins
function mostrarMensajeExito() {
  var mensajeExito = document.getElementById('mensaje-exito');
  mensajeExito.style.display = 'block';
  setTimeout(function() {
    mensajeExito.style.display = 'none';
  }, 5000);
}
// Agregar evento click al botón de transferir para mostrar mensaje de éxito
document.getElementById('btn-transferir').addEventListener('click', mostrarMensajeExito);