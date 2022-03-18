import React from 'react';
import Item from '../Components/Item';
import Tabs from '../Components/Tabs';
import data from '../data.json'
import { useLocation } from 'react-router-dom'
import Pagination from '../Components/Pagination';

const Quotes = () => {
  const location = useLocation()
  const query = new URLSearchParams(location.search);
  const tab = query.get('tab')
  const [updatedData, setupdatedData] = React.useState([]);

  React.useEffect(() => {
    if (tab !== 'all') {
      const filtered = data.filter(item => item.status === tab)
      setupdatedData(filtered)
    } else {
      setupdatedData(data)
    }
  }, [location]);
  return (
    <div>
      {/* page header */}
      <div className="container header">
        <h1>Quotes</h1>
        <button className="primary">Create New</button>
      </div>
      {/* tabs */}
      <Tabs />
      {/* items */}
      {updatedData.slice(0, 6).map(row => (
        <Item row={row} />
      ))}
      {/* pagination */}
      <Pagination />
    </div>
  );
}

export default Quotes;