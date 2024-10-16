export default function myHeader({ html }) {
    return html`
    <style>
    :host {
        display: block;
        margin-bottom: 2rem;
        padding-left: 1rem;
        border-left: solid 3px navy;
    }
    ::slotted(*) {
        color: crimson;
    }
        a {
            text-decoration: underline;
            color: cornflowerblue;
        }
    </style>

    <header class="text4">
        <slot name="title">Hello</slot>

        <nav class="text2">
            <a href="/">home</a>
            <a href="/about">about</a>
        </nav>
    </header>
    `
}