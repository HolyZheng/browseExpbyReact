import * as React from 'react';
import './SkeletonExp.scss';

class SkeletonExp extends React.Component<{},{}> {
  constructor(props: {}) {
    super(props);
  }
  render() {
    return (
      <div className="skeleton-wrap">
        <div className="skeleton">
          <div className="left-right item"></div>
          <div className="line-zero item"></div>
          <div className="line-one item"></div>
          <div className="line-two item"></div>
          <div className="line-three item"></div>
        </div>
      </div>
    )
  }
}

export default SkeletonExp;
