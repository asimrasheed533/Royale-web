"use client";
import ListingTable from "@/components/ListingTable";
import "@/style/listing.scss";
import { order as data } from "@/constant/mocks";
import React, { useState } from "react";
import ListingCheckbox from "@/components/ListingCheckbox";
import SearchInput from "@/components/SearchInput";
import headerItem from "@/data/headerItems.json";

export default function orderHistory() {
  const [selectedRows, setSelectedRows] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(10);
  return (
    <>
      <div className="listing__page__header__actions">
        <SearchInput value={search} onChange={setSearch} />
      </div>
      <ListingTable
        headerItem={headerItem.OrderHistoryItem}
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
        page={page}
        setPage={setPage}
        totalPages={10}
      >
        {data.map((item) => (
          <div key={item.id} className="listing__page__table__content__row">
            <div className="listing__page__table__content__row__entry checkbox">
              <ListingCheckbox
                checked={selectedRows.includes(item.id)}
                onClick={() => {
                  if (selectedRows.includes(item.id)) {
                    setSelectedRows(
                      selectedRows.filter((row) => row !== item.id)
                    );
                  } else {
                    setSelectedRows([...selectedRows, item.id]);
                  }
                }}
              />
            </div>
            <div className="listing__page__table__content__row__entry">
              {item.number}
            </div>
            <div className="listing__page__table__content__row__entry">
              {item.logo && (
                <img
                  loading="lazy"
                  src={item.logo}
                  alt={item.product}
                  className="listing__page__table__content__row__entry__img"
                />
              )}
              {item.name}
            </div>
            <div className="listing__page__table__content__row__entry">
              {item.city}
            </div>

            <div className="listing__page__table__content__row__entry">
              {item.status}
            </div>
            <div className="listing__page__table__content__row__entry">
              {item.quantity}
            </div>
            <div className="listing__page__table__content__row__entry">
              {item.totalPrice}
            </div>
          </div>
        ))}
      </ListingTable>
    </>
  );
}
