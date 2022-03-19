import React from 'react';
import { useLocation } from 'react-router-dom'
import data from '../data.json'

const Tab = ({ updateUrlQueryParams }) => {
  const location = useLocation()
  const query = new URLSearchParams(location.search);
  const tabUrl = query.get('tab')
  const [tabs, settabs] = React.useState([]);

  React.useEffect(() => {
    let pendingCount = 0;
    let readyCount = 0;
    let bookedCount = 0;
    data && data.forEach(item => {
      if (item.status === 'pending') pendingCount++
      else if (item.status === 'ready') readyCount++
      else if (item.status === 'booked') bookedCount++
    })
    settabs([{ name: 'all', count: data.length }, { name: 'pending', count: pendingCount }, { name: 'ready', count: readyCount }, { name: 'booked', count: bookedCount }])
  }, []);

  return (
    <div className='container tabs-wrapper'>
      <ul className='tabs'>
        {tabs.map(tab => (
          <li key={tab.name} onClick={() => updateUrlQueryParams(tab.name)} className={`tab ${tabUrl === tab.name.toLowerCase() && 'active'}`}>
            <span className='tab-label'>{tab.name}</span>
            <span className='tab-count'>{tab.count || 0}</span>
          </li>
        ))}
      </ul>
    </div>

  );
}

export default Tab;