import './index.css'

// eslint-disable-next-line no-unused-vars
const BrowserTodo = props => {
  const {destinationDetails, deleteHistory} = props
  const {logoUrl, domainUrl, title, timeAccessed, id} = destinationDetails

  const onDeleteHistory = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-list-items">
      <div className="browser-container">
        <p className="time">{timeAccessed}</p>
        <div>
          <img src={logoUrl} className="domain-logo" alt="domain logo" />
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
      </div>
      <div className="browser-end">
        <button
          className="delete-button"
          type="button"
          onClick={onDeleteHistory}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="browser-delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserTodo
