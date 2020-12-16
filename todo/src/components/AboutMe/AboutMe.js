import React from 'react';
import styles from './AboutMe.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

class AboutMe extends React.Component {
  state = {
    user: [],
    errorText: '',
    isLoading: true,
    isError: false,
    repoList: [],
  }

  componentDidMount() {
    octokit.repos.listForUser({
      username: 'ZyabrovaOlga'
    }).then(({ data }) => {
      this.setState({
        repoList: data,
        isLoading: false
      })
    }).catch(error => (this.setState({
      isLoading: false,
      isError: true,
      errorText: error
    })));

    octokit.users.getByUsername({
      username: 'ZyabrovaOlga'
    }).then(({ data }) => {
      this.setState({
        user: data,
        isLoading: false
      })
    }).catch(error => (this.setState({
        isLoading: false,
        isError: true,
        errorText: error
    })));
  }

  render() {
    const { user, errorText, isLoading, isError, repoList } = this.state;

    return(
      <div className={styles.container}>
        {isError ?
          <div className={styles.error}>
            <h2>
              Возникла проблема
            </h2>
            <span className={styles.error_message}>{ errorText.message }</span>
            <span className={styles.error_status}>{ errorText.status }</span>
          </div> : <>
          {isLoading ? <CircularProgress className={styles.loader} /> : 
            <h1 className={styles.title}>
              Обо мне
            </h1>
          }
          <div className={styles.main}>
            <div className={styles.photo}>
              <img src={user.avatar_url} alt='Avatar' className={styles.avatar} />
            </div>
            <div className={styles.points}>
              <p className={styles.desctription}>Привет! Меня зовут Ольга.</p>
              <p className={styles.indification}>GitHub ID: {user.id}</p>
              <p className={styles.login}>GitHub login: {user.login}</p>
              <p className={styles.url}>GitHub url: <a href={user.html_url}>{user.html_url}</a></p>
            </div>
          </div>
          <div className={styles.repo}>
            <p className={styles.heading}>
              Мои репозитории:
            </p>
            <div className={styles.links}>
              {repoList.map(repo => (<div className={styles.item} key={repo.name}>
                <a href={repo.name} className={styles.naming}>{repo.name}</a>
              </div>))}
            </div>
          </div>
        </>}
      </div>
    ) 
  }
}

export default AboutMe;