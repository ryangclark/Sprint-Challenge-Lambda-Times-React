import React from 'react';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

  return (
    <>
      {
        (props.tab === props.selectedTab)
          ? <div className={'tab active-tab'} >
              {props.tab.toUpperCase()}
            </div>
          : <div
              className={'tab'}
              onClick={event => selectTabHandler(event)}
            >
              {props.tab.toUpperCase()}
            </div>
      }
    </>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired,
  tab: PropTypes.string
}

export default Tab;
