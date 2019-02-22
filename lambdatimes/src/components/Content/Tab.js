import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

  return (
    <React.Fragment>
      {
        (props.tab === props.selectedTab)
          ? <div className={'tab active-tab'} id={props.tab}>
              {props.tab.toUpperCase()}
            </div>
          : <div
              className={'tab'}
              id={props.tab}
              onClick={event => props.selectTabHandler(event)}
            >
              {props.tab.toUpperCase()}
            </div>
      }
    </React.Fragment>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func,
  tab: PropTypes.string
}

export default Tab;
