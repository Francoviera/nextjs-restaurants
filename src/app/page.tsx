import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout
        title="Restaurantes"
        description="Descripcion de la pagina"
    >
        <h1>Home</h1>
    </Layout>
  )
}
