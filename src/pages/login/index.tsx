import styles from './login.module.css'

import React, { useState } from 'react'
import nookies from 'nookies'
import Router from 'next/router'

const Login = () => {
    const [senha, setSenha] = useState('')
    const [conta, setConta] = useState('')

    const handleLogin = async () =>{
        if(senha == '' || conta === ''){
            alert('Preencha todos os campos')
            return;
        }


        let isnum = /^\d+$/.test(conta);

        if(!isnum){
            alert('Digite somente números no campo de "Número da Conta"')
            return;
        }

        let url = process.env.NEXT_PUBLIC_LOGIN || ''

        if(url != '')
            url += conta+'/'+senha

        await fetch(url, {
        method: 'GET'
        })
        .then(async (res) =>{
        if(res.status == 200){
            let data = await res.text()
            if(data){
                let dados_conta = JSON.parse(data)
                if(dados_conta.account_id){
                    nookies.set(undefined, 'id_conta', '1', { path: '/' })
                    Router.push('/')
                }
            }else{
                alert('Número da conta ou senha incorreta')
            }
        }
        })
        .catch(err => {
            console.log(err)
        })
        
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
                            <input type="text" className={styles.btnestiliza} placeholder="Número da conta" onChange={(e)=>setConta(e.target.value)}></input>
                        </div>

                        <div className={styles.container11}>
                        <button className={styles.btnestiliza1}></button>
                        <div className={styles.dica}>-Dica-<br/>Conta: 0001<br/>Senha: 123456</div>
                        </div>


                        <div className={styles.container11}>
                            <button className={styles.btnestiliza1}></button>
                        </div>

                        <div className={styles.container11}>
                            <button className={styles.btnestiliza1}></button>
                        </div>

                        <div className={styles.container11}>
                            <div className={styles.btnestiliza1}></div>
                            <div className={styles.btnestilizatt}>Central de Ajuda</div>
                        </div>

                    </div>

                    <div className={styles.subcontainer2}>
                        <div className={styles.container11}>
                            <div className={styles.btnestiliza1}></div>
                            <div className={styles.btnestiliza1}></div>
                        </div>

                        <div className={styles.container11}>
                            <input type="password" className={styles.btnestiliza} placeholder="Senha" onChange={(e)=>setSenha(e.target.value)}></input>
                            <button className={styles.btnestiliza1}></button>
                        </div>


                        <div className={styles.container11}>
                            <div className={styles.btnestilizatt}><br></br></div>
                            <button className={styles.btnestiliza1}></button>
                        </div>


                        <div className={styles.container11}>
                            <div className={styles.btnestilizatt}><br></br></   div>
                            <button className={styles.btnestiliza1}></button>
                        </div>

                        <div className={styles.container11}>
                            <button className={styles.btnestiliza} onClick={()=>{handleLogin()}}>Entrar</button>
                            <button className={styles.btnestiliza1} onClick={()=>{handleLogin()}}></button>
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

export default Login