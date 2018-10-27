import * as React from 'react';
import { Link } from 'react-router-dom';
import * as actions from '../../store/actions';
import { StoreState } from '../../store/types';
import { connect } from 'react-redux';
import { getAllExperiments } from '../../api/data'
import './Home.scss';

import down from '../../images/down.png';
import Icon from '../../components/Icon/Icon';
import SkeletonExp from '../../components/Skeleton/SkeletonExp';
import ExpBrief from '../../components/ExpBrief/ExpBrief';

interface State {
  complete: boolean
}
interface Props {
  expArray: Exp[],
  setAllExps: (expArray: Exp[]) => void
}

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      complete: false
    };
  }

  componentWillMount() {
    const ctx = this;
    getAllExperiments(5, 0)
      .then((res: any) => {
        ctx.props.setAllExps(res.data)
        ctx.setState({
          complete: true
        })
      })
      .catch((err: any) => {
        ctx.setState({
          complete: false
        })
        throw new Error(err);
      })
  }

  render() {

    let viewList;
    if (this.state.complete) {
      viewList = this.props.expArray.map((item: Exp) => 
        <div key={item.experiment_id}>
          <ExpBrief picture={item.user.picture} name={item.user.name} title={item.title} type={item.type} pay={item.pay} duration={item.duration} id={item.experiment_id} />
        </div>
      );
    } else {
      viewList = <SkeletonExp />;
    }

    return (
      <React.Fragment>
        <header className="home-header">
          实验预览版本<br />
          <small>The version for Browse(react)</small>
        </header>
        <div className="below-header"></div>
        <nav className="home-nav">
          <Link className="to-type" to="/SelectType">
            <Icon name="#icon-book-2" />
            <span>实验分类</span>
          </Link>
          <Link className="to-exp" to="/SpExp/实验广场">
            <Icon name="#icon-crayons-1" />
            <span>实验广场</span>
          </Link>
        </nav>
        <section>
          <div className="sec-title">
            <strong>实验广场</strong>
            <img src={down} />
          </div>
          {viewList}
        </section>
        </React.Fragment>
    )
  }
}

export function mapStateToProps({allExps}: StoreState) {
  return {
    expArray: allExps
  }
}

export function mapDispatchToProps(dispatch: Function) {
  return {
    setAllExps: (expArray: Exp[]) => {dispatch(actions.editAllExpsArray(expArray))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
