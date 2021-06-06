import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/PageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
  const { data, error } = useSWR('/api/get-promo', fetcher)
  return (
    <React.Fragment>
      <PageTitle title='Início'></PageTitle>
      <div>
        <p className={styles.text}>
          O restaurante X sempre busca por atender melhor seus clientes.
          Por isso, estamos sempre abertos a ouvir a sua opnião 
        </p>        
      </div>
      
      { !data && <p className={styles.text}>Carregando...</p>}
      { !error && data && data.showCoupon && 
        <div className={styles.container_button}>
          <Link href='/search'>
            <a className={styles.button}>Dar sua opnião ou susgestão</a>
          </Link>
          <p className={styles.text}>{data.messageOnline}</p>
        </div>
      }
      { !error && data && !data.showCoupon && 
        <p className={styles.text}>{data.messageOffline}</p>
      }
    </React.Fragment>
  )
}

export default Index
