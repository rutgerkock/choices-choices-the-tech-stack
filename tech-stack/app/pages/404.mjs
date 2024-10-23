export default function FourOhFour({ html, state }) {
  const { error } = state.attrs;
  console.log(error)
  
  return html`
    <style>
      main {
        background-color: dodgerblue;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #FFFFFF;
        font-family: sans-serif;
        text-align: center;
      }
      
      main h1 {
        font-size: 3rem;
        margin: 1rem;
      }
      
      main p {
        font-size: 1rem;
        color: #D3D3D3;
      }

      a {
        margin-top: 1rem;
        font-size: 1.2rem;
        color: #FFFFFF;
        text-decoration: underline;
      }

      a:hover {
        text-decoration: none;
      }
    </style>

    <main>
      <h1>Pagina niet gevonden :&#40;</h1>
      <p>${error && error}</p>
      <a href="/about">Terug naar de about</a>
    </main>
  `;
}