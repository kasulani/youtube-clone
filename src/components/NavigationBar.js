import React from 'react';
import { Search } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import '../styles/App.css';

const NavBar = ({ isLoading, term, onSearchChange }) => {
    return(
        <nav className="yt-nav-bar">
            <div className="yt-search">
                <Search
                    loading={isLoading}
                    onSearchChange={function(event, {value}){ onSearchChange(event, {value}); }}
                    value={term}
                    showNoResults={false}
                    size="small"
                />
            </div>
        </nav>
    );
};

NavBar.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    term: PropTypes.string.isRequired,
    onSearchChange: PropTypes.func.isRequired
};

export default NavBar;
