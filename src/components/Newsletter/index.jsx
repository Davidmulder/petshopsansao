import styler from './Newsletter.module.css';

const Newsletter = () => {
    return (
        <div className={styler["newsletter-container"]}>
          <div className={styler["newsletter-content"]}>
            <div className={styler["newsletter-text"]}>
              <h2>Inscreva-se na nossa Newsletter</h2>
              <p>Receba as últimas novidades e ofertas especiais diretamente no seu e-mail.</p>
              <form >
                <input
                  type="email"
                  placeholder="Digite seu e-mail"
                  value=""                  
                  required
                  className={styler["email-input"]}
                />
                <button type="submit" className={styler["submit-button"]}>Inscrever-se</button>
              </form>
            </div>
            <div className={styler["newsletter-image"]}>
              <img src="/assets/images/logosansão.png" alt="Newsletter" />
            </div>
          </div>
        </div>
      );

};

export default Newsletter;
