
const Account = function (props) {
//ajout de la classe isActiveSection ou isActiveButton: pour modifier les couleurs de la page profil: au click du bouton: "Edit Name"
    return (
        <section className={`account ${props.click ? 'isActiveSection' : ''}`}>
        <div className="account-content-wrapper">
          <h3 className="account-title">{props.title}</h3>
          <p className="account-amount">{props.total}</p>
          <p className="account-amount-description">{props.balance}</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className={`transaction-button ${props.click ? 'isActiveButton' : ''}`}>View transactions</button>
        </div>
      </section>
    )
}
export default Account;