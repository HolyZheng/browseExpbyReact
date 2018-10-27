import * as React from 'react';
import { Link } from 'react-router-dom';
import './ExpBrief.scss';

import down from '../../images/down.png';

interface Props {
  picture: string,
  name: string,
  title: string,
  type: string,
  pay: string,
  duration: string,
  id: number
}

class ExpBrief extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <Link className="exp-brief" to={`/ExpDetail/${this.props.id}`}>
        <figure>
          <img className="portrait" src={this.props.picture} />
          <p>{this.props.name}</p>
        </figure>
        <section>
          <h2>{this.props.title}</h2>
          <p>分类：{this.props.type}</p>
          <p>薪酬：<big>￥{this.props.pay}</big> / {this.props.duration}min</p>
          <div className="more">
            详情
            <img className="arrow" src={down} />
          </div>
        </section>
      </Link>
    )
  }
}

export default ExpBrief;
