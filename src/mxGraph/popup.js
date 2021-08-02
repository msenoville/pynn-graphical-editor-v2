import Popup from "reactjs-popup";

import projectStyles from '../styles/project.module.scss'

class PopupVideo extends React.Component {
  render() {
    return(
      <Popup open={this.props.open} modal>
        {() => ( 
          <>
            // ...
            <button onClick={() => this.props.setOpen(false)}>
              close
            </button>
          </>
        )}
      </Popup>
    )  }
}
