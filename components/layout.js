import Head from 'next/head'
import {library} from "@fortawesome/fontawesome-svg-core";
import {fab} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
export const siteTitle = 'Kristen Tidmuss'
library.add(fab, faEnvelope)
export default function Layout({ children, home }) {
    return (
        <div className="container">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Personal portfolio for Kristen Tidmuss"
                />
                <meta name="og:title" content={siteTitle} />
            </Head>
            <main>{children}</main>
        </div>
    )
}