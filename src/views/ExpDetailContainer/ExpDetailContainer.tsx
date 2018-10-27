import * as React from 'react';
import * as actions from '../../store/actions';
import { StoreState } from '../../store/types';
import { connect } from 'react-redux';
import { getExperiment } from '../../api/data';

import ExpDetail from '../../components/ExpDetail/ExpDetail'

interface Props {
  match: any,
  setExp: (exp: Exp) => void,
  exp: Exp
}

class ExpDetailContainer extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }
  componentWillMount() {
    const ctx = this;
    const id: number = ctx.props.match.params.id;
    getExperiment(id)
      .then((res:any) => {
        ctx.props.setExp(res.data)
      })
      .catch((err: any) => {
        throw new Error(err);
      });
  }
  render() {
    const ctx = this;
    return (
      <ExpDetail exp={ctx.props.exp} />
    )
  }
}

export function mapStateToProps(state: StoreState) {
  return {
    exp: state.detailOfExp
  }
}

export function mapDispatchToProps(dispatch: Function) {
  return {
    setExp: (exp: Exp) => {dispatch(actions.editExpDetail(exp))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpDetailContainer);
