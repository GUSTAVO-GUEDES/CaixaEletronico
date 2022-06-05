import styles from  './extrato.module.css'
import Router from 'next/router'

const extrato = () => {
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
                    <div className={styles.btnestilizat}> Extrato Financeiro</div>
                </div>
                <div className={styles.container11}>
                    <button className={styles.btnestiliza1}></button>
                    <div className={styles.btnestilizat}>Saque:</div> 
                </div>
                <div className={styles.container11}>
                    <button className={styles.btnestiliza1}></button>
                    <div className={styles.btnestilizatt}>Deposito:</div>
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
                    <div className={styles.btnestilizat}></div>
                    <button className={styles.btnestiliza1}></button>  
                </div>
                <div className={styles.container11}>
                    <div className={styles.btnestilizat}>R$ -1000</div>
                    <button className={styles.btnestiliza1}></button>  
                </div> 
                <div className={styles.container11}>
                    <div className={styles.btnestilizat}>R$ 500</div>
                    <button className={styles.btnestiliza1}></button>
                </div>
                <div className={styles.container11}>
                    <button className={styles.btnestiliza}>Imprimir</button>
                    <button className={styles.btnestiliza1}></button>  
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

export default extrato