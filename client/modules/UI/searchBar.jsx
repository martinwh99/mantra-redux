import React from 'react';
class SearchBar extends React.Component {
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
    const {setSearchKey,search,location,history} = this.props;
    const {searchKeyRef} = this.refs;

    if (searchKeyRef.value && searchKeyRef.value.length > 0) {
      if(!/^\/search/.test(location.pathname)){
        history.replace('/search/'+searchKeyRef.value);
      }
      setSearchKey(searchKeyRef.value);
      search(searchKeyRef.value)();
    } else {
      search(searchKeyRef);
    }
  }
}

export default SearchBar;
