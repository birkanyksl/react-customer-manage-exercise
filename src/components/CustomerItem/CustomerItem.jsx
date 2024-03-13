import "./CustomerItem.css";

const CustomerItem = ({ customer }) => {
  return (
    <li className="customer-item">
      <div className="customer-info">
        <img
          src="http://i.pravatar.cc/300"
          alt=""
          className="customer-avatar"
        />
        <span className="customer-name">{customer.customerName}</span>
      </div>
      <button className="delete-button">
        <i className="bi bi-trash3"></i>
      </button>
    </li>
  );
};

export default CustomerItem;
