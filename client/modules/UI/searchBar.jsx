import React from 'react';
class SearchBar extends React.Component {
  componentDidMount() {
    //TODO 加载历史
    console.log('SearchBar UI componentDidMount :', this.props);
    const {search} = this.props;
    const {searchKeyRef} = this.refs;
    search(searchKeyRef.value)();

  }
 /* componentDidUpdate( nextProps,  nextState){
    console.log('====',nextProps,  nextState);
    console.log('SearchBar UI componentDidUpdate :', this.props);
    const {search} = this.props;
    const {searchKeyRef} = this.refs;
    search(searchKeyRef.value)();
  }*/
  render() {
    console.log('SearchBar UI :', this.props);
    return (
      <div className='toolBar'>
        <div>
          <input ref="searchKeyRef" className='searchInput' type="text"
                 defaultValue={this.props.searchKey}
                 placeholder={this.props.placeHolder}
                 onKeyUp={this.onKeyUp.bind(this)}/>
        </div>
        <div className='searchClick' onClick={this.doSearch.bind(this)}></div>
      </div>
    );
  }

  onKeyUp(e) {
    if (e.keyCode === 13) {
      this.doSearch();
    }
  }

  doSearch() {
    const {search,history} = this.props;
    const {searchKeyRef} = this.refs;
    if (searchKeyRef.value && searchKeyRef.value.length > 0) {
        history.replace('/search/'+searchKeyRef.value);
        search(searchKeyRef.value)();
    }
  }
}

export default SearchBar;
