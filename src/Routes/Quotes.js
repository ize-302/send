import React from 'react';
import Item from '../Components/Item';
import Tabs from '../Components/Tabs';
import data from '../data.json'
import { useLocation, useNavigate } from 'react-router-dom'
import Pagination from '../Components/Pagination';

const Quotes = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const query = new URLSearchParams(location.search);
  const tab = query.get('tab')
  const page = query.get('page')
  const [updatedData, setupdatedData] = React.useState([]);
  const itemsPerPage = 6
  const [itemOffset, setItemOffset] = React.useState(0);

  React.useEffect(() => {
    let filtered
    if (tab !== 'all') filtered = data.filter(item => item.status === tab)
    else filtered = data
    setupdatedData(filtered)

    const newOffset = ((parseInt(page) - 1) * itemsPerPage);
    setItemOffset(newOffset);
  }, [tab, page]);

  const updatePageParam = ({ index, tab }) => {
    navigate({
      search: `?page=${index || 1}&tab=${tab}`
    })
  }

  React.useEffect(() => {
    navigate({
      search: `?page=${page || 1}&tab=${tab || 'all'}`
    })
    console.log(page, tab)
  }, [navigate, page, tab]);

  return (
    <div>
      {/* page header */}
      <div className="container header">
        <h1>Quotes</h1>
        <button className="primary">Create New</button>
      </div>
      {/* tabs */}
      <Tabs updateUrlQueryParams={(payload) => updatePageParam({ tab: payload })} />
      {/* items */}
      {updatedData.slice(itemOffset, itemOffset + itemsPerPage).map(row => (
        <Item key={row.id} row={row} />
      ))}
      {/* pagination */}
      <Pagination itemOffset={itemOffset} itemsPerPage={itemsPerPage} items={updatedData} updatePageParam={(payload) => updatePageParam({ tab: tab, index: payload + 1 })} />
    </div>
  );
}

export default Quotes;