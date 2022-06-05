 import React, { useContext, useEffect, useState } from 'react'
import styles from  '../styles/Home.module.css'
import Router from 'next/router'
import Context from '../components/UserContext/index'

const Home = () => {
  const [user, setUser] = useContext<any>(Context)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [loadingMessage, setLoadingMessage] = useState('Carregando...')

  useEffect(() =>{
    getUser()
  }, [])

  const ErrorHandler = () =>{
    setLoadingMessage('Erro! Recaregue a página ou volte mais tarde.')
    setError(true)
  }

  const RouteHandler = (url:string) =>{
    if(!error)
      Router.push(url)
  }

  const getUser = async () =>{
    let headers = new Headers()

    let url = process.env.NEXT_PUBLIC_APIURL || ''

    await fetch(url, {
      method: 'GET',
      headers: headers
    })
    .then(async (res) =>{
      if(res.status == 200){
        let data = await res.text()
        setUser(JSON.parse(data))
        setLoading(false)
      }else{
        ErrorHandler()
      }
    })
    .catch(err => {
      console.log(err)
      ErrorHandler()
    })
    
  }

  return (
    
      <main>
        {loading
      ? <h1>{loadingMessage}</h1>
      :
        <div className={styles.cover}>
          <div className={styles.container}>
            <div className={styles.subcontainer1}>

            
              <div className={styles.container11}>
                <div className={styles.btnestiliza1}></div>
                <div className={styles.titulo}>CAIXA ELETRÔNICO</div>
              </div>
            
              
                <div className={styles.container11}>
                  <button className={styles.btnestiliza1} onClick={()=>RouteHandler('saque')}></button>
                  <button className={styles.btnestiliza} onClick={()=>RouteHandler('saque')}>Saque</button>
                </div>

                <div className={styles.container11}>
                  <button className={styles.btnestiliza1} onClick={()=>RouteHandler('deposito')}></button>
                  <button className={styles.btnestiliza} onClick={()=>RouteHandler('deposito')}>Deposito</button>
                </div>

                <div className={styles.container11}>
                  <button className={styles.btnestiliza1} onClick={()=>RouteHandler('extrato')}></button>
                  <button className={styles.btnestiliza} onClick={()=>RouteHandler('extrato')}>Extrato Financeiro</button>
                </div>

                <div className={styles["container11"] +' '+ styles["containerteste"]}>
                  <button className={styles.btnestiliza1}></button>
                  <button className={styles.btnestilizacinza}>Transferência</button>
                </div>

                <div className={styles.container11}>
                  <div className={styles.btnestiliza1}></div> 
                  <div className={styles.subtitulo}>Central de Ajuda</div>
                </div>
            
          
          </div>

            <div className={styles.subcontainer2}>     
              <div className={styles.container11}>
                  <div className={styles.btnestiliza1}></div>
                  <div className={styles.btnestiliza1}></div>  
              </div>
              <div className={styles.container11}>
                  <button className={styles.btnestilizacinza}>Contratar Planos</button>
                  <button className={styles.btnestiliza1}></button>  
              </div>
              <div className={styles.container11}>
                  <button className={styles.btnestilizacinza}>Cheque Especial</button>
                  <button className={styles.btnestiliza1}></button>  
              </div>
              <div className={styles.container11}>
                  <button className={styles.btnestilizacinza}>Cancelamento de Cartão</button>
                  <button className={styles.btnestiliza1}></button>  
              </div>
              <div className={styles.container11}>
                  <button className={styles.btnestilizacinza}>Dúvidas</button>
                  <button className={styles.btnestiliza1}></button>  
              </div>
              <div className={styles.container11}>
                  <div className={styles.subtitulo}>tel: 0800 - 9999999</div>
                  <div className={styles.btnestiliza1}></div>   
              </div>
            </div>

          
          </div>
        </div>
      }
    </main>
  )
}

export default Home
