import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Dropdown.module.scss';

const Dropdown = ({
  items,
  defaultSelectedValue,
  placeholder,
  searchable,
  upward,
  showTick,
  onItemSelected,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    if (defaultSelectedValue) {
      const defaultItem = items.find(item => item.value === defaultSelectedValue);
      setSelectedItem(defaultItem);
    }
  }, [defaultSelectedValue, items]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleItemClick = (item) => {
    if (item.disabled) return;
    setSelectedItem(item);
    setIsOpen(false);
    if (onItemSelected) {
      onItemSelected(item);
    }
  };

  const handleMouseEnter = (item) => {
    if (!item.disabled) {
      setHoveredItem(item);
    }
  };

  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`${styles.dropdown} ${upward ? styles.upward : ''}`}>
      <div className={styles.selected} onClick={toggleDropdown}>
        {selectedItem ? selectedItem.label : placeholder}
      </div>
      {isOpen && (
        <div className={styles.menu}>
          {searchable && (
            <input
              type="text"
              className={styles.search}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
            />
          )}
          <ul>
            {filteredItems.map((item) => (
              <li
                key={item.value}
                className={`${styles.item} ${
                  item.disabled ? styles.disabled : ''
                } ${
                  hoveredItem?.value === item.value ? styles.hovered : ''
                } ${
                  selectedItem?.value === item.value ? styles.selectedItem : ''
                }`}
                onClick={() => handleItemClick(item)}
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {showTick && selectedItem?.value === item.value && (
                  <span className={styles.tick}>✔</span>
                )}
                {item.icon && <span className={styles.icon}>{item.icon}</span>}
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.node,
      disabled: PropTypes.bool,
    })
  ).isRequired,
  defaultSelectedValue: PropTypes.string,
  placeholder: PropTypes.string,
  searchable: PropTypes.bool,
  upward: PropTypes.bool,
  showTick: PropTypes.bool,
  onItemSelected: PropTypes.func,
};

Dropdown.defaultProps = {
  placeholder: 'Select an item',
  searchable: true,
  upward: false,
  showTick: true,
  onItemSelected: null,
};

export default Dropdown;
