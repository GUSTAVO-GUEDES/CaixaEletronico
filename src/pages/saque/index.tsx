import styles from  './Saque.module.css'

import React, { useContext, useEffect, useState } from 'react'
import Router from 'next/router'
import Context from '../../components/UserContext/index'


const Saque = () => {
    const [user, setUser] = useContext<any>(Context)
    const [current_currency, setCurrent_currency] = useState()

    useEffect(()=>{
        if(user.account_id)
            setCurrent_currency(user.current_currency)
        else{
            Router.push('/')
        }
    }, [])

    const handleSaque = (valor:string, url:string) =>{
        if(current_currency && valor <= current_currency){
            user.saque = valor
            Router.push(url)
        }else{
            alert('Valor do saque maior que o valor disponível')
        }
    }


    return (

        <main>

            <div className={styles.cover}>

            <div className={styles.container}>



                <div className={styles.subcontainer1}>

                
                <div className={styles.container11}>
                    <div className={styles.btnestiliza1}></div>
                    <div className={styles.titulo}>CAIXA ELETRÔNICO</div>
                </div>

                <div className={styles.container11}>
                    <button className={styles.btnestiliza1}></button>
                    <div className={styles.btnestilizat}> Selecione entre os valores disponíveis:  </div>
                </div>

                <div className={styles.container11}>
                    <button className={styles.btnestiliza1}></button>
                    <div className={styles.btnestilizaS}></div>
                </div>
                <div className={styles.container11}>
                    <button className={styles.btnestiliza1}></button>
                    <div className={styles.btnestilizatt}>Saldo disponível: <br></br>R$ <span>{current_currency} </span></div>
                </div>


                <div className={styles.container11}>
                    <button className={styles.btnestiliza1} onClick={()=>Router.push('/')}></button>
                    <button className={styles.btnestiliza} onClick={()=>Router.push('/')}>Voltar</button>
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
                    <button className={styles.btnestiliza} onClick={()=>{handleSaque('50', 'saque/saquefinal')}}>R$ 50,00</button>
                    <button className={styles.btnestiliza1} onClick={()=>{handleSaque('50', 'saque/saquefinal')}}></button>  
                </div>
                <div className={styles.container11}>
                    <button className={styles.btnestiliza} onClick={()=>{handleSaque('100', 'saque/saquefinal')}}>R$ 100,00</button>
                    <button className={styles.btnestiliza1} onClick={()=>{handleSaque('100', 'saque/saquefinal')}}></button>  
                </div>
                <div className={styles.container11}>
                    <button className={styles.btnestiliza} onClick={()=>{handleSaque('200', 'saque/saquefinal')}}>R$ 200,00</button>
                    <button className={styles.btnestiliza1} onClick={()=>{handleSaque('200', 'saque/saquefinal')}}></button>  
                </div>
                <div className={styles.container11}>
                    <button className={styles.btnestiliza} onClick={()=>Router.push('saque/outrosvalores')}>Outros Valores</button>
                    <button className={styles.btnestiliza1} onClick={()=>Router.push('saque/outrosvalores')}></button>  
                </div>
                <div className={styles.container11}>
                    <div className={styles.subtitulo}>tel: 0800 - 9999999</div>
                    <div className={styles.btnestiliza1}></div>   
                </div>

                
                
                </div>





            </div>

            </div>

        </main>

    )
}

export default Saque