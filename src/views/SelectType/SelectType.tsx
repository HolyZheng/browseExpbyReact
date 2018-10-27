import * as React from 'react';
import { Link } from 'react-router-dom';
import './SelectType.scss';

import Icon from '../../components/Icon/Icon';

class SelectType extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <header className="st-header">
          <span>实验分类</span>
        </header>
        <Link className="type-item one" to="/SpExp/行为实验">
          <Icon name="#icon-protective-gloves" />行为实验
        </Link>
        <Link className="type-item two" to="/SpExp/脑电实验">
          <Icon name="#icon-head-cross" /> 脑电实验
        </Link>
        <Link className="type-item three" to="/SpExp/问卷">
          <Icon name="#icon-crayons-1" /> 问卷
        </Link>
        <Link className="type-item four" to="/SpExp/核磁共振">
          <Icon name="#icon-magnet" /> 核磁共振
        </Link>
        <Link className="type-item five" to="/SpExp/皮肤电实验">
          <Icon name="#icon-testing-mouse" /> 皮肤电实验
        </Link>
        <Link className="type-item other" to="/SpExp/其他">
          <Icon name="#icon-dna" /> 其他
        </Link>
      </React.Fragment>
    )
  }
}

export default SelectType;
