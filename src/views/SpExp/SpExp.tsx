import * as React from 'react';
import './SpExp.scss';
import { getExperimentsByType, getAllExperiments } from '../../api/data';
import { StoreState } from '../../store/types';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import ExpBrief from '../../components/ExpBrief/ExpBrief';
import SkeletonExp from '../../components/Skeleton/SkeletonExp'; 

interface State {
  complete: boolean
}

interface Props {
  expArray: Exp[],
  match: any,
  setSpExps: (expArray: Exp[]) => void
}

class SpExp extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      complete: false
    }
  }

  componentWillMount() {
    const ctx = this;
    const params = this.props.match.params;
    if (params.type !== '实验广场') {
      getExperimentsByType(params.type, 5, 0)
        .then((res: any) => {
          ctx.setState({
            complete: true,
          })
          ctx.props.setSpExps(res.data)
        })
        .catch((err: any) => {
          ctx.setState({
            complete: false
          })
          throw new Error(err);
        })
    } else {
      getAllExperiments(5, 0)
        .then((res: any) => {
          ctx.setState({
            complete: true,
          })
          ctx.props.setSpExps(res.data)
        })
        .catch((err: any) => {
          ctx.setState({
            complete: false
          })
          throw new Error(err);
        })
    }
  }

  render() {
    let viewList;
    if (this.state.complete) {
      if (this.props.expArray.length) {
        viewList = this.props.expArray.map((item: Exp) => 
          <div key={item.experiment_id}>
            <ExpBrief picture={item.user.picture} name={item.user.name} 
            title={item.title} type={item.type} pay={item.pay} duration={item.duration} id={item.experiment_id} />
          </div>
        );
      } else {
        viewList = (
          <div className="no-res">
            暂时没有相关实验呢，<br /> 稍后再查看吧~
          </div>
        )
      }
    } else {
      viewList = <SkeletonExp />;
    } 
    return (
      <React.Fragment>
        <header className="sp-header">
          <span>{this.props.match.params.type}</span>
        </header>
        <section>
          {viewList}
        </section>
      </React.Fragment>
    )
  }
}

export function mapStateToProps({expsOfType}: StoreState) {
  return {
    expArray: expsOfType
  }
}

export function mapDispatchToProps(dispatch: Function) {
  return {
    setSpExps: (expsOfType: Exp[]) => {dispatch(actions.editTypeExpsArray(expsOfType))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpExp);
