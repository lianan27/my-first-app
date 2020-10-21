import React from 'react';
import RcPagination from 'rc-pagination';
import './App.css';

export default class Pagination extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="row">
                <div className="col=md-12">
                    <RcPagination {...this.props}
                    hideOnSinglePage
                    showQuickJumper />
                </div>
            </div>
        )
    }
}