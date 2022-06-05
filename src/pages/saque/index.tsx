import styles from  './Saque.module.css'

import React, { useContext, useEffect, useState } from 'react'
import Router from 'next/router'
import Context from '../../components/UserContext/index'


const Saque = () => {
    const [user, setUser] = useContext<any>(Context)
    const [current_currency, setCurrent_currency] = useState()
    const [saque, setSaque] = useState('')

    useEffect(()=>{
        if(user.acounts)
            setCurrent_currency(user.acounts[0].current_currency)
        else{
            Router.push('/')
        }
    }, [])

    useEffect(()=>{
        user.saque = saque
    }, [saque])


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
                    <button className={styles.btnestiliza1}></button>
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
                    <button className={styles.btnestiliza} onClick={()=>{
                            setSaque('50')
                            Router.push('saque/saquefinal')
                        }}>R$ 50,00</button>
                    <button className={styles.btnestiliza1} onClick={()=>{
                            setSaque('50')
                            Router.push('saque/saquefinal')
                        }}></button>  
                </div>
                <div className={styles.container11}>
                    <button className={styles.btnestiliza} onClick={()=>{
                            setSaque('100')
                            Router.push('saque/saquefinal')
                        }}>R$ 100,00</button>
                    <button className={styles.btnestiliza1} onClick={()=>{
                            setSaque('100')
                            Router.push('saque/saquefinal')
                        }}></button>  
                </div>
                <div className={styles.container11}>
                    <button className={styles.btnestiliza} onClick={()=>{
                            setSaque('200')
                            Router.push('saque/saquefinal')
                        }}>R$ 200,00</button>
                    <button className={styles.btnestiliza1} onClick={()=>{
                            setSaque('200')
                            Router.push('saque/saquefinal')
                        }}></button>  
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