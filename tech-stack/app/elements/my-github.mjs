export default function myGithub ({ html, state }) {
    const { persoon: { data } } = state.store;
    
    return html`
    <style>
        :host {
            display: block;
            margin-bottom: 2rem;
            padding-left: 1rem;
        }
        pre {
            white-space: pre-line;
        }
    </style>
    
    <pre>
        Username: ${data.github_handle} 
        Github: <a href="https://github.com/${data.github_handle}" target="_blank">github.com/${data.github_handle}</a>
        Website: <a href="${data.website}" target="_blank">${data.website}</a>
    </pre>
    `
}