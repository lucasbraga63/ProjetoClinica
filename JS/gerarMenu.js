const header = document.querySelector('header')

function GerarMenu() {
    header.innerHTML = `
    
      <div class="logo">
            <img src="assets/Logo.png" alt="logo">
        </div>

        <div class="links">
            <nav>
                <ul>
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="servicos.html">Serviços</a></li>
                    <li><a href="solicitarServico.html">Solicitar serviço</a></li>
                </ul>
            </nav>
        </div>

        <div class="botoes">
         <button>Marque uma consulta</button>
        </div>
    `
}

GerarMenu()