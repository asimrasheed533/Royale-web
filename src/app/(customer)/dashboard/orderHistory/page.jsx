"use client";
import ListingTable from "@/components/ListingTable";
import "@/style/listing.scss";
import { order as data } from "@/constant/mocks";
import React, { useState } from "react";
import Link from "next/link";
import ListingCheckbox from "@/components/ListingCheckbox";
import headerItem from "@/constant/headerItem";
import SearchInput from "@/components/SearchInput";

export default function orderHistory() {
  const [selectedRows, setSelectedRows] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  return (
    <>
      <div className="listing__page__header__actions">
        <SearchInput value={search} onChange={setSearch} />
      </div>
      <ListingTable
        headerItem={headerItem.order}
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
        page={page}
        setPage={setPage}
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
