import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './index.css'

class CharCounter extends Component {
  state = {valuesList: [], inputValue: ''}

  onAddWord = event => {
    event.preventDefault()
    const {inputValue} = this.state
    this.setState(prevState => ({
      valuesList: [...prevState.valuesList, inputValue],
      inputValue: '',
    }))
  }

  changeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  renderCharCounts = () => {
    const {valuesList} = this.state

    return (
      <ul className="char-list">
        {valuesList.map(each => (
          <li key={uuidv4()}>
            <p className="char-item">
              {each}:{each.length}
            </p>
          </li>
        ))}
      </ul>
    )
  }

  render() {
    const {valuesList, inputValue} = this.state
    return (
      <div className="main-container">
        <div className="sub-container-1">
          <h1 className="count-title">Count the characters like a Boss...</h1>
          <div className="char-count-img-container">
            {valuesList.length > 0 ? (
              this.renderCharCounts()
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="no-input-img"
              />
            )}
          </div>
        </div>
        <div className="sub-container-2">
          <h1 className="counter-title">Character Counter</h1>
          <form className="input-btn-container" onSubmit={this.onAddWord}>
            <input
              type="text"
              className="input"
              placeholder="Enter the Characters here"
              value={inputValue}
              onChange={this.changeInput}
            />
            <button type="submit" className="add-btn">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default CharCounter
