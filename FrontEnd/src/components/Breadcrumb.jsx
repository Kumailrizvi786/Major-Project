import React from 'react';
import { Link } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';

const Breadcrumbs = ({ items, icon: Icon }) => {
  return (
    <nav className="flex items-center mb-4">
      {Icon && <Icon className="w-4 h-4 mr-1" />}
      {items.map((item, index) => (
        <React.Fragment key={item.href}>
          <Link to={item.href} className="hover:underline">
            {item.label}
          </Link>
          {index < items.length - 1 && <span className="mx-2">/</span>}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
