import React, { Component } from 'react';
import SearchForm from './SearchForm/searchForm';
import Gallery from './Gallery/gallery';
import Modal from './Modal/modal';
import fetchPhoto from '../services/api';
import s from './app.module.css';

const incrementPageNumber = 1;

class App extends Component {
  state = {
    imagesArr: [],
    pageNumber: 1,
    inputSearch: '',
    isModalOpen: false,
    largeImageURL: '',
  };

  componentDidMount() {
    this.fetchingImg();
    document.addEventListener('keydown', this.closeOnEscape);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeOnEscape);
  }

  closeOnEscape = e => {
    if (e.keyCode === 27) {
      this.setState({
        isModalOpen: false,
      });
    }
  };

  fetchingImg = () => {
    const { pageNumber, inputSearch } = this.state;
    fetchPhoto(pageNumber, inputSearch.toLowerCase())
      .then(response =>
        this.setState(
          prevState => ({
            imagesArr: [...prevState.imagesArr, ...response.data.hits],
          }),
          () =>
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: 'smooth',
            }),
        ),
      )
      .catch(console.log);
  };

  fetchingNewImg = () => {
    const { pageNumber, inputSearch } = this.state;
    fetchPhoto(pageNumber, inputSearch.toLowerCase())
      .then(
        response =>
          this.setState({
            imagesArr: [...response.data.hits],
          }),
        () =>
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
          }),
      )
      .catch(console.log);
  };

  changePageNumber = () => {
    this.setState(prevState => ({
      pageNumber: prevState.pageNumber + incrementPageNumber,
    }));
    this.fetchingImg();
  };

  handleChangeInput = e => {
    this.setState({ inputSearch: e.target.value });
  };

  onSubmitForm = e => {
    e.preventDefault();
    this.setState({ pageNumber: 1 });
    this.fetchingNewImg();
    this.reset();
  };

  reset = () => {
    this.setState({
      inputSearch: '',
    });
  };

  openModalWindow = url => {
    this.setState(
      {
        isModalOpen: true,
        largeImageURL: url,
      },
      () =>
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        }),
    );
    document.querySelector('body').style.overflow = 'hidden';
  };

  closeModalWindow = e => {
    if (e.target.tagName === 'IMG') {
      return;
    }
    this.setState({
      isModalOpen: false,
    });
    document.querySelector('body').style.overflow = 'auto';
  };

  render() {
    const { imagesArr, inputSearch, isModalOpen, largeImageURL } = this.state;
    return (
      <div className={s.app}>
        <SearchForm
          onSubmitForm={this.onSubmitForm}
          onChangeInput={this.handleChangeInput}
          inputSearch={inputSearch}
        />
        <Gallery
          imagesArr={imagesArr}
          onClickBtn={this.changePageNumber}
          openModal={this.openModalWindow}
        />
        {isModalOpen && (
          <Modal largeURL={largeImageURL} closeModal={this.closeModalWindow} />
        )}
      </div>
    );
  }
}

export default App;
