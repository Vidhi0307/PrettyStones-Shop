import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

const UserOrder = () => {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>

      <Container>
        {user ? (
          <>
            <div className="m-3 fs-3 p-1 "></div>
            {user.orders.map((order) => (
              <div key={order._id} className="my-2">
                <span className="fs-2 fas">
                  Ordered on ::
                  {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </span><br/>
                <div className="flex-row">
                  {order.products.map(({ _id, image, name, price }, index) => (
                    <div key={index} className="card px-1 py-1">
                      <Link to={`/products/${_id}`}>
                        <div flex flex-column></div>
                        <img
                          style={{ width: "15rem" }}
                          alt={name}
                          src={`/images/${image}`}
                        />
                        <p>{name}</p>
                      </Link>
                      <div>
                        <span>${price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}
      </Container>
    </>
  );
};

export default UserOrder;
