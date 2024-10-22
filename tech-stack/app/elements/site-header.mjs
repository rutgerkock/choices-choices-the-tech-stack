export default function SiteHeader({ html }) {
    return html`
        <style>
            :host {
                position: fixed;
                width: 100%;
                z-index: 999; 
                top: 0;
                left: 0;
                transition: background-color 0.3s ease;
            }

            nav {
                display: flex;
                align-items: center;
                height: 7rem;
                padding: 1rem 2.5rem;
                background-color: transparent; 
                transition: background-color 0.3s ease; 
                width: 100%;
            }

			.dropdown {
				display: flex;
				justify-content: space-between;
				width: 100%;
			}

            .logo {
                display: block;
                width: 5rem; 
                height: 5rem; 
                background-image: url('/_public/img/Logo.svg');
                background-repeat: no-repeat;
                background-position-y: center;
                transition: background-image 0.3s ease;
                z-index: 999;
                position: relative;
            }

            input[type=checkbox] {
                display: none;
            }

            .menu-icon {
                width: 2.5rem;
                height: 3.5rem;
                background-image: url('/_public/img/open-menu.svg');
                background-size: 2.5rem 3.5rem;
                background-repeat: no-repeat;
                cursor: pointer;
                transition: background-image 0.3s ease;
                margin-left: auto;
            }

            label {
                position: relative;
                z-index: 999;
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 85vw; 
                cursor: pointer; 
            }

            input[type=checkbox]:checked + label .menu-icon {
                background-image: url('/_public/img/close-menu.svg');
            }

            input[type=checkbox]:checked + label .logo {
                background-image: url('/_public/img/Logo-green.svg');
            }

            input[type=checkbox]:checked ~ ul {
                opacity: 1;
                transform: translateY(0);
            }

            /* Mobile styles */
            ul {
                list-style: none;
                opacity: 0; 
                transform: translateY(-20px); 
                transition: opacity 0.3s ease, transform 0.3s ease;
                position: absolute; 
                top: 0; 
                left: 0;
                right: 0; 
                background: #f9e9c2;
                padding: 0 1rem 3rem 1rem; 
                z-index: 998; 
                height: 100vh;
                overflow-y: auto; 
                padding-top: 7rem;
            }

            ul li {
                padding: 0.5em 0;
                margin: 2rem 0;
                border-bottom: 2px solid #4e7141;
            }

            ul li a {
                color: #4e7141;
                text-decoration: none;
                font-family: 'Poppins-Black', sans-serif;
                font-size: 2rem;
            }

			a {
				transition: 0.3s ease;
			}

			a:hover {
				color: #ff8d06;
			}

            /* Desktop styles */
            @media (min-width: 768px) {

				label {
					width: min-content;
				}

                .menu-icon {
                    display: none;
                }

                ul {
					background-color: transparent;
                    position: relative; 
                    display: flex;
					flex-direction: row;
                    opacity: 1;
					height: 5rem;
					align-items: center;
                }

                ul li {
                    margin: 0 1rem;
					border: none;
                }

                ul li a {
                    font-size: 1.5rem;
					color: white;
                }
            }
        </style>

        <nav>
            <div class="dropdown">
                <input type="checkbox" id="checkbox_toggle" aria-label="Toggle navigation">
                <label for="checkbox_toggle">
                    <a href="/" class="logo" aria-label="Home"></a>
                    <span class="menu-icon" aria-hidden="true"></span>
                </label>
                <ul>
                    <li><a href="/kaas">Stekjes</a></li>
                    <li><a href="#">Zaden</a></li>
                    <li><a href="#">Geveltuin</a></li>
                    <li><a href="#">Agenda</a></li>
                    <li><a href="#">Partners</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    `;
}
