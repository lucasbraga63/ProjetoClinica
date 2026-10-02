const header = document.querySelector('header')

function GerarMenu() {
    header.innerHTML = `
    
      <div class="logo">
            <img src="assets/Logo.png" alt="logo">
        </div>

        <div class="links">
            <nav>
                <ul>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Sobre</a></li>
                    <li><a href="">Historicos</a></li>
                </ul>
            </nav>
        </div>

        <div class="botoes">
         <button>Marque uma consulta</button>
        </div>
    `
}

GerarMenu()