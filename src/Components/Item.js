import { Arrow, Ship } from "./Icon";
import dayjs from "dayjs";
import { ordinal_suffix_of } from '../utils'

const Item = ({ row }) => {
  const dateFormat = (date) => {
    return `${ordinal_suffix_of(dayjs(date).format('DD'))} ${dayjs(date).format('MMM, YYYY')}`
  }
  return (
    <tr key={row.id} className="row">
      <td width='25%'>
        <div className="column row__information">
          <div className="row__information-detail">
            <Ship />
            <span className="row__information-freight_number">SF-162F{row.id}</span>
            <span className="row__information-item-name">{row.item_name}</span>
          </div>
          <button className="bordered">IMPORT</button>
        </div>
      </td>
      <td width='20%'>
        <div className="row__location">{row.location_name}</div>
        <div className="row__date">Ready: {dateFormat(row.ready)}</div>
      </td>
      <td width='10%'>
        <Arrow />
      </td>
      <td width='20%'>
        <div className="row__location">{row.destination_name}</div>
        <div className="row__date">Expires: {dateFormat(row.expiration)}</div>
      </td>
      <td width='15%'>
        <div className="row__cost">
          ₦{row.cost.toLocaleString('en-US')}
        </div>
      </td>
      <td width='5%'>
        <div className="row__status">
          {<span className={`row__status-${row.status}`}>{row.status}</span>}
        </div>
      </td>
    </tr>
  );
}

export default Item;