import React from "react";
import { Pagination } from "react-bootstrap";
import { useDispatch, connect } from "react-redux";
import {
  makeTotalCountPages,
  makeLimitPages,
  makeActivePage,
} from "../store/selectors/index";
import { createStructuredSelector } from "reselect";
import { setActivePage } from "../store/actions";

const mapStateToProps = createStructuredSelector({
  totalPages: makeTotalCountPages(),
  limit: makeLimitPages(),
  activePage: makeActivePage(),
});

const Pages = props => {
  const { limit, totalPages, activePage } = props;
  const dispatch = useDispatch();
  const pageCount = Math.ceil(totalPages / limit);

  const pages = [];

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <Pagination className='d-flex justify-content-center mt-3'>
      {pages.map(page => {
        return (
          <Pagination.Item
            key={page}
            onClick={() => {
              dispatch(setActivePage(page));
            }}
            active={activePage === page}>
            {page}
          </Pagination.Item>
        );
      })}
    </Pagination>
  );
};

export default connect(mapStateToProps)(Pages);
