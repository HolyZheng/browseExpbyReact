import * as React from 'react';
import './ExpDetail.scss';

interface Props {
  exp: Exp
}

class ExpDetail extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props)
  }
  render() {
    const exp = this.props.exp;
    return (
      <React.Fragment>
        <header className="exp-detail-header">
          <img src={exp.user && exp.user.picture} />
          <p>{exp.user && exp.user.name}</p>
        </header>
        <section className="exp-detail-section">
          <p> 实验类型：<small>{exp.type}</small></p>
          <p> 实验时长：<small>{exp.duration} min</small></p>
          <p> 薪酬：<small style={{color: 'red'}}>￥{exp.pay}</small></p>
          <p className="segment">实验地点：<br />
            <small>{exp.position}</small>
          </p>
          <p className="segment">被试要求：<br />
            <small>{exp.request}</small>
          </p>
          <p className="segment">可选时间段：<br />
            <small>{exp.period}</small>
          </p>
          <p className="segment">实验内容：<br />
            <small>{exp.content}</small>
          </p>
          <p className="segment">其他信息：<br />
            <small>{exp.others}</small>
          </p>
          <p className="segment">报名方式：<br />
            <small>{exp.application}</small>
          </p>
        </section>
      </React.Fragment>
    )
  }
}

export default ExpDetail;
