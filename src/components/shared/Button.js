import React from 'react'

const Button = ({className, url, title, type}) => {

    if (url) {
        return (
            <a className={className} href={url} role='button'>
                {title}<i className="fa-regular fa-arrow-up-right"></i>
            </a>
        );
    } else {
        // Annars använd en knapp
        return (
          <button className={className} type={type}>
            {title} <i className="fa-regular fa-arrow-up-right"></i>
          </button>
        );
    }
}

export default Button