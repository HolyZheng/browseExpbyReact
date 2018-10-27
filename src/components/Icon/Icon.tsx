import * as React from 'react';
import './Icon.scss';

interface Props {
  name: string
}

class Icon extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <svg className="icon" aria-hidden="true">
        <use xlinkHref={this.props.name}></use>
      </svg>
    )
  }
}

export default Icon
