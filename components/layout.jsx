import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css';


export default function Layout({children, title, description}) {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta 
                name="descripcion"
                content={description}
            />
        </Head>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link href="/" legacyBehavior>
                    <a className="navbar-brand">
                        <Image 
                            src="/img/logo.png" 
                            alt="logo"
                            width={100} height={100}
                        ></Image>
                    </a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/" legacyBehavior>
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/" legacyBehavior>
                                <a className="nav-link" href="/restaurantes">Restaurantes</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/" legacyBehavior>
                                <a className="nav-link" href="/comidas">Comidas</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <main>{children}</main>
        <footer>
            Footer
        </footer>
    </>
  )
}

Layout.defaultProps = {
    title: "Restaurant",
    description: "Descripcion"
}
