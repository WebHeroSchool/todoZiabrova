import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import styles from './Footer.module.css';
import PropTypes from 'prop-types';
import classnames from "classnames";

class Footer extends React.Component {
  render() {
    const {itemNumber, filter, onClickFilter} = this.props;

    return (<footer>
        <label className={styles.itemNumber}>Количество задач: { itemNumber }</label>
        <div className={styles.filters}>
          <ButtonGroup
          className={styles.filter}
          size="small"
          variant="text"
          aria-label="small text primary button group">
            <Button onClick={() => onClickFilter('all')}
            className={classnames({[styles.selected]: (filter === 'all')})}>Все</Button>
            <Button onClick={() => onClickFilter('active')}
            className={classnames({[styles.selected]: filter === 'active'})}>Активные</Button>
            <Button onClick={() => onClickFilter('done')}
            className={classnames({[styles.selected]: filter === 'done'})}>Выполненные</Button>
          </ButtonGroup>
        </div>
      </footer>
    );
  }
}

Footer.defaultProps = { itemlNumber: 0 };

Footer.propTypes = {
  itemNumber: PropTypes.number.isRequired
};

  export default Footer;