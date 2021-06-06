import React, { useState } from 'react'
import Link from 'next/link'
import styles from './styles.module.css'
import PageTitle from '../../components/PageTitle'

const Search = () => {
  const [ form, setForm ] = useState({
    Nome: '', 
    Email: '',
    Whatsapp: '',
    Nota: 0,
    Palpite: ''
  })
  const notas = [0, 1, 2, 3, 4, 5]
  const [ success, setSuccess ] = useState(false)
  const [ result, setResult ] = useState({})
  const save = async() => {
    try {
      const response = await fetch('/api/post-save', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      const data = await response.json()
      setSuccess(true)
      setResult(data)
    } catch (err) {
      console.log(err)
    }
  }
  const onChange = evt => {
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
      ...old,
      [key]: value
    }))
  }
  return (
    <React.Fragment>
      <PageTitle title='Pesquisa'></PageTitle>
      <div>
        <h1 className={styles.title}>Críticas e Sugestões</h1>
        <p className={styles.text}>
          O restaurante X sempre busca por atender melhor seus clientes.
          Por isso, estamos sempre abertos a ouvir a sua opnião 
        </p>        
      </div>
      {!success &&
      <div className={styles.form}>
        <label className={styles.label}>Seu nome:</label>
        <input className={styles.input} type='text' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome}/>

        <label className={styles.label}>E-mail:</label>
        <input className={styles.input} type='email' placeholder='Email' onChange={onChange} name='Email' value={form.Email} />
     
        <label className={styles.label}>Whatsapp:</label>
        <input className={styles.input} type='text' placeholder='Whatsapp' onChange={onChange} name='Whatsapp' value={form.Whatsapp} />

        <label className={styles.label}>Sua crítica ou sugestão:</label>
        <textarea className={styles.input}  placeholder='Seu palpite' onChange={onChange} name='Palpite' value={form.Palpite} ></textarea>

        <label className={styles.label} >Nota:</label>
        <div className='flex py-6'>
        {notas.map(nota => {
          return (
            <label className='block w-1/6 text-center'>
              {nota}<br/>
              <input type='radio' name='Nota' value={nota} onChange={onChange} />
            </label>
          )
        })} 
        </div>       
        
        <div className={styles.container_button}>
          <Link href='/search'>
            <a className={styles.button} onClick={save}>Enviar</a>
          </Link>
        </div>
      </div>
      } 
      {success && 
      <div className={styles.alert}>
        <p className={styles.alert_text}>Obrigado por contrinuir com sua sugestão ou crítica.</p>
        {result.showCoupon &&
          <div className={styles.coupon}>
            Seu cupom: <br/>
            <span className={styles.code}>{result.Coupon}</span>
          </div>          
        }
        {result.showCoupon &&
          <div className={styles.coupon}>
            <span className={styles.promo}>{result.Promotion}</span>
            <br/>
            <span className={styles.print}>Tire um print ou foto desta tela e apresente ao estabelcimento</span>
          </div>          
        }
      </div>     
      }
    </React.Fragment>
  )
}

export default Search