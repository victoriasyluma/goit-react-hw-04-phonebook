import PropTypes from 'prop-types';
import styles from './Filter.module.scss';

export const Filter = ({ filter, updateFilter }) => {
  return (
    <div className={styles.filter}>
      <h2>Contacts</h2>
      <p className={styles.title}>Find contacts by name</p>

      <input value={filter} onChange={updateFilter} />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  updateFilter: PropTypes.func.isRequired,
};
